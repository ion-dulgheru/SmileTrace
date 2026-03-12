// Generated from grammar/FrameShield.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PolicyContext } from "./FrameShieldParser";
import { StatementContext } from "./FrameShieldParser";
import { Env_stmtContext } from "./FrameShieldParser";
import { Env_propContext } from "./FrameShieldParser";
import { Transport_stmtContext } from "./FrameShieldParser";
import { Trans_propContext } from "./FrameShieldParser";
import { Csp_stmtContext } from "./FrameShieldParser";
import { Csp_propContext } from "./FrameShieldParser";
import { Resource_typeContext } from "./FrameShieldParser";
import { Resource_propContext } from "./FrameShieldParser";
import { Source_valContext } from "./FrameShieldParser";
import { Embedding_stmtContext } from "./FrameShieldParser";
import { Trust_stmtContext } from "./FrameShieldParser";
import { Referrer_stmtContext } from "./FrameShieldParser";
import { Cross_origin_stmtContext } from "./FrameShieldParser";
import { Target_stmtContext } from "./FrameShieldParser";
import { Perm_stmtContext } from "./FrameShieldParser";
import { Perm_propContext } from "./FrameShieldParser";
import { Feature_valContext } from "./FrameShieldParser";
import { Cors_stmtContext } from "./FrameShieldParser";
import { Cors_propContext } from "./FrameShieldParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FrameShieldParser`.
 */
export interface FrameShieldListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FrameShieldParser.policy`.
	 * @param ctx the parse tree
	 */
	enterPolicy?: (ctx: PolicyContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.policy`.
	 * @param ctx the parse tree
	 */
	exitPolicy?: (ctx: PolicyContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.env_stmt`.
	 * @param ctx the parse tree
	 */
	enterEnv_stmt?: (ctx: Env_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.env_stmt`.
	 * @param ctx the parse tree
	 */
	exitEnv_stmt?: (ctx: Env_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.env_prop`.
	 * @param ctx the parse tree
	 */
	enterEnv_prop?: (ctx: Env_propContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.env_prop`.
	 * @param ctx the parse tree
	 */
	exitEnv_prop?: (ctx: Env_propContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.transport_stmt`.
	 * @param ctx the parse tree
	 */
	enterTransport_stmt?: (ctx: Transport_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.transport_stmt`.
	 * @param ctx the parse tree
	 */
	exitTransport_stmt?: (ctx: Transport_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.trans_prop`.
	 * @param ctx the parse tree
	 */
	enterTrans_prop?: (ctx: Trans_propContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.trans_prop`.
	 * @param ctx the parse tree
	 */
	exitTrans_prop?: (ctx: Trans_propContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.csp_stmt`.
	 * @param ctx the parse tree
	 */
	enterCsp_stmt?: (ctx: Csp_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.csp_stmt`.
	 * @param ctx the parse tree
	 */
	exitCsp_stmt?: (ctx: Csp_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.csp_prop`.
	 * @param ctx the parse tree
	 */
	enterCsp_prop?: (ctx: Csp_propContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.csp_prop`.
	 * @param ctx the parse tree
	 */
	exitCsp_prop?: (ctx: Csp_propContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.resource_type`.
	 * @param ctx the parse tree
	 */
	enterResource_type?: (ctx: Resource_typeContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.resource_type`.
	 * @param ctx the parse tree
	 */
	exitResource_type?: (ctx: Resource_typeContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.resource_prop`.
	 * @param ctx the parse tree
	 */
	enterResource_prop?: (ctx: Resource_propContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.resource_prop`.
	 * @param ctx the parse tree
	 */
	exitResource_prop?: (ctx: Resource_propContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.source_val`.
	 * @param ctx the parse tree
	 */
	enterSource_val?: (ctx: Source_valContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.source_val`.
	 * @param ctx the parse tree
	 */
	exitSource_val?: (ctx: Source_valContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.embedding_stmt`.
	 * @param ctx the parse tree
	 */
	enterEmbedding_stmt?: (ctx: Embedding_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.embedding_stmt`.
	 * @param ctx the parse tree
	 */
	exitEmbedding_stmt?: (ctx: Embedding_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.trust_stmt`.
	 * @param ctx the parse tree
	 */
	enterTrust_stmt?: (ctx: Trust_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.trust_stmt`.
	 * @param ctx the parse tree
	 */
	exitTrust_stmt?: (ctx: Trust_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.referrer_stmt`.
	 * @param ctx the parse tree
	 */
	enterReferrer_stmt?: (ctx: Referrer_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.referrer_stmt`.
	 * @param ctx the parse tree
	 */
	exitReferrer_stmt?: (ctx: Referrer_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.cross_origin_stmt`.
	 * @param ctx the parse tree
	 */
	enterCross_origin_stmt?: (ctx: Cross_origin_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.cross_origin_stmt`.
	 * @param ctx the parse tree
	 */
	exitCross_origin_stmt?: (ctx: Cross_origin_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.target_stmt`.
	 * @param ctx the parse tree
	 */
	enterTarget_stmt?: (ctx: Target_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.target_stmt`.
	 * @param ctx the parse tree
	 */
	exitTarget_stmt?: (ctx: Target_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.perm_stmt`.
	 * @param ctx the parse tree
	 */
	enterPerm_stmt?: (ctx: Perm_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.perm_stmt`.
	 * @param ctx the parse tree
	 */
	exitPerm_stmt?: (ctx: Perm_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.perm_prop`.
	 * @param ctx the parse tree
	 */
	enterPerm_prop?: (ctx: Perm_propContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.perm_prop`.
	 * @param ctx the parse tree
	 */
	exitPerm_prop?: (ctx: Perm_propContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.feature_val`.
	 * @param ctx the parse tree
	 */
	enterFeature_val?: (ctx: Feature_valContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.feature_val`.
	 * @param ctx the parse tree
	 */
	exitFeature_val?: (ctx: Feature_valContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.cors_stmt`.
	 * @param ctx the parse tree
	 */
	enterCors_stmt?: (ctx: Cors_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.cors_stmt`.
	 * @param ctx the parse tree
	 */
	exitCors_stmt?: (ctx: Cors_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FrameShieldParser.cors_prop`.
	 * @param ctx the parse tree
	 */
	enterCors_prop?: (ctx: Cors_propContext) => void;
	/**
	 * Exit a parse tree produced by `FrameShieldParser.cors_prop`.
	 * @param ctx the parse tree
	 */
	exitCors_prop?: (ctx: Cors_propContext) => void;
}

