import {Context,Next} from "koa";
import {accessLogger} from "../logger";

export default function (ctx:Context, next:Next) {
    const logStr = `path:${ctx.url} | ${ctx.method} | `;
    accessLogger.info(logStr);
    return next();
}
