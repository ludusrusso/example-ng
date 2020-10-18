import { ApolloServer } from 'apollo-server-express';
import * as mainResolvers from './main.resolvers';
import * as greetingsResolvers from './greetings.resolvers';
import * as usersResolvers from './users.resolvers';
import { Resolvers } from './gen';
import { DocumentNode } from 'graphql';
import { createGraphqlContext } from './context';

interface ResolverDef {
  typeDefs: DocumentNode;
  resolvers: Resolvers;
}

function createGqlServer(...defs: ResolverDef[]) {
  const typeDefs = defs.map((t) => t.typeDefs);
  const resolvers = defs.map((t) => t.resolvers);
  return new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: createGraphqlContext,
  });
}

export const gqlServer = createGqlServer(
  mainResolvers,
  greetingsResolvers,
  usersResolvers
);
