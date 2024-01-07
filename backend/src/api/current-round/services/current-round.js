'use strict';

/**
 * current-round service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-round.current-round');
