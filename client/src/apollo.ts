import { ApolloClient, HttpLink, split, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { OperationDefinitionNode } from 'graphql';

// graphql api 주소
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

// subscription socket 통신 주소
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});

// 작성한 두 주소 병합
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

// apollo client 생성
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
