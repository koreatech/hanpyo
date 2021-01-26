import { ApolloServer, PubSub } from 'apollo-server-express';
import express, { Express } from 'express';
import { createServer, Server } from 'http';

// 좀 전에 생성한 schema
import schema from './config/schema';

// GraphQL 쿼리를 보낼 API URL주소
const GRAPHQL_ENDPOINT = '/graphql';

class App {
  public app: Server;
  private express: Express;
  private apolloServer: ApolloServer;
  private pubsub: PubSub;

  constructor() {
    this.express = express();
    this.app = createServer(this.express);
    this.pubsub = new PubSub();
    this.apolloServer = new ApolloServer({
      schema,
      context: (ctx) => ({ ...ctx, pubsub: this.pubsub }),
      playground: true,
    });
    this.middlewares();
  }

  // server에 등록할 미들웨어들
  private middlewares() {
    // apollo server와 express 연결
    this.apolloServer.applyMiddleware({
      app: this.express,
      path: GRAPHQL_ENDPOINT,
    });
    // subscription을 사용하기 위한 서버 연결
    this.apolloServer.installSubscriptionHandlers(this.app);
  }
}

export default new App().app;