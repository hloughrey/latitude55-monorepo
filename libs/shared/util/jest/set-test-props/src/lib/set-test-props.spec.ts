import { setTestProperties } from './';

describe('setTestProperties', () => {
  interface IInterfaceMock {
    requiredProperty: string;
    optionalProperty?: string;
  }

  const partialPropertiesMock: IInterfaceMock = {
    requiredProperty: 'Hello',
  };

  it('should return a function', () => {
    const actual = setTestProperties<IInterfaceMock>(partialPropertiesMock);

    expect(typeof actual).toBe('function');
  });

  it('should return a function that when called returns the originally specified properties', () => {
    const partialProperties = setTestProperties<IInterfaceMock>(
      partialPropertiesMock
    );
    const actual = partialProperties();

    expect(actual).toEqual(partialPropertiesMock);
  });

  it('should return a function that when called with additional properties returns those properties merged with the originally specified properties', () => {
    const additionalProperties = { optionalProperty: 'Bye-bye!' };
    const expected = {
      requiredProperty: 'Hello',
      optionalProperty: 'Bye-bye!',
    };

    const partialProperties = setTestProperties<IInterfaceMock>(
      partialPropertiesMock
    );
    const actual = partialProperties(additionalProperties);

    expect(actual).toEqual(expected);
  });
});
