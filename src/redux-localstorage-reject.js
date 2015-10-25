/*!
 * @license redux-localstorage-reject
 * (c) sugarshin
 * License: MIT
 */

'use strict';

import clone from 'clone';
import { del } from 'object-path';

export default function reject(paths) {
  return storage => ({
    ...storage,
    put(key, state, callback) {
      storage.put(key, _rejecter(clone(state), paths), callback);
    }
  });
}

export function _rejecter(object, paths) {
  paths = typeof paths === 'string' ? [paths] : paths;

  const { length } = paths;
  let index = 0;

  while (index < length) {
    del(object, paths[index++]);
  }

  return object;
}
