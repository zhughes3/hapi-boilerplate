'use strict';

const bunyan = require('bunyan');
const config = require('config');

const log = bunyan.createLogger({
    name: config.get('app.name'),
    level: config.get('app.logLevel'),
    serializers: bunyan.stdSerializers
});

module.exports = log;