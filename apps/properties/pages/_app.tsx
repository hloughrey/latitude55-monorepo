import { AppProps } from 'next/app';

import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from '@latitude55/shared/ui/theme';
import { ThemeProvider } from 'styled-components';

import Head from 'next/head';
import React, { Fragment } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Welcome to properties!</title>
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </Fragment>
  );
}

export default CustomApp;
