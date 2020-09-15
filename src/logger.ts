import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logpath: string = process.env.LOG_PATH || "./";

const logger: winston.Logger = winston.createLogger({
    level: 'info',
    format: winston.format.printf((info) => {
        let message = `${new Date(Date.now()).toUTCString()} | ${info.level.toUpperCase()} | ${info.message}`
        message += info.obj ? ' | ' + `data:${JSON.stringify(info.obj)}` : ''
        return message
    }),
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new DailyRotateFile({
            dirname: logpath,
            filename: 'service.log',
            level: 'info',
            maxSize: "100m",
            datePattern: "YYYY-MM-DD-HH",
            maxFiles: "10d",
            zippedArchive: true
        })
    ],
});

winston.exceptions.handle(new winston.transports.File({ filename: 'exceptions.log' }));

export default logger;