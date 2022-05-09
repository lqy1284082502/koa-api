import { Context, Next } from 'koa';

export default interface UserImp {
    register(ctx: Context, next: Next): Promise<Context>;
}
