import Link from 'next/link';
import { StyledHeading } from '../page-lib/index-page';

export function Index() {
  return (
    <div>
      <StyledHeading>Welcome to the new Properties application</StyledHeading>
      <ul>
        <li>
          <Link href="https://s3-static-microfrontends.latitude55.dev" passHref>
            <a>Link to marketing site</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
