// Generated from d:/smiletrace/grammar/FrameShield.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FrameShieldParser}.
 */
public interface FrameShieldListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#policy}.
	 * @param ctx the parse tree
	 */
	void enterPolicy(FrameShieldParser.PolicyContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#policy}.
	 * @param ctx the parse tree
	 */
	void exitPolicy(FrameShieldParser.PolicyContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(FrameShieldParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(FrameShieldParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#env_stmt}.
	 * @param ctx the parse tree
	 */
	void enterEnv_stmt(FrameShieldParser.Env_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#env_stmt}.
	 * @param ctx the parse tree
	 */
	void exitEnv_stmt(FrameShieldParser.Env_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#env_prop}.
	 * @param ctx the parse tree
	 */
	void enterEnv_prop(FrameShieldParser.Env_propContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#env_prop}.
	 * @param ctx the parse tree
	 */
	void exitEnv_prop(FrameShieldParser.Env_propContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#transport_stmt}.
	 * @param ctx the parse tree
	 */
	void enterTransport_stmt(FrameShieldParser.Transport_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#transport_stmt}.
	 * @param ctx the parse tree
	 */
	void exitTransport_stmt(FrameShieldParser.Transport_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#trans_prop}.
	 * @param ctx the parse tree
	 */
	void enterTrans_prop(FrameShieldParser.Trans_propContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#trans_prop}.
	 * @param ctx the parse tree
	 */
	void exitTrans_prop(FrameShieldParser.Trans_propContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#csp_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCsp_stmt(FrameShieldParser.Csp_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#csp_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCsp_stmt(FrameShieldParser.Csp_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#csp_prop}.
	 * @param ctx the parse tree
	 */
	void enterCsp_prop(FrameShieldParser.Csp_propContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#csp_prop}.
	 * @param ctx the parse tree
	 */
	void exitCsp_prop(FrameShieldParser.Csp_propContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#resource_type}.
	 * @param ctx the parse tree
	 */
	void enterResource_type(FrameShieldParser.Resource_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#resource_type}.
	 * @param ctx the parse tree
	 */
	void exitResource_type(FrameShieldParser.Resource_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#resource_prop}.
	 * @param ctx the parse tree
	 */
	void enterResource_prop(FrameShieldParser.Resource_propContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#resource_prop}.
	 * @param ctx the parse tree
	 */
	void exitResource_prop(FrameShieldParser.Resource_propContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#source_val}.
	 * @param ctx the parse tree
	 */
	void enterSource_val(FrameShieldParser.Source_valContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#source_val}.
	 * @param ctx the parse tree
	 */
	void exitSource_val(FrameShieldParser.Source_valContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#embedding_stmt}.
	 * @param ctx the parse tree
	 */
	void enterEmbedding_stmt(FrameShieldParser.Embedding_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#embedding_stmt}.
	 * @param ctx the parse tree
	 */
	void exitEmbedding_stmt(FrameShieldParser.Embedding_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#trust_stmt}.
	 * @param ctx the parse tree
	 */
	void enterTrust_stmt(FrameShieldParser.Trust_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#trust_stmt}.
	 * @param ctx the parse tree
	 */
	void exitTrust_stmt(FrameShieldParser.Trust_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#referrer_stmt}.
	 * @param ctx the parse tree
	 */
	void enterReferrer_stmt(FrameShieldParser.Referrer_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#referrer_stmt}.
	 * @param ctx the parse tree
	 */
	void exitReferrer_stmt(FrameShieldParser.Referrer_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#cross_origin_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCross_origin_stmt(FrameShieldParser.Cross_origin_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#cross_origin_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCross_origin_stmt(FrameShieldParser.Cross_origin_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#target_stmt}.
	 * @param ctx the parse tree
	 */
	void enterTarget_stmt(FrameShieldParser.Target_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#target_stmt}.
	 * @param ctx the parse tree
	 */
	void exitTarget_stmt(FrameShieldParser.Target_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#perm_stmt}.
	 * @param ctx the parse tree
	 */
	void enterPerm_stmt(FrameShieldParser.Perm_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#perm_stmt}.
	 * @param ctx the parse tree
	 */
	void exitPerm_stmt(FrameShieldParser.Perm_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#perm_prop}.
	 * @param ctx the parse tree
	 */
	void enterPerm_prop(FrameShieldParser.Perm_propContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#perm_prop}.
	 * @param ctx the parse tree
	 */
	void exitPerm_prop(FrameShieldParser.Perm_propContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#feature_val}.
	 * @param ctx the parse tree
	 */
	void enterFeature_val(FrameShieldParser.Feature_valContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#feature_val}.
	 * @param ctx the parse tree
	 */
	void exitFeature_val(FrameShieldParser.Feature_valContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#cors_stmt}.
	 * @param ctx the parse tree
	 */
	void enterCors_stmt(FrameShieldParser.Cors_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#cors_stmt}.
	 * @param ctx the parse tree
	 */
	void exitCors_stmt(FrameShieldParser.Cors_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FrameShieldParser#cors_prop}.
	 * @param ctx the parse tree
	 */
	void enterCors_prop(FrameShieldParser.Cors_propContext ctx);
	/**
	 * Exit a parse tree produced by {@link FrameShieldParser#cors_prop}.
	 * @param ctx the parse tree
	 */
	void exitCors_prop(FrameShieldParser.Cors_propContext ctx);
}