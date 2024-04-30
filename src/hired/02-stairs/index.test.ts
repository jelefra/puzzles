import countWays from './index';

describe('countWays', () => {
  it('passes with test inputs', () => {
    [
      { steps: 0, answer: 1 },
      { steps: 1, answer: 1 },
      { steps: 2, answer: 2 },
      { steps: 3, answer: 4 },
      { steps: 4, answer: 7 },
    ].forEach(({ steps, answer }) => {
      expect(countWays(steps)).toEqual(answer);
    });
  });
});
