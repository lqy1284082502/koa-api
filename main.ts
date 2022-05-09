import 'dotenv/config';
import config from './src/config/config.default';
import run from './src';

run(config.server.APP_PORT);
