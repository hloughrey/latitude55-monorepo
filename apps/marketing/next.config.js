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
};

module.exports = withNx(nextConfig);
