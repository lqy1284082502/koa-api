import Koa from 'koa';
import router from './router';
import { Server } from 'http'
import logger from "./logger";
import AccessLogMiddleware from "./middleware/AccessLogMiddleware";

import db from './db';
db()

const app = new Koa();
app.use(AccessLogMiddleware)
app.use(router.routes());
logger.debug('app started');
const run = (port: number | string):Server => {
    return app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        }
    );
}

export default run;
