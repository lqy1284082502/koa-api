const { server } = require('./app/config/config.default')
import run from './app';

run(server.APP_PORT);
