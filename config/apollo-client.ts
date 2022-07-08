import { ApolloClient, InMemoryCache } from '@apollo/client'

import { API_v1_URL } from '../constants'

const client = new ApolloClient({
    uri: API_v1_URL,
    cache: new InMemoryCache(),
});

export default client;