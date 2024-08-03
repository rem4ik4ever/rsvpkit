/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createSession?: Maybe<Session>;
  createSessions?: Maybe<Array<Maybe<Session>>>;
  createTeam?: Maybe<Team>;
  createTeamMember?: Maybe<TeamMember>;
  createTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  createTeams?: Maybe<Array<Maybe<Team>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteSession?: Maybe<Session>;
  deleteSessions?: Maybe<Array<Maybe<Session>>>;
  deleteTeam?: Maybe<Team>;
  deleteTeamMember?: Maybe<TeamMember>;
  deleteTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  deleteTeams?: Maybe<Array<Maybe<Team>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateSession?: Maybe<Session>;
  updateSessions?: Maybe<Array<Maybe<Session>>>;
  updateTeam?: Maybe<Team>;
  updateTeamMember?: Maybe<TeamMember>;
  updateTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  updateTeams?: Maybe<Array<Maybe<Team>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateSessionsArgs = {
  data: Array<SessionCreateInput>;
};


export type MutationCreateTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateTeamMemberArgs = {
  data: TeamMemberCreateInput;
};


export type MutationCreateTeamMembersArgs = {
  data: Array<TeamMemberCreateInput>;
};


export type MutationCreateTeamsArgs = {
  data: Array<TeamCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteSessionsArgs = {
  where: Array<SessionWhereUniqueInput>;
};


export type MutationDeleteTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationDeleteTeamMemberArgs = {
  where: TeamMemberWhereUniqueInput;
};


export type MutationDeleteTeamMembersArgs = {
  where: Array<TeamMemberWhereUniqueInput>;
};


export type MutationDeleteTeamsArgs = {
  where: Array<TeamWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateSessionsArgs = {
  data: Array<SessionUpdateArgs>;
};


export type MutationUpdateTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpdateTeamMemberArgs = {
  data: TeamMemberUpdateInput;
  where: TeamMemberWhereUniqueInput;
};


export type MutationUpdateTeamMembersArgs = {
  data: Array<TeamMemberUpdateArgs>;
};


export type MutationUpdateTeamsArgs = {
  data: Array<TeamUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  session?: Maybe<Session>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  team?: Maybe<Team>;
  teamMember?: Maybe<TeamMember>;
  teamMembers?: Maybe<Array<TeamMember>>;
  teamMembersCount?: Maybe<Scalars['Int']['output']>;
  teams?: Maybe<Array<Team>>;
  teamsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: Array<SessionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SessionWhereInput;
};


export type QuerySessionsCountArgs = {
  where?: SessionWhereInput;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamMemberArgs = {
  where: TeamMemberWhereUniqueInput;
};


export type QueryTeamMembersArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  orderBy?: Array<TeamMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamMemberWhereInput;
};


export type QueryTeamMembersCountArgs = {
  where?: TeamMemberWhereInput;
};


export type QueryTeamsArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  orderBy?: Array<TeamOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamWhereInput;
};


export type QueryTeamsCountArgs = {
  where?: TeamWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Session = {
  __typename?: 'Session';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type SessionCreateInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type SessionManyRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionOrderByInput = {
  accessToken?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  expiresAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ip?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  userAgent?: InputMaybe<OrderDirection>;
};

export type SessionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  create?: InputMaybe<Array<SessionCreateInput>>;
};

export type SessionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  create?: InputMaybe<Array<SessionCreateInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
};

export type SessionUpdateArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  accessToken?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  ip?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  userAgent?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  __typename?: 'Team';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<TeamMember>>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type TeamMembersArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  orderBy?: Array<TeamMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamMemberWhereInput;
};


export type TeamMembersCountArgs = {
  where?: TeamMemberWhereInput;
};

export type TeamCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<TeamMemberRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type TeamMemberCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type TeamMemberManyRelationFilter = {
  every?: InputMaybe<TeamMemberWhereInput>;
  none?: InputMaybe<TeamMemberWhereInput>;
  some?: InputMaybe<TeamMemberWhereInput>;
};

export type TeamMemberOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  removedAt?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TeamMemberRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<TeamMemberCreateInput>>;
};

export type TeamMemberRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<TeamMemberCreateInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
};

export type TeamMemberUpdateArgs = {
  data: TeamMemberUpdateInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type TeamMemberWhereInput = {
  AND?: InputMaybe<Array<TeamMemberWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  removedAt?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<StringNullableFilter>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type TeamMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TeamOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TeamRelateToOneForCreateInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  create?: InputMaybe<TeamCreateInput>;
};

export type TeamRelateToOneForUpdateInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  create?: InputMaybe<TeamCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamUpdateArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<TeamMemberRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<TeamMemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentTeam?: Maybe<Team>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  teamMember?: Maybe<Array<TeamMember>>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
};


export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: Array<SessionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SessionWhereInput;
};


export type UserSessionsCountArgs = {
  where?: SessionWhereInput;
};


export type UserTeamMemberArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  orderBy?: Array<TeamMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamMemberWhereInput;
};


export type UserTeamMemberCountArgs = {
  where?: TeamMemberWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentTeam?: InputMaybe<TeamRelateToOneForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailConfirmedAt?: InputMaybe<Scalars['DateTime']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionRelateToManyForCreateInput>;
  teamMember?: InputMaybe<TeamMemberRelateToManyForCreateInput>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  emailConfirmedAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentTeam?: InputMaybe<TeamRelateToOneForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailConfirmedAt?: InputMaybe<Scalars['DateTime']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionRelateToManyForUpdateInput>;
  teamMember?: InputMaybe<TeamMemberRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentTeam?: InputMaybe<TeamWhereInput>;
  email?: InputMaybe<StringFilter>;
  emailConfirmedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  sessions?: InputMaybe<SessionManyRelationFilter>;
  teamMember?: InputMaybe<TeamMemberManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticatedItemQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthenticatedItemQuery = { __typename?: 'Query', authenticatedItem?: { __typename: 'User', id: string, name?: string | null, email?: string | null, emailConfirmedAt?: any | null, createdAt?: any | null } | null };

export type AuthenticateUserWithPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AuthenticateUserWithPasswordMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename?: 'User', id: string, email?: string | null, name?: string | null } } | null };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name?: string | null, email?: string | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', endSession: boolean };


export const AuthenticatedItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailConfirmedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticatedItemQuery, AuthenticatedItemQueryVariables>;
export const AuthenticateUserWithPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthenticateUserWithPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticateUserWithPasswordMutation, AuthenticateUserWithPasswordMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endSession"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createSession?: Maybe<Session>;
  createSessions?: Maybe<Array<Maybe<Session>>>;
  createTeam?: Maybe<Team>;
  createTeamMember?: Maybe<TeamMember>;
  createTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  createTeams?: Maybe<Array<Maybe<Team>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteSession?: Maybe<Session>;
  deleteSessions?: Maybe<Array<Maybe<Session>>>;
  deleteTeam?: Maybe<Team>;
  deleteTeamMember?: Maybe<TeamMember>;
  deleteTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  deleteTeams?: Maybe<Array<Maybe<Team>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateSession?: Maybe<Session>;
  updateSessions?: Maybe<Array<Maybe<Session>>>;
  updateTeam?: Maybe<Team>;
  updateTeamMember?: Maybe<TeamMember>;
  updateTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  updateTeams?: Maybe<Array<Maybe<Team>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateSessionsArgs = {
  data: Array<SessionCreateInput>;
};


export type MutationCreateTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateTeamMemberArgs = {
  data: TeamMemberCreateInput;
};


export type MutationCreateTeamMembersArgs = {
  data: Array<TeamMemberCreateInput>;
};


export type MutationCreateTeamsArgs = {
  data: Array<TeamCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteSessionsArgs = {
  where: Array<SessionWhereUniqueInput>;
};


export type MutationDeleteTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationDeleteTeamMemberArgs = {
  where: TeamMemberWhereUniqueInput;
};


export type MutationDeleteTeamMembersArgs = {
  where: Array<TeamMemberWhereUniqueInput>;
};


export type MutationDeleteTeamsArgs = {
  where: Array<TeamWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateSessionsArgs = {
  data: Array<SessionUpdateArgs>;
};


export type MutationUpdateTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpdateTeamMemberArgs = {
  data: TeamMemberUpdateInput;
  where: TeamMemberWhereUniqueInput;
};


export type MutationUpdateTeamMembersArgs = {
  data: Array<TeamMemberUpdateArgs>;
};


export type MutationUpdateTeamsArgs = {
  data: Array<TeamUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  session?: Maybe<Session>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  team?: Maybe<Team>;
  teamMember?: Maybe<TeamMember>;
  teamMembers?: Maybe<Array<TeamMember>>;
  teamMembersCount?: Maybe<Scalars['Int']['output']>;
  teams?: Maybe<Array<Team>>;
  teamsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: Array<SessionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SessionWhereInput;
};


export type QuerySessionsCountArgs = {
  where?: SessionWhereInput;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamMemberArgs = {
  where: TeamMemberWhereUniqueInput;
};


export type QueryTeamMembersArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  orderBy?: Array<TeamMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamMemberWhereInput;
};


export type QueryTeamMembersCountArgs = {
  where?: TeamMemberWhereInput;
};


export type QueryTeamsArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  orderBy?: Array<TeamOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamWhereInput;
};


export type QueryTeamsCountArgs = {
  where?: TeamWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Session = {
  __typename?: 'Session';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type SessionCreateInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type SessionManyRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionOrderByInput = {
  accessToken?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  expiresAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ip?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  userAgent?: InputMaybe<OrderDirection>;
};

export type SessionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  create?: InputMaybe<Array<SessionCreateInput>>;
};

export type SessionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  create?: InputMaybe<Array<SessionCreateInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
};

export type SessionUpdateArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  accessToken?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  ip?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  userAgent?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  __typename?: 'Team';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<TeamMember>>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type TeamMembersArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  orderBy?: Array<TeamMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamMemberWhereInput;
};


export type TeamMembersCountArgs = {
  where?: TeamMemberWhereInput;
};

export type TeamCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<TeamMemberRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type TeamMemberCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type TeamMemberManyRelationFilter = {
  every?: InputMaybe<TeamMemberWhereInput>;
  none?: InputMaybe<TeamMemberWhereInput>;
  some?: InputMaybe<TeamMemberWhereInput>;
};

export type TeamMemberOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  removedAt?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TeamMemberRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<TeamMemberCreateInput>>;
};

export type TeamMemberRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<TeamMemberCreateInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
};

export type TeamMemberUpdateArgs = {
  data: TeamMemberUpdateInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type TeamMemberWhereInput = {
  AND?: InputMaybe<Array<TeamMemberWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  removedAt?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<StringNullableFilter>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type TeamMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TeamOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TeamRelateToOneForCreateInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  create?: InputMaybe<TeamCreateInput>;
};

export type TeamRelateToOneForUpdateInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  create?: InputMaybe<TeamCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamUpdateArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<TeamMemberRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<TeamMemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentTeam?: Maybe<Team>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  teamMember?: Maybe<Array<TeamMember>>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
};


export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: Array<SessionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SessionWhereInput;
};


export type UserSessionsCountArgs = {
  where?: SessionWhereInput;
};


export type UserTeamMemberArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  orderBy?: Array<TeamMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamMemberWhereInput;
};


export type UserTeamMemberCountArgs = {
  where?: TeamMemberWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentTeam?: InputMaybe<TeamRelateToOneForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailConfirmedAt?: InputMaybe<Scalars['DateTime']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionRelateToManyForCreateInput>;
  teamMember?: InputMaybe<TeamMemberRelateToManyForCreateInput>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  emailConfirmedAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentTeam?: InputMaybe<TeamRelateToOneForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailConfirmedAt?: InputMaybe<Scalars['DateTime']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionRelateToManyForUpdateInput>;
  teamMember?: InputMaybe<TeamMemberRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentTeam?: InputMaybe<TeamWhereInput>;
  email?: InputMaybe<StringFilter>;
  emailConfirmedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  sessions?: InputMaybe<SessionManyRelationFilter>;
  teamMember?: InputMaybe<TeamMemberManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};
