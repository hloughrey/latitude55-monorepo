export function ignoreStory(): Record<string, unknown> {
  return {
    parameters: {
      docs: {
        disable: true,
      },
    },
  };
}
