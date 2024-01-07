'use strict';

/**
 * current-round router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::current-round.current-round');
