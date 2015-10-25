import assert from 'power-assert';

import reject, { _rejecter } from '..';

describe('redux-localstorage-reject', () => {
  it('is functinon', () => {
    assert(typeof reject === 'function');
  });
});

describe('redux-localstorage-reject#_rejecter', () => {
  it('is functinon', () => {
    assert(typeof _rejecter === 'function');
  });

  it('case 1', () => {
    const source = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      },
      d: {
        e: {
          f: 22,
          ff: 33
        },
        ee: 33
      },
      g: {
        h: [0, 1],
        hh: 's'
      }
    };

    const actual = _rejecter(source, 'd.e.f');
    const expected = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      },
      d: {
        e: {
          ff: 33
        },
        ee: 33
      },
      g: {
        h: [0, 1],
        hh: 's'
      }
    };

    assert.deepEqual(expected, actual);
  });

  it('case 2', () => {
    const source = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      },
      d: {
        e: {
          f: 22,
          ff: 33
        },
        ee: 33
      },
      g: {
        h: [0, 1],
        hh: 's'
      }
    };

    const actual = _rejecter(source, ['d.e.f', 'g.hh']);
    const expected = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      },
      d: {
        e: {
          ff: 33
        },
        ee: 33
      },
      g: {
        h: [0, 1]
      }
    };

    assert.deepEqual(expected, actual);
  });

  it('case 3', () => {
    const source = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      },
      d: {
        e: {
          f: 22,
          ff: 33
        },
        ee: 33
      },
      g: {
        h: [0, 1],
        hh: 's'
      }
    };

    const actual = _rejecter(source, ['g.h']);
    const expected = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      },
      d: {
        e: {
          f: 22,
          ff: 33
        },
        ee: 33
      },
      g: {
        hh: 's'
      }
    };

    assert.deepEqual(expected, actual);
  });

  it('case 4', () => {
    const source = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      },
      d: {
        e: {
          f: 22,
          ff: 33
        },
        ee: 33
      },
      g: {
        h: [0, 1],
        hh: 's'
      }
    };

    const actual = _rejecter(source, ['d.e.f', 'd.e.ff']);
    const expected = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      },
      d: {
        e: {},
        ee: 33
      },
      g: {
        h: [0, 1],
        hh: 's'
      }
    };

    assert.deepEqual(expected, actual);
  });

  it('case 5', () => {
    const source = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      },
      d: {
        e: {
          f: 22,
          ff: 33
        },
        ee: 33
      },
      g: {
        h: [0, 1],
        hh: 's'
      }
    };

    const actual = _rejecter(source, ['d', 'g']);
    const expected = {
      a: 1,
      b: {
        c: 2,
        cc: 3
      }
    };

    assert.deepEqual(expected, actual);
  });
});
