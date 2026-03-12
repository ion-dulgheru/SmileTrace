// Generated from grammar/FrameShield.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FrameShieldListener } from "./FrameShieldListener";
import { FrameShieldVisitor } from "./FrameShieldVisitor";


export class FrameShieldParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly BOOLEAN = 34;
	public static readonly IDENTIFIER = 35;
	public static readonly STRING = 36;
	public static readonly NUMBER = 37;
	public static readonly WS = 38;
	public static readonly COMMENT = 39;
	public static readonly RULE_policy = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_env_stmt = 2;
	public static readonly RULE_env_prop = 3;
	public static readonly RULE_transport_stmt = 4;
	public static readonly RULE_trans_prop = 5;
	public static readonly RULE_csp_stmt = 6;
	public static readonly RULE_csp_prop = 7;
	public static readonly RULE_resource_type = 8;
	public static readonly RULE_resource_prop = 9;
	public static readonly RULE_source_val = 10;
	public static readonly RULE_embedding_stmt = 11;
	public static readonly RULE_trust_stmt = 12;
	public static readonly RULE_referrer_stmt = 13;
	public static readonly RULE_cross_origin_stmt = 14;
	public static readonly RULE_target_stmt = 15;
	public static readonly RULE_perm_stmt = 16;
	public static readonly RULE_perm_prop = 17;
	public static readonly RULE_feature_val = 18;
	public static readonly RULE_cors_stmt = 19;
	public static readonly RULE_cors_prop = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"policy", "statement", "env_stmt", "env_prop", "transport_stmt", "trans_prop", 
		"csp_stmt", "csp_prop", "resource_type", "resource_prop", "source_val", 
		"embedding_stmt", "trust_stmt", "referrer_stmt", "cross_origin_stmt", 
		"target_stmt", "perm_stmt", "perm_prop", "feature_val", "cors_stmt", "cors_prop",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'environment'", "'{'", "'}'", "'domain'", "'nonce_mode'", 
		"'transport'", "'enforce_https'", "'max_age'", "'include_subdomains'", 
		"'preload'", "'csp'", "'default'", "'none'", "'script'", "'style'", "'image'", 
		"'font'", "'frame'", "'connect'", "'media'", "'object'", "'allow'", "'block'", 
		"'nonce'", "'embedding'", "'content_trust'", "'referrer'", "'cross_origin_isolation'", 
		"'target'", "'permissions'", "'cors'", "'mode'", "'origin'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "BOOLEAN", 
		"IDENTIFIER", "STRING", "NUMBER", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FrameShieldParser._LITERAL_NAMES, FrameShieldParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FrameShieldParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FrameShield.g4"; }

	// @Override
	public get ruleNames(): string[] { return FrameShieldParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FrameShieldParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FrameShieldParser._ATN, this);
	}
	// @RuleVersion(0)
	public policy(): PolicyContext {
		let _localctx: PolicyContext = new PolicyContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FrameShieldParser.RULE_policy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FrameShieldParser.T__0) | (1 << FrameShieldParser.T__5) | (1 << FrameShieldParser.T__10) | (1 << FrameShieldParser.T__24) | (1 << FrameShieldParser.T__25) | (1 << FrameShieldParser.T__26) | (1 << FrameShieldParser.T__27) | (1 << FrameShieldParser.T__28) | (1 << FrameShieldParser.T__29) | (1 << FrameShieldParser.T__30))) !== 0)) {
				{
				{
				this.state = 42;
				this.statement();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 48;
			this.match(FrameShieldParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FrameShieldParser.RULE_statement);
		try {
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FrameShieldParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 50;
				this.env_stmt();
				}
				break;
			case FrameShieldParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				this.transport_stmt();
				}
				break;
			case FrameShieldParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 52;
				this.csp_stmt();
				}
				break;
			case FrameShieldParser.T__24:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 53;
				this.embedding_stmt();
				}
				break;
			case FrameShieldParser.T__25:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 54;
				this.trust_stmt();
				}
				break;
			case FrameShieldParser.T__26:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 55;
				this.referrer_stmt();
				}
				break;
			case FrameShieldParser.T__27:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 56;
				this.cross_origin_stmt();
				}
				break;
			case FrameShieldParser.T__29:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 57;
				this.perm_stmt();
				}
				break;
			case FrameShieldParser.T__30:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 58;
				this.cors_stmt();
				}
				break;
			case FrameShieldParser.T__28:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 59;
				this.target_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public env_stmt(): Env_stmtContext {
		let _localctx: Env_stmtContext = new Env_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FrameShieldParser.RULE_env_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(FrameShieldParser.T__0);
			this.state = 63;
			this.match(FrameShieldParser.STRING);
			this.state = 64;
			this.match(FrameShieldParser.T__1);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FrameShieldParser.T__3 || _la === FrameShieldParser.T__4) {
				{
				{
				this.state = 65;
				this.env_prop();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this.match(FrameShieldParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public env_prop(): Env_propContext {
		let _localctx: Env_propContext = new Env_propContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FrameShieldParser.RULE_env_prop);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FrameShieldParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.match(FrameShieldParser.T__3);
				this.state = 74;
				this.match(FrameShieldParser.STRING);
				}
				break;
			case FrameShieldParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				this.match(FrameShieldParser.T__4);
				this.state = 76;
				this.match(FrameShieldParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transport_stmt(): Transport_stmtContext {
		let _localctx: Transport_stmtContext = new Transport_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FrameShieldParser.RULE_transport_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(FrameShieldParser.T__5);
			this.state = 80;
			this.match(FrameShieldParser.T__1);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FrameShieldParser.T__6) | (1 << FrameShieldParser.T__7) | (1 << FrameShieldParser.T__8) | (1 << FrameShieldParser.T__9))) !== 0)) {
				{
				{
				this.state = 81;
				this.trans_prop();
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 87;
			this.match(FrameShieldParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trans_prop(): Trans_propContext {
		let _localctx: Trans_propContext = new Trans_propContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FrameShieldParser.RULE_trans_prop);
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FrameShieldParser.T__6:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 89;
				this.match(FrameShieldParser.T__6);
				this.state = 90;
				this.match(FrameShieldParser.BOOLEAN);
				}
				break;
			case FrameShieldParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.match(FrameShieldParser.T__7);
				this.state = 92;
				this.match(FrameShieldParser.NUMBER);
				}
				break;
			case FrameShieldParser.T__8:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 93;
				this.match(FrameShieldParser.T__8);
				this.state = 94;
				this.match(FrameShieldParser.BOOLEAN);
				}
				break;
			case FrameShieldParser.T__9:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 95;
				this.match(FrameShieldParser.T__9);
				this.state = 96;
				this.match(FrameShieldParser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public csp_stmt(): Csp_stmtContext {
		let _localctx: Csp_stmtContext = new Csp_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FrameShieldParser.RULE_csp_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(FrameShieldParser.T__10);
			this.state = 100;
			this.match(FrameShieldParser.T__1);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FrameShieldParser.T__11) | (1 << FrameShieldParser.T__13) | (1 << FrameShieldParser.T__14) | (1 << FrameShieldParser.T__15) | (1 << FrameShieldParser.T__16) | (1 << FrameShieldParser.T__17) | (1 << FrameShieldParser.T__18) | (1 << FrameShieldParser.T__19) | (1 << FrameShieldParser.T__20))) !== 0)) {
				{
				{
				this.state = 101;
				this.csp_prop();
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this.match(FrameShieldParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public csp_prop(): Csp_propContext {
		let _localctx: Csp_propContext = new Csp_propContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FrameShieldParser.RULE_csp_prop);
		let _la: number;
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FrameShieldParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 109;
				this.match(FrameShieldParser.T__11);
				this.state = 110;
				_la = this._input.LA(1);
				if (!(_la === FrameShieldParser.T__12 || _la === FrameShieldParser.IDENTIFIER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case FrameShieldParser.T__13:
			case FrameShieldParser.T__14:
			case FrameShieldParser.T__15:
			case FrameShieldParser.T__16:
			case FrameShieldParser.T__17:
			case FrameShieldParser.T__18:
			case FrameShieldParser.T__19:
			case FrameShieldParser.T__20:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.resource_type();
				this.state = 112;
				this.match(FrameShieldParser.T__1);
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FrameShieldParser.T__21) | (1 << FrameShieldParser.T__22) | (1 << FrameShieldParser.T__23))) !== 0)) {
					{
					{
					this.state = 113;
					this.resource_prop();
					}
					}
					this.state = 118;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 119;
				this.match(FrameShieldParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource_type(): Resource_typeContext {
		let _localctx: Resource_typeContext = new Resource_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FrameShieldParser.RULE_resource_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FrameShieldParser.T__13) | (1 << FrameShieldParser.T__14) | (1 << FrameShieldParser.T__15) | (1 << FrameShieldParser.T__16) | (1 << FrameShieldParser.T__17) | (1 << FrameShieldParser.T__18) | (1 << FrameShieldParser.T__19) | (1 << FrameShieldParser.T__20))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource_prop(): Resource_propContext {
		let _localctx: Resource_propContext = new Resource_propContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FrameShieldParser.RULE_resource_prop);
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FrameShieldParser.T__21:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.match(FrameShieldParser.T__21);
				this.state = 126;
				this.source_val();
				}
				break;
			case FrameShieldParser.T__22:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 127;
				this.match(FrameShieldParser.T__22);
				this.state = 128;
				this.match(FrameShieldParser.IDENTIFIER);
				}
				break;
			case FrameShieldParser.T__23:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 129;
				this.match(FrameShieldParser.T__23);
				this.state = 130;
				this.match(FrameShieldParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public source_val(): Source_valContext {
		let _localctx: Source_valContext = new Source_valContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FrameShieldParser.RULE_source_val);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			_la = this._input.LA(1);
			if (!(_la === FrameShieldParser.IDENTIFIER || _la === FrameShieldParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public embedding_stmt(): Embedding_stmtContext {
		let _localctx: Embedding_stmtContext = new Embedding_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FrameShieldParser.RULE_embedding_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(FrameShieldParser.T__24);
			this.state = 136;
			this.match(FrameShieldParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trust_stmt(): Trust_stmtContext {
		let _localctx: Trust_stmtContext = new Trust_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FrameShieldParser.RULE_trust_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(FrameShieldParser.T__25);
			this.state = 139;
			this.match(FrameShieldParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referrer_stmt(): Referrer_stmtContext {
		let _localctx: Referrer_stmtContext = new Referrer_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FrameShieldParser.RULE_referrer_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(FrameShieldParser.T__26);
			this.state = 142;
			this.match(FrameShieldParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cross_origin_stmt(): Cross_origin_stmtContext {
		let _localctx: Cross_origin_stmtContext = new Cross_origin_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FrameShieldParser.RULE_cross_origin_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(FrameShieldParser.T__27);
			this.state = 145;
			this.match(FrameShieldParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public target_stmt(): Target_stmtContext {
		let _localctx: Target_stmtContext = new Target_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FrameShieldParser.RULE_target_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(FrameShieldParser.T__28);
			this.state = 148;
			this.match(FrameShieldParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public perm_stmt(): Perm_stmtContext {
		let _localctx: Perm_stmtContext = new Perm_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FrameShieldParser.RULE_perm_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(FrameShieldParser.T__29);
			this.state = 151;
			this.match(FrameShieldParser.T__1);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FrameShieldParser.IDENTIFIER) {
				{
				{
				this.state = 152;
				this.perm_prop();
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 158;
			this.match(FrameShieldParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public perm_prop(): Perm_propContext {
		let _localctx: Perm_propContext = new Perm_propContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FrameShieldParser.RULE_perm_prop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(FrameShieldParser.IDENTIFIER);
			this.state = 161;
			this.feature_val();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public feature_val(): Feature_valContext {
		let _localctx: Feature_valContext = new Feature_valContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FrameShieldParser.RULE_feature_val);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			_la = this._input.LA(1);
			if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (FrameShieldParser.T__12 - 13)) | (1 << (FrameShieldParser.IDENTIFIER - 13)) | (1 << (FrameShieldParser.STRING - 13)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cors_stmt(): Cors_stmtContext {
		let _localctx: Cors_stmtContext = new Cors_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FrameShieldParser.RULE_cors_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(FrameShieldParser.T__30);
			this.state = 166;
			this.match(FrameShieldParser.T__1);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FrameShieldParser.T__31 || _la === FrameShieldParser.T__32) {
				{
				{
				this.state = 167;
				this.cors_prop();
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 173;
			this.match(FrameShieldParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cors_prop(): Cors_propContext {
		let _localctx: Cors_propContext = new Cors_propContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FrameShieldParser.RULE_cors_prop);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FrameShieldParser.T__31:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.match(FrameShieldParser.T__31);
				this.state = 176;
				this.match(FrameShieldParser.IDENTIFIER);
				}
				break;
			case FrameShieldParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.match(FrameShieldParser.T__32);
				this.state = 178;
				this.match(FrameShieldParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\xB8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x07\x02." +
		"\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03?\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04E\n\x04\f\x04\x0E\x04H\v\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05P\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x07\x06U\n\x06\f\x06\x0E\x06X\v\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07d\n\x07\x03" +
		"\b\x03\b\x03\b\x07\bi\n\b\f\b\x0E\bl\v\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x07\tu\n\t\f\t\x0E\tx\v\t\x03\t\x03\t\x05\t|\n\t\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x86\n\v\x03\f\x03\f\x03\r" +
		"\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\x9C" +
		"\n\x12\f\x12\x0E\x12\x9F\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\xAB\n\x15\f\x15\x0E\x15" +
		"\xAE\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xB6" +
		"\n\x16\x03\x16\x02\x02\x02\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02\x02\x06\x04\x02\x0F\x0F%%\x03\x02\x10" +
		"\x17\x03\x02%&\x04\x02\x0F\x0F%&\x02\xBA\x02/\x03\x02\x02\x02\x04>\x03" +
		"\x02\x02\x02\x06@\x03\x02\x02\x02\bO\x03\x02\x02\x02\nQ\x03\x02\x02\x02" +
		"\fc\x03\x02\x02\x02\x0Ee\x03\x02\x02\x02\x10{\x03\x02\x02\x02\x12}\x03" +
		"\x02\x02\x02\x14\x85\x03\x02\x02\x02\x16\x87\x03\x02\x02\x02\x18\x89\x03" +
		"\x02\x02\x02\x1A\x8C\x03\x02\x02\x02\x1C\x8F\x03\x02\x02\x02\x1E\x92\x03" +
		"\x02\x02\x02 \x95\x03\x02\x02\x02\"\x98\x03\x02\x02\x02$\xA2\x03\x02\x02" +
		"\x02&\xA5\x03\x02\x02\x02(\xA7\x03\x02\x02\x02*\xB5\x03\x02\x02\x02,." +
		"\x05\x04\x03\x02-,\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02\x02" +
		"/0\x03\x02\x02\x0202\x03\x02\x02\x021/\x03\x02\x02\x0223\x07\x02\x02\x03" +
		"3\x03\x03\x02\x02\x024?\x05\x06\x04\x025?\x05\n\x06\x026?\x05\x0E\b\x02" +
		"7?\x05\x18\r\x028?\x05\x1A\x0E\x029?\x05\x1C\x0F\x02:?\x05\x1E\x10\x02" +
		";?\x05\"\x12\x02<?\x05(\x15\x02=?\x05 \x11\x02>4\x03\x02\x02\x02>5\x03" +
		"\x02\x02\x02>6\x03\x02\x02\x02>7\x03\x02\x02\x02>8\x03\x02\x02\x02>9\x03" +
		"\x02\x02\x02>:\x03\x02\x02\x02>;\x03\x02\x02\x02><\x03\x02\x02\x02>=\x03" +
		"\x02\x02\x02?\x05\x03\x02\x02\x02@A\x07\x03\x02\x02AB\x07&\x02\x02BF\x07" +
		"\x04\x02\x02CE\x05\b\x05\x02DC\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03" +
		"\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HF\x03\x02\x02\x02IJ\x07" +
		"\x05\x02\x02J\x07\x03\x02\x02\x02KL\x07\x06\x02\x02LP\x07&\x02\x02MN\x07" +
		"\x07\x02\x02NP\x07%\x02\x02OK\x03\x02\x02\x02OM\x03\x02\x02\x02P\t\x03" +
		"\x02\x02\x02QR\x07\b\x02\x02RV\x07\x04\x02\x02SU\x05\f\x07\x02TS\x03\x02" +
		"\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02" +
		"\x02\x02XV\x03\x02\x02\x02YZ\x07\x05\x02\x02Z\v\x03\x02\x02\x02[\\\x07" +
		"\t\x02\x02\\d\x07$\x02\x02]^\x07\n\x02\x02^d\x07\'\x02\x02_`\x07\v\x02" +
		"\x02`d\x07$\x02\x02ab\x07\f\x02\x02bd\x07$\x02\x02c[\x03\x02\x02\x02c" +
		"]\x03\x02\x02\x02c_\x03\x02\x02\x02ca\x03\x02\x02\x02d\r\x03\x02\x02\x02" +
		"ef\x07\r\x02\x02fj\x07\x04\x02\x02gi\x05\x10\t\x02hg\x03\x02\x02\x02i" +
		"l\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02" +
		"lj\x03\x02\x02\x02mn\x07\x05\x02\x02n\x0F\x03\x02\x02\x02op\x07\x0E\x02" +
		"\x02p|\t\x02\x02\x02qr\x05\x12\n\x02rv\x07\x04\x02\x02su\x05\x14\v\x02" +
		"ts\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"wy\x03\x02\x02\x02xv\x03\x02\x02\x02yz\x07\x05\x02\x02z|\x03\x02\x02\x02" +
		"{o\x03\x02\x02\x02{q\x03\x02\x02\x02|\x11\x03\x02\x02\x02}~\t\x03\x02" +
		"\x02~\x13\x03\x02\x02\x02\x7F\x80\x07\x18\x02\x02\x80\x86\x05\x16\f\x02" +
		"\x81\x82\x07\x19\x02\x02\x82\x86\x07%\x02\x02\x83\x84\x07\x1A\x02\x02" +
		"\x84\x86\x07%\x02\x02\x85\x7F\x03\x02\x02\x02\x85\x81\x03\x02\x02\x02" +
		"\x85\x83\x03\x02\x02\x02\x86\x15\x03\x02\x02\x02\x87\x88\t\x04\x02\x02" +
		"\x88\x17\x03\x02\x02\x02\x89\x8A\x07\x1B\x02\x02\x8A\x8B\x07%\x02\x02" +
		"\x8B\x19\x03\x02\x02\x02\x8C\x8D\x07\x1C\x02\x02\x8D\x8E\x07%\x02\x02" +
		"\x8E\x1B\x03\x02\x02\x02\x8F\x90\x07\x1D\x02\x02\x90\x91\x07%\x02\x02" +
		"\x91\x1D\x03\x02\x02\x02\x92\x93\x07\x1E\x02\x02\x93\x94\x07%\x02\x02" +
		"\x94\x1F\x03\x02\x02\x02\x95\x96\x07\x1F\x02\x02\x96\x97\x07%\x02\x02" +
		"\x97!\x03\x02\x02\x02\x98\x99\x07 \x02\x02\x99\x9D\x07\x04\x02\x02\x9A" +
		"\x9C\x05$\x13\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D" +
		"\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02\x9F" +
		"\x9D\x03\x02\x02\x02\xA0\xA1\x07\x05\x02\x02\xA1#\x03\x02\x02\x02\xA2" +
		"\xA3\x07%\x02\x02\xA3\xA4\x05&\x14\x02\xA4%\x03\x02\x02\x02\xA5\xA6\t" +
		"\x05\x02\x02\xA6\'\x03\x02\x02\x02\xA7\xA8\x07!\x02\x02\xA8\xAC\x07\x04" +
		"\x02\x02\xA9\xAB\x05*\x16\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02" +
		"\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x03\x02" +
		"\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB0\x07\x05\x02\x02\xB0)\x03\x02" +
		"\x02\x02\xB1\xB2\x07\"\x02\x02\xB2\xB6\x07%\x02\x02\xB3\xB4\x07#\x02\x02" +
		"\xB4\xB6\x07&\x02\x02\xB5\xB1\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02" +
		"\xB6+\x03\x02\x02\x02\x0F/>FOVcjv{\x85\x9D\xAC\xB5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FrameShieldParser.__ATN) {
			FrameShieldParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FrameShieldParser._serializedATN));
		}

		return FrameShieldParser.__ATN;
	}

}

export class PolicyContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(FrameShieldParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_policy; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterPolicy) {
			listener.enterPolicy(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitPolicy) {
			listener.exitPolicy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitPolicy) {
			return visitor.visitPolicy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public env_stmt(): Env_stmtContext | undefined {
		return this.tryGetRuleContext(0, Env_stmtContext);
	}
	public transport_stmt(): Transport_stmtContext | undefined {
		return this.tryGetRuleContext(0, Transport_stmtContext);
	}
	public csp_stmt(): Csp_stmtContext | undefined {
		return this.tryGetRuleContext(0, Csp_stmtContext);
	}
	public embedding_stmt(): Embedding_stmtContext | undefined {
		return this.tryGetRuleContext(0, Embedding_stmtContext);
	}
	public trust_stmt(): Trust_stmtContext | undefined {
		return this.tryGetRuleContext(0, Trust_stmtContext);
	}
	public referrer_stmt(): Referrer_stmtContext | undefined {
		return this.tryGetRuleContext(0, Referrer_stmtContext);
	}
	public cross_origin_stmt(): Cross_origin_stmtContext | undefined {
		return this.tryGetRuleContext(0, Cross_origin_stmtContext);
	}
	public perm_stmt(): Perm_stmtContext | undefined {
		return this.tryGetRuleContext(0, Perm_stmtContext);
	}
	public cors_stmt(): Cors_stmtContext | undefined {
		return this.tryGetRuleContext(0, Cors_stmtContext);
	}
	public target_stmt(): Target_stmtContext | undefined {
		return this.tryGetRuleContext(0, Target_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_statement; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Env_stmtContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(FrameShieldParser.STRING, 0); }
	public env_prop(): Env_propContext[];
	public env_prop(i: number): Env_propContext;
	public env_prop(i?: number): Env_propContext | Env_propContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Env_propContext);
		} else {
			return this.getRuleContext(i, Env_propContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_env_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterEnv_stmt) {
			listener.enterEnv_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitEnv_stmt) {
			listener.exitEnv_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitEnv_stmt) {
			return visitor.visitEnv_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Env_propContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.STRING, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_env_prop; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterEnv_prop) {
			listener.enterEnv_prop(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitEnv_prop) {
			listener.exitEnv_prop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitEnv_prop) {
			return visitor.visitEnv_prop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Transport_stmtContext extends ParserRuleContext {
	public trans_prop(): Trans_propContext[];
	public trans_prop(i: number): Trans_propContext;
	public trans_prop(i?: number): Trans_propContext | Trans_propContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Trans_propContext);
		} else {
			return this.getRuleContext(i, Trans_propContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_transport_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterTransport_stmt) {
			listener.enterTransport_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitTransport_stmt) {
			listener.exitTransport_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitTransport_stmt) {
			return visitor.visitTransport_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Trans_propContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.BOOLEAN, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_trans_prop; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterTrans_prop) {
			listener.enterTrans_prop(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitTrans_prop) {
			listener.exitTrans_prop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitTrans_prop) {
			return visitor.visitTrans_prop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Csp_stmtContext extends ParserRuleContext {
	public csp_prop(): Csp_propContext[];
	public csp_prop(i: number): Csp_propContext;
	public csp_prop(i?: number): Csp_propContext | Csp_propContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Csp_propContext);
		} else {
			return this.getRuleContext(i, Csp_propContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_csp_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterCsp_stmt) {
			listener.enterCsp_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitCsp_stmt) {
			listener.exitCsp_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitCsp_stmt) {
			return visitor.visitCsp_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Csp_propContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.IDENTIFIER, 0); }
	public resource_type(): Resource_typeContext | undefined {
		return this.tryGetRuleContext(0, Resource_typeContext);
	}
	public resource_prop(): Resource_propContext[];
	public resource_prop(i: number): Resource_propContext;
	public resource_prop(i?: number): Resource_propContext | Resource_propContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Resource_propContext);
		} else {
			return this.getRuleContext(i, Resource_propContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_csp_prop; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterCsp_prop) {
			listener.enterCsp_prop(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitCsp_prop) {
			listener.exitCsp_prop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitCsp_prop) {
			return visitor.visitCsp_prop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Resource_typeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_resource_type; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterResource_type) {
			listener.enterResource_type(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitResource_type) {
			listener.exitResource_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitResource_type) {
			return visitor.visitResource_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Resource_propContext extends ParserRuleContext {
	public source_val(): Source_valContext | undefined {
		return this.tryGetRuleContext(0, Source_valContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_resource_prop; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterResource_prop) {
			listener.enterResource_prop(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitResource_prop) {
			listener.exitResource_prop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitResource_prop) {
			return visitor.visitResource_prop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Source_valContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.IDENTIFIER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_source_val; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterSource_val) {
			listener.enterSource_val(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitSource_val) {
			listener.exitSource_val(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitSource_val) {
			return visitor.visitSource_val(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Embedding_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FrameShieldParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_embedding_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterEmbedding_stmt) {
			listener.enterEmbedding_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitEmbedding_stmt) {
			listener.exitEmbedding_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitEmbedding_stmt) {
			return visitor.visitEmbedding_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Trust_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FrameShieldParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_trust_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterTrust_stmt) {
			listener.enterTrust_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitTrust_stmt) {
			listener.exitTrust_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitTrust_stmt) {
			return visitor.visitTrust_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Referrer_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FrameShieldParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_referrer_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterReferrer_stmt) {
			listener.enterReferrer_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitReferrer_stmt) {
			listener.exitReferrer_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitReferrer_stmt) {
			return visitor.visitReferrer_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cross_origin_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FrameShieldParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_cross_origin_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterCross_origin_stmt) {
			listener.enterCross_origin_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitCross_origin_stmt) {
			listener.exitCross_origin_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitCross_origin_stmt) {
			return visitor.visitCross_origin_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Target_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FrameShieldParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_target_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterTarget_stmt) {
			listener.enterTarget_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitTarget_stmt) {
			listener.exitTarget_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitTarget_stmt) {
			return visitor.visitTarget_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Perm_stmtContext extends ParserRuleContext {
	public perm_prop(): Perm_propContext[];
	public perm_prop(i: number): Perm_propContext;
	public perm_prop(i?: number): Perm_propContext | Perm_propContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Perm_propContext);
		} else {
			return this.getRuleContext(i, Perm_propContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_perm_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterPerm_stmt) {
			listener.enterPerm_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitPerm_stmt) {
			listener.exitPerm_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitPerm_stmt) {
			return visitor.visitPerm_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Perm_propContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FrameShieldParser.IDENTIFIER, 0); }
	public feature_val(): Feature_valContext {
		return this.getRuleContext(0, Feature_valContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_perm_prop; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterPerm_prop) {
			listener.enterPerm_prop(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitPerm_prop) {
			listener.exitPerm_prop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitPerm_prop) {
			return visitor.visitPerm_prop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Feature_valContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.IDENTIFIER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_feature_val; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterFeature_val) {
			listener.enterFeature_val(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitFeature_val) {
			listener.exitFeature_val(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitFeature_val) {
			return visitor.visitFeature_val(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cors_stmtContext extends ParserRuleContext {
	public cors_prop(): Cors_propContext[];
	public cors_prop(i: number): Cors_propContext;
	public cors_prop(i?: number): Cors_propContext | Cors_propContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cors_propContext);
		} else {
			return this.getRuleContext(i, Cors_propContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_cors_stmt; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterCors_stmt) {
			listener.enterCors_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitCors_stmt) {
			listener.exitCors_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitCors_stmt) {
			return visitor.visitCors_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cors_propContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.IDENTIFIER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FrameShieldParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FrameShieldParser.RULE_cors_prop; }
	// @Override
	public enterRule(listener: FrameShieldListener): void {
		if (listener.enterCors_prop) {
			listener.enterCors_prop(this);
		}
	}
	// @Override
	public exitRule(listener: FrameShieldListener): void {
		if (listener.exitCors_prop) {
			listener.exitCors_prop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FrameShieldVisitor<Result>): Result {
		if (visitor.visitCors_prop) {
			return visitor.visitCors_prop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


