import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Lang = 
  | 'it'
  | 'en';

export type Greeting = {
  __typename?: 'Greeting';
  lang: Lang;
  greet: Scalars['String'];
};


export type GreetingGreetArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  getUsers: Array<User>;
  hello?: Maybe<Greeting>;
  random: Scalars['Float'];
};


export type QueryHelloArgs = {
  lang: Lang;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createUser: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  form: CreateUserForm;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  form: UpdateUserForm;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  full_name: Scalars['String'];
};

export type CreateUserForm = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
};

export type UpdateUserForm = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

export type HelloQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & { hello?: Maybe<(
    { __typename?: 'Greeting' }
    & Pick<Greeting, 'lang' | 'greet'>
  )> }
);

export type UserFragFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'first_name' | 'last_name' | 'full_name'>
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers: Array<(
    { __typename?: 'User' }
    & UserFragFragment
  )> }
);

export type CreateUserMutationVariables = Exact<{
  form: CreateUserForm;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & UserFragFragment
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  form: UpdateUserForm;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & UserFragFragment
  ) }
);

export const UserFragFragmentDoc = gql`
    fragment UserFrag on User {
  id
  email
  first_name
  last_name
  full_name
}
    `;
export const HelloDocument = gql`
    query Hello($name: String!) {
  hello: hello(lang: it) {
    lang
    greet(name: $name)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HelloGQL extends Apollo.Query<HelloQuery, HelloQueryVariables> {
    document = HelloDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    ...UserFrag
  }
}
    ${UserFragFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
    document = GetUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUserDocument = gql`
    mutation CreateUser($form: CreateUserForm!) {
  createUser(form: $form) {
    ...UserFrag
  }
}
    ${UserFragFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $form: UpdateUserForm!) {
  updateUser(form: $form, id: $id) {
    ...UserFrag
  }
}
    ${UserFragFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  interface WatchQueryOptionsAlone<V>
    extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}
    
  interface QueryOptionsAlone<V>
    extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}
    
  interface MutationOptionsAlone<T, V>
    extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}
    
  interface SubscriptionOptionsAlone<V>
    extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

  @Injectable({ providedIn: 'root' })
  export class ApiSDK {
    constructor(
      private helloGql: HelloGQL,
      private getUsersGql: GetUsersGQL,
      private createUserGql: CreateUserGQL,
      private updateUserGql: UpdateUserGQL
    ) {}
      
    hello(variables: HelloQueryVariables, options?: QueryOptionsAlone<HelloQueryVariables>) {
      return this.helloGql.fetch(variables, options)
    }
    
    helloWatch(variables: HelloQueryVariables, options?: WatchQueryOptionsAlone<HelloQueryVariables>) {
      return this.helloGql.watch(variables, options)
    }
    
    getUsers(variables?: GetUsersQueryVariables, options?: QueryOptionsAlone<GetUsersQueryVariables>) {
      return this.getUsersGql.fetch(variables, options)
    }
    
    getUsersWatch(variables?: GetUsersQueryVariables, options?: WatchQueryOptionsAlone<GetUsersQueryVariables>) {
      return this.getUsersGql.watch(variables, options)
    }
    
    createUser(variables: CreateUserMutationVariables, options?: MutationOptionsAlone<CreateUserMutation, CreateUserMutationVariables>) {
      return this.createUserGql.mutate(variables, options)
    }
    
    updateUser(variables: UpdateUserMutationVariables, options?: MutationOptionsAlone<UpdateUserMutation, UpdateUserMutationVariables>) {
      return this.updateUserGql.mutate(variables, options)
    }
  }