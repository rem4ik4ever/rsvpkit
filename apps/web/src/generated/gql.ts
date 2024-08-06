/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery AuthenticatedItem {\n  authenticatedItem {\n    __typename\n    ... on User {\n      __typename\n      id\n      name\n      firstName\n      lastName\n      avatarUrl\n      email\n      emailConfirmedAt\n      createdAt\n    }\n  }\n}\n": types.AuthenticatedItemDocument,
    "\nmutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      sessionToken\n      item {\n        __typename\n        id\n        email\n        name\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      __typename\n      message\n    }\n  }\n}\n": types.AuthenticateUserWithPasswordDocument,
    "\nmutation RegisterUser($email: String!, $password: String!, $name: String!) {\n  createUser(data: {\n    name: $name,\n    email: $email,\n    password: $password\n  }) {\n    __typename\n    id\n    name\n    email\n  }\n}\n": types.RegisterUserDocument,
    "\nmutation Logout {\n  endSession\n}\n": types.LogoutDocument,
    "\nmutation CreateEvent($data: EventCreateInput!) {\n  createEvent(data: $data) {\n    id\n    name\n    startsAt\n    endsAt\n    type\n    location\n    createdBy {\n      __typename\n      name\n      email\n    }\n    publishedAt\n    createdAt\n    updatedAt\n    plusOneAllowed\n    capacity\n    stages {\n      __typename\n      id\n      location\n      startTime\n      endTime\n    }\n    stagesCount\n  }\n}\n": types.CreateEventDocument,
    "\nquery Events($take: Int, $skip: Int!, $orderBy: [EventOrderByInput!]!, $where: EventWhereInput!) {\n  events(take: $take, skip: $skip, orderBy: $orderBy, where: $where) {\n    __typename\n    id\n    name\n    startsAt\n    endsAt\n    type\n    location\n    publishedAt\n    createdAt\n    updatedAt\n    plusOneAllowed\n    capacity\n    stagesCount\n    invitationsCount\n  }\n  eventsCount(where: $where)\n}\n": types.EventsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery AuthenticatedItem {\n  authenticatedItem {\n    __typename\n    ... on User {\n      __typename\n      id\n      name\n      firstName\n      lastName\n      avatarUrl\n      email\n      emailConfirmedAt\n      createdAt\n    }\n  }\n}\n"): (typeof documents)["\nquery AuthenticatedItem {\n  authenticatedItem {\n    __typename\n    ... on User {\n      __typename\n      id\n      name\n      firstName\n      lastName\n      avatarUrl\n      email\n      emailConfirmedAt\n      createdAt\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      sessionToken\n      item {\n        __typename\n        id\n        email\n        name\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      __typename\n      message\n    }\n  }\n}\n"): (typeof documents)["\nmutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      sessionToken\n      item {\n        __typename\n        id\n        email\n        name\n      }\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      __typename\n      message\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation RegisterUser($email: String!, $password: String!, $name: String!) {\n  createUser(data: {\n    name: $name,\n    email: $email,\n    password: $password\n  }) {\n    __typename\n    id\n    name\n    email\n  }\n}\n"): (typeof documents)["\nmutation RegisterUser($email: String!, $password: String!, $name: String!) {\n  createUser(data: {\n    name: $name,\n    email: $email,\n    password: $password\n  }) {\n    __typename\n    id\n    name\n    email\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation Logout {\n  endSession\n}\n"): (typeof documents)["\nmutation Logout {\n  endSession\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation CreateEvent($data: EventCreateInput!) {\n  createEvent(data: $data) {\n    id\n    name\n    startsAt\n    endsAt\n    type\n    location\n    createdBy {\n      __typename\n      name\n      email\n    }\n    publishedAt\n    createdAt\n    updatedAt\n    plusOneAllowed\n    capacity\n    stages {\n      __typename\n      id\n      location\n      startTime\n      endTime\n    }\n    stagesCount\n  }\n}\n"): (typeof documents)["\nmutation CreateEvent($data: EventCreateInput!) {\n  createEvent(data: $data) {\n    id\n    name\n    startsAt\n    endsAt\n    type\n    location\n    createdBy {\n      __typename\n      name\n      email\n    }\n    publishedAt\n    createdAt\n    updatedAt\n    plusOneAllowed\n    capacity\n    stages {\n      __typename\n      id\n      location\n      startTime\n      endTime\n    }\n    stagesCount\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Events($take: Int, $skip: Int!, $orderBy: [EventOrderByInput!]!, $where: EventWhereInput!) {\n  events(take: $take, skip: $skip, orderBy: $orderBy, where: $where) {\n    __typename\n    id\n    name\n    startsAt\n    endsAt\n    type\n    location\n    publishedAt\n    createdAt\n    updatedAt\n    plusOneAllowed\n    capacity\n    stagesCount\n    invitationsCount\n  }\n  eventsCount(where: $where)\n}\n"): (typeof documents)["\nquery Events($take: Int, $skip: Int!, $orderBy: [EventOrderByInput!]!, $where: EventWhereInput!) {\n  events(take: $take, skip: $skip, orderBy: $orderBy, where: $where) {\n    __typename\n    id\n    name\n    startsAt\n    endsAt\n    type\n    location\n    publishedAt\n    createdAt\n    updatedAt\n    plusOneAllowed\n    capacity\n    stagesCount\n    invitationsCount\n  }\n  eventsCount(where: $where)\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;