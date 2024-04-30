import compareBranches from './index';

describe('compareBranches', () => {
  it('passes with test inputs', () => {
    [
      { tree: [3, 6, 2, 9, -1, 10], answer: 'Left' },
      { tree: [1, 4, 100, 5], answer: 'Right' },
      { tree: [1, 10, 5, 1, 0, 6], answer: '' },
      { tree: [], answer: '' },
      { tree: [1], answer: '' },
    ].forEach(({ tree, answer }) => {
      expect(compareBranches(tree)).toEqual(answer);
    });
  });
});
