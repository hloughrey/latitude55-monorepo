import path from 'node:path';
path.resolve('./next.config.js');

import React from 'react';
import Link from 'next/link';
import { StyledHeading } from '../page-lib/index-page';

export function Index() {
  return (
    <div>
      <StyledHeading>Welcome to the new Marketing application</StyledHeading>
      <ul>
        <li>
          <Link href="/properties/" passHref>
            Link to properties
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
