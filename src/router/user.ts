import koaRouter from 'koa-router';
import UserController from '../business/user/contorller/UserController';
import { userValidator, encryptionPassword, checkUserName, checkLoginUserName } from '../middleware/UserMiddleware';
import CheckTokenMiddleware from '../middleware/CheckTokenMiddleware';
// import CheckTokenMiddleware from '../middleware/CheckTokenMiddleware';
const router = new koaRouter({ prefix: '/user' });
// 注册路由
router.post('/register', userValidator, encryptionPassword, checkUserName, UserController.register);

// 登录路由
router.post('/login', userValidator, checkLoginUserName, UserController.login);

// 获取用户信息
router.get('/info', CheckTokenMiddleware, UserController.getAllUserInfo);
export default router;
