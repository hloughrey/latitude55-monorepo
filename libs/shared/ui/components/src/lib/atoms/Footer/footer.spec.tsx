import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/JestSetTestProps';
import { FooterProperties } from './footer.types';
import { Footer } from '.';

describe(`Footer`, () => {
  const partialProperties = setTestProperties<FooterProperties>({
    componentName: 'Footer',
  });

  it('should do something', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <Footer {...properties} />
      </ThemeProvider>
    );

    expect(
      screen.getByText(`Hello, I'm your new Footer component 👋!`)
    ).toBeInTheDocument();
  });
});
