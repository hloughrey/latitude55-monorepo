import React from 'react';
import { Main } from '.';

export default {
  title: 'Atoms|Main',
  component: Main,
  parameters: {
    componentSubtitle: 'A lovely new component',
  },
};

export const Basic = () => <Main componentName="Main" />;
