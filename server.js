'use strict';

const Hapi = require('hapi');
const config = require('config');
const Path = require('path');

const routes = require('./routes');
const plugins = require('./plugins');
const logger = require('./server/utils/logger');

exports.deployment = async() => {
    const server = new Hapi.server({
        host: config.get('app.host'),
        port: config.get('app.port'),
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    });

    await server.register(plugins);

    server.route(routes);

    return server;
};
