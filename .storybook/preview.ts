// import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '@latitude55/theme';

const themes = [darkTheme, lightTheme];

// addDecorator(withKnobs);
addDecorator(withThemesProvider(themes), ThemeProvider);

addParameters({
  options: {
    sortStoriesByKind: true,
  },
  viewMode: 'story',
});
