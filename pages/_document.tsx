import Document, {
  Head, Main, NextScript, Html,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Doctorium description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collectStyles(
        <App {...props} />,
      ),
    });
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheets.seal();
  }
};
