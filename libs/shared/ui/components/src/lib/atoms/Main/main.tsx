import React, { ReactElement } from 'react';

import { MainProperties } from './main.types';
import { StyledDiv } from './main.styled';

export function Main({ componentName }: MainProperties): ReactElement {
  return (
    <StyledDiv>Hello, I'm your new {componentName} component 👋!</StyledDiv>
  );
}
