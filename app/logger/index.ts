import { configure, getLogger } from 'log4js';
const { log } = require('../config/config.default')

configure(log);
export const accessLogger = getLogger('access');
export default getLogger()
