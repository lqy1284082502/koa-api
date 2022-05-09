import 'dotenv/config';
require('module-alias/register');
import config from './src/config/config.default';
import run from './src';

run(config.server.APP_PORT);
