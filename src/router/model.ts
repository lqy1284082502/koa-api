import koaRouter from 'koa-router';

const router = new koaRouter({ prefix: '/model' });
// TODO 获取模型列表
router.get('/list');
// TODO 获取模型详情
router.get('/detail/:id');
// TODO 创建模型
router.post('/create');
// TODO 更新模型
router.put('/update/:id');
// TODO 删除模型
router.delete('/delete/:id');

export default router;
