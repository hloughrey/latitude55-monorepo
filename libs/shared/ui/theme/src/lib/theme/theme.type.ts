import { lightTheme } from './theme';

// export type TTheme = typeof lightTheme;

export type TThemeProperties = {
  theme: Theme;
};

export type TThemeColours = keyof typeof lightTheme.colors;
// export type TThemeShadows = keyof typeof lightTheme.shadow;

export type WithTheme<T = Record<string, unknown>> = T & { theme: Theme };

export const breakpoints = ['xs', 's', 'm', 'l', 'xl'] as const;
export type TBreakpoint = (typeof breakpoints)[number];

export type Theme = {
  name: string;
  colors: {
    primaryColor: string;
    secondaryColor: string;
    ribbon: string;
    background: string;
  };
};
