import 'styled-components';
import { Theme } from '@latitude55/shared/ui/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
