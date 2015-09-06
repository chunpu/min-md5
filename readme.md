min-md5
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-md5.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-md5
[downloads-image]: http://img.shields.io/npm/dm/min-md5.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-md5
[david-image]: http://img.shields.io/david/chunpu/min-md5.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-md5

[![Test coverage][coveralls-image]][coveralls-url]

Min pure Javascript MD5 lib

Installation
---

```sh
npm i min-md5
```

Usage
---

```js
var md5 = require('min-md5')

md5('abc')
// => 900150983cd24fb0d6963f7d28e17f72

// support unicode
md5('中文123のabc')
// => 0fa86f501c35fbd40e1cc8d1f99a1c66
```

> always return 32 length lowercase string

return same value like `md5sum`

```sh
echo -n 中文123のabc | md5sum
```

License
---

[![License][license-image]][license-url]

[travis-image]: https://img.shields.io/travis/chunpu/min-md5.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/min-md5
[coveralls-image]: https://img.shields.io/coveralls/chunpu/min-md5/gh-pages.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chunpu/min-md5
[license-image]: http://img.shields.io/npm/l/min-md5.svg?style=flat-square
[license-url]: #
