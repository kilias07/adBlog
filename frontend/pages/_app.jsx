import '../styles/globals.scss';
import {useEffect} from "react";
import {useRouter} from "next/router";
import Script from "next/script";
import Layout from "../components/Layout";
import * as gtag from "../lib/gtag";


function MyApp({Component, pageProps}) {

    useEffect(() => {
        import('tw-elements');
    }, []);
    const router = useRouter();


    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <div className="bg-gray-100">
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gTag"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />

            <Layout>
            <Component {...pageProps} />
            </Layout>
        </div>

    )
}

export default MyApp;
