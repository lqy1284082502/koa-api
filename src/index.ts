import 'reflect-metadata';
import Koa from 'koa';
import router from './router';
import { Server } from 'http';
import logger from './logger';

import koaBody from 'koa-body';
import { koaSwagger } from 'koa2-swagger-ui';
import AccessLogMiddleware from './middleware/AccessLogMiddleware';

const app = new Koa();

app.use(
    koaSwagger({
        routePrefix: '/swagger/index.html', // 这里配置swagger的访问路径
        swaggerOptions: {
            url: '/swagger/swagger.json', // 这里配置swagger的文档配置URL，也就是说，我们展示的API都是通过这个接口生成的。
        },
    })
);

app.use(koaBody());
app.use(AccessLogMiddleware);
app.use(router.routes());

logger.debug('app started');
const run = (port: number | string): Server => {
    return app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`swagger地址：http://localhost:${port}/swagger/index.html`);
    });
};

export default run;
