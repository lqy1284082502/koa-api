const { APP_PORT } = require('./app/config/config.default')
import run from './app';

run(APP_PORT);
