import { Logger, QueryRunner } from 'typeorm';

export class DbLogger implements Logger {
    log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner): any {
        return '';
    }

    logMigration(message: string, queryRunner?: QueryRunner): any {
        //console.log(message, queryRunner);
        return '';
    }

    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): any {
        //console.log(parameters, queryRunner);
        return '';
    }

    logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
        //console.log(parameters, queryRunner);
        return '';
    }

    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
        //console.log(parameters, queryRunner);
        return '';
    }

    logSchemaBuild(message: string, queryRunner?: QueryRunner): any {
        //console.log(message, queryRunner);
        return '';
    }
}
