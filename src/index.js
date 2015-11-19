/*!
 * @license redux-localstorage-reject
 * (c) sugarshin
 * License: MIT
 */

export default function reject(paths) {
  return storage => ({
    ...storage,
    put(key, state, callback) {
      storage.put(key, _rejecter(state, paths), callback);
    }
  });
}

export function _rejecter(object, paths) {
  const finalPaths = typeof paths === 'string' ? [paths] : paths;
  const { length } = finalPaths;
  let index = 0;

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
  const keys = path.split('.');
  delete getValue(object, keys.filter((k, i, array) => i !== array.length - 1))[keys.pop()];
}

/**
 * getValue
 *
 * @param {Object} object
 * @param {Array} keys
 * @returns {Object}
 */
function getValue(object, keys) {
  return keys.reduce((result, key) => (result[key]), object);
}
