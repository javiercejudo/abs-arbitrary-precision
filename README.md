# abs-arbitrary-precision

[![Build Status](https://travis-ci.org/javiercejudo/abs-arbitrary-precision.svg)](https://travis-ci.org/javiercejudo/abs-arbitrary-precision)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/abs-arbitrary-precision/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/abs-arbitrary-precision?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/abs-arbitrary-precision/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/abs-arbitrary-precision)

abs abstraction to extend [core-arbitrary-precision](https://github.com/javiercejudo/core-arbitrary-precision/)

## Install

    npm i abs-arbitrary-precision

## Adapters

- [[adapter]](https://github.com/javiercejudo/decimaljs-adapter) [[lib]](https://github.com/MikeMcl/decimal.js) decimal.js
- [[adapter]](https://github.com/javiercejudo/floating-adapter) [[lib]](https://github.com/javiercejudo/floating) floating

## Usage

```js
var adapter = require('floating-adapter');

var Decimal = require('abs-arbitrary-precision')(require('linear-arbitrary-precision')(adapter));

new Decimal('-12').abs().valueOf(); // => -12
```

See [spec](test/spec.js).
