export default function EnvironmentVariables() {
  return (
    <div>
      {/* <h2>Server</h2>
      <ul>
        <li>FEATURE_TOGGLE_BOOLEAN: {process.env.FEATURE_TOGGLE_BOOLEAN}</li>
        <li>FEATURE_TOGGLE_DATE: {process.env.FEATURE_TOGGLE_DATE}</li>
        <li>API_ENDPOINT: {process.env.API_ENDPOINT}</li>
        <li>SECRET_NUMBER: {process.env.SECRET_NUMBER}</li>
        <li>SECRET_STRING: {process.env.SECRET_STRING}</li>
      </ul> */}
      <h2>Browser - NEXT PROTECTED</h2>
      <ul>
        <li>
          NEXT_PUBLIC_FEATURE_TOGGLE_BOOLEAN:{' '}
          {process.env.NEXT_PUBLIC_FEATURE_TOGGLE_BOOLEAN}
        </li>
        <li>
          NEXT_PUBLIC_FEATURE_TOGGLE_DATE:{' '}
          {process.env.NEXT_PUBLIC_FEATURE_TOGGLE_DATE}
        </li>
        <li>
          NEXT_PUBLIC_API_ENDPOINT: {process.env.NEXT_PUBLIC_API_ENDPOINT}
        </li>
        <li>
          NEXT_PUBLIC_SECRET_NUMBER: {process.env.NEXT_PUBLIC_SECRET_NUMBER}
        </li>
        <li>
          NEXT_PUBLIC_SECRET_STRING: {process.env.NEXT_PUBLIC_SECRET_STRING}
        </li>
      </ul>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   console.log('FEATURE_TOGGLE_BOOLEAN: ', process.env.FEATURE_TOGGLE_BOOLEAN);
//   console.log('FEATURE_TOGGLE_DATE: ', process.env.FEATURE_TOGGLE_DATE);
//   console.log('API_ENDPOINT: ', process.env.API_ENDPOINT);
//   console.log('SECRET_NUMBER: ', process.env.SECRET_NUMBER);
//   console.log('SECRET_STRING: ', process.env.SECRET_STRING);

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
