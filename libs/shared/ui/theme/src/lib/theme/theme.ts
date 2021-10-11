// import { DefaultTheme } from 'styled-components';

import { Theme } from './theme.type';

export const lightTheme: Theme = {
  name: 'Light Theme',
  colors: {
    primaryColor: 'red',
    secondaryColor: '#666',
  },
};

export const darkTheme: Theme = {
  name: 'Dark Theme',
  colors: {
    primaryColor: 'green',
    secondaryColor: '#cacaca',
  },
};

// export const defaultTheme = {
//   font: {
//     weight: {
//       regular: 400,
//       medium: 500,
//       semiBold: 600,
//       bold: 700,
//     },
//     family: {
//       primary: 'Lato, Arial, sans-serif',
//       secondary: 'Montserrat, Arial, sans-serif',
//     },
//     size: {
//       base: '16px',
//       small: '14px',
//     },
//   },
//   shadow: {
//     low: '0 0.2rem 0.4rem 0 rgba(0,0,0,0.15)',
//     middle: '0 0.4rem 0.8rem 0 rgba(0,0,0,0.15)',
//     high: '0 0.8rem 1.6rem 0 rgba(0,0,0,0.15)',
//   },
//   borderRadius: {
//     default: '0.2rem',
//   },
//   dimensions: {
//     maxContentWidth: '128rem',
//   },
//   screen: {
//     mobilePortraitMaximum: '479.9px',
//     mobileLandscapeMinimum: '480px',
//     mobileLandscapeMaximum: '767.9px',
//     tabletPortraitMinimum: '768px',
//     tabletPortraitMaximum: '991.9px',
//     tabletLandscapeMinimum: '992px',
//     tabletLandscapeMaximum: '1199.9px',
//     desktopMinimum: '1200px',
//   },
//   breakpoints: {
//     xs: { min: '0px', max: '479.9px' },
//     s: { min: '480px', max: '767.9px' },
//     m: { min: '768px', max: '991.9px' },
//     l: { min: '992px', max: '1199.9px' },
//     xl: { min: '1200px', max: '9999.9px' },
//   },
//   color: {
//     darkPurple: '#400f4c',
//     purple: '#8a2d87',
//     indigo: '#282637',
//     white: '#ffffff',
//     green: '#16835b',
//     red: '#aa1d42',
//     pink: '#da285a',
//     orange: '#c05119',
//     teal: '#138081',
//     yellow: '#fac800',
//     grey1: '#f9f9f9',
//     grey2: '#ebebeb',
//     grey3: '#dbdbdb',
//     grey4: '#bfbfbf',
//     grey5: '#909090',
//     grey6: '#686666',
//     grey7: '#3c3b3b',
//     black: '#000000',
//     purpleShade10: '#642162',
//     purpleTint10: '#b13aad',
//     purpleTint20: '#c856c4',
//     purple90: '#f2d9f2',
//     indigoTint15: '#4e4c5d',
//     indigoTint35: '#757384',
//     indigoTint50: '#9b99aa',
//     redTint10: '#d52453',
//     redTint20: '#e14c73',
//     redTint90: '#f8d3dd',
//     redShade10: '#7e1631',
//     darkPurpleTint10: '#641877',
//     darkPurpleTint20: '#8820a2',
//     darkPurpleTint90: '#f0d4f7',
//     darkPurpleShade10: '#1d0722',
//     transparent: 'transparent',
//   },
//   spacing: {
//     0: '0',
//     0.5: '0.2rem',
//     1: '0.4rem',
//     2: '0.8rem',
//     3: '1.2rem',
//     4: '1.6rem',
//     5: '2.0rem',
//     6: '2.4rem',
//     8: '3.2rem',
//     12: '4.8rem',
//     18: '7.2rem',
//   },
// } as const;

// import { DefaultTheme } from 'styled-components';
