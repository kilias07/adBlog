import '../styles/globals.scss';
import {useEffect} from "react";
import Layout from "../components/Layout";

function MyApp({Component, pageProps}) {

    useEffect(() => {
        import('tw-elements');
    }, []);

    return (
        <>
            <Layout>
            <Component {...pageProps} />
            </Layout>
        </>

    )
}

export default MyApp;
