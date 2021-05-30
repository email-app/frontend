import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createClient = () =>
  new ApolloClient({
    uri: (import.meta as any).env.SNOWPACK_PUBLIC_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });
