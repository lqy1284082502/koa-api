import { configure, getLogger } from 'log4js';

configure({
    appenders: {
        error: { type: "file", filename: "./app/consoleLog/error.log", },
        access: { type: "file", filename: "./app/consoleLog/access.log" }
    },
    categories: {
        default: { appenders: ["error"], level: "error" },
        access: { appenders: ["access"], level: "info" }
    }
});
export const accessLogger = getLogger('access');
export default getLogger()
