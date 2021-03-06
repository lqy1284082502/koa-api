export default {
    server: {
        APP_PORT: Number(process.env.APP_PORT),
    },
    db: {
        db_type: process.env.DATABASE_TYPE,
        db_host: process.env.DATABASE_HOST,
        db_port: process.env.DATABASE_PORT,
        db_name: process.env.DATABASE_NAME || '',
        db_user: process.env.DATABASE_USER || '',
        db_password: process.env.DATABASE_PWD || '',
    },
    log: {
        appenders: {
            error: { type: 'file', filename: './src/logs/error.log' },
            access: { type: 'file', filename: './src/logs/access.log' },
            sql: { type: 'file', filename: './src/logs/sql.log' },
        },
        categories: {
            default: { appenders: ['error'], level: 'error' },
            access: { appenders: ['access'], level: 'info' },
            sql: { appenders: ['sql'], level: 'info' },
        },
    },
    jwt: {
        jwt_secret: process.env.SECRET_KEY || 'lqy',
        jwt_expires_in: process.env.JWT_EXPIRES_IN || '24h',
    },
};
