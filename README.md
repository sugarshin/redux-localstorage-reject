# redux-localstorage-reject

[![Build Status][travis-image]][travis-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

Web Storage persist of rejected state.

```
npm i redux-localstorage-reject
```

## Usage

```js
import { compose } from 'redux';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import reject from 'redux-localstorage-reject';

const rejectKeys = ['a.b', 'a.c', 'b.d.e', 'd'];
const storage = compose(
  reject(rejectKeys)
)(adapter(global.localStorage));
```

For more information on using storage enhancers check out [redux-localstorage](https://github.com/elgerlambert/redux-localstorage/tree/1.0-breaking-changes)

## API

### `reject(paths)`

@param {Array<String> | String} paths

@returns {Function}

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/redux-localstorage-reject.svg
[npm-url]: https://www.npmjs.org/package/redux-localstorage-reject
[travis-image]: http://img.shields.io/travis/sugarshin/redux-localstorage-reject/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/redux-localstorage-reject
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fredux-localstorage-reject.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fredux-localstorage-reject
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/redux-localstorage-reject.svg
[dependencies-image]: http://img.shields.io/david/sugarshin/redux-localstorage-reject.svg
