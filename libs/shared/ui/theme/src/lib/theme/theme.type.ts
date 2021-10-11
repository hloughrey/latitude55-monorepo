import { lightTheme } from './theme';

// export type TTheme = typeof lightTheme;

export type TThemeProperties = {
  theme: Theme;
};

export type TThemeColours = keyof typeof lightTheme.colors;
// export type TThemeShadows = keyof typeof lightTheme.shadow;

export type WithTheme<T = Record<string, unknown>> = T & { theme: Theme };

export const breakpoints = ['xs', 's', 'm', 'l', 'xl'] as const;
export type TBreakpoint = typeof breakpoints[number];

export type Theme = {
  name: string;
  colors: {
    primaryColor: string;
    secondaryColor: string;
  };
};

// export type TSpacing = keyof typeof lightTheme.spacing;

// // todo: might want to separate this out into its own lib
// export const globalColors = [
//   'darkPurple',
//   'purple',
//   'indigo',
//   'white',
//   'green',
//   'red',
//   'pink',
//   'orange',
//   'teal',
//   'yellow',
//   'grey1',
//   'grey2',
//   'grey3',
//   'grey4',
//   'grey5',
//   'grey6',
//   'grey7',
//   'black',
//   'purpleShade10',
//   'purpleTint10',
//   'purple90',
//   'indigoTint15',
//   'indigoTint35',
//   'indigoTint50',
//   'transparent',
// ] as const;

// export type TGlobalColors = typeof globalColors[number];
