import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import Index from '../../pages/index';

import { darkTheme } from '@latitude55/theme';

function WithThemeProvider({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />, { wrapper: WithThemeProvider });
    expect(baseElement).toBeTruthy();
  });
});
