const urlifyr = require('../urlifyr.js');

describe('urlifyr', () => {
  it('expects to get hyphened words', () => {
    expect(urlifyr('Hello World')).toBe('hello-world');
    expect(urlifyr('  Hello  World  ')).toBe('hello-world');
    expect(urlifyr('Hello/-_World', { accept: '-' })).toBe('hello-world');
  });

  it('expects to get underlined words', () => {
    const cfg = { special: '_', whiteSpace: '_' };

    expect(urlifyr('Hello World', cfg)).toBe('hello_world');
    expect(urlifyr('  Hello  World  ', cfg)).toBe('hello_world');
    expect(urlifyr('Hello/_World', cfg)).toBe('hello_world');
    expect(urlifyr('hello_world', cfg)).toBe('hello_world');
    expect(urlifyr('Hello/World', cfg)).toBe('hello_world');
  });

  it('expects to get slashed words', () => {
    const cfg = { special: '/', whiteSpace: '/' };

    expect(urlifyr('Hello World', cfg)).toBe('hello/world');
    expect(urlifyr('  Hello  World  ', cfg)).toBe('hello/world');
    expect(urlifyr('Hello/_World', cfg)).toBe('hello/world');
    expect(urlifyr('hello_world', cfg)).toBe('hello/world');
    expect(urlifyr('Hello/World', cfg)).toBe('hello/world');
  });

  it('expects to not get lower-cased words', () => {
    const cfg = { lowerCase: false };

    expect(urlifyr('Hello World', cfg)).toBe('Hello-World');
    expect(urlifyr('  Hello  World  ', cfg)).toBe('Hello-World');
  });

  it('expects to get not trimmed words', () => {
    const cfg = { trim: false };

    expect(urlifyr('Hello World', cfg)).toBe('hello-world');
    expect(urlifyr('  Hello  World  ', cfg)).toBe('--hello--world--');
  });
});
