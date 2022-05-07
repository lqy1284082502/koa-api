const dotenv = require('dotenv')
dotenv.config();
const config ={
    server:{
        APP_PORT: process.env.APP_PORT,
    },
    log:{
        appenders: {
            error: { type: "file", filename: "./app/logs/error.log", },
            access: { type: "file", filename: "./app/logs/access.log" }
        },
        categories: {
            default: { appenders: ["error"], level: "error" },
            access: { appenders: ["access"], level: "info" }
        }
    }
}
module.exports = config
