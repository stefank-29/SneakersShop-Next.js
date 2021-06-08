// import '../styles/globals.css';
import Page from '../components/Page';
import { CartStateProvider } from '../lib/cartState';

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
