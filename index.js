'use strict';

const config = require('config');

const Server = require('./server');
const logger = require('./server/utils/logger');

const gracefulStopServer = function() {
    server.stop({timeout: 10 * 1000}, () => {
        logger.info('Shutting down server.');
        process.exit(0);
    })
};

process.on('uncaughtException', err => {
    logger.error(err, 'Uncaught exception');
    process.exit(1);
});

process.on('unhandledRejection', (reason,promise) => {
    logger.error({
        promise: promise,
        reason: reason
    }, 'unhandledRejection');
    process.exit(1);
});

process.on('SIGINT', gracefulStopServer);
process.on('SIGTERM', gracefulStopServer);

async function init() {
    try {
        let server = await Server.deployment();
        await server.start();
    } catch (err) {
        logger.error(err);
        process.exit(1);q
    }

    logger.info(`Server started at port: ${config.get('app.port')} with env: ${config.util.getEnv('NODE_ENV')}`);
}

init();