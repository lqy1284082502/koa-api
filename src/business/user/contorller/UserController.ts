import { Context, Next } from 'koa';
import { sign } from '../../../utils/auth';
import UserImp from '../Interface/UserImp';
class UserController implements UserImp {
    async register(ctx: Context, next: Next): Promise<Context> {
        ctx.body = {
            id: 1,
            code: 200,
            message: 'success',
            data: {
                token: '123sdfsdf',
            },
        };
        return ctx;
    }

    async getUserInfo(ctx: Context, next: Next): Promise<Context> {
        return ctx;
    }
    async login(ctx: Context, next: Next): Promise<Context> {
        return ctx;
    }

    async logout(ctx: Context, next: Next): Promise<Context> {
        return ctx;
    }
    async updateUserInfo(ctx: Context, next: Next): Promise<Context> {
        return ctx;
    }
}

export default new UserController();
