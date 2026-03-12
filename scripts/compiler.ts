import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

// Importă clasele din nivelul superior (părinte)
import { FrameShieldLexer } from '../FrameShieldLexer';
import { 
  FrameShieldParser, 
  PolicyContext, 
  StatementContext, 
  Env_stmtContext, 
  Transport_stmtContext, 
  Csp_stmtContext, 
  Embedding_stmtContext, 
  Trust_stmtContext, 
  Referrer_stmtContext, 
  Cross_origin_stmtContext, 
  Target_stmtContext, 
  Perm_stmtContext, 
  Cors_stmtContext 
} from '../FrameShieldParser';
import { FrameShieldVisitor } from '../FrameShieldVisitor';


// ─── SECTION 1: ENUMS ────────────────────────────────────────────────────────

enum ResourceType {
  SCRIPT      = 'script-src',
  STYLE       = 'style-src',
  IMAGE       = 'img-src',
  FONT        = 'font-src',
  FRAME       = 'frame-src',
  CONNECT     = 'connect-src',
  MEDIA       = 'media-src',
  OBJECT      = 'object-src',
  BASE_URI    = 'base-uri',
  FORM_ACTION = 'form-action',
}

enum Origin {
  SELF           = "'self'",
  NONE           = "'none'",
  ANY            = '*',
  INLINE         = "'unsafe-inline'",
  EVAL           = "'unsafe-eval'",
  DATA           = 'data:',
  BLOB           = 'blob:',
  STRICT_DYNAMIC = "'strict-dynamic'",
}

enum EmbeddingMode {
  DENY        = 'DENY',
  SAME_ORIGIN = 'SAMEORIGIN',
  ALLOW_FROM  = 'ALLOW-FROM',
}

enum ReferrerMode {
  NO_REFERRER                     = 'no-referrer',
  ORIGIN                          = 'origin',
  STRICT_ORIGIN                   = 'strict-origin',
  SAME_ORIGIN                     = 'same-origin',
  STRICT_ORIGIN_WHEN_CROSS_ORIGIN = 'strict-origin-when-cross-origin',
  NO_REFERRER_WHEN_DOWNGRADE      = 'no-referrer-when-downgrade',
  UNSAFE_URL                      = 'unsafe-url',
}

enum NonceMode {
  DYNAMIC = 'dynamic',
  STATIC  = 'static',
  NONE    = 'none',
}

enum CORSMode {
  CREDENTIALS = 'credentials',
  PUBLIC      = 'public',
  DISABLED    = 'disabled',
}

enum TargetPlatform {
  NGINX      = 'nginx',
  APACHE     = 'apache',
  EXPRESS    = 'express',
  CLOUDFLARE = 'cloudflare',
  NEXT       = 'next',
  RAW        = 'raw',
}

// ─── SECTION 2: INTERFACES ───────────────────────────────────────────────────

interface TrustMechanism {
  type: 'nonce' | 'hash';
  algorithm?: string;
  value: string;
}

interface AllowRule {
  origin: string;
  trust?: TrustMechanism;
}

interface TransportPolicy {
  enforce_https: boolean;
  max_age: number;
  include_subdomains: boolean;
  preload: boolean;
}

interface CSPResourceRule {
  allows: AllowRule[];
  blocks: string[];
  nonce: boolean;
}

interface PermissionEntry {
  feature: string;
  value: string;
}

interface CORSPolicy {
  mode: CORSMode;
  origin?: string;
}

interface EnvironmentConfig {
  name: string;
  domain: string;
  nonce_mode: NonceMode;
}

interface SecurityPolicy {
  environment: EnvironmentConfig;
  transport: TransportPolicy;
  csp: {
    default: string;
    resources: Map<string, CSPResourceRule>;
  };
  embedding: {
    mode: EmbeddingMode;
    allow_from?: string;
  };
  content_trust: boolean;
  referrer: ReferrerMode;
  permissions: PermissionEntry[];
  cors: CORSPolicy;
  cross_origin_isolation: boolean;
  target: TargetPlatform;
}

interface SecurityHeader {
  key: string;
  value: string;
}

interface ValidationMessage {
  level: 'CRITICAL' | 'ERROR' | 'WARNING' | 'INFO';
  code: string;
  message: string;
}

interface ValidationResult {
  messages: ValidationMessage[];
}

// ─── SECTION 3: AST NODE TYPES ───────────────────────────────────────────────

interface ProgramNode {
  type: 'Program';
  children: ASTNode[];
}

interface EnvironmentNode {
  type: 'Environment';
  name: string;
  properties: Record<string, string>;
}

interface TransportNode {
  type: 'Transport';
  properties: Record<string, string>;
}

interface CSPNode {
  type: 'CSP';
  default_src: string;
  resources: ResourceRuleNode[];
}

interface ResourceRuleNode {
  type: 'ResourceRule';
  resource: string;
  allows: { origin: string; hash?: string }[];
  blocks: string[];
  nonce: boolean;
}

interface EmbeddingNode {
  type: 'Embedding';
  mode: string;
  allow_from?: string;
}

interface ContentTrustNode {
  type: 'ContentTrust';
  mode: string;
}

interface ReferrerNode {
  type: 'Referrer';
  mode: string;
}

interface PermissionsNode {
  type: 'Permissions';
  entries: { feature: string; values: string[] }[];
}

interface CORSNode {
  type: 'CORS';
  properties: Record<string, string>;
}

interface CrossOriginIsolationNode {
  type: 'CrossOriginIsolation';
  mode: string;
}

interface TargetNode {
  type: 'Target';
  platform: string;
}

type ASTNode =
  | ProgramNode
  | EnvironmentNode
  | TransportNode
  | CSPNode
  | ResourceRuleNode
  | EmbeddingNode
  | ContentTrustNode
  | ReferrerNode
  | PermissionsNode
  | CORSNode
  | CrossOriginIsolationNode
  | TargetNode;

// ─── SECTION 4: ANTLR VISITOR ────────────────────────────────────────────────
// Replaces the hand-written Lexer + Parser classes from compiler.ts.
// Each visitXxx method reads the ANTLR parse tree context for that grammar rule
// and builds the corresponding AST node, pushing it onto program.children.

class FrameShieldPolicyVisitor
  extends AbstractParseTreeVisitor<void>
  implements FrameShieldVisitor<void> {

  public program: ProgramNode = { type: 'Program', children: [] };

  protected defaultResult(): void { /* no-op */ }

  // Recurse into all statements
  visitPolicy(ctx: PolicyContext): void {
    this.visitChildren(ctx);
  }

  // Recurse into the specific statement child
  visitStatement(ctx: StatementContext): void {
    this.visitChildren(ctx);
  }

  // ── environment "name" { domain "..." nonce_mode ... } ──
  visitEnv_stmt(ctx: Env_stmtContext): void {
    const name = ctx.STRING().text.slice(1, -1); // strip quotes
    const properties: Record<string, string> = {};

    for (const prop of ctx.env_prop()) {
      const key = prop.getChild(0)!.text; // 'domain' or 'nonce_mode'
      properties[key] = prop.STRING()
        ? prop.STRING()!.text.slice(1, -1)
        : prop.IDENTIFIER()!.text;
    }

    this.program.children.push({ type: 'Environment', name, properties } as EnvironmentNode);
  }

  // ── transport { enforce_https true  max_age 31536000 ... } ──
  visitTransport_stmt(ctx: Transport_stmtContext): void {
    const properties: Record<string, string> = {};

    for (const prop of ctx.trans_prop()) {
      const key = prop.getChild(0)!.text; // 'enforce_https', 'max_age', etc.
      properties[key] = prop.NUMBER()?.text ?? prop.BOOLEAN()?.text ?? '';
    }

    this.program.children.push({ type: 'Transport', properties } as TransportNode);
  }

  // ── csp { default none  script { allow self  nonce auto } ... } ──
  visitCsp_stmt(ctx: Csp_stmtContext): void {
    let default_src = "'none'";
    const resources: ResourceRuleNode[] = [];

    for (const prop of ctx.csp_prop()) {
      const rt = prop.resource_type();

      if (rt) {
        // Resource sub-block: script { ... }, style { ... }, etc.
        const resourceName = rt.text;
        const allows: { origin: string; hash?: string }[] = [];
        const blocks: string[] = [];
        let nonce = false;

        for (const rp of prop.resource_prop()) {
          const directive = rp.getChild(0)!.text; // 'allow', 'block', or 'nonce'

          if (directive === 'allow') {
            const sv = rp.source_val()!;
            const origin = sv.STRING()
              ? sv.STRING()!.text.slice(1, -1)
              : sv.IDENTIFIER()!.text;
            allows.push({ origin });
          } else if (directive === 'block') {
            blocks.push(rp.IDENTIFIER()!.text.toLowerCase());
          } else if (directive === 'nonce') {
            const mode = rp.IDENTIFIER()!.text.toLowerCase();
            nonce = mode === 'auto' || mode === 'true';
          }
        }

        resources.push({ type: 'ResourceRule', resource: resourceName, allows, blocks, nonce });
      } else {
        // default directive: 'default' (IDENTIFIER | 'none')
        // getChild(1) gives the value token regardless of whether it's IDENTIFIER or a 'none' keyword
        const val = prop.IDENTIFIER()?.text ?? prop.getChild(1)!.text;
        default_src = this.resolveOriginValue(val);
      }
    }

    this.program.children.push({ type: 'CSP', default_src, resources } as CSPNode);
  }

  // ── embedding same_origin ──
  visitEmbedding_stmt(ctx: Embedding_stmtContext): void {
    const mode = ctx.IDENTIFIER().text.toLowerCase();
    this.program.children.push({ type: 'Embedding', mode } as EmbeddingNode);
  }

  // ── content_trust enabled ──
  visitTrust_stmt(ctx: Trust_stmtContext): void {
    const mode = ctx.IDENTIFIER().text.toLowerCase();
    this.program.children.push({ type: 'ContentTrust', mode } as ContentTrustNode);
  }

  // ── referrer strict-origin-when-cross-origin ──
  visitReferrer_stmt(ctx: Referrer_stmtContext): void {
    const mode = ctx.IDENTIFIER().text.toLowerCase();
    this.program.children.push({ type: 'Referrer', mode } as ReferrerNode);
  }

  // ── cross_origin_isolation full ──
  visitCross_origin_stmt(ctx: Cross_origin_stmtContext): void {
    const mode = ctx.IDENTIFIER().text.toLowerCase();
    this.program.children.push({ type: 'CrossOriginIsolation', mode } as CrossOriginIsolationNode);
  }

  // ── target raw ──
  visitTarget_stmt(ctx: Target_stmtContext): void {
    const platform = ctx.IDENTIFIER().text.toLowerCase();
    this.program.children.push({ type: 'Target', platform } as TargetNode);
  }

  // ── permissions { camera none  geolocation self ... } ──
  visitPerm_stmt(ctx: Perm_stmtContext): void {
    const entries: { feature: string; values: string[] }[] = [];

    for (const prop of ctx.perm_prop()) {
      const feature = prop.IDENTIFIER().text.toLowerCase();
      const fv = prop.feature_val();

      let val: string;
      if (fv.STRING()) {
        val = fv.STRING()!.text.slice(1, -1);
      } else if (fv.IDENTIFIER()) {
        val = fv.IDENTIFIER()!.text;
      } else {
        // matched the 'none' keyword literal
        val = fv.text;
      }

      entries.push({ feature, values: [val] });
    }

    this.program.children.push({ type: 'Permissions', entries } as PermissionsNode);
  }

  // ── cors { mode credentials  origin "https://..." } ──
  visitCors_stmt(ctx: Cors_stmtContext): void {
    const properties: Record<string, string> = {};

    for (const prop of ctx.cors_prop()) {
      const key = prop.getChild(0)!.text; // 'mode' or 'origin'
      properties[key] = prop.STRING()
        ? prop.STRING()!.text.slice(1, -1)
        : prop.IDENTIFIER()!.text;
    }

    this.program.children.push({ type: 'CORS', properties } as CORSNode);
  }

  // Shared helper — same as old parser's resolveOriginValue
  private resolveOriginValue(value: string): string {
    const map: Record<string, string> = {
      'self': "'self'", 'none': "'none'", 'any': '*',
      'inline': "'unsafe-inline'", 'eval': "'unsafe-eval'",
      'data': 'data:', 'data_uri': 'data:', 'blob': 'blob:',
      'strict_dynamic': "'strict-dynamic'",
    };
    return map[value.toLowerCase()] || value;
  }
}

// ─── SECTION 5: PARSE FUNCTION ───────────────────────────────────────────────
// Replaces: new Lexer(source).tokenize() + new Parser(tokens).parse()

function parseSource(source: string): { ast: ProgramNode; tokenCount: number } {
  // ── Pass 1: count tokens for display (same as old step 1 output) ──
  const countStream = CharStreams.fromString(source);
  const countLexer  = new FrameShieldLexer(countStream);

  // Suppress default console error output; errors thrown in pass 2
  countLexer.removeErrorListeners();

  const countTokens = new CommonTokenStream(countLexer);
  countTokens.fill();
  // WS and COMMENT are skipped by the grammar (-> skip), so every token here is meaningful
  const tokenCount = countTokens.getTokens().filter(t => t.type !== Token.EOF).length;

  // ── Pass 2: full parse + visitor ──
  const inputStream = CharStreams.fromString(source);
  const lexer       = new FrameShieldLexer(inputStream);

  lexer.removeErrorListeners();
  lexer.addErrorListener({
    syntaxError(_r: unknown, _s: unknown, line: number, col: number, msg: string): void {
      throw new Error(`[Lexer] ${msg} (linia ${line}, col ${col})`);
    },
  } as any);

  const tokenStream = new CommonTokenStream(lexer);
  const parser      = new FrameShieldParser(tokenStream);

  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError(_r: unknown, _s: unknown, line: number, col: number, msg: string): void {
      throw new Error(`[Parser] ${msg} (linia ${line}, col ${col})`);
    },
  } as any);

  const tree    = parser.policy();
  const visitor = new FrameShieldPolicyVisitor();
  visitor.visit(tree);

  return { ast: visitor.program, tokenCount };
}

// ─── SECTION 6: POLICY BUILDER (AST → SecurityPolicy) ───────────────────────
// Identical to compiler.ts — PolicyBuilder reads ProgramNode and builds SecurityPolicy.

class PolicyBuilder {
  build(ast: ProgramNode): SecurityPolicy {
    const policy: SecurityPolicy = {
      environment: { name: 'production', domain: 'https://localhost:3000', nonce_mode: NonceMode.DYNAMIC },
      transport:   { enforce_https: true, max_age: 31536000, include_subdomains: true, preload: true },
      csp:         { default: "'self'", resources: new Map() },
      embedding:   { mode: EmbeddingMode.DENY },
      content_trust: true,
      referrer:    ReferrerMode.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
      permissions: [],
      cors:        { mode: CORSMode.DISABLED },
      cross_origin_isolation: false,
      target:      TargetPlatform.RAW,
    };

    for (const node of ast.children) {
      switch (node.type) {
        case 'Environment':         this.applyEnvironment(policy, node as EnvironmentNode); break;
        case 'Transport':           this.applyTransport(policy, node as TransportNode); break;
        case 'CSP':                 this.applyCSP(policy, node as CSPNode); break;
        case 'Embedding':           this.applyEmbedding(policy, node as EmbeddingNode); break;
        case 'ContentTrust':        policy.content_trust = true; break;
        case 'Referrer':            this.applyReferrer(policy, node as ReferrerNode); break;
        case 'Permissions':         this.applyPermissions(policy, node as PermissionsNode); break;
        case 'CORS':                this.applyCORS(policy, node as CORSNode); break;
        case 'CrossOriginIsolation':
          policy.cross_origin_isolation = (node as CrossOriginIsolationNode).mode === 'full';
          break;
        case 'Target':
          policy.target = (node as TargetNode).platform as TargetPlatform;
          break;
      }
    }

    return policy;
  }

  private applyEnvironment(policy: SecurityPolicy, node: EnvironmentNode): void {
    policy.environment.name = node.name;
    if (node.properties.domain)     policy.environment.domain     = node.properties.domain;
    if (node.properties.nonce_mode) policy.environment.nonce_mode = node.properties.nonce_mode as NonceMode;
  }

  private applyTransport(policy: SecurityPolicy, node: TransportNode): void {
    const p = node.properties;
    if (p.enforce_https     !== undefined) policy.transport.enforce_https     = this.toBool(p.enforce_https);
    if (p.max_age           !== undefined) policy.transport.max_age           = Number(p.max_age);
    if (p.include_subdomains !== undefined) policy.transport.include_subdomains = this.toBool(p.include_subdomains);
    if (p.preload           !== undefined) policy.transport.preload           = this.toBool(p.preload);
  }

  private applyCSP(policy: SecurityPolicy, node: CSPNode): void {
    policy.csp.default = node.default_src;

    for (const resource of node.resources) {
      const rule: CSPResourceRule = {
        allows: resource.allows.map(a => ({
          origin: this.resolveOrigin(a.origin),
          trust: a.hash
            ? { type: 'hash' as const, algorithm: 'sha256', value: a.hash }
            : undefined,
        })),
        blocks: resource.blocks,
        nonce:  resource.nonce,
      };
      policy.csp.resources.set(this.normalizeResourceType(resource.resource), rule);
    }
  }

  private applyEmbedding(policy: SecurityPolicy, node: EmbeddingNode): void {
    const map: Record<string, EmbeddingMode> = {
      'deny':        EmbeddingMode.DENY,
      'same_origin': EmbeddingMode.SAME_ORIGIN,
      'sameorigin':  EmbeddingMode.SAME_ORIGIN,
      'allow_from':  EmbeddingMode.ALLOW_FROM,
      'allow-from':  EmbeddingMode.ALLOW_FROM,
    };
    policy.embedding.mode = map[node.mode] || EmbeddingMode.DENY;
    if (node.allow_from) policy.embedding.allow_from = node.allow_from;
  }

  private applyReferrer(policy: SecurityPolicy, node: ReferrerNode): void {
    const map: Record<string, ReferrerMode> = {
      'no_referrer':                       ReferrerMode.NO_REFERRER,
      'no-referrer':                       ReferrerMode.NO_REFERRER,
      'origin':                            ReferrerMode.ORIGIN,
      'strict_origin':                     ReferrerMode.STRICT_ORIGIN,
      'strict-origin':                     ReferrerMode.STRICT_ORIGIN,
      'same_origin':                       ReferrerMode.SAME_ORIGIN,
      'same-origin':                       ReferrerMode.SAME_ORIGIN,
      'strict_origin_when_cross_origin':   ReferrerMode.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
      'strict-origin-when-cross-origin':   ReferrerMode.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
      'no_referrer_when_downgrade':        ReferrerMode.NO_REFERRER_WHEN_DOWNGRADE,
      'unsafe_url':                        ReferrerMode.UNSAFE_URL,
    };
    policy.referrer = map[node.mode] || ReferrerMode.STRICT_ORIGIN_WHEN_CROSS_ORIGIN;
  }

  private applyPermissions(policy: SecurityPolicy, node: PermissionsNode): void {
    policy.permissions = node.entries.map(entry => {
      let value: string;
      const v0 = entry.values[0]?.toLowerCase();

      if (entry.values.length === 0 || v0 === 'none') {
        value = '()';
      } else if (v0 === 'self') {
        value = '(self)';
      } else if (entry.values[0] === '*') {
        value = '*';
      } else {
        const parts = entry.values.map(v => {
          const lower = v.toLowerCase();
          if (lower === 'self') return 'self';
          if (lower === 'none') return '';
          return `"${v}"`;
        }).filter(Boolean);
        value = `(${parts.join(' ')})`;
      }

      return { feature: entry.feature, value };
    });
  }

  private applyCORS(policy: SecurityPolicy, node: CORSNode): void {
    const p = node.properties;
    if (p.mode) {
      const map: Record<string, CORSMode> = {
        'credentials': CORSMode.CREDENTIALS,
        'public':      CORSMode.PUBLIC,
        'disabled':    CORSMode.DISABLED,
      };
      policy.cors.mode = map[p.mode.toLowerCase()] || CORSMode.DISABLED;
    }
    if (p.origin) policy.cors.origin = p.origin;
  }

  private toBool(v: unknown): boolean {
    return v === true || v === 'true' || v === '1';
  }

  private resolveOrigin(value: string): string {
    const map: Record<string, string> = {
      'self': "'self'", 'none': "'none'", 'any': '*',
      'inline': "'unsafe-inline'", 'eval': "'unsafe-eval'",
      'data': 'data:', 'data_uri': 'data:', 'blob': 'blob:',
      'strict_dynamic': "'strict-dynamic'",
    };
    return map[value.toLowerCase()] || value;
  }

  private normalizeResourceType(resource: string): string {
    const map: Record<string, string> = {
      'script':      'script-src',
      'style':       'style-src',
      'image':       'img-src',
      'img':         'img-src',
      'font':        'font-src',
      'frame':       'frame-src',
      'connect':     'connect-src',
      'media':       'media-src',
      'object':      'object-src',
      'base_uri':    'base-uri',
      'base-uri':    'base-uri',
      'form_action': 'form-action',
      'form-action': 'form-action',
    };
    return map[resource] || `${resource}-src`;
  }
}

// ─── SECTION 7: VALIDATOR ────────────────────────────────────────────────────
// Identical to compiler.ts

class Validator {
  validate(policy: SecurityPolicy): ValidationResult {
    const messages: ValidationMessage[] = [];
    this.checkCSPConflicts(policy, messages);
    this.checkUnsafePatterns(policy, messages);
    this.checkHSTSPreload(policy, messages);
    this.checkMissingHeaders(policy, messages);
    this.checkCORSSafety(policy, messages);
    return { messages };
  }

  private checkCSPConflicts(policy: SecurityPolicy, msgs: ValidationMessage[]): void {
    const frameSrc = policy.csp.resources.get('frame-src');
    if (policy.embedding.mode === EmbeddingMode.DENY && frameSrc && frameSrc.allows.length > 0) {
      msgs.push({
        level: 'INFO',
        code: 'FRAME_SRC_VS_ANCESTORS',
        message: 'frame-src (ce pot încadra eu) e configurat, dar frame-ancestors e DENY. Acestea sunt direcții diferite — OK.',
      });
    }

    if (policy.cors.mode === CORSMode.CREDENTIALS && (!policy.cors.origin || policy.cors.origin === '*')) {
      msgs.push({
        level: 'CRITICAL',
        code: 'CORS_WILDCARD_CREDENTIALS',
        message: 'CORS cu credentials necesită un origin specific, nu wildcard (*). Specificați domeniul exact.',
      });
    }

    if (policy.cors.mode !== CORSMode.DISABLED && policy.cors.origin) {
      const connectSrc = policy.csp.resources.get('connect-src');
      if (connectSrc) {
        const originInConnect = connectSrc.allows.some(
          a => a.origin === policy.cors.origin || a.origin === '*'
        );
        if (!originInConnect) {
          msgs.push({
            level: 'WARNING',
            code: 'CORS_CSP_MISALIGN',
            message: `CORS permite origin '${policy.cors.origin}', dar connect-src nu îl include. Aliniați CORS și CSP.`,
          });
        }
      }
    }
  }

  private checkUnsafePatterns(policy: SecurityPolicy, msgs: ValidationMessage[]): void {
    for (const [directive, rule] of policy.csp.resources) {
      for (const allow of rule.allows) {
        if (directive === 'script-src' && allow.origin === '*') {
          msgs.push({ level: 'CRITICAL', code: 'CSP_SCRIPT_WILDCARD',
            message: 'Permiterea scripturilor din ORICE origin (*) anulează complet CSP.' });
        }
        if (directive === 'script-src' && allow.origin === "'unsafe-inline'" && !rule.nonce) {
          msgs.push({ level: 'WARNING', code: 'CSP_INLINE_NO_NONCE',
            message: 'Scripturi inline fără nonce sunt nesigure. Folosiți "nonce auto" în bloc.' });
        }
        if (directive === 'script-src' && allow.origin === "'unsafe-eval'") {
          msgs.push({ level: 'WARNING', code: 'CSP_EVAL',
            message: 'eval() este un vector major XSS. Evitați unsafe-eval dacă e posibil.' });
        }
        if (allow.origin === '*' && directive !== 'img-src') {
          msgs.push({ level: 'WARNING', code: `CSP_WILDCARD_${directive.toUpperCase().replace(/-/g, '_')}`,
            message: `Wildcard (*) în ${directive} este excesiv de permisiv.` });
        }
      }
      if (rule.blocks.includes('inline') && rule.allows.some(a => a.origin === "'unsafe-inline'")) {
        msgs.push({ level: 'ERROR', code: 'CSP_CONFLICTING_INLINE',
          message: `${directive}: Se blochează inline dar se și permite unsafe-inline. Contradicție!` });
      }
    }
  }

  private checkHSTSPreload(policy: SecurityPolicy, msgs: ValidationMessage[]): void {
    if (policy.transport.preload) {
      if (policy.transport.max_age < 31536000) {
        msgs.push({ level: 'ERROR', code: 'HSTS_PRELOAD_MAX_AGE',
          message: `HSTS preload necesită max-age >= 31536000. Actual: ${policy.transport.max_age}` });
      }
      if (!policy.transport.include_subdomains) {
        msgs.push({ level: 'ERROR', code: 'HSTS_PRELOAD_SUBDOMAINS',
          message: 'HSTS preload necesită includeSubDomains activat.' });
      }
    }
  }

  private checkMissingHeaders(policy: SecurityPolicy, msgs: ValidationMessage[]): void {
    if (!policy.content_trust) {
      msgs.push({ level: 'WARNING', code: 'MISSING_NOSNIFF',
        message: 'Lipsește X-Content-Type-Options: nosniff.' });
    }
    if (policy.csp.resources.size === 0) {
      msgs.push({ level: 'WARNING', code: 'MISSING_CSP_RULES',
        message: 'Nu sunt configurate reguli CSP granulare. Se va folosi doar default-src.' });
    }
    if (policy.permissions.length === 0) {
      msgs.push({ level: 'WARNING', code: 'MISSING_PERMISSIONS',
        message: 'Permissions-Policy nu e configurat. Restricționați funcționalitățile sensibile.' });
    }
    if (!policy.transport.enforce_https) {
      msgs.push({ level: 'WARNING', code: 'MISSING_HSTS',
        message: 'HSTS nu e activat. Forțați HTTPS.' });
    }
  }

  private checkCORSSafety(policy: SecurityPolicy, msgs: ValidationMessage[]): void {
    if (policy.cors.mode === CORSMode.PUBLIC) {
      msgs.push({ level: 'INFO', code: 'CORS_PUBLIC',
        message: 'CORS public activ. Asigurați-vă că sunt expuse doar metode sigure (GET, OPTIONS).' });
    }
  }
}

// ─── SECTION 8: NONCE GENERATOR ──────────────────────────────────────────────

class NonceGenerator {
  static generate(): string {
    return crypto.randomBytes(16).toString('base64');
  }

  static placeholder(): string {
    return '{{NONCE}}';
  }
}

// ─── SECTION 9: HEADER BUILDER ───────────────────────────────────────────────

class HeaderBuilder {
  buildHeaders(policy: SecurityPolicy): SecurityHeader[] {
    const headers: SecurityHeader[] = [];
    const nonce = policy.environment.nonce_mode === NonceMode.DYNAMIC
      ? NonceGenerator.generate()
      : (policy.environment.nonce_mode === NonceMode.STATIC
        ? NonceGenerator.placeholder()
        : '');

    // ── 1. HSTS ──
    if (policy.transport.enforce_https) {
      let hsts = `max-age=${policy.transport.max_age}`;
      if (policy.transport.include_subdomains) hsts += '; includeSubDomains';
      if (policy.transport.preload)            hsts += '; preload';
      headers.push({ key: 'Strict-Transport-Security', value: hsts });
    }

    // ── 2. CSP ──
    const cspParts: string[] = [`default-src ${policy.csp.default}`];

    for (const [directive, rule] of policy.csp.resources) {
      const sources: string[] = [];
      for (const allow of rule.allows) {
        sources.push(allow.origin);
        if (allow.trust?.type === 'hash') {
          sources.push(`'${allow.trust.algorithm}-${allow.trust.value}'`);
        }
      }
      if (rule.nonce && nonce) {
        sources.push(`'nonce-${nonce}'`);
      }
      if (sources.length > 0) {
        cspParts.push(`${directive} ${sources.join(' ')}`);
      }
    }

    if (policy.embedding.mode === EmbeddingMode.DENY) {
      cspParts.push("frame-ancestors 'none'");
    } else if (policy.embedding.mode === EmbeddingMode.SAME_ORIGIN) {
      cspParts.push("frame-ancestors 'self'");
    } else if (policy.embedding.mode === EmbeddingMode.ALLOW_FROM && policy.embedding.allow_from) {
      cspParts.push(`frame-ancestors ${policy.embedding.allow_from}`);
    }

    headers.push({ key: 'Content-Security-Policy', value: cspParts.join('; ') });

    // ── 3. X-Frame-Options (legacy) ──
    if (policy.embedding.mode === EmbeddingMode.DENY) {
      headers.push({ key: 'X-Frame-Options', value: 'DENY' });
    } else if (policy.embedding.mode === EmbeddingMode.SAME_ORIGIN) {
      headers.push({ key: 'X-Frame-Options', value: 'SAMEORIGIN' });
    }

    // ── 4. X-Content-Type-Options ──
    if (policy.content_trust) {
      headers.push({ key: 'X-Content-Type-Options', value: 'nosniff' });
    }

    // ── 5. Referrer-Policy ──
    headers.push({ key: 'Referrer-Policy', value: policy.referrer });

    // ── 6. Permissions-Policy ──
    if (policy.permissions.length > 0) {
      const ppValue = policy.permissions.map(p => `${p.feature}=${p.value}`).join(', ');
      headers.push({ key: 'Permissions-Policy', value: ppValue });
    }

    // ── 7. CORS ──
    if (policy.cors.mode === CORSMode.CREDENTIALS) {
      headers.push({ key: 'Access-Control-Allow-Origin',      value: policy.cors.origin || '' });
      headers.push({ key: 'Access-Control-Allow-Credentials', value: 'true' });
      headers.push({ key: 'Vary',                             value: 'Origin' });
    } else if (policy.cors.mode === CORSMode.PUBLIC) {
      headers.push({ key: 'Access-Control-Allow-Origin',  value: '*' });
      headers.push({ key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' });
      headers.push({ key: 'Cache-Control',                value: 'public, max-age=3600' });
      headers.push({ key: 'Vary',                         value: 'Accept-Encoding' });
    }

    // ── 8. Cross-Origin Isolation ──
    if (policy.cross_origin_isolation) {
      headers.push({ key: 'Cross-Origin-Opener-Policy',  value: 'same-origin' });
      headers.push({ key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' });
    }

    return headers;
  }
}

// ─── SECTION 10: TARGET-SPECIFIC GENERATORS ──────────────────────────────────

function generateRaw(headers: SecurityHeader[]): string {
  return JSON.stringify(headers, null, 2);
}

function generateNginx(headers: SecurityHeader[]): string {
  const lines = [
    '# FrameShield — Nginx Security Headers (Auto-Generated)',
    `# Generated: ${new Date().toISOString()}`,
    '# WARNING: Nu editați manual — regenerați din rules.shield', '',
    '# Includeți în blocul server {} sau location {}', '',
  ];
  for (const h of headers) {
    lines.push(`add_header ${h.key} "${h.value.replace(/"/g, '\\"')}" always;`);
  }
  return lines.join('\n');
}

function generateApache(headers: SecurityHeader[]): string {
  const lines = [
    '# FrameShield — Apache Security Headers (Auto-Generated)',
    `# Generated: ${new Date().toISOString()}`,
    '# WARNING: Nu editați manual — regenerați din rules.shield', '',
    '<IfModule mod_headers.c>',
  ];
  for (const h of headers) {
    lines.push(`    Header always set ${h.key} "${h.value.replace(/"/g, '\\"')}"`);
  }
  lines.push('</IfModule>');
  return lines.join('\n');
}

function generateExpress(headers: SecurityHeader[], hasNonce: boolean): string {
  const lines = [
    '// FrameShield — Express.js Security Middleware (Auto-Generated)',
    `// Generated: ${new Date().toISOString()}`,
    '// WARNING: Nu editați manual — regenerați din rules.shield', '',
    'const crypto = require("crypto");', '',
    'function frameshieldMiddleware(req, res, next) {',
  ];
  if (hasNonce) {
    lines.push('  const nonce = crypto.randomBytes(16).toString("base64");');
    lines.push('  res.locals.cspNonce = nonce;');
    lines.push('');
  }
  for (const h of headers) {
    let value = h.value;
    if (hasNonce && h.key === 'Content-Security-Policy') {
      value = value.replace(/'nonce-[A-Za-z0-9+/=]+'/g, "'nonce-${nonce}'");
      lines.push(`  res.setHeader("${h.key}", \`${value}\`);`);
    } else {
      lines.push(`  res.setHeader("${h.key}", "${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}");`);
    }
  }
  lines.push('', '  next();', '}', '', 'module.exports = frameshieldMiddleware;');
  return lines.join('\n');
}

function generateCloudflare(headers: SecurityHeader[], hasNonce: boolean): string {
  const lines = [
    '// FrameShield — Cloudflare Worker (Auto-Generated)',
    `// Generated: ${new Date().toISOString()}`,
    '// WARNING: Nu editați manual — regenerați din rules.shield', '',
    'export default {',
    '  async fetch(request, env, ctx) {',
    '    const response = await fetch(request);',
    '    const newResponse = new Response(response.body, response);', '',
  ];
  if (hasNonce) {
    lines.push('    const arr = new Uint8Array(16);');
    lines.push('    crypto.getRandomValues(arr);');
    lines.push('    const nonce = btoa(String.fromCharCode(...arr));');
    lines.push('');
  }
  for (const h of headers) {
    let value = h.value;
    if (hasNonce && h.key === 'Content-Security-Policy') {
      value = value.replace(/'nonce-[A-Za-z0-9+/=]+'/g, "'nonce-${nonce}'");
      lines.push(`    newResponse.headers.set("${h.key}", \`${value}\`);`);
    } else {
      lines.push(`    newResponse.headers.set("${h.key}", "${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}");`);
    }
  }
  lines.push('', '    return newResponse;', '  }', '};');
  return lines.join('\n');
}

function generateNextJS(headers: SecurityHeader[]): string {
  return [
    '// FrameShield — Next.js Security Headers (Auto-Generated)',
    `// Generated: ${new Date().toISOString()}`,
    '// WARNING: Nu editați manual — regenerați din rules.shield', '',
    '/** @type {import("next").NextConfig} */',
    `const securityHeaders = ${JSON.stringify(headers.map(h => ({ key: h.key, value: h.value })), null, 2)};`, '',
    'module.exports = {',
    '  async headers() {',
    '    return [{ source: "/(.*)", headers: securityHeaders }];',
    '  },',
    '};',
  ].join('\n');
}

// ─── SECTION 11: MAIN COMPILE FUNCTION ───────────────────────────────────────

function compile(dslPath: string, outputDir: string): void {
  console.log('🛡️  [FrameShield] Compilare DSL v3.0 — ANTLR Mode');
  console.log('═'.repeat(60));

  if (!fs.existsSync(dslPath)) {
    console.error(`❌ Fișierul DSL nu a fost găsit: ${dslPath}`);
    process.exit(1);
  }

  const source = fs.readFileSync(dslPath, 'utf-8');
  console.log(`📄 Sursă: ${dslPath} (${source.length} caractere)`);

  // ── PASUL 1: Tokenizare (via ANTLR Lexer) ──
  console.log('\n🔤 PASUL 1: Tokenizare (Text → Tokenuri, via ANTLR Lexer)...');
  const { ast, tokenCount } = parseSource(source);
  console.log(`   → ${tokenCount} tokenuri extrase`);

  // ── PASUL 2: Parsare → AST (via ANTLR Parser + Visitor) ──
  console.log('\n🌳 PASUL 2: Parsare → AST (via ANTLR Parser + Visitor)...');
  console.log(`   → AST cu ${ast.children.length} noduri de nivel superior:`);
  for (const child of ast.children) {
    const details = (() => {
      switch (child.type) {
        case 'Environment': return `(${(child as EnvironmentNode).name})`;
        case 'CSP':         return `(${(child as CSPNode).resources.length} resurse)`;
        case 'Permissions': return `(${(child as PermissionsNode).entries.length} funcții)`;
        case 'Target':      return `(${(child as TargetNode).platform})`;
        default: return '';
      }
    })();
    console.log(`     ├─ ${child.type} ${details}`);
  }

  // ── PASUL 3: Construire SecurityPolicy din AST ──
  console.log('\n🏗️  PASUL 3: Construire SecurityPolicy din AST...');
  const builder = new PolicyBuilder();
  const policy  = builder.build(ast);
  console.log(`   → Mediu: ${policy.environment.name}`);
  console.log(`   → Domeniu: ${policy.environment.domain}`);
  console.log(`   → Nonce: ${policy.environment.nonce_mode}`);
  console.log(`   → CSP Directive: ${policy.csp.resources.size} resurse (+ default-src)`);
  console.log(`   → Embedding: ${policy.embedding.mode}`);
  console.log(`   → Referrer: ${policy.referrer}`);
  console.log(`   → Permissions: ${policy.permissions.length} funcții restricționate`);
  console.log(`   → CORS: ${policy.cors.mode}`);
  console.log(`   → Cross-Origin Isolation: ${policy.cross_origin_isolation ? 'DA' : 'NU'}`);
  console.log(`   → Target: ${policy.target}`);

  // ── PASUL 4: Validare ──
  console.log('\n🔍 PASUL 4: Validare (Pillar #4 — Prevenirea Erorilor)...');
  const validator  = new Validator();
  const validation = validator.validate(policy);

  const criticals = validation.messages.filter(m => m.level === 'CRITICAL');
  const errors    = validation.messages.filter(m => m.level === 'ERROR');
  const warnings  = validation.messages.filter(m => m.level === 'WARNING');
  const infos     = validation.messages.filter(m => m.level === 'INFO');

  if (criticals.length > 0) { console.log('\n   🔴 ERORI CRITICE:'); criticals.forEach(e => console.log(`      ✖ [${e.code}] ${e.message}`)); }
  if (errors.length > 0)    { console.log('\n   🟠 ERORI:');         errors.forEach(e    => console.log(`      ✖ [${e.code}] ${e.message}`)); }
  if (warnings.length > 0)  { console.log('\n   🟡 AVERTISMENTE:');  warnings.forEach(w  => console.log(`      ⚠ [${w.code}] ${w.message}`)); }
  if (infos.length > 0)     { console.log('\n   🔵 INFO:');          infos.forEach(i     => console.log(`      ℹ [${i.code}] ${i.message}`)); }
  if (validation.messages.length === 0) { console.log('   ✅ Nicio problemă detectată!'); }

  if (criticals.length > 0) {
    console.error('\n❌ Compilare EȘUATĂ! Rezolvați erorile critice înainte de deploy.');
    process.exit(1);
  }

  console.log(`\n   Verdict: ${criticals.length} critice, ${errors.length} erori, ${warnings.length} avertismente, ${infos.length} info`);

  // ── PASUL 5: Generare Output ──
  console.log('\n⚙️  PASUL 5: Generare output (Multi-Target)...');
  const headerBuilder = new HeaderBuilder();
  const headers       = headerBuilder.buildHeaders(policy);
  const hasNonce      = Array.from(policy.csp.resources.values()).some(r => r.nonce);

  const rawPath = path.join(outputDir, 'security-headers.json');
  fs.writeFileSync(rawPath, generateRaw(headers));
  console.log(`   📁 RAW JSON        → ${rawPath}`);

  const generators: Record<string, { fn: () => string; file: string }> = {
    nginx:      { fn: () => generateNginx(headers),                file: 'security-headers.nginx.conf' },
    apache:     { fn: () => generateApache(headers),               file: 'security-headers.apache.conf' },
    express:    { fn: () => generateExpress(headers, hasNonce),    file: 'security-headers.express.js' },
    cloudflare: { fn: () => generateCloudflare(headers, hasNonce), file: 'security-headers.cloudflare.js' },
    next:       { fn: () => generateNextJS(headers),               file: 'security-headers.next.js' },
  };

  if (generators[policy.target]) {
    const { fn, file } = generators[policy.target];
    const targetPath = path.join(outputDir, file);
    fs.writeFileSync(targetPath, fn());
    console.log(`   📁 ${policy.target.toUpperCase().padEnd(14)} → ${targetPath}`);
  }

  console.log('\n' + '═'.repeat(60));
  console.log('✅ [FrameShield] Compilare completă!');
  console.log(`   → ${headers.length} headere de securitate generate`);
  console.log(`   → Validare: ${criticals.length} critice, ${errors.length} erori, ${warnings.length} avertismente`);
  console.log(`   → Mediu: ${policy.environment.name} | Target: ${policy.target}`);
  if (hasNonce) console.log('   → Nonce dinamic: DA (generat criptografic per-request)');
  console.log('═'.repeat(60));
}

// ─── CLI ENTRY POINT ─────────────────────────────────────────────────────────

const args    = process.argv.slice(2);
const dslFile = args[0] || path.join(process.cwd(), 'rules.shield');
const outDir  = args[1] || process.cwd();

compile(dslFile, outDir);
