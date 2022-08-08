import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@mui/material';
import { store } from '../src/store';
import { theme } from '../src/helpers/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
