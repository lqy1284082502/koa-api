import * as fs from 'fs';
import koaRouter from 'koa-router';
const router = new koaRouter();

fs.readdirSync(__dirname).forEach(async (file) => {
    if (file !== 'index.ts') {
        const module = await import('./' + file);
        router.use(module.default.routes()); // 添加default的作用是到处export default的内容
    }
});

export default router;
