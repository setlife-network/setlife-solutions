import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: process.env.API_V1_ROUTE,
    cache: new InMemoryCache(),
});

export default client;