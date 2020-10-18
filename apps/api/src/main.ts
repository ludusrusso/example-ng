import * as express from 'express';
import { gqlServer } from './resolvers/server';

const app = express();
gqlServer.applyMiddleware({ app });

const PORT = 3000;
app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${gqlServer.graphqlPath}`
  )
);
