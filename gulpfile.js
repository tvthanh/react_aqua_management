'use strict';
const RequireDir = require('require-dir');


global.inProduction = process.env.NODE_ENV === 'production';
// global.inProduction = process.env.NPM_CONFIG_PRODUCTION = false;

RequireDir('./gulp');
