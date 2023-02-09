/* eslint-disable unicorn/prefer-node-protocol*/
import path from 'path';
path.resolve('./next.config.js');

import Link from 'next/link';
import { StyledHeading } from '../page-lib/index-page';

export function Index() {
  return (
    <div>
      <StyledHeading>
        Welcome to the new Properties application - should not deploy
      </StyledHeading>
      <ul>
        <li>
          <Link href={'/'} passHref>
            Link to marketing site
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
