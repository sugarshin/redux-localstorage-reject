import assert from 'power-assert';
import reject from '..';

describe('redux-localstorage-reject', () => {
  it('is functinon', () => {
    assert(typeof reject === 'function');
  });
});
