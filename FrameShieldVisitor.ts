// Generated from grammar/FrameShield.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FrameShieldParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FrameShieldVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FrameShieldParser.policy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolicy?: (ctx: PolicyContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.env_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnv_stmt?: (ctx: Env_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.env_prop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnv_prop?: (ctx: Env_propContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.transport_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransport_stmt?: (ctx: Transport_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.trans_prop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrans_prop?: (ctx: Trans_propContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.csp_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCsp_stmt?: (ctx: Csp_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.csp_prop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCsp_prop?: (ctx: Csp_propContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.resource_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource_type?: (ctx: Resource_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.resource_prop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource_prop?: (ctx: Resource_propContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.source_val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSource_val?: (ctx: Source_valContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.embedding_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmbedding_stmt?: (ctx: Embedding_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.trust_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrust_stmt?: (ctx: Trust_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.referrer_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferrer_stmt?: (ctx: Referrer_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.cross_origin_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCross_origin_stmt?: (ctx: Cross_origin_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.target_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTarget_stmt?: (ctx: Target_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.perm_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPerm_stmt?: (ctx: Perm_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.perm_prop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPerm_prop?: (ctx: Perm_propContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.feature_val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeature_val?: (ctx: Feature_valContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.cors_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCors_stmt?: (ctx: Cors_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FrameShieldParser.cors_prop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCors_prop?: (ctx: Cors_propContext) => Result;
}

