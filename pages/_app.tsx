import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo-client'
import Layout from '../components/layout'

import * as ga from '../utilities/google-analytics'

import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)
    
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                        strategy="lazyOnload"
                    />
                    <Script id="google-analytics" strategy="lazyOnload">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                        `}
                    </Script>
                </>
            )}
            <Head>
                <title>SetLife Solutions</title>
                <link rel='icon' href='favicon.ico' />
            </Head>
            <ApolloProvider client={client}>
                <Layout>
                    <div className='default-theme'>
                        <div>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </Layout>
            </ApolloProvider>
        </>
    )
}

export default MyApp
