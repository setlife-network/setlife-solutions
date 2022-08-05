import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo-client'
import Layout from '../components/layout'

import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <div className='default-theme'>
                    <div className='mx-8 md:mx-24 xl:mx-48'>
                        <Component {...pageProps} />
                    </div>
                </div>
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
