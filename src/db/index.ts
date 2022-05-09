import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import config from '../config/config.default';
import { sqlLogger } from '../logger';

const sequelize = new Sequelize(config.db.db_name, config.db.db_user, config.db.db_password, {
    host: config.db.db_host, // 数据库地址
    dialect: 'mysql', // 数据库类型
    models: [path.join(__dirname, '..', 'models/**/*.{ts,js}')], // 指定模型路径
    pool: {
        // 连接池
        max: 5, // 最大连接数
        idle: 30000, // 连接最大空闲时间
        acquire: 60000, // 获取连接超时时间
    },
    logging: (msg) => sqlLogger.info(msg),
    dialectOptions: {
        charset: 'utf8mb4', //设置数据库编码为utf8mb4
    },
    define: {
        timestamps: true, // 是否自动添加时间戳
        createdAt: 'created_at', // 创建时间
        updatedAt: 'updated_at', // 更新时间
        deletedAt: 'deleted_at', // 删除时间
    },
});
const db = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
export { sequelize, db };
