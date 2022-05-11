import jwt from 'jsonwebtoken';
import config from '../config/config.default';

function sign(data) {
    return jwt.sign({ data }, config.jwt.jwt_secret, { expiresIn: config.jwt.jwt_expires_in });
}

function verify(token: string) {
    try {
        const decoded = jwt.verify(token, config.jwt.jwt_secret as string);
        return {
            admin: decoded,
            error: null,
        };
    } catch (error) {
        return {
            admin: null,
            error: error,
        };
    }
}

export { sign, verify };
