import { AppProps } from 'next/app';

import { GlobalStyles, lightTheme, darkTheme } from '@latitude55/theme';
import { ThemeProvider } from 'styled-components';
import { Footer, Header } from '@latitude55/shared/ui/components';

import Head from 'next/head';
import React, { Fragment } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Welcome to marketing!</title>
        </Head>
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: `${darkTheme.colors.background}`,
          }}
        >
          <Header />
          <div style={{ flex: 1, padding: '2rem' }}>
            <Component {...pageProps} />
          </div>
          <Footer />
        </main>
      </ThemeProvider>
    </Fragment>
  );
}

export default CustomApp;
