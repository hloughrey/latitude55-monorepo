import React from 'react';
import { Header } from '.';

export default {
  title: 'Atoms|Header',
  component: Header,
  parameters: {
    componentSubtitle: 'A lovely new component',
  },
};

export const Basic = () => <Header componentName="Header" />;
