import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo-client'
import Layout from '../components/layout'

import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
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
