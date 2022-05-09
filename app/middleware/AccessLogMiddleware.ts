import { Context, Next } from 'koa';
import { accessLogger } from '../logger';

export default function (ctx: Context, next: Next) {
    const logStr = `path:${ctx.url} | method:${ctx.method} | ua:${ctx.headers['user-agent']} | ip:${ctx.ip}`;
    accessLogger.info(logStr);
    return next();
}
