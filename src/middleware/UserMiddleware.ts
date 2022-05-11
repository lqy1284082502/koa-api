import { Context, Next } from 'koa';
import bcrypt from 'bcryptjs';
import UserService from '../business/user/service/UserService';

// 用户密码加密
const encryptionPassword = (ctx: Context, next: Next) => {
    const { password } = ctx.request['body'];
    const salt = bcrypt.genSaltSync(10);
    ctx.request['body'].password = bcrypt.hashSync(password, salt);
    return next();
};

// 用户提交数据校验
const userValidator = (ctx: Context, next: Next) => {
    const { username, password } = ctx.request['body'];
    if (!username || !password) {
        ctx.body = {
            code: 400,
            message: '用户名或密码不能为空',
            data: null,
        };
        return ctx;
    }
    return next();
};

// 注册时校验用户名是否存在
const checkUserName = async (ctx: Context, next: Next) => {
    const { username } = ctx.request['body'];
    const user = await UserService.checkUserName(username);
    if (user) {
        ctx.body = {
            code: 400,
            message: '用户名已存在',
            data: null,
        };
        return ctx;
    }
    return next();
};

// 登录时校验用户名是否存在
const checkLoginUserName = async (ctx: Context, next: Next) => {
    const { username, password } = ctx.request['body'];
    const user = await UserService.checkUserNameAndPassword(username);
    const defaultBody = { code: 400, message: '', data: null };
    if (!user) {
        defaultBody.message = '用户名不存在';
        return (ctx.body = defaultBody);
    }
    if (!bcrypt.compareSync(password, user.password)) {
        defaultBody.message = '密码错误';
        return (ctx.body = defaultBody);
    }
    return next();
};
export { encryptionPassword, userValidator, checkUserName, checkLoginUserName };
