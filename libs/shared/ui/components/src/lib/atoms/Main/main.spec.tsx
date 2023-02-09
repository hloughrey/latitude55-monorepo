import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/JestSetTestProps';
import { MainProperties } from './main.types';
import { Main } from '.';

describe(`Main`, () => {
  const partialProperties = setTestProperties<MainProperties>({
    componentName: 'Main',
  });

  it('should do something', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <Main {...properties} />
      </ThemeProvider>
    );

    expect(
      screen.getByText(`Hello, I'm your new Main component 👋!`)
    ).toBeInTheDocument();
  });
});
