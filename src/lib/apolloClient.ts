import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://magento.test/graphql', // Use environment variable or fallback to default
  }),
  cache: new InMemoryCache(),
});

export default client;