import { Context, Next } from 'koa';
import { sign } from '../../utils/auth';

class LoginController {
    async login(ctx: Context, next: Next) {
        const { username, password } = ctx.request.body;
        ctx.body = {
            token: sign({ username, password }),
        };
        return ctx;
    }
}

export default new LoginController();
