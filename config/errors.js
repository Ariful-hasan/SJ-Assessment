import { NOT_FOUND, FAILED_MSG } from './constant.js';
import { logger } from './helpers.js';
import { sendResponse } from './common.js';

/**
 * @param {server error} error 
 * @param {number} port 
 * Event listener for HTTP server "error" event.
 */
export const onServerError = (error, port) => {
    console.log('SERVER ERROR : ');
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


/**
 * custom error handler
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const handleError = (err, req, res, next) => {
    console.log('URL ERROR : ');
    console.log(err);
    logger(err.stack);
    return sendResponse(res, NOT_FOUND, FAILED_MSG, 'Invalid url');
    // return res.sendStatus(INTERNAL_SERVER_ERROR);
};