import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#2B2828',
  colorSecondary: '#B60000',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#dbdbdb',
  appBorderRadius: 0,

  // Typography
  fontBase: 'Lato, Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#282637',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#B60000',
  barBg: '#2B2828',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#dbdbdb',
  inputTextColor: '#000000',
  inputBorderRadius: 4,

  brandTitle: 'Latitude55 UI Guide',
  //   brandUrl: 'https://purplebricks.co.uk',
  brandImage:
    'https://res.cloudinary.com/latitude55/image/upload/v1633952231/logo.svg',
});
