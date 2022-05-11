import { Logger, QueryRunner } from 'typeorm';
import { sqlLogger } from './index';

// TODO: Add logger to database

export class DbLogger implements Logger {
    // 日志
    log(level: 'log' | 'info' | 'warn', message: string, queryRunner?: QueryRunner): void {
        // console.log(`${level}: ${message}: ${queryRunner}`);
    }
    // 日志迁移
    logMigration(message: string, queryRunner?: QueryRunner): void {
        //console.log(message, queryRunner);
    }
    // 日志查询
    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): void {
        const requestUrl =
            queryRunner && queryRunner.data['request'] ? '(' + queryRunner.data['request'].url + ') ' : '';
        sqlLogger.info(requestUrl + query);
    }
    // 日志查询错误
    logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner): void {
        //console.log(parameters, queryRunner);
    }
    // 日志查询速度慢
    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): void {
        //console.log(parameters, queryRunner);
    }
    // 日志事务
    logSchemaBuild(message: string, queryRunner?: QueryRunner): void {
        //console.log(message, queryRunner);
    }
}
