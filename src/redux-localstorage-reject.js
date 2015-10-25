/*!
 * @license redux-localstorage-reject
 * (c) sugarshin
 * License: MIT
 */

'use strict';

import clone from 'clone';
import { del } from 'object-path';

export default function reject(paths) {
  paths = typeof paths === 'string' ? [paths] : paths;

  return storage => ({
    ...storage,
    put(key, state, callback) {
      storage.put(key, rejecter(clone(state), paths), callback);
    }
  });
}

function rejecter(object, paths) {
  let index = 0;
  const length = paths.length;

  while (index < length) {
    del(object, paths[index++]);
  }

  return object;
}
