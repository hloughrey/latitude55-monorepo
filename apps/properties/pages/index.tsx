import Link from 'next/link';

export function Index() {
  return (
    <div>
      <h1>Welcome to the new Properties application</h1>
      <ul>
        <li>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_DOMAIN}`} passHref>
            <a>Link to marketing site</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
