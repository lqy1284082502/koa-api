import Application from 'koa';
import IUserController from './IUserController';
import { User } from '../entity/User';
import UserService from '../service/UserService';
import { sign } from '../../../utils/auth';

class UserController implements IUserController {
    async register(ctx: Application.Context): Promise<Application.Context> {
        const { username, password } = ctx.request['body'];
        const user = new User();
        user.name = username;
        user.password = password;
        user.createdAt = new Date().toString();
        const result = await UserService.addUser(user);
        ctx.body = {
            code: 200,
            data: result,
            msg: '用户注册成功',
        };
        return ctx;
    }

    async login(ctx: Application.Context): Promise<Application.Context> {
        const { username } = ctx.request['body'];
        const token = sign(username);
        ctx.body = {
            code: 200,
            data: {
                token,
            },
        };
        return ctx;
    }

    async getAllUserInfo(ctx: Application.Context): Promise<Application.Context> {
        const result = await UserService.getUserList();
        ctx.body = {
            code: 200,
            data: {
                list: result,
            },
        };
        return ctx;
    }
}

export default new UserController();
