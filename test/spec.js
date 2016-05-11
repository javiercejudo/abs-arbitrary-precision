/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('core-arbitrary-precision')(adapter);

Decimal = require('../src/')(Decimal);

describe('abs', function() {
  it('should return the absolute value', function() {
    new Decimal('-12').abs().valueOf().should.be.exactly(12);
    new Decimal('5.3').abs().valueOf().should.be.exactly(5.3);
  });
});
