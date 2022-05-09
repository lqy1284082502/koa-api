import { Context, Next } from 'koa';

export default interface UserImp {
    // 注册接口
    register(ctx: Context, next: Next): Promise<Context>;
    // 登录接口
    login(ctx: Context, next: Next): Promise<Context>;
    // 退出接口
    logout(ctx: Context, next: Next): Promise<Context>;
    // 获取用户信息接口
    getUserInfo(ctx: Context, next: Next): Promise<Context>;
    // 更新用户信息接口
    updateUserInfo(ctx: Context, next: Next): Promise<Context>;
}
