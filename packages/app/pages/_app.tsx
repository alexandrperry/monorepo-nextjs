import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import ThemeProvider from '@kiwicom/orbit-components/lib/ThemeProvider';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import 'styles/normalize.css';
import 'styles/index.scss';
import 'styles/nprogress.css';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ orbit: defaultTokens }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
