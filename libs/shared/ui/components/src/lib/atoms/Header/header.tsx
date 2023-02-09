import React, { ReactElement } from 'react';

import { HeaderProperties } from './header.types';
import { StyledHeader } from './header.styled';

export function Header({ componentName }: HeaderProperties): ReactElement {
  return <StyledHeader>Header</StyledHeader>;
}
