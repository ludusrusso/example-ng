import { gql } from 'apollo-server-express';
import { Resolvers } from './gen';
import { ContextGraphql } from './context';

export const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    first_name: String!
    last_name: String!
    full_name: String!
  }

  input CreateUserForm {
    email: String!
    first_name: String!
    last_name: String!
  }

  extend type Query {
    getUsers: [User!]!
  }

  extend type Mutation {
    createUser(form: CreateUserForm!): User!
  }
`;

export const resolvers: Resolvers<ContextGraphql> = {
  Query: {
    getUsers: async (_, _args, { prisma }) => {
      const users = prisma.user.findMany();
      return users;
    },
  },
  Mutation: {
    createUser: async (_, { form }, { prisma }) => {
      const user = await prisma.user.create({
        data: form,
      });
      return user;
    },
  },
  User: {
    full_name: (user) => {
      return `${user.first_name} ${user.last_name}`;
    },
  },
};
