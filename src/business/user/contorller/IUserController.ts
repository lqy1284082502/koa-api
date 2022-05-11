import Application from 'koa';

export default interface IUserController {
    // 用户注册接口定义
    register(ctx: Application.Context, next?: Application.Next): Promise<Application.Context>;
    // 用户登录接口定义
    login(ctx: Application.Context, next?: Application.Next): Promise<Application.Context>;
    // 获取用户信息接口定义
    getAllUserInfo(ctx: Application.Context, next?: Application.Next): Promise<Application.Context>;
}
