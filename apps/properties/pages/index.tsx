import Link from 'next/link';
import { StyledHeading, StyledLink } from '../page-lib/index-page';

export function Index() {
  return (
    <div>
      <StyledHeading>Welcome to the new Properties application</StyledHeading>
      <ul>
        <StyledLink>
          <a href="/">Link to marketing site</a>
        </StyledLink>
        <StyledLink>
          <Link href={`/8795`}>Link to propertyId: 8795</Link>
        </StyledLink>
      </ul>
    </div>
  );
}

export default Index;
