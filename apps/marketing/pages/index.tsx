import Link from 'next/link';
import { StyledHeading } from '../page-lib/index-page';

export function Index() {
  return (
    <div>
      <StyledHeading>Welcome to the new Marketing application</StyledHeading>
      <ul>
        <li>
          <Link href="/properties/" passHref>
            <a>Link to properties</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
