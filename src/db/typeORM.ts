import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as path from 'path';
import { accessLogger } from '../logger';
import { DbLogger } from '../logger/dbLogger';
import config from '../config/config.default';

const AppDataSource = new DataSource({
    type: 'mysql',
    host: config.db.db_host,
    port: 3306,
    username: config.db.db_user,
    password: config.db.db_password,
    database: config.db.db_name,
    logging: true,
    logger: new DbLogger(), // 自定义logger
    entities: [path.join(__dirname, '..', 'business/**/entity/*{.ts,.js}')],
    migrations: [],
    subscribers: [],
    synchronize: true,
});

AppDataSource.initialize()
    .then(() => {
        accessLogger.info('数据库连接成功');
        console.log('数据库连接成功');
    })
    .catch((error) => {
        accessLogger.info('数据库连接失败', error);
        console.log('数据库连接成功');
    });

export { AppDataSource };
