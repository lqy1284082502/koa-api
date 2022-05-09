import koaRouter from 'koa-router';
import LoginController from '../business/user/contorller/LoginController';
import CheckTokenMiddleware from '../middleware/CheckTokenMiddleware';
const router = new koaRouter({ prefix: '/user' });

router.post('/login', LoginController.login);
router.get('/userInfo', CheckTokenMiddleware, LoginController.userInfo);

export default router;
