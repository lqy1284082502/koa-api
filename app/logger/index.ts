import { configure, getLogger } from 'log4js';

configure({
    appenders: {
        cheese: { type: "file", filename: "./app/consoleLog/cheese.log", },
        access: { type: "file", filename: "./app/consoleLog/access.log" }
    },
    categories: {
        default: { appenders: ["cheese"], level: "info" },
        access: { appenders: ["access"], level: "info" }
    }
});
export const accessLogger = getLogger('access');
export default getLogger()
