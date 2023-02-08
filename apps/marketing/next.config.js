// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  output: 'standalone',
  experimental: {
    // outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/properties/:slug*',
  //       destination:
  //         'https://aws-amplify-cdk.d1xpoe19tv959b.amplifyapp.com/properties/:slug*', // Matched parameters can be used in the destination
  //     },
  //     {
  //       source: '/properties',
  //       destination:
  //         'https://aws-amplify-cdk.d1xpoe19tv959b.amplifyapp.com/properties', // Matched parameters can be used in the destination
  //     },
  //   ];
  // },
};

module.exports = withNx(nextConfig);
