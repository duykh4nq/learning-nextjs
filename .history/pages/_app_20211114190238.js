import Layout from './../components/Layout';
import "../build/style.css";

function MyApp({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp
