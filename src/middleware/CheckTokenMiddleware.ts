import { Context, Next } from 'koa';
import { verify } from '../utils/auth';

export default function (ctx: Context, next: Next) {
    const { authorization } = ctx.header;
    if (!authorization) {
        return ctx.throw(401, 'Unauthorized');
    }
    const token = authorization.replace('Bearer ', '');
    const verified = verify(token);
    if (verified.error) {
        return ctx.throw(401, 'token invalid');
    }
    return next();
}
