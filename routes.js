'use strict';

const glob = require('glob');
const path = require('path');
const _ = require('lodash');

const routes = [
    {
        method: 'GET',
        path: '/ping',
        handler: function(request, h) {
            return 'pong';
        },
        config: {
            tags: ['api']
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                listing: true
            }
        }
    }
];

glob.sync('./server/**/*Routes.js').forEach((file) => {
    routes.push(require(path.resolve(file)));
});

module.exports = _.flattenDeep(routes);