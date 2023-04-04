const shuffle = require('../src/shuffle')

describe('shuffle should...', () => {
  test('shuffle should return an array', () => {
    expect(shuffle([])).toStrictEqual([])
  });

  test('check array length to be the same', () => {
    expect(shuffle([1, 2, 3])).toHaveLength(3);
  })

  test('check if items contained in array', () => {
    expect(shuffle([4, 5, 6])).toContain(4, 5, 6);
  })
});