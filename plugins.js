'use strict';

const Inert = require('inert');
const Vision = require('vision');

let plugins = [];
plugins = plugins.concat([
    Inert,
    Vision
]);

module.exports = plugins;
