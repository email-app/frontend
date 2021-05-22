import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: (import.meta as any).env.SNOWPACK_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
});
export default client;
