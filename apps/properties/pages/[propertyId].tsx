import { useRouter } from 'next/router';
import { StyledHeading } from '../page-lib/[propertyId]';

export default function Property() {
  const router = useRouter();
  const { propertyId } = router.query;

  return (
    <div>
      <StyledHeading>Your property ID is: {propertyId}</StyledHeading>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { propertyId: '@propertyId' } }],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  return {
    props: { query: { propertyId: '' } },
  };
}
