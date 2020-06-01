import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document<DocumentInitialProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <link rel="icon" href="/public/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Kiwi" />
          <link rel="apple-touch-icon" href="/public/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
            rel="stylesheet"
          />
        </Head>
        <body className="preload">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
