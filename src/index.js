/*jshint node:true */

'use strict';

var unaryOpExtender = require('unary-op-arbitrary-precision');

module.exports = function factory(Decimal) {
  return unaryOpExtender(Decimal, 'abs');
};
