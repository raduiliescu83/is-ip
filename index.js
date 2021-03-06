'use strict';
const ipRegex = require('ip-regex');

const isIp = x => ipRegex({exact: true}).test(x);
isIp.v4 = x => ipRegex.v4({exact: true}).test(x);
isIp.v6 = x => ipRegex.v6({exact: true}).test(x);

module.exports = isIp;
