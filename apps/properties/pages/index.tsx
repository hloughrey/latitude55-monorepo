/* eslint-disable unicorn/prefer-node-protocol*/
import Link from 'next/link';
import path from 'path';
path.resolve('./next.config.js');

import { StyledHeading, StyledLink } from '../page-lib/index-page';

export function Index() {
  return (
    <div>
      <StyledHeading>Welcome to the new Properties application</StyledHeading>
      <ul>
        <li>
          <a href="https://amplify.latitude55.dev" rel="noopener noreferrer">
            Link to marketing site
          </a>
        </li>
        <StyledLink>
          <Link href={`/8795`}>Link to propertyId: 8795</Link>
        </StyledLink>
      </ul>
    </div>
  );
}

export default Index;
