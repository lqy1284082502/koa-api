import koaRouter from 'koa-router';
import IndexController from '../contorller/IndexController';
import LoginController from '../contorller/LoginController';
const router = new koaRouter({ prefix: '/user' });

router.post('/login', LoginController.login);
router.get('/', IndexController.admin);
export default router;
