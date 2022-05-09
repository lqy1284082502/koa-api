import koaRouter from 'koa-router';
import UserController from '../business/user/contorller/UserController';
// import CheckTokenMiddleware from '../middleware/CheckTokenMiddleware';
const router = new koaRouter({ prefix: '/user' });

router.post('/register', UserController.register);

export default router;
