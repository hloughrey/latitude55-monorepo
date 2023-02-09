import React, { ReactElement } from 'react';

import { FooterProperties } from './footer.types';
import { StyledFooter } from './footer.styled';

export function Footer({ componentName }: FooterProperties): ReactElement {
  return <StyledFooter>Footer</StyledFooter>;
}
