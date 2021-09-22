import Link from 'next/link';

export function Index() {
  return (
    <div>
      <h1>Welcome to the new Marketing application</h1>
      <ul>
        <li>
          <Link href="/properties" passHref>
            <a>Link to properties</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
