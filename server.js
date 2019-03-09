'use strict';

const Hapi = require('hapi');
const config = require('config');

const routes = require('./routes');
const plugins = require('./plugins');
const logger = require('./server/utils/logger');

exports.deployment = async() => {
    const server = new Hapi.server({
        host: config.get('app.host'),
        port: config.get('app.port')
    });

    await server.register(plugins);

    server.route(routes);

    return server;
};
