import Link from 'next/link';
import { StyledHeading, StyledLink } from '../page-lib/index-page';

export function Index() {
  return (
    <div>
      <StyledHeading>Welcome to the new Marketing application</StyledHeading>
      <ul>
        <StyledLink>
          <Link href="/properties/" passHref>
            Link to properties
          </Link>
        </StyledLink>
      </ul>
    </div>
  );
}

export default Index;
