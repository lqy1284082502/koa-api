import koaRouter from 'koa-router';
import IndexController from "../contorller/IndexController";
const router = new koaRouter({prefix: '/admin'});

router.get('/', IndexController.index)
router.get('/admin', IndexController.admin)
export default router;
