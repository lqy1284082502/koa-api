import { Context, Next } from 'koa';
import { sign } from '../../../utils/auth';
import UserImp from '../Interface/UserImp';
import AdminService from '../service/adminService';
class UserController implements UserImp {
    async register(ctx: Context, next: Next): Promise<Context> {
        const data = await AdminService.getAdmin();
        ctx.body = {
            code: 200,
            data,
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
