import { useRouter } from 'next/router';

export default function Property() {
  const router = useRouter();
  const { propertyId } = router.query;

  return (
    <div>
      <h2>Your property ID is: {propertyId}</h2>
    </div>
  );
}
