import { ignoreStory } from './';

describe('ignoreStory', () => {
  it('should work', () => {
    const expected = {
      parameters: {
        docs: {
          disable: true,
        },
      },
    };

    const actual = ignoreStory();

    expect(actual).toEqual(expected);
  });
});
