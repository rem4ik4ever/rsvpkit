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

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_at?: Maybe<Scalars['DateTime']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type AccountManyRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderByInput = {
  access_token?: InputMaybe<OrderDirection>;
  expires_at?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  id_token?: InputMaybe<OrderDirection>;
  provider?: InputMaybe<OrderDirection>;
  providerAccountId?: InputMaybe<OrderDirection>;
  refresh_token?: InputMaybe<OrderDirection>;
  refresh_token_expires_at?: InputMaybe<OrderDirection>;
  scope?: InputMaybe<OrderDirection>;
  session_state?: InputMaybe<OrderDirection>;
  token_type?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type AccountRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  create?: InputMaybe<Array<AccountCreateInput>>;
};

export type AccountRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  create?: InputMaybe<Array<AccountCreateInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
};

export type AccountUpdateArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  expires_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  id_token?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringFilter>;
  refresh_token_expires_at?: InputMaybe<DateTimeNullableFilter>;
  scope?: InputMaybe<StringFilter>;
  session_state?: InputMaybe<StringFilter>;
  token_type?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
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

export type Event = {
  __typename?: 'Event';
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  invitations?: Maybe<Array<Invitation>>;
  invitationsCount?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  plusOneAllowed?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stages?: Maybe<Array<EventStage>>;
  stagesCount?: Maybe<Scalars['Int']['output']>;
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  team?: Maybe<Team>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EventInvitationsArgs = {
  cursor?: InputMaybe<InvitationWhereUniqueInput>;
  orderBy?: Array<InvitationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvitationWhereInput;
};


export type EventInvitationsCountArgs = {
  where?: InvitationWhereInput;
};


export type EventStagesArgs = {
  cursor?: InputMaybe<EventStageWhereUniqueInput>;
  orderBy?: Array<EventStageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventStageWhereInput;
};


export type EventStagesCountArgs = {
  where?: EventStageWhereInput;
};

export type EventCreateInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitations?: InputMaybe<InvitationRelateToManyForCreateInput>;
  location?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plusOneAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stages?: InputMaybe<EventStageRelateToManyForCreateInput>;
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventManyRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByInput = {
  capacity?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  endsAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  plusOneAllowed?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
  startsAt?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
};

export type EventRelateToOneForCreateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
};

export type EventRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventStage = {
  __typename?: 'EventStage';
  attendance?: Maybe<Array<GuestAttendance>>;
  attendanceCount?: Maybe<Scalars['Int']['output']>;
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stageDate?: Maybe<Scalars['DateTime']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EventStageAttendanceArgs = {
  cursor?: InputMaybe<GuestAttendanceWhereUniqueInput>;
  orderBy?: Array<GuestAttendanceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GuestAttendanceWhereInput;
};


export type EventStageAttendanceCountArgs = {
  where?: GuestAttendanceWhereInput;
};

export type EventStageCreateInput = {
  attendance?: InputMaybe<GuestAttendanceRelateToManyForCreateInput>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  location?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stageDate?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventStageManyRelationFilter = {
  every?: InputMaybe<EventStageWhereInput>;
  none?: InputMaybe<EventStageWhereInput>;
  some?: InputMaybe<EventStageWhereInput>;
};

export type EventStageOrderByInput = {
  capacity?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  endTime?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  stageDate?: InputMaybe<OrderDirection>;
  startTime?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventStageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventStageWhereUniqueInput>>;
  create?: InputMaybe<Array<EventStageCreateInput>>;
};

export type EventStageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventStageWhereUniqueInput>>;
  create?: InputMaybe<Array<EventStageCreateInput>>;
  disconnect?: InputMaybe<Array<EventStageWhereUniqueInput>>;
  set?: InputMaybe<Array<EventStageWhereUniqueInput>>;
};

export type EventStageRelateToOneForCreateInput = {
  connect?: InputMaybe<EventStageWhereUniqueInput>;
  create?: InputMaybe<EventStageCreateInput>;
};

export type EventStageRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventStageWhereUniqueInput>;
  create?: InputMaybe<EventStageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventStageUpdateArgs = {
  data: EventStageUpdateInput;
  where: EventStageWhereUniqueInput;
};

export type EventStageUpdateInput = {
  attendance?: InputMaybe<GuestAttendanceRelateToManyForUpdateInput>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  location?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stageDate?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventStageWhereInput = {
  AND?: InputMaybe<Array<EventStageWhereInput>>;
  NOT?: InputMaybe<Array<EventStageWhereInput>>;
  OR?: InputMaybe<Array<EventStageWhereInput>>;
  attendance?: InputMaybe<GuestAttendanceManyRelationFilter>;
  capacity?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  endTime?: InputMaybe<StringFilter>;
  event?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  stageDate?: InputMaybe<DateTimeFilter>;
  startTime?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type EventStageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventUpdateArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitations?: InputMaybe<InvitationRelateToManyForUpdateInput>;
  location?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plusOneAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stages?: InputMaybe<EventStageRelateToManyForUpdateInput>;
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  capacity?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  endsAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  invitations?: InputMaybe<InvitationManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  plusOneAllowed?: InputMaybe<BooleanFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  stages?: InputMaybe<EventStageManyRelationFilter>;
  startsAt?: InputMaybe<DateTimeFilter>;
  team?: InputMaybe<TeamWhereInput>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Guest = {
  __typename?: 'Guest';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invitations?: Maybe<Array<Invitation>>;
  invitationsCount?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};


export type GuestInvitationsArgs = {
  cursor?: InputMaybe<InvitationWhereUniqueInput>;
  orderBy?: Array<InvitationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvitationWhereInput;
};


export type GuestInvitationsCountArgs = {
  where?: InvitationWhereInput;
};

export type GuestAttendance = {
  __typename?: 'GuestAttendance';
  attending?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  invitation?: Maybe<Invitation>;
  stage?: Maybe<EventStage>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GuestAttendanceCreateInput = {
  attending?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitation?: InputMaybe<InvitationRelateToOneForCreateInput>;
  stage?: InputMaybe<EventStageRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GuestAttendanceManyRelationFilter = {
  every?: InputMaybe<GuestAttendanceWhereInput>;
  none?: InputMaybe<GuestAttendanceWhereInput>;
  some?: InputMaybe<GuestAttendanceWhereInput>;
};

export type GuestAttendanceOrderByInput = {
  attending?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type GuestAttendanceRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GuestAttendanceWhereUniqueInput>>;
  create?: InputMaybe<Array<GuestAttendanceCreateInput>>;
};

export type GuestAttendanceRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GuestAttendanceWhereUniqueInput>>;
  create?: InputMaybe<Array<GuestAttendanceCreateInput>>;
  disconnect?: InputMaybe<Array<GuestAttendanceWhereUniqueInput>>;
  set?: InputMaybe<Array<GuestAttendanceWhereUniqueInput>>;
};

export type GuestAttendanceUpdateArgs = {
  data: GuestAttendanceUpdateInput;
  where: GuestAttendanceWhereUniqueInput;
};

export type GuestAttendanceUpdateInput = {
  attending?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitation?: InputMaybe<InvitationRelateToOneForUpdateInput>;
  stage?: InputMaybe<EventStageRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GuestAttendanceWhereInput = {
  AND?: InputMaybe<Array<GuestAttendanceWhereInput>>;
  NOT?: InputMaybe<Array<GuestAttendanceWhereInput>>;
  OR?: InputMaybe<Array<GuestAttendanceWhereInput>>;
  attending?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  invitation?: InputMaybe<InvitationWhereInput>;
  stage?: InputMaybe<EventStageWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type GuestAttendanceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GuestCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  invitations?: InputMaybe<InvitationRelateToManyForCreateInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type GuestOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  city?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  zipCode?: InputMaybe<OrderDirection>;
};

export type GuestRelateToOneForCreateInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  create?: InputMaybe<GuestCreateInput>;
};

export type GuestRelateToOneForUpdateInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  create?: InputMaybe<GuestCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GuestUpdateArgs = {
  data: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};

export type GuestUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  invitations?: InputMaybe<InvitationRelateToManyForUpdateInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type GuestWhereInput = {
  AND?: InputMaybe<Array<GuestWhereInput>>;
  NOT?: InputMaybe<Array<GuestWhereInput>>;
  OR?: InputMaybe<Array<GuestWhereInput>>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  invitations?: InputMaybe<InvitationManyRelationFilter>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  zipCode?: InputMaybe<StringFilter>;
};

export type GuestWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Invitation = {
  __typename?: 'Invitation';
  attendance?: Maybe<Array<GuestAttendance>>;
  attendanceCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  event?: Maybe<Event>;
  guest?: Maybe<Guest>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  plusOneAllowed?: Maybe<Scalars['Boolean']['output']>;
  plusOneName?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['String']['output']>;
  sentDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type InvitationAttendanceArgs = {
  cursor?: InputMaybe<GuestAttendanceWhereUniqueInput>;
  orderBy?: Array<GuestAttendanceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GuestAttendanceWhereInput;
};


export type InvitationAttendanceCountArgs = {
  where?: GuestAttendanceWhereInput;
};

export type InvitationCreateInput = {
  attendance?: InputMaybe<GuestAttendanceRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  guest?: InputMaybe<GuestRelateToOneForCreateInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  plusOneAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  plusOneName?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['String']['input']>;
  sentDate?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvitationManyRelationFilter = {
  every?: InputMaybe<InvitationWhereInput>;
  none?: InputMaybe<InvitationWhereInput>;
  some?: InputMaybe<InvitationWhereInput>;
};

export type InvitationOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  notes?: InputMaybe<OrderDirection>;
  plusOneAllowed?: InputMaybe<OrderDirection>;
  plusOneName?: InputMaybe<OrderDirection>;
  response?: InputMaybe<OrderDirection>;
  sentDate?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type InvitationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  create?: InputMaybe<Array<InvitationCreateInput>>;
};

export type InvitationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  create?: InputMaybe<Array<InvitationCreateInput>>;
  disconnect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  set?: InputMaybe<Array<InvitationWhereUniqueInput>>;
};

export type InvitationRelateToOneForCreateInput = {
  connect?: InputMaybe<InvitationWhereUniqueInput>;
  create?: InputMaybe<InvitationCreateInput>;
};

export type InvitationRelateToOneForUpdateInput = {
  connect?: InputMaybe<InvitationWhereUniqueInput>;
  create?: InputMaybe<InvitationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InvitationUpdateArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpdateInput = {
  attendance?: InputMaybe<GuestAttendanceRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  guest?: InputMaybe<GuestRelateToOneForUpdateInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  plusOneAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  plusOneName?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['String']['input']>;
  sentDate?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvitationWhereInput = {
  AND?: InputMaybe<Array<InvitationWhereInput>>;
  NOT?: InputMaybe<Array<InvitationWhereInput>>;
  OR?: InputMaybe<Array<InvitationWhereInput>>;
  attendance?: InputMaybe<GuestAttendanceManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventWhereInput>;
  guest?: InputMaybe<GuestWhereInput>;
  id?: InputMaybe<IdFilter>;
  notes?: InputMaybe<StringFilter>;
  plusOneAllowed?: InputMaybe<BooleanFilter>;
  plusOneName?: InputMaybe<StringFilter>;
  response?: InputMaybe<StringNullableFilter>;
  sentDate?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type InvitationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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
  createAccount?: Maybe<Account>;
  createAccounts?: Maybe<Array<Maybe<Account>>>;
  createEvent?: Maybe<Event>;
  createEventStage?: Maybe<EventStage>;
  createEventStages?: Maybe<Array<Maybe<EventStage>>>;
  createEvents?: Maybe<Array<Maybe<Event>>>;
  createGuest?: Maybe<Guest>;
  createGuestAttendance?: Maybe<GuestAttendance>;
  createGuestAttendances?: Maybe<Array<Maybe<GuestAttendance>>>;
  createGuests?: Maybe<Array<Maybe<Guest>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInvitation?: Maybe<Invitation>;
  createInvitations?: Maybe<Array<Maybe<Invitation>>>;
  createSession?: Maybe<Session>;
  createSessions?: Maybe<Array<Maybe<Session>>>;
  createSubscription?: Maybe<Subscription>;
  createSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  createTeam?: Maybe<Team>;
  createTeamMember?: Maybe<TeamMember>;
  createTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  createTeams?: Maybe<Array<Maybe<Team>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAccount?: Maybe<Account>;
  deleteAccounts?: Maybe<Array<Maybe<Account>>>;
  deleteEvent?: Maybe<Event>;
  deleteEventStage?: Maybe<EventStage>;
  deleteEventStages?: Maybe<Array<Maybe<EventStage>>>;
  deleteEvents?: Maybe<Array<Maybe<Event>>>;
  deleteGuest?: Maybe<Guest>;
  deleteGuestAttendance?: Maybe<GuestAttendance>;
  deleteGuestAttendances?: Maybe<Array<Maybe<GuestAttendance>>>;
  deleteGuests?: Maybe<Array<Maybe<Guest>>>;
  deleteInvitation?: Maybe<Invitation>;
  deleteInvitations?: Maybe<Array<Maybe<Invitation>>>;
  deleteSession?: Maybe<Session>;
  deleteSessions?: Maybe<Array<Maybe<Session>>>;
  deleteSubscription?: Maybe<Subscription>;
  deleteSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  deleteTeam?: Maybe<Team>;
  deleteTeamMember?: Maybe<TeamMember>;
  deleteTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  deleteTeams?: Maybe<Array<Maybe<Team>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateAccount?: Maybe<Account>;
  updateAccounts?: Maybe<Array<Maybe<Account>>>;
  updateEvent?: Maybe<Event>;
  updateEventStage?: Maybe<EventStage>;
  updateEventStages?: Maybe<Array<Maybe<EventStage>>>;
  updateEvents?: Maybe<Array<Maybe<Event>>>;
  updateGuest?: Maybe<Guest>;
  updateGuestAttendance?: Maybe<GuestAttendance>;
  updateGuestAttendances?: Maybe<Array<Maybe<GuestAttendance>>>;
  updateGuests?: Maybe<Array<Maybe<Guest>>>;
  updateInvitation?: Maybe<Invitation>;
  updateInvitations?: Maybe<Array<Maybe<Invitation>>>;
  updateSession?: Maybe<Session>;
  updateSessions?: Maybe<Array<Maybe<Session>>>;
  updateSubscription?: Maybe<Subscription>;
  updateSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
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


export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateAccountsArgs = {
  data: Array<AccountCreateInput>;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateEventStageArgs = {
  data: EventStageCreateInput;
};


export type MutationCreateEventStagesArgs = {
  data: Array<EventStageCreateInput>;
};


export type MutationCreateEventsArgs = {
  data: Array<EventCreateInput>;
};


export type MutationCreateGuestArgs = {
  data: GuestCreateInput;
};


export type MutationCreateGuestAttendanceArgs = {
  data: GuestAttendanceCreateInput;
};


export type MutationCreateGuestAttendancesArgs = {
  data: Array<GuestAttendanceCreateInput>;
};


export type MutationCreateGuestsArgs = {
  data: Array<GuestCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateInvitationArgs = {
  data: InvitationCreateInput;
};


export type MutationCreateInvitationsArgs = {
  data: Array<InvitationCreateInput>;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateSessionsArgs = {
  data: Array<SessionCreateInput>;
};


export type MutationCreateSubscriptionArgs = {
  data: SubscriptionCreateInput;
};


export type MutationCreateSubscriptionsArgs = {
  data: Array<SubscriptionCreateInput>;
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


export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteAccountsArgs = {
  where: Array<AccountWhereUniqueInput>;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteEventStageArgs = {
  where: EventStageWhereUniqueInput;
};


export type MutationDeleteEventStagesArgs = {
  where: Array<EventStageWhereUniqueInput>;
};


export type MutationDeleteEventsArgs = {
  where: Array<EventWhereUniqueInput>;
};


export type MutationDeleteGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type MutationDeleteGuestAttendanceArgs = {
  where: GuestAttendanceWhereUniqueInput;
};


export type MutationDeleteGuestAttendancesArgs = {
  where: Array<GuestAttendanceWhereUniqueInput>;
};


export type MutationDeleteGuestsArgs = {
  where: Array<GuestWhereUniqueInput>;
};


export type MutationDeleteInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type MutationDeleteInvitationsArgs = {
  where: Array<InvitationWhereUniqueInput>;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteSessionsArgs = {
  where: Array<SessionWhereUniqueInput>;
};


export type MutationDeleteSubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type MutationDeleteSubscriptionsArgs = {
  where: Array<SubscriptionWhereUniqueInput>;
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


export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateAccountsArgs = {
  data: Array<AccountUpdateArgs>;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventStageArgs = {
  data: EventStageUpdateInput;
  where: EventStageWhereUniqueInput;
};


export type MutationUpdateEventStagesArgs = {
  data: Array<EventStageUpdateArgs>;
};


export type MutationUpdateEventsArgs = {
  data: Array<EventUpdateArgs>;
};


export type MutationUpdateGuestArgs = {
  data: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};


export type MutationUpdateGuestAttendanceArgs = {
  data: GuestAttendanceUpdateInput;
  where: GuestAttendanceWhereUniqueInput;
};


export type MutationUpdateGuestAttendancesArgs = {
  data: Array<GuestAttendanceUpdateArgs>;
};


export type MutationUpdateGuestsArgs = {
  data: Array<GuestUpdateArgs>;
};


export type MutationUpdateInvitationArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};


export type MutationUpdateInvitationsArgs = {
  data: Array<InvitationUpdateArgs>;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateSessionsArgs = {
  data: Array<SessionUpdateArgs>;
};


export type MutationUpdateSubscriptionArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpdateSubscriptionsArgs = {
  data: Array<SubscriptionUpdateArgs>;
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
  account?: Maybe<Account>;
  accounts?: Maybe<Array<Account>>;
  accountsCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  event?: Maybe<Event>;
  eventStage?: Maybe<EventStage>;
  eventStages?: Maybe<Array<EventStage>>;
  eventStagesCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  guest?: Maybe<Guest>;
  guestAttendance?: Maybe<GuestAttendance>;
  guestAttendances?: Maybe<Array<GuestAttendance>>;
  guestAttendancesCount?: Maybe<Scalars['Int']['output']>;
  guests?: Maybe<Array<Guest>>;
  guestsCount?: Maybe<Scalars['Int']['output']>;
  invitation?: Maybe<Invitation>;
  invitations?: Maybe<Array<Invitation>>;
  invitationsCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  session?: Maybe<Session>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  subscription?: Maybe<Subscription>;
  subscriptions?: Maybe<Array<Subscription>>;
  subscriptionsCount?: Maybe<Scalars['Int']['output']>;
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


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: Array<AccountOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AccountWhereInput;
};


export type QueryAccountsCountArgs = {
  where?: AccountWhereInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventStageArgs = {
  where: EventStageWhereUniqueInput;
};


export type QueryEventStagesArgs = {
  cursor?: InputMaybe<EventStageWhereUniqueInput>;
  orderBy?: Array<EventStageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventStageWhereInput;
};


export type QueryEventStagesCountArgs = {
  where?: EventStageWhereInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type QueryEventsCountArgs = {
  where?: EventWhereInput;
};


export type QueryGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type QueryGuestAttendanceArgs = {
  where: GuestAttendanceWhereUniqueInput;
};


export type QueryGuestAttendancesArgs = {
  cursor?: InputMaybe<GuestAttendanceWhereUniqueInput>;
  orderBy?: Array<GuestAttendanceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GuestAttendanceWhereInput;
};


export type QueryGuestAttendancesCountArgs = {
  where?: GuestAttendanceWhereInput;
};


export type QueryGuestsArgs = {
  cursor?: InputMaybe<GuestWhereUniqueInput>;
  orderBy?: Array<GuestOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GuestWhereInput;
};


export type QueryGuestsCountArgs = {
  where?: GuestWhereInput;
};


export type QueryInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type QueryInvitationsArgs = {
  cursor?: InputMaybe<InvitationWhereUniqueInput>;
  orderBy?: Array<InvitationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvitationWhereInput;
};


export type QueryInvitationsCountArgs = {
  where?: InvitationWhereInput;
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


export type QuerySubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type QuerySubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  orderBy?: Array<SubscriptionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SubscriptionWhereInput;
};


export type QuerySubscriptionsCountArgs = {
  where?: SubscriptionWhereInput;
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

export type Subscription = {
  __typename?: 'Subscription';
  id: Scalars['ID']['output'];
  stripeCurrentPeriodEnd?: Maybe<Scalars['DateTime']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripePriceId?: Maybe<Scalars['String']['output']>;
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
};

export type SubscriptionCreateInput = {
  stripeCurrentPeriodEnd?: InputMaybe<Scalars['DateTime']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripePriceId?: InputMaybe<Scalars['String']['input']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type SubscriptionManyRelationFilter = {
  every?: InputMaybe<SubscriptionWhereInput>;
  none?: InputMaybe<SubscriptionWhereInput>;
  some?: InputMaybe<SubscriptionWhereInput>;
};

export type SubscriptionOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  stripeCurrentPeriodEnd?: InputMaybe<OrderDirection>;
  stripeCustomerId?: InputMaybe<OrderDirection>;
  stripePriceId?: InputMaybe<OrderDirection>;
  stripeSubscriptionId?: InputMaybe<OrderDirection>;
};

export type SubscriptionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  create?: InputMaybe<Array<SubscriptionCreateInput>>;
};

export type SubscriptionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  create?: InputMaybe<Array<SubscriptionCreateInput>>;
  disconnect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
};

export type SubscriptionRelateToOneForCreateInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  create?: InputMaybe<SubscriptionCreateInput>;
};

export type SubscriptionRelateToOneForUpdateInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  create?: InputMaybe<SubscriptionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionUpdateArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateInput = {
  stripeCurrentPeriodEnd?: InputMaybe<Scalars['DateTime']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripePriceId?: InputMaybe<Scalars['String']['input']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type SubscriptionWhereInput = {
  AND?: InputMaybe<Array<SubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionWhereInput>>;
  id?: InputMaybe<IdFilter>;
  stripeCurrentPeriodEnd?: InputMaybe<DateTimeNullableFilter>;
  stripeCustomerId?: InputMaybe<StringFilter>;
  stripePriceId?: InputMaybe<StringFilter>;
  stripeSubscriptionId?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type SubscriptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Team = {
  __typename?: 'Team';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<TeamMember>>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<Subscription>;
};


export type TeamEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TeamEventsCountArgs = {
  where?: EventWhereInput;
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
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  members?: InputMaybe<TeamMemberRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscription?: InputMaybe<SubscriptionRelateToOneForCreateInput>;
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
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  members?: InputMaybe<TeamMemberRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscription?: InputMaybe<SubscriptionRelateToOneForUpdateInput>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<TeamMemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  subscription?: InputMaybe<SubscriptionWhereInput>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Account>>;
  accountsCount?: Maybe<Scalars['Int']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentTeam?: Maybe<Team>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmedAt?: Maybe<Scalars['DateTime']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  subscriptions?: Maybe<Array<Subscription>>;
  subscriptionsCount?: Maybe<Scalars['Int']['output']>;
  teamMember?: Maybe<Array<TeamMember>>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
};


export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: Array<AccountOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AccountWhereInput;
};


export type UserAccountsCountArgs = {
  where?: AccountWhereInput;
};


export type UserEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type UserEventsCountArgs = {
  where?: EventWhereInput;
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


export type UserSubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  orderBy?: Array<SubscriptionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SubscriptionWhereInput;
};


export type UserSubscriptionsCountArgs = {
  where?: SubscriptionWhereInput;
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
  accounts?: InputMaybe<AccountRelateToManyForCreateInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentTeam?: InputMaybe<TeamRelateToOneForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailConfirmedAt?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionRelateToManyForCreateInput>;
  subscriptions?: InputMaybe<SubscriptionRelateToManyForCreateInput>;
  teamMember?: InputMaybe<TeamMemberRelateToManyForCreateInput>;
};

export type UserOrderByInput = {
  avatarUrl?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  emailConfirmedAt?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
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
  accounts?: InputMaybe<AccountRelateToManyForUpdateInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentTeam?: InputMaybe<TeamRelateToOneForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailConfirmedAt?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionRelateToManyForUpdateInput>;
  subscriptions?: InputMaybe<SubscriptionRelateToManyForUpdateInput>;
  teamMember?: InputMaybe<TeamMemberRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountManyRelationFilter>;
  avatarUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentTeam?: InputMaybe<TeamWhereInput>;
  email?: InputMaybe<StringFilter>;
  emailConfirmedAt?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  lastName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sessions?: InputMaybe<SessionManyRelationFilter>;
  subscriptions?: InputMaybe<SubscriptionManyRelationFilter>;
  teamMember?: InputMaybe<TeamMemberManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticatedItemQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthenticatedItemQuery = { __typename?: 'Query', authenticatedItem?: { __typename: 'User', id: string, name?: string | null, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null, email?: string | null, emailConfirmedAt?: any | null, createdAt?: any | null } | null };

export type AuthenticateUserWithPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AuthenticateUserWithPasswordMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename: 'User', id: string, email?: string | null, name?: string | null } } | null };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', createUser?: { __typename: 'User', id: string, name?: string | null, email?: string | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', endSession: boolean };

export type CreateEventMutationVariables = Exact<{
  data: EventCreateInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'Event', id: string, name?: string | null, startsAt?: any | null, endsAt?: any | null, type?: string | null, location?: any | null, publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, plusOneAllowed?: boolean | null, capacity?: number | null, stagesCount?: number | null, createdBy?: { __typename: 'User', name?: string | null, email?: string | null } | null, stages?: Array<{ __typename: 'EventStage', id: string, location?: any | null, startTime?: string | null, endTime?: string | null }> | null } | null };

export type EventsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip: Scalars['Int']['input'];
  orderBy: Array<EventOrderByInput> | EventOrderByInput;
  where: EventWhereInput;
}>;


export type EventsQuery = { __typename?: 'Query', eventsCount?: number | null, events?: Array<{ __typename: 'Event', id: string, name?: string | null, startsAt?: any | null, endsAt?: any | null, type?: string | null, location?: any | null, publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, plusOneAllowed?: boolean | null, capacity?: number | null, stagesCount?: number | null, invitationsCount?: number | null }> | null };

export type EventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type EventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, name?: string | null, startsAt?: any | null, endsAt?: any | null, type?: string | null, location?: any | null, publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, plusOneAllowed?: boolean | null, capacity?: number | null, stagesCount?: number | null, invitationsCount?: number | null, stages?: Array<{ __typename: 'EventStage', id: string, name?: string | null, location?: any | null, stageDate?: any | null, endTime?: string | null }> | null } | null };

export type EventInvitationsQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type EventInvitationsQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, invitations?: Array<{ __typename: 'Invitation', id: string, sentDate?: any | null, response?: string | null, plusOneName?: string | null, plusOneAllowed?: boolean | null, notes?: string | null, attendanceCount?: number | null, createdAt?: any | null, updatedAt?: any | null }> | null } | null };


export const AuthenticatedItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailConfirmedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticatedItemQuery, AuthenticatedItemQueryVariables>;
export const AuthenticateUserWithPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthenticateUserWithPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticateUserWithPasswordMutation, AuthenticateUserWithPasswordMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endSession"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const CreateEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"plusOneAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"stages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stagesCount"}}]}}]}}]} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>;
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Events"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventOrderByInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"plusOneAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"stagesCount"}},{"kind":"Field","name":{"kind":"Name","value":"invitationsCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventsCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}]}]}}]} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;
export const EventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Event"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"plusOneAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"stages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"stageDate"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stagesCount"}},{"kind":"Field","name":{"kind":"Name","value":"invitationsCount"}}]}}]}}]} as unknown as DocumentNode<EventQuery, EventQueryVariables>;
export const EventInvitationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventInvitations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"invitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sentDate"}},{"kind":"Field","name":{"kind":"Name","value":"response"}},{"kind":"Field","name":{"kind":"Name","value":"plusOneName"}},{"kind":"Field","name":{"kind":"Name","value":"plusOneAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"attendanceCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<EventInvitationsQuery, EventInvitationsQueryVariables>;
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

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_at?: Maybe<Scalars['DateTime']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type AccountManyRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderByInput = {
  access_token?: InputMaybe<OrderDirection>;
  expires_at?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  id_token?: InputMaybe<OrderDirection>;
  provider?: InputMaybe<OrderDirection>;
  providerAccountId?: InputMaybe<OrderDirection>;
  refresh_token?: InputMaybe<OrderDirection>;
  refresh_token_expires_at?: InputMaybe<OrderDirection>;
  scope?: InputMaybe<OrderDirection>;
  session_state?: InputMaybe<OrderDirection>;
  token_type?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type AccountRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  create?: InputMaybe<Array<AccountCreateInput>>;
};

export type AccountRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  create?: InputMaybe<Array<AccountCreateInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
};

export type AccountUpdateArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  expires_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  id_token?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringFilter>;
  refresh_token_expires_at?: InputMaybe<DateTimeNullableFilter>;
  scope?: InputMaybe<StringFilter>;
  session_state?: InputMaybe<StringFilter>;
  token_type?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
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

export type Event = {
  __typename?: 'Event';
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  invitations?: Maybe<Array<Invitation>>;
  invitationsCount?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  plusOneAllowed?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stages?: Maybe<Array<EventStage>>;
  stagesCount?: Maybe<Scalars['Int']['output']>;
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  team?: Maybe<Team>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EventInvitationsArgs = {
  cursor?: InputMaybe<InvitationWhereUniqueInput>;
  orderBy?: Array<InvitationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvitationWhereInput;
};


export type EventInvitationsCountArgs = {
  where?: InvitationWhereInput;
};


export type EventStagesArgs = {
  cursor?: InputMaybe<EventStageWhereUniqueInput>;
  orderBy?: Array<EventStageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventStageWhereInput;
};


export type EventStagesCountArgs = {
  where?: EventStageWhereInput;
};

export type EventCreateInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitations?: InputMaybe<InvitationRelateToManyForCreateInput>;
  location?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plusOneAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stages?: InputMaybe<EventStageRelateToManyForCreateInput>;
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventManyRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByInput = {
  capacity?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  endsAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  plusOneAllowed?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
  startsAt?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
};

export type EventRelateToOneForCreateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
};

export type EventRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventStage = {
  __typename?: 'EventStage';
  attendance?: Maybe<Array<GuestAttendance>>;
  attendanceCount?: Maybe<Scalars['Int']['output']>;
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stageDate?: Maybe<Scalars['DateTime']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EventStageAttendanceArgs = {
  cursor?: InputMaybe<GuestAttendanceWhereUniqueInput>;
  orderBy?: Array<GuestAttendanceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GuestAttendanceWhereInput;
};


export type EventStageAttendanceCountArgs = {
  where?: GuestAttendanceWhereInput;
};

export type EventStageCreateInput = {
  attendance?: InputMaybe<GuestAttendanceRelateToManyForCreateInput>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  location?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stageDate?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventStageManyRelationFilter = {
  every?: InputMaybe<EventStageWhereInput>;
  none?: InputMaybe<EventStageWhereInput>;
  some?: InputMaybe<EventStageWhereInput>;
};

export type EventStageOrderByInput = {
  capacity?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  endTime?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  stageDate?: InputMaybe<OrderDirection>;
  startTime?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventStageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventStageWhereUniqueInput>>;
  create?: InputMaybe<Array<EventStageCreateInput>>;
};

export type EventStageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventStageWhereUniqueInput>>;
  create?: InputMaybe<Array<EventStageCreateInput>>;
  disconnect?: InputMaybe<Array<EventStageWhereUniqueInput>>;
  set?: InputMaybe<Array<EventStageWhereUniqueInput>>;
};

export type EventStageRelateToOneForCreateInput = {
  connect?: InputMaybe<EventStageWhereUniqueInput>;
  create?: InputMaybe<EventStageCreateInput>;
};

export type EventStageRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventStageWhereUniqueInput>;
  create?: InputMaybe<EventStageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventStageUpdateArgs = {
  data: EventStageUpdateInput;
  where: EventStageWhereUniqueInput;
};

export type EventStageUpdateInput = {
  attendance?: InputMaybe<GuestAttendanceRelateToManyForUpdateInput>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  location?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stageDate?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventStageWhereInput = {
  AND?: InputMaybe<Array<EventStageWhereInput>>;
  NOT?: InputMaybe<Array<EventStageWhereInput>>;
  OR?: InputMaybe<Array<EventStageWhereInput>>;
  attendance?: InputMaybe<GuestAttendanceManyRelationFilter>;
  capacity?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  endTime?: InputMaybe<StringFilter>;
  event?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  stageDate?: InputMaybe<DateTimeFilter>;
  startTime?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type EventStageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventUpdateArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitations?: InputMaybe<InvitationRelateToManyForUpdateInput>;
  location?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plusOneAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stages?: InputMaybe<EventStageRelateToManyForUpdateInput>;
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  capacity?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  endsAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  invitations?: InputMaybe<InvitationManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  plusOneAllowed?: InputMaybe<BooleanFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  stages?: InputMaybe<EventStageManyRelationFilter>;
  startsAt?: InputMaybe<DateTimeFilter>;
  team?: InputMaybe<TeamWhereInput>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Guest = {
  __typename?: 'Guest';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invitations?: Maybe<Array<Invitation>>;
  invitationsCount?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};


export type GuestInvitationsArgs = {
  cursor?: InputMaybe<InvitationWhereUniqueInput>;
  orderBy?: Array<InvitationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvitationWhereInput;
};


export type GuestInvitationsCountArgs = {
  where?: InvitationWhereInput;
};

export type GuestAttendance = {
  __typename?: 'GuestAttendance';
  attending?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  invitation?: Maybe<Invitation>;
  stage?: Maybe<EventStage>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GuestAttendanceCreateInput = {
  attending?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitation?: InputMaybe<InvitationRelateToOneForCreateInput>;
  stage?: InputMaybe<EventStageRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GuestAttendanceManyRelationFilter = {
  every?: InputMaybe<GuestAttendanceWhereInput>;
  none?: InputMaybe<GuestAttendanceWhereInput>;
  some?: InputMaybe<GuestAttendanceWhereInput>;
};

export type GuestAttendanceOrderByInput = {
  attending?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type GuestAttendanceRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GuestAttendanceWhereUniqueInput>>;
  create?: InputMaybe<Array<GuestAttendanceCreateInput>>;
};

export type GuestAttendanceRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GuestAttendanceWhereUniqueInput>>;
  create?: InputMaybe<Array<GuestAttendanceCreateInput>>;
  disconnect?: InputMaybe<Array<GuestAttendanceWhereUniqueInput>>;
  set?: InputMaybe<Array<GuestAttendanceWhereUniqueInput>>;
};

export type GuestAttendanceUpdateArgs = {
  data: GuestAttendanceUpdateInput;
  where: GuestAttendanceWhereUniqueInput;
};

export type GuestAttendanceUpdateInput = {
  attending?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  invitation?: InputMaybe<InvitationRelateToOneForUpdateInput>;
  stage?: InputMaybe<EventStageRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GuestAttendanceWhereInput = {
  AND?: InputMaybe<Array<GuestAttendanceWhereInput>>;
  NOT?: InputMaybe<Array<GuestAttendanceWhereInput>>;
  OR?: InputMaybe<Array<GuestAttendanceWhereInput>>;
  attending?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  invitation?: InputMaybe<InvitationWhereInput>;
  stage?: InputMaybe<EventStageWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type GuestAttendanceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GuestCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  invitations?: InputMaybe<InvitationRelateToManyForCreateInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type GuestOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  city?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  zipCode?: InputMaybe<OrderDirection>;
};

export type GuestRelateToOneForCreateInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  create?: InputMaybe<GuestCreateInput>;
};

export type GuestRelateToOneForUpdateInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  create?: InputMaybe<GuestCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GuestUpdateArgs = {
  data: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};

export type GuestUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  invitations?: InputMaybe<InvitationRelateToManyForUpdateInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type GuestWhereInput = {
  AND?: InputMaybe<Array<GuestWhereInput>>;
  NOT?: InputMaybe<Array<GuestWhereInput>>;
  OR?: InputMaybe<Array<GuestWhereInput>>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  invitations?: InputMaybe<InvitationManyRelationFilter>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  zipCode?: InputMaybe<StringFilter>;
};

export type GuestWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Invitation = {
  __typename?: 'Invitation';
  attendance?: Maybe<Array<GuestAttendance>>;
  attendanceCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  event?: Maybe<Event>;
  guest?: Maybe<Guest>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  plusOneAllowed?: Maybe<Scalars['Boolean']['output']>;
  plusOneName?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['String']['output']>;
  sentDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type InvitationAttendanceArgs = {
  cursor?: InputMaybe<GuestAttendanceWhereUniqueInput>;
  orderBy?: Array<GuestAttendanceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GuestAttendanceWhereInput;
};


export type InvitationAttendanceCountArgs = {
  where?: GuestAttendanceWhereInput;
};

export type InvitationCreateInput = {
  attendance?: InputMaybe<GuestAttendanceRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  guest?: InputMaybe<GuestRelateToOneForCreateInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  plusOneAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  plusOneName?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['String']['input']>;
  sentDate?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvitationManyRelationFilter = {
  every?: InputMaybe<InvitationWhereInput>;
  none?: InputMaybe<InvitationWhereInput>;
  some?: InputMaybe<InvitationWhereInput>;
};

export type InvitationOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  notes?: InputMaybe<OrderDirection>;
  plusOneAllowed?: InputMaybe<OrderDirection>;
  plusOneName?: InputMaybe<OrderDirection>;
  response?: InputMaybe<OrderDirection>;
  sentDate?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type InvitationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  create?: InputMaybe<Array<InvitationCreateInput>>;
};

export type InvitationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  create?: InputMaybe<Array<InvitationCreateInput>>;
  disconnect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  set?: InputMaybe<Array<InvitationWhereUniqueInput>>;
};

export type InvitationRelateToOneForCreateInput = {
  connect?: InputMaybe<InvitationWhereUniqueInput>;
  create?: InputMaybe<InvitationCreateInput>;
};

export type InvitationRelateToOneForUpdateInput = {
  connect?: InputMaybe<InvitationWhereUniqueInput>;
  create?: InputMaybe<InvitationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InvitationUpdateArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpdateInput = {
  attendance?: InputMaybe<GuestAttendanceRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  guest?: InputMaybe<GuestRelateToOneForUpdateInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  plusOneAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  plusOneName?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['String']['input']>;
  sentDate?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvitationWhereInput = {
  AND?: InputMaybe<Array<InvitationWhereInput>>;
  NOT?: InputMaybe<Array<InvitationWhereInput>>;
  OR?: InputMaybe<Array<InvitationWhereInput>>;
  attendance?: InputMaybe<GuestAttendanceManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventWhereInput>;
  guest?: InputMaybe<GuestWhereInput>;
  id?: InputMaybe<IdFilter>;
  notes?: InputMaybe<StringFilter>;
  plusOneAllowed?: InputMaybe<BooleanFilter>;
  plusOneName?: InputMaybe<StringFilter>;
  response?: InputMaybe<StringNullableFilter>;
  sentDate?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type InvitationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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
  createAccount?: Maybe<Account>;
  createAccounts?: Maybe<Array<Maybe<Account>>>;
  createEvent?: Maybe<Event>;
  createEventStage?: Maybe<EventStage>;
  createEventStages?: Maybe<Array<Maybe<EventStage>>>;
  createEvents?: Maybe<Array<Maybe<Event>>>;
  createGuest?: Maybe<Guest>;
  createGuestAttendance?: Maybe<GuestAttendance>;
  createGuestAttendances?: Maybe<Array<Maybe<GuestAttendance>>>;
  createGuests?: Maybe<Array<Maybe<Guest>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInvitation?: Maybe<Invitation>;
  createInvitations?: Maybe<Array<Maybe<Invitation>>>;
  createSession?: Maybe<Session>;
  createSessions?: Maybe<Array<Maybe<Session>>>;
  createSubscription?: Maybe<Subscription>;
  createSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  createTeam?: Maybe<Team>;
  createTeamMember?: Maybe<TeamMember>;
  createTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  createTeams?: Maybe<Array<Maybe<Team>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAccount?: Maybe<Account>;
  deleteAccounts?: Maybe<Array<Maybe<Account>>>;
  deleteEvent?: Maybe<Event>;
  deleteEventStage?: Maybe<EventStage>;
  deleteEventStages?: Maybe<Array<Maybe<EventStage>>>;
  deleteEvents?: Maybe<Array<Maybe<Event>>>;
  deleteGuest?: Maybe<Guest>;
  deleteGuestAttendance?: Maybe<GuestAttendance>;
  deleteGuestAttendances?: Maybe<Array<Maybe<GuestAttendance>>>;
  deleteGuests?: Maybe<Array<Maybe<Guest>>>;
  deleteInvitation?: Maybe<Invitation>;
  deleteInvitations?: Maybe<Array<Maybe<Invitation>>>;
  deleteSession?: Maybe<Session>;
  deleteSessions?: Maybe<Array<Maybe<Session>>>;
  deleteSubscription?: Maybe<Subscription>;
  deleteSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  deleteTeam?: Maybe<Team>;
  deleteTeamMember?: Maybe<TeamMember>;
  deleteTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  deleteTeams?: Maybe<Array<Maybe<Team>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateAccount?: Maybe<Account>;
  updateAccounts?: Maybe<Array<Maybe<Account>>>;
  updateEvent?: Maybe<Event>;
  updateEventStage?: Maybe<EventStage>;
  updateEventStages?: Maybe<Array<Maybe<EventStage>>>;
  updateEvents?: Maybe<Array<Maybe<Event>>>;
  updateGuest?: Maybe<Guest>;
  updateGuestAttendance?: Maybe<GuestAttendance>;
  updateGuestAttendances?: Maybe<Array<Maybe<GuestAttendance>>>;
  updateGuests?: Maybe<Array<Maybe<Guest>>>;
  updateInvitation?: Maybe<Invitation>;
  updateInvitations?: Maybe<Array<Maybe<Invitation>>>;
  updateSession?: Maybe<Session>;
  updateSessions?: Maybe<Array<Maybe<Session>>>;
  updateSubscription?: Maybe<Subscription>;
  updateSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
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


export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateAccountsArgs = {
  data: Array<AccountCreateInput>;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateEventStageArgs = {
  data: EventStageCreateInput;
};


export type MutationCreateEventStagesArgs = {
  data: Array<EventStageCreateInput>;
};


export type MutationCreateEventsArgs = {
  data: Array<EventCreateInput>;
};


export type MutationCreateGuestArgs = {
  data: GuestCreateInput;
};


export type MutationCreateGuestAttendanceArgs = {
  data: GuestAttendanceCreateInput;
};


export type MutationCreateGuestAttendancesArgs = {
  data: Array<GuestAttendanceCreateInput>;
};


export type MutationCreateGuestsArgs = {
  data: Array<GuestCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateInvitationArgs = {
  data: InvitationCreateInput;
};


export type MutationCreateInvitationsArgs = {
  data: Array<InvitationCreateInput>;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateSessionsArgs = {
  data: Array<SessionCreateInput>;
};


export type MutationCreateSubscriptionArgs = {
  data: SubscriptionCreateInput;
};


export type MutationCreateSubscriptionsArgs = {
  data: Array<SubscriptionCreateInput>;
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


export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteAccountsArgs = {
  where: Array<AccountWhereUniqueInput>;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteEventStageArgs = {
  where: EventStageWhereUniqueInput;
};


export type MutationDeleteEventStagesArgs = {
  where: Array<EventStageWhereUniqueInput>;
};


export type MutationDeleteEventsArgs = {
  where: Array<EventWhereUniqueInput>;
};


export type MutationDeleteGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type MutationDeleteGuestAttendanceArgs = {
  where: GuestAttendanceWhereUniqueInput;
};


export type MutationDeleteGuestAttendancesArgs = {
  where: Array<GuestAttendanceWhereUniqueInput>;
};


export type MutationDeleteGuestsArgs = {
  where: Array<GuestWhereUniqueInput>;
};


export type MutationDeleteInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type MutationDeleteInvitationsArgs = {
  where: Array<InvitationWhereUniqueInput>;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteSessionsArgs = {
  where: Array<SessionWhereUniqueInput>;
};


export type MutationDeleteSubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type MutationDeleteSubscriptionsArgs = {
  where: Array<SubscriptionWhereUniqueInput>;
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


export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateAccountsArgs = {
  data: Array<AccountUpdateArgs>;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventStageArgs = {
  data: EventStageUpdateInput;
  where: EventStageWhereUniqueInput;
};


export type MutationUpdateEventStagesArgs = {
  data: Array<EventStageUpdateArgs>;
};


export type MutationUpdateEventsArgs = {
  data: Array<EventUpdateArgs>;
};


export type MutationUpdateGuestArgs = {
  data: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};


export type MutationUpdateGuestAttendanceArgs = {
  data: GuestAttendanceUpdateInput;
  where: GuestAttendanceWhereUniqueInput;
};


export type MutationUpdateGuestAttendancesArgs = {
  data: Array<GuestAttendanceUpdateArgs>;
};


export type MutationUpdateGuestsArgs = {
  data: Array<GuestUpdateArgs>;
};


export type MutationUpdateInvitationArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};


export type MutationUpdateInvitationsArgs = {
  data: Array<InvitationUpdateArgs>;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateSessionsArgs = {
  data: Array<SessionUpdateArgs>;
};


export type MutationUpdateSubscriptionArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpdateSubscriptionsArgs = {
  data: Array<SubscriptionUpdateArgs>;
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
  account?: Maybe<Account>;
  accounts?: Maybe<Array<Account>>;
  accountsCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  event?: Maybe<Event>;
  eventStage?: Maybe<EventStage>;
  eventStages?: Maybe<Array<EventStage>>;
  eventStagesCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  guest?: Maybe<Guest>;
  guestAttendance?: Maybe<GuestAttendance>;
  guestAttendances?: Maybe<Array<GuestAttendance>>;
  guestAttendancesCount?: Maybe<Scalars['Int']['output']>;
  guests?: Maybe<Array<Guest>>;
  guestsCount?: Maybe<Scalars['Int']['output']>;
  invitation?: Maybe<Invitation>;
  invitations?: Maybe<Array<Invitation>>;
  invitationsCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  session?: Maybe<Session>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  subscription?: Maybe<Subscription>;
  subscriptions?: Maybe<Array<Subscription>>;
  subscriptionsCount?: Maybe<Scalars['Int']['output']>;
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


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: Array<AccountOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AccountWhereInput;
};


export type QueryAccountsCountArgs = {
  where?: AccountWhereInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventStageArgs = {
  where: EventStageWhereUniqueInput;
};


export type QueryEventStagesArgs = {
  cursor?: InputMaybe<EventStageWhereUniqueInput>;
  orderBy?: Array<EventStageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventStageWhereInput;
};


export type QueryEventStagesCountArgs = {
  where?: EventStageWhereInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type QueryEventsCountArgs = {
  where?: EventWhereInput;
};


export type QueryGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type QueryGuestAttendanceArgs = {
  where: GuestAttendanceWhereUniqueInput;
};


export type QueryGuestAttendancesArgs = {
  cursor?: InputMaybe<GuestAttendanceWhereUniqueInput>;
  orderBy?: Array<GuestAttendanceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GuestAttendanceWhereInput;
};


export type QueryGuestAttendancesCountArgs = {
  where?: GuestAttendanceWhereInput;
};


export type QueryGuestsArgs = {
  cursor?: InputMaybe<GuestWhereUniqueInput>;
  orderBy?: Array<GuestOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GuestWhereInput;
};


export type QueryGuestsCountArgs = {
  where?: GuestWhereInput;
};


export type QueryInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type QueryInvitationsArgs = {
  cursor?: InputMaybe<InvitationWhereUniqueInput>;
  orderBy?: Array<InvitationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InvitationWhereInput;
};


export type QueryInvitationsCountArgs = {
  where?: InvitationWhereInput;
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


export type QuerySubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type QuerySubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  orderBy?: Array<SubscriptionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SubscriptionWhereInput;
};


export type QuerySubscriptionsCountArgs = {
  where?: SubscriptionWhereInput;
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

export type Subscription = {
  __typename?: 'Subscription';
  id: Scalars['ID']['output'];
  stripeCurrentPeriodEnd?: Maybe<Scalars['DateTime']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripePriceId?: Maybe<Scalars['String']['output']>;
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
};

export type SubscriptionCreateInput = {
  stripeCurrentPeriodEnd?: InputMaybe<Scalars['DateTime']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripePriceId?: InputMaybe<Scalars['String']['input']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type SubscriptionManyRelationFilter = {
  every?: InputMaybe<SubscriptionWhereInput>;
  none?: InputMaybe<SubscriptionWhereInput>;
  some?: InputMaybe<SubscriptionWhereInput>;
};

export type SubscriptionOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  stripeCurrentPeriodEnd?: InputMaybe<OrderDirection>;
  stripeCustomerId?: InputMaybe<OrderDirection>;
  stripePriceId?: InputMaybe<OrderDirection>;
  stripeSubscriptionId?: InputMaybe<OrderDirection>;
};

export type SubscriptionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  create?: InputMaybe<Array<SubscriptionCreateInput>>;
};

export type SubscriptionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  create?: InputMaybe<Array<SubscriptionCreateInput>>;
  disconnect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
};

export type SubscriptionRelateToOneForCreateInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  create?: InputMaybe<SubscriptionCreateInput>;
};

export type SubscriptionRelateToOneForUpdateInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  create?: InputMaybe<SubscriptionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionUpdateArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateInput = {
  stripeCurrentPeriodEnd?: InputMaybe<Scalars['DateTime']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripePriceId?: InputMaybe<Scalars['String']['input']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type SubscriptionWhereInput = {
  AND?: InputMaybe<Array<SubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionWhereInput>>;
  id?: InputMaybe<IdFilter>;
  stripeCurrentPeriodEnd?: InputMaybe<DateTimeNullableFilter>;
  stripeCustomerId?: InputMaybe<StringFilter>;
  stripePriceId?: InputMaybe<StringFilter>;
  stripeSubscriptionId?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type SubscriptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Team = {
  __typename?: 'Team';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<TeamMember>>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<Subscription>;
};


export type TeamEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TeamEventsCountArgs = {
  where?: EventWhereInput;
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
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  members?: InputMaybe<TeamMemberRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscription?: InputMaybe<SubscriptionRelateToOneForCreateInput>;
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
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  members?: InputMaybe<TeamMemberRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscription?: InputMaybe<SubscriptionRelateToOneForUpdateInput>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<TeamMemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  subscription?: InputMaybe<SubscriptionWhereInput>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Account>>;
  accountsCount?: Maybe<Scalars['Int']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentTeam?: Maybe<Team>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmedAt?: Maybe<Scalars['DateTime']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  sessions?: Maybe<Array<Session>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  subscriptions?: Maybe<Array<Subscription>>;
  subscriptionsCount?: Maybe<Scalars['Int']['output']>;
  teamMember?: Maybe<Array<TeamMember>>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
};


export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: Array<AccountOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AccountWhereInput;
};


export type UserAccountsCountArgs = {
  where?: AccountWhereInput;
};


export type UserEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type UserEventsCountArgs = {
  where?: EventWhereInput;
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


export type UserSubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  orderBy?: Array<SubscriptionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SubscriptionWhereInput;
};


export type UserSubscriptionsCountArgs = {
  where?: SubscriptionWhereInput;
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
  accounts?: InputMaybe<AccountRelateToManyForCreateInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentTeam?: InputMaybe<TeamRelateToOneForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailConfirmedAt?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionRelateToManyForCreateInput>;
  subscriptions?: InputMaybe<SubscriptionRelateToManyForCreateInput>;
  teamMember?: InputMaybe<TeamMemberRelateToManyForCreateInput>;
};

export type UserOrderByInput = {
  avatarUrl?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  emailConfirmedAt?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
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
  accounts?: InputMaybe<AccountRelateToManyForUpdateInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentTeam?: InputMaybe<TeamRelateToOneForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailConfirmedAt?: InputMaybe<Scalars['DateTime']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionRelateToManyForUpdateInput>;
  subscriptions?: InputMaybe<SubscriptionRelateToManyForUpdateInput>;
  teamMember?: InputMaybe<TeamMemberRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountManyRelationFilter>;
  avatarUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentTeam?: InputMaybe<TeamWhereInput>;
  email?: InputMaybe<StringFilter>;
  emailConfirmedAt?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  lastName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sessions?: InputMaybe<SessionManyRelationFilter>;
  subscriptions?: InputMaybe<SubscriptionManyRelationFilter>;
  teamMember?: InputMaybe<TeamMemberManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};
