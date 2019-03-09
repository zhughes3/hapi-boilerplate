'use strict';

const Mongoose = require('mongoose');
const Joi = require('joi');
const logger = require('./server/utils/logger');
const config = require('config');


Mongoose.connect(config.get('database.url'));

let db = Mongoose.connection;

db.on('error', logger.error.bind(console, 'connection error'));
db.once('open', function callback() {
    logger.info('Connection with database succeeded.');
});

module.exports = db;