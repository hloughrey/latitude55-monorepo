import Link from 'next/link';
import { StyledHeading } from '../page-lib/index-page';

export function Index() {
  return (
    <div>
      <StyledHeading>Welcome to the new Properties application</StyledHeading>
      <ul>
        <li>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_DOMAIN}`} passHref>
            Link to marketing site
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
