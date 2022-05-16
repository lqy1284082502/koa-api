import koaRouter from 'koa-router';
import UserController from '../business/user/contorller/UserController';
import { userValidator, encryptionPassword, checkUserName, checkLoginUserName } from '../middleware/UserMiddleware';
import CheckTokenMiddleware from '../middleware/CheckTokenMiddleware';
// import CheckTokenMiddleware from '../middleware/CheckTokenMiddleware';
const router = new koaRouter({ prefix: '/user' });
/**
 * @swagger
 * /user/register:
 *    post:
 *      tags:
 *      - user
 *      summary: 用户注册接口
 *      consumes:
 *        - application/json
 *      parameters:
 *      - name: register
 *        in: body
 *        description: 用户注册信息
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - password
 *          properties:
 *            obj:
 *              type: object
 *              required:
 *                - username
 *                - password
 *              description: 新增数据对象
 *              properties:
 *                username:
 *                  type: string
 *                  description: 用户名
 *                password:
 *                  type: string
 *                  description: 用户密码
 *      responses:
 *        200:
 *          description: successful operation
 * */

router.post('/register', userValidator, encryptionPassword, checkUserName, UserController.register);

// 登录路由
router.post('/login', userValidator, checkLoginUserName, UserController.login);

// 获取用户信息
router.get('/info', CheckTokenMiddleware, UserController.getAllUserInfo);
export default router;
