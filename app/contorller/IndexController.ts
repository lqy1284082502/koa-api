import { Context } from 'koa';
import adminService from '../service/adminService';

class IndexController {
    async index(ctx: Context) {
        ctx.body = 'Hello World';
    }
    async admin(ctx: Context) {
        ctx.body = await adminService.getAdmin();
    }
}

export default new IndexController();
