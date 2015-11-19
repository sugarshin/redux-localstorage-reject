'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reject;
exports._rejecter = _rejecter;
/*!
 * @license redux-localstorage-reject
 * (c) sugarshin
 * License: MIT
 */

function reject(paths) {
  return function (storage) {
    return _extends({}, storage, {
      put: function put(key, state, callback) {
        storage.put(key, _rejecter(state, paths), callback);
      }
    });
  };
}

function _rejecter(object, paths) {
  var finalPaths = typeof paths === 'string' ? [paths] : paths;
  var length = finalPaths.length;

  var index = 0;

  while (index < length) {
    deleteProp(object, finalPaths[index++]);
  }

  return object;
}

/**
 * deleteProp
 *
 * @param {Object} object
 * @param {String} path
 * @returns {Object}
 */
function deleteProp(object, path) {
  var keys = path.split('.');
  delete getValue(object, keys.filter(function (k, i, array) {
    return i !== array.length - 1;
  }))[keys.pop()];
}

/**
 * getValue
 *
 * @param {Object} object
 * @param {Array} keys
 * @returns {Object}
 */
function getValue(object, keys) {
  return keys.reduce(function (result, key) {
    return result[key];
  }, object);
}
