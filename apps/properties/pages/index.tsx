/* eslint-disable unicorn/prefer-node-protocol*/
import path from 'path';
path.resolve('./next.config.js');

import { StyledHeading } from '../page-lib/index-page';

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
      </ul>
    </div>
  );
}

export default Index;
