import 'dotenv/config';
import config from './app/config/config.default';
import run from './app';

run(config.server.APP_PORT);
