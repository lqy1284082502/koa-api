import { configure, getLogger } from 'log4js';
import config from '../config/config.default';

configure(config.log);
export const sqlLogger = getLogger('sql');
export const accessLogger = getLogger('access');
export default getLogger();
