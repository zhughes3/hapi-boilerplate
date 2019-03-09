'use strict';

const bunyan = require('bunyan');
const config = require('config');

const log = bunyan.createLogger({
    name: config.get('app.name'),
    level: config.get('app.logLevel'),
    serializers: bunyan.stdSerializers,
    streams: [
        {
          level: 'info',
          stream: process.stdout            // log INFO and above to stdout
        },
        {
          level: 'error',
          path: `/var/tmp/${config.get('app.name')}-error.log`  // log ERROR and above to a file
        }
      ]
});

module.exports = log;