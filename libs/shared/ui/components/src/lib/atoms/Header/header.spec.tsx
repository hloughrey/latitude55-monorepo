import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/JestSetTestProps';
import { HeaderProperties } from './header.types';
import { Header } from '.';

describe(`Header`, () => {
  const partialProperties = setTestProperties<HeaderProperties>({
    componentName: 'Header',
  });

  it('should do something', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <Header {...properties} />
      </ThemeProvider>
    );

    expect(screen.getByText(`Header`)).toBeInTheDocument();
  });
});
