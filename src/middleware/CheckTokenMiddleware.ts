import { Context, Next } from 'koa';
import { verify } from '../utils/auth';

export default function (ctx: Context, next: Next) {
    const { authorization } = ctx.header;
    const defaultContent = {
        code: 401,
        message: '',
        data: null,
    };
    if (!authorization) {
        defaultContent.message = '请求头中没有token';
        return (ctx.body = defaultContent);
    }
    const token = authorization.replace('Bearer ', '');
    const verified = verify(token);
    if (verified.error) {
        defaultContent.message = 'token无效';
        return (ctx.body = defaultContent);
    }
    return next();
}
