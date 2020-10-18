import { gql } from 'apollo-server-express';
import { Greeting } from './types';
import { Resolvers } from './gen';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  enum Lang {
    it
    en
  }

  type Greeting {
    lang: Lang!
    greet(name: String = "World"): String!
  }

  extend type Query {
    hello(lang: Lang!): Greeting
    random: Float!
  }
`;

const greetings: { [k: string]: Greeting } = {
  en: {
    lang: 'en',
    template: 'Hello',
  },
  it: {
    lang: 'it',
    template: 'Ciao',
  },
};

// Provide resolver functions for your schema fields
export const resolvers: Resolvers = {
  Query: {
    hello: (parent, args, ctx, info) => {
      const lang = args.lang;
      return greetings[lang];
    },
    random: () => Math.random(),
  },
  Greeting: {
    greet: (parent, args) => {
      const template = parent.template;
      const name = args.name;
      return `${template} ${name}!`;
    },
  },
};
