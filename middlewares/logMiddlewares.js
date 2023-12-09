import Logger from '../utils/logger.js';

const logMiddleware = (req, res, next) => {
    const start = Date.now();
    Logger.info(`${req.method} ${req.url} from ${req.headers.host}`);

    res.on('finish', () => {
        const responseTimeInMs = Date.now() - start;
        Logger.info(`Response time for ${req.method} ${req.url}: ${responseTimeInMs}ms`);
    });
    next();
}
export default logMiddleware;
