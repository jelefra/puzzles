import addAngleBrackets from './index';

describe('addAngleBrackets', () => {
  it('passes with test inputs', () => {
    [
      { angles: '', answer: '' },
      { angles: '<', answer: '<>' },
      { angles: '>', answer: '<>' },
      { angles: '<<', answer: '<<>>' },
      { angles: '>>', answer: '<<>>' },
      { angles: '><', answer: '<><>' },
      { angles: '><<><', answer: '<><<><>>' },
      { angles: '><<', answer: '<><<>>' },
      { angles: '<<>>', answer: '<<>>' },
      { angles: '<<<>>>', answer: '<<<>>>' },
    ].forEach(({ angles, answer }) => {
      expect(addAngleBrackets(angles)).toEqual(answer);
    });
  });
});
