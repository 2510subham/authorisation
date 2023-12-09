import { createLogger, format, transports } from 'winston';

const IST = () => { return new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) };

const Logger = createLogger({
    transports: [
        new transports.Console(),
    ],
    format: format.combine(
        format.timestamp({ format: IST }),
        format.align(),
        format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )
});

export default Logger;