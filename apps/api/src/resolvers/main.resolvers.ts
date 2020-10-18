import { gql } from 'apollo-server-express';
import { Resolvers } from './gen';
import { ContextGraphql } from './context';

export const typeDefs = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export const resolvers: Resolvers<ContextGraphql> = {
  Query: {
    _: async (_, args, ctx) => {
      await ctx.prisma.$queryRaw`SELECT 1`;
      return true;
    },
  },
  Mutation: {
    _: () => true,
  },
};
