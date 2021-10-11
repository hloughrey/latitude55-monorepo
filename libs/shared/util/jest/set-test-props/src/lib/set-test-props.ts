export function setTestProperties<Properties>(
  baseProperties: Properties
): (partialProperties?: Partial<Properties>) => Properties {
  return (partialProperties: Partial<Properties> = {}): Properties => ({
    ...baseProperties,
    ...partialProperties,
  });
}
