// import '../styles/globals.css';
import NProgress from 'nprogress';
import Page from '../components/Page';
import Router from 'next/router';
import { CartStateProvider } from '../lib/cartState';
import '../styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <CartStateProvider>
            <Page>
                <Component {...pageProps} />
            </Page>
        </CartStateProvider>
    );
}

export default MyApp;
