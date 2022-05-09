import 'reflect-metadata';
import Koa from 'koa';
import router from './router';
import { Server } from 'http';
import logger from './logger';
import koaBody from 'koa-body';
import AccessLogMiddleware from './middleware/AccessLogMiddleware';
import { db } from './db';

db().then(() => {
    console.log('数据库连接成功');
});
const app = new Koa();

app.use(koaBody());
app.use(AccessLogMiddleware);
app.use(router.routes());

logger.debug('app started');
const run = (port: number | string): Server => {
    return app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

export default run;
