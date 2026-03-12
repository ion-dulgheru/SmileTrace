// Generated from d:/smiletrace/grammar/FrameShield.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class FrameShieldParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, BOOLEAN=34, IDENTIFIER=35, STRING=36, NUMBER=37, WS=38, 
		COMMENT=39;
	public static final int
		RULE_policy = 0, RULE_statement = 1, RULE_env_stmt = 2, RULE_env_prop = 3, 
		RULE_transport_stmt = 4, RULE_trans_prop = 5, RULE_csp_stmt = 6, RULE_csp_prop = 7, 
		RULE_resource_type = 8, RULE_resource_prop = 9, RULE_source_val = 10, 
		RULE_embedding_stmt = 11, RULE_trust_stmt = 12, RULE_referrer_stmt = 13, 
		RULE_cross_origin_stmt = 14, RULE_target_stmt = 15, RULE_perm_stmt = 16, 
		RULE_perm_prop = 17, RULE_feature_val = 18, RULE_cors_stmt = 19, RULE_cors_prop = 20;
	private static String[] makeRuleNames() {
		return new String[] {
			"policy", "statement", "env_stmt", "env_prop", "transport_stmt", "trans_prop", 
			"csp_stmt", "csp_prop", "resource_type", "resource_prop", "source_val", 
			"embedding_stmt", "trust_stmt", "referrer_stmt", "cross_origin_stmt", 
			"target_stmt", "perm_stmt", "perm_prop", "feature_val", "cors_stmt", 
			"cors_prop"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'environment'", "'{'", "'}'", "'domain'", "'nonce_mode'", "'transport'", 
			"'enforce_https'", "'max_age'", "'include_subdomains'", "'preload'", 
			"'csp'", "'default'", "'none'", "'script'", "'style'", "'image'", "'font'", 
			"'frame'", "'connect'", "'media'", "'object'", "'allow'", "'block'", 
			"'nonce'", "'embedding'", "'content_trust'", "'referrer'", "'cross_origin_isolation'", 
			"'target'", "'permissions'", "'cors'", "'mode'", "'origin'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, "BOOLEAN", 
			"IDENTIFIER", "STRING", "NUMBER", "WS", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "FrameShield.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FrameShieldParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PolicyContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(FrameShieldParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public PolicyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_policy; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterPolicy(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitPolicy(this);
		}
	}

	public final PolicyContext policy() throws RecognitionException {
		PolicyContext _localctx = new PolicyContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_policy);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4261414978L) != 0)) {
				{
				{
				setState(42);
				statement();
				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(48);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public Env_stmtContext env_stmt() {
			return getRuleContext(Env_stmtContext.class,0);
		}
		public Transport_stmtContext transport_stmt() {
			return getRuleContext(Transport_stmtContext.class,0);
		}
		public Csp_stmtContext csp_stmt() {
			return getRuleContext(Csp_stmtContext.class,0);
		}
		public Embedding_stmtContext embedding_stmt() {
			return getRuleContext(Embedding_stmtContext.class,0);
		}
		public Trust_stmtContext trust_stmt() {
			return getRuleContext(Trust_stmtContext.class,0);
		}
		public Referrer_stmtContext referrer_stmt() {
			return getRuleContext(Referrer_stmtContext.class,0);
		}
		public Cross_origin_stmtContext cross_origin_stmt() {
			return getRuleContext(Cross_origin_stmtContext.class,0);
		}
		public Perm_stmtContext perm_stmt() {
			return getRuleContext(Perm_stmtContext.class,0);
		}
		public Cors_stmtContext cors_stmt() {
			return getRuleContext(Cors_stmtContext.class,0);
		}
		public Target_stmtContext target_stmt() {
			return getRuleContext(Target_stmtContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(60);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(50);
				env_stmt();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 2);
				{
				setState(51);
				transport_stmt();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 3);
				{
				setState(52);
				csp_stmt();
				}
				break;
			case T__24:
				enterOuterAlt(_localctx, 4);
				{
				setState(53);
				embedding_stmt();
				}
				break;
			case T__25:
				enterOuterAlt(_localctx, 5);
				{
				setState(54);
				trust_stmt();
				}
				break;
			case T__26:
				enterOuterAlt(_localctx, 6);
				{
				setState(55);
				referrer_stmt();
				}
				break;
			case T__27:
				enterOuterAlt(_localctx, 7);
				{
				setState(56);
				cross_origin_stmt();
				}
				break;
			case T__29:
				enterOuterAlt(_localctx, 8);
				{
				setState(57);
				perm_stmt();
				}
				break;
			case T__30:
				enterOuterAlt(_localctx, 9);
				{
				setState(58);
				cors_stmt();
				}
				break;
			case T__28:
				enterOuterAlt(_localctx, 10);
				{
				setState(59);
				target_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Env_stmtContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(FrameShieldParser.STRING, 0); }
		public List<Env_propContext> env_prop() {
			return getRuleContexts(Env_propContext.class);
		}
		public Env_propContext env_prop(int i) {
			return getRuleContext(Env_propContext.class,i);
		}
		public Env_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_env_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterEnv_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitEnv_stmt(this);
		}
	}

	public final Env_stmtContext env_stmt() throws RecognitionException {
		Env_stmtContext _localctx = new Env_stmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_env_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(T__0);
			setState(63);
			match(STRING);
			setState(64);
			match(T__1);
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3 || _la==T__4) {
				{
				{
				setState(65);
				env_prop();
				}
				}
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(71);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Env_propContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(FrameShieldParser.STRING, 0); }
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public Env_propContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_env_prop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterEnv_prop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitEnv_prop(this);
		}
	}

	public final Env_propContext env_prop() throws RecognitionException {
		Env_propContext _localctx = new Env_propContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_env_prop);
		try {
			setState(77);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(73);
				match(T__3);
				setState(74);
				match(STRING);
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 2);
				{
				setState(75);
				match(T__4);
				setState(76);
				match(IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Transport_stmtContext extends ParserRuleContext {
		public List<Trans_propContext> trans_prop() {
			return getRuleContexts(Trans_propContext.class);
		}
		public Trans_propContext trans_prop(int i) {
			return getRuleContext(Trans_propContext.class,i);
		}
		public Transport_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transport_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterTransport_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitTransport_stmt(this);
		}
	}

	public final Transport_stmtContext transport_stmt() throws RecognitionException {
		Transport_stmtContext _localctx = new Transport_stmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_transport_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(T__5);
			setState(80);
			match(T__1);
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1920L) != 0)) {
				{
				{
				setState(81);
				trans_prop();
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(87);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Trans_propContext extends ParserRuleContext {
		public TerminalNode BOOLEAN() { return getToken(FrameShieldParser.BOOLEAN, 0); }
		public TerminalNode NUMBER() { return getToken(FrameShieldParser.NUMBER, 0); }
		public Trans_propContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trans_prop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterTrans_prop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitTrans_prop(this);
		}
	}

	public final Trans_propContext trans_prop() throws RecognitionException {
		Trans_propContext _localctx = new Trans_propContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_trans_prop);
		try {
			setState(97);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
				enterOuterAlt(_localctx, 1);
				{
				setState(89);
				match(T__6);
				setState(90);
				match(BOOLEAN);
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 2);
				{
				setState(91);
				match(T__7);
				setState(92);
				match(NUMBER);
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 3);
				{
				setState(93);
				match(T__8);
				setState(94);
				match(BOOLEAN);
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 4);
				{
				setState(95);
				match(T__9);
				setState(96);
				match(BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Csp_stmtContext extends ParserRuleContext {
		public List<Csp_propContext> csp_prop() {
			return getRuleContexts(Csp_propContext.class);
		}
		public Csp_propContext csp_prop(int i) {
			return getRuleContext(Csp_propContext.class,i);
		}
		public Csp_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_csp_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterCsp_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitCsp_stmt(this);
		}
	}

	public final Csp_stmtContext csp_stmt() throws RecognitionException {
		Csp_stmtContext _localctx = new Csp_stmtContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_csp_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			match(T__10);
			setState(100);
			match(T__1);
			setState(104);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4182016L) != 0)) {
				{
				{
				setState(101);
				csp_prop();
				}
				}
				setState(106);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(107);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Csp_propContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public Resource_typeContext resource_type() {
			return getRuleContext(Resource_typeContext.class,0);
		}
		public List<Resource_propContext> resource_prop() {
			return getRuleContexts(Resource_propContext.class);
		}
		public Resource_propContext resource_prop(int i) {
			return getRuleContext(Resource_propContext.class,i);
		}
		public Csp_propContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_csp_prop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterCsp_prop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitCsp_prop(this);
		}
	}

	public final Csp_propContext csp_prop() throws RecognitionException {
		Csp_propContext _localctx = new Csp_propContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_csp_prop);
		int _la;
		try {
			setState(121);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__11:
				enterOuterAlt(_localctx, 1);
				{
				setState(109);
				match(T__11);
				setState(110);
				_la = _input.LA(1);
				if ( !(_la==T__12 || _la==IDENTIFIER) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
			case T__18:
			case T__19:
			case T__20:
				enterOuterAlt(_localctx, 2);
				{
				setState(111);
				resource_type();
				setState(112);
				match(T__1);
				setState(116);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 29360128L) != 0)) {
					{
					{
					setState(113);
					resource_prop();
					}
					}
					setState(118);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(119);
				match(T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Resource_typeContext extends ParserRuleContext {
		public Resource_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resource_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterResource_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitResource_type(this);
		}
	}

	public final Resource_typeContext resource_type() throws RecognitionException {
		Resource_typeContext _localctx = new Resource_typeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_resource_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4177920L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Resource_propContext extends ParserRuleContext {
		public Source_valContext source_val() {
			return getRuleContext(Source_valContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public Resource_propContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resource_prop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterResource_prop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitResource_prop(this);
		}
	}

	public final Resource_propContext resource_prop() throws RecognitionException {
		Resource_propContext _localctx = new Resource_propContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_resource_prop);
		try {
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__21:
				enterOuterAlt(_localctx, 1);
				{
				setState(125);
				match(T__21);
				setState(126);
				source_val();
				}
				break;
			case T__22:
				enterOuterAlt(_localctx, 2);
				{
				setState(127);
				match(T__22);
				setState(128);
				match(IDENTIFIER);
				}
				break;
			case T__23:
				enterOuterAlt(_localctx, 3);
				{
				setState(129);
				match(T__23);
				setState(130);
				match(IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Source_valContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public TerminalNode STRING() { return getToken(FrameShieldParser.STRING, 0); }
		public Source_valContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_source_val; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterSource_val(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitSource_val(this);
		}
	}

	public final Source_valContext source_val() throws RecognitionException {
		Source_valContext _localctx = new Source_valContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_source_val);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			_la = _input.LA(1);
			if ( !(_la==IDENTIFIER || _la==STRING) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Embedding_stmtContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public Embedding_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_embedding_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterEmbedding_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitEmbedding_stmt(this);
		}
	}

	public final Embedding_stmtContext embedding_stmt() throws RecognitionException {
		Embedding_stmtContext _localctx = new Embedding_stmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_embedding_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(T__24);
			setState(136);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Trust_stmtContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public Trust_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trust_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterTrust_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitTrust_stmt(this);
		}
	}

	public final Trust_stmtContext trust_stmt() throws RecognitionException {
		Trust_stmtContext _localctx = new Trust_stmtContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_trust_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(T__25);
			setState(139);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Referrer_stmtContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public Referrer_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_referrer_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterReferrer_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitReferrer_stmt(this);
		}
	}

	public final Referrer_stmtContext referrer_stmt() throws RecognitionException {
		Referrer_stmtContext _localctx = new Referrer_stmtContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_referrer_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			match(T__26);
			setState(142);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cross_origin_stmtContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public Cross_origin_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cross_origin_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterCross_origin_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitCross_origin_stmt(this);
		}
	}

	public final Cross_origin_stmtContext cross_origin_stmt() throws RecognitionException {
		Cross_origin_stmtContext _localctx = new Cross_origin_stmtContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_cross_origin_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(T__27);
			setState(145);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Target_stmtContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public Target_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_target_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterTarget_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitTarget_stmt(this);
		}
	}

	public final Target_stmtContext target_stmt() throws RecognitionException {
		Target_stmtContext _localctx = new Target_stmtContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_target_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			match(T__28);
			setState(148);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Perm_stmtContext extends ParserRuleContext {
		public List<Perm_propContext> perm_prop() {
			return getRuleContexts(Perm_propContext.class);
		}
		public Perm_propContext perm_prop(int i) {
			return getRuleContext(Perm_propContext.class,i);
		}
		public Perm_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_perm_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterPerm_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitPerm_stmt(this);
		}
	}

	public final Perm_stmtContext perm_stmt() throws RecognitionException {
		Perm_stmtContext _localctx = new Perm_stmtContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_perm_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			match(T__29);
			setState(151);
			match(T__1);
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(152);
				perm_prop();
				}
				}
				setState(157);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(158);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Perm_propContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public Feature_valContext feature_val() {
			return getRuleContext(Feature_valContext.class,0);
		}
		public Perm_propContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_perm_prop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterPerm_prop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitPerm_prop(this);
		}
	}

	public final Perm_propContext perm_prop() throws RecognitionException {
		Perm_propContext _localctx = new Perm_propContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_perm_prop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			match(IDENTIFIER);
			setState(161);
			feature_val();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Feature_valContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public TerminalNode STRING() { return getToken(FrameShieldParser.STRING, 0); }
		public Feature_valContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_feature_val; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterFeature_val(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitFeature_val(this);
		}
	}

	public final Feature_valContext feature_val() throws RecognitionException {
		Feature_valContext _localctx = new Feature_valContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_feature_val);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 103079223296L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cors_stmtContext extends ParserRuleContext {
		public List<Cors_propContext> cors_prop() {
			return getRuleContexts(Cors_propContext.class);
		}
		public Cors_propContext cors_prop(int i) {
			return getRuleContext(Cors_propContext.class,i);
		}
		public Cors_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cors_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterCors_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitCors_stmt(this);
		}
	}

	public final Cors_stmtContext cors_stmt() throws RecognitionException {
		Cors_stmtContext _localctx = new Cors_stmtContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_cors_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			match(T__30);
			setState(166);
			match(T__1);
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__31 || _la==T__32) {
				{
				{
				setState(167);
				cors_prop();
				}
				}
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(173);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cors_propContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FrameShieldParser.IDENTIFIER, 0); }
		public TerminalNode STRING() { return getToken(FrameShieldParser.STRING, 0); }
		public Cors_propContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cors_prop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).enterCors_prop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FrameShieldListener ) ((FrameShieldListener)listener).exitCors_prop(this);
		}
	}

	public final Cors_propContext cors_prop() throws RecognitionException {
		Cors_propContext _localctx = new Cors_propContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_cors_prop);
		try {
			setState(179);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__31:
				enterOuterAlt(_localctx, 1);
				{
				setState(175);
				match(T__31);
				setState(176);
				match(IDENTIFIER);
				}
				break;
			case T__32:
				enterOuterAlt(_localctx, 2);
				{
				setState(177);
				match(T__32);
				setState(178);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\'\u00b6\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0001\u0000\u0005\u0000"+
		",\b\u0000\n\u0000\f\u0000/\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001=\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002C\b\u0002\n\u0002\f\u0002"+
		"F\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003N\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0005\u0004S\b\u0004\n\u0004\f\u0004V\t\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0003\u0005b\b\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0005\u0006g\b\u0006\n\u0006\f\u0006j\t\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0005\u0007s\b\u0007\n\u0007\f\u0007v\t\u0007\u0001\u0007\u0001\u0007"+
		"\u0003\u0007z\b\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t"+
		"\u0001\t\u0001\t\u0003\t\u0084\b\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0005\u0010\u009a\b\u0010\n\u0010\f\u0010\u009d"+
		"\t\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0005\u0013\u00a9"+
		"\b\u0013\n\u0013\f\u0013\u00ac\t\u0013\u0001\u0013\u0001\u0013\u0001\u0014"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0003\u0014\u00b4\b\u0014\u0001\u0014"+
		"\u0000\u0000\u0015\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014"+
		"\u0016\u0018\u001a\u001c\u001e \"$&(\u0000\u0004\u0002\u0000\r\r##\u0001"+
		"\u0000\u000e\u0015\u0001\u0000#$\u0002\u0000\r\r#$\u00b8\u0000-\u0001"+
		"\u0000\u0000\u0000\u0002<\u0001\u0000\u0000\u0000\u0004>\u0001\u0000\u0000"+
		"\u0000\u0006M\u0001\u0000\u0000\u0000\bO\u0001\u0000\u0000\u0000\na\u0001"+
		"\u0000\u0000\u0000\fc\u0001\u0000\u0000\u0000\u000ey\u0001\u0000\u0000"+
		"\u0000\u0010{\u0001\u0000\u0000\u0000\u0012\u0083\u0001\u0000\u0000\u0000"+
		"\u0014\u0085\u0001\u0000\u0000\u0000\u0016\u0087\u0001\u0000\u0000\u0000"+
		"\u0018\u008a\u0001\u0000\u0000\u0000\u001a\u008d\u0001\u0000\u0000\u0000"+
		"\u001c\u0090\u0001\u0000\u0000\u0000\u001e\u0093\u0001\u0000\u0000\u0000"+
		" \u0096\u0001\u0000\u0000\u0000\"\u00a0\u0001\u0000\u0000\u0000$\u00a3"+
		"\u0001\u0000\u0000\u0000&\u00a5\u0001\u0000\u0000\u0000(\u00b3\u0001\u0000"+
		"\u0000\u0000*,\u0003\u0002\u0001\u0000+*\u0001\u0000\u0000\u0000,/\u0001"+
		"\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000"+
		".0\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u000001\u0005\u0000\u0000"+
		"\u00011\u0001\u0001\u0000\u0000\u00002=\u0003\u0004\u0002\u00003=\u0003"+
		"\b\u0004\u00004=\u0003\f\u0006\u00005=\u0003\u0016\u000b\u00006=\u0003"+
		"\u0018\f\u00007=\u0003\u001a\r\u00008=\u0003\u001c\u000e\u00009=\u0003"+
		" \u0010\u0000:=\u0003&\u0013\u0000;=\u0003\u001e\u000f\u0000<2\u0001\u0000"+
		"\u0000\u0000<3\u0001\u0000\u0000\u0000<4\u0001\u0000\u0000\u0000<5\u0001"+
		"\u0000\u0000\u0000<6\u0001\u0000\u0000\u0000<7\u0001\u0000\u0000\u0000"+
		"<8\u0001\u0000\u0000\u0000<9\u0001\u0000\u0000\u0000<:\u0001\u0000\u0000"+
		"\u0000<;\u0001\u0000\u0000\u0000=\u0003\u0001\u0000\u0000\u0000>?\u0005"+
		"\u0001\u0000\u0000?@\u0005$\u0000\u0000@D\u0005\u0002\u0000\u0000AC\u0003"+
		"\u0006\u0003\u0000BA\u0001\u0000\u0000\u0000CF\u0001\u0000\u0000\u0000"+
		"DB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000EG\u0001\u0000\u0000"+
		"\u0000FD\u0001\u0000\u0000\u0000GH\u0005\u0003\u0000\u0000H\u0005\u0001"+
		"\u0000\u0000\u0000IJ\u0005\u0004\u0000\u0000JN\u0005$\u0000\u0000KL\u0005"+
		"\u0005\u0000\u0000LN\u0005#\u0000\u0000MI\u0001\u0000\u0000\u0000MK\u0001"+
		"\u0000\u0000\u0000N\u0007\u0001\u0000\u0000\u0000OP\u0005\u0006\u0000"+
		"\u0000PT\u0005\u0002\u0000\u0000QS\u0003\n\u0005\u0000RQ\u0001\u0000\u0000"+
		"\u0000SV\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000TU\u0001\u0000"+
		"\u0000\u0000UW\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000WX\u0005"+
		"\u0003\u0000\u0000X\t\u0001\u0000\u0000\u0000YZ\u0005\u0007\u0000\u0000"+
		"Zb\u0005\"\u0000\u0000[\\\u0005\b\u0000\u0000\\b\u0005%\u0000\u0000]^"+
		"\u0005\t\u0000\u0000^b\u0005\"\u0000\u0000_`\u0005\n\u0000\u0000`b\u0005"+
		"\"\u0000\u0000aY\u0001\u0000\u0000\u0000a[\u0001\u0000\u0000\u0000a]\u0001"+
		"\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000b\u000b\u0001\u0000\u0000"+
		"\u0000cd\u0005\u000b\u0000\u0000dh\u0005\u0002\u0000\u0000eg\u0003\u000e"+
		"\u0007\u0000fe\u0001\u0000\u0000\u0000gj\u0001\u0000\u0000\u0000hf\u0001"+
		"\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000ik\u0001\u0000\u0000\u0000"+
		"jh\u0001\u0000\u0000\u0000kl\u0005\u0003\u0000\u0000l\r\u0001\u0000\u0000"+
		"\u0000mn\u0005\f\u0000\u0000nz\u0007\u0000\u0000\u0000op\u0003\u0010\b"+
		"\u0000pt\u0005\u0002\u0000\u0000qs\u0003\u0012\t\u0000rq\u0001\u0000\u0000"+
		"\u0000sv\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000tu\u0001\u0000"+
		"\u0000\u0000uw\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000wx\u0005"+
		"\u0003\u0000\u0000xz\u0001\u0000\u0000\u0000ym\u0001\u0000\u0000\u0000"+
		"yo\u0001\u0000\u0000\u0000z\u000f\u0001\u0000\u0000\u0000{|\u0007\u0001"+
		"\u0000\u0000|\u0011\u0001\u0000\u0000\u0000}~\u0005\u0016\u0000\u0000"+
		"~\u0084\u0003\u0014\n\u0000\u007f\u0080\u0005\u0017\u0000\u0000\u0080"+
		"\u0084\u0005#\u0000\u0000\u0081\u0082\u0005\u0018\u0000\u0000\u0082\u0084"+
		"\u0005#\u0000\u0000\u0083}\u0001\u0000\u0000\u0000\u0083\u007f\u0001\u0000"+
		"\u0000\u0000\u0083\u0081\u0001\u0000\u0000\u0000\u0084\u0013\u0001\u0000"+
		"\u0000\u0000\u0085\u0086\u0007\u0002\u0000\u0000\u0086\u0015\u0001\u0000"+
		"\u0000\u0000\u0087\u0088\u0005\u0019\u0000\u0000\u0088\u0089\u0005#\u0000"+
		"\u0000\u0089\u0017\u0001\u0000\u0000\u0000\u008a\u008b\u0005\u001a\u0000"+
		"\u0000\u008b\u008c\u0005#\u0000\u0000\u008c\u0019\u0001\u0000\u0000\u0000"+
		"\u008d\u008e\u0005\u001b\u0000\u0000\u008e\u008f\u0005#\u0000\u0000\u008f"+
		"\u001b\u0001\u0000\u0000\u0000\u0090\u0091\u0005\u001c\u0000\u0000\u0091"+
		"\u0092\u0005#\u0000\u0000\u0092\u001d\u0001\u0000\u0000\u0000\u0093\u0094"+
		"\u0005\u001d\u0000\u0000\u0094\u0095\u0005#\u0000\u0000\u0095\u001f\u0001"+
		"\u0000\u0000\u0000\u0096\u0097\u0005\u001e\u0000\u0000\u0097\u009b\u0005"+
		"\u0002\u0000\u0000\u0098\u009a\u0003\"\u0011\u0000\u0099\u0098\u0001\u0000"+
		"\u0000\u0000\u009a\u009d\u0001\u0000\u0000\u0000\u009b\u0099\u0001\u0000"+
		"\u0000\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\u009e\u0001\u0000"+
		"\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009e\u009f\u0005\u0003"+
		"\u0000\u0000\u009f!\u0001\u0000\u0000\u0000\u00a0\u00a1\u0005#\u0000\u0000"+
		"\u00a1\u00a2\u0003$\u0012\u0000\u00a2#\u0001\u0000\u0000\u0000\u00a3\u00a4"+
		"\u0007\u0003\u0000\u0000\u00a4%\u0001\u0000\u0000\u0000\u00a5\u00a6\u0005"+
		"\u001f\u0000\u0000\u00a6\u00aa\u0005\u0002\u0000\u0000\u00a7\u00a9\u0003"+
		"(\u0014\u0000\u00a8\u00a7\u0001\u0000\u0000\u0000\u00a9\u00ac\u0001\u0000"+
		"\u0000\u0000\u00aa\u00a8\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000"+
		"\u0000\u0000\u00ab\u00ad\u0001\u0000\u0000\u0000\u00ac\u00aa\u0001\u0000"+
		"\u0000\u0000\u00ad\u00ae\u0005\u0003\u0000\u0000\u00ae\'\u0001\u0000\u0000"+
		"\u0000\u00af\u00b0\u0005 \u0000\u0000\u00b0\u00b4\u0005#\u0000\u0000\u00b1"+
		"\u00b2\u0005!\u0000\u0000\u00b2\u00b4\u0005$\u0000\u0000\u00b3\u00af\u0001"+
		"\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000\u00b4)\u0001\u0000"+
		"\u0000\u0000\r-<DMTahty\u0083\u009b\u00aa\u00b3";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}