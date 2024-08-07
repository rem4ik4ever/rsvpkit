import { gql } from '@urql/next'

export const createEvent = gql`
mutation CreateEvent($data: EventCreateInput!) {
  createEvent(data: $data) {
    id
    name
    startsAt
    endsAt
    type
    location
    createdBy {
      __typename
      name
      email
    }
    publishedAt
    createdAt
    updatedAt
    plusOneAllowed
    capacity
    stages {
      __typename
      id
      location
      startTime
      endTime
    }
    stagesCount
  }
}
`

export const listEvents = gql`
query Events($take: Int, $skip: Int!, $orderBy: [EventOrderByInput!]!, $where: EventWhereInput!) {
  events(take: $take, skip: $skip, orderBy: $orderBy, where: $where) {
    __typename
    id
    name
    startsAt
    endsAt
    type
    location
    publishedAt
    createdAt
    updatedAt
    plusOneAllowed
    capacity
    stagesCount
    invitationsCount
  }
  eventsCount(where: $where)
}
`

export const getEvent = gql`
query Event($where: EventWhereUniqueInput!) {
  event(where: $where) {
    id
    name
    startsAt
    endsAt
    type
    location
    publishedAt
    createdAt
    updatedAt
    plusOneAllowed
    capacity
    stages {
      __typename
      id
      name
      location
      stageDate
      endTime
    }
    stagesCount
    invitationsCount
  }
}
`

export const getEventInvitations = gql`
query EventInvitations($where: EventWhereUniqueInput!) {
  event(where: $where) {
    id
    invitations {
      id
      sentDate
      response
      plusOneName
      plusOneAllowed
      notes
      attendanceCount
      createdAt
      updatedAt
      guest {
        __typename
        id
        firstName
        lastName
        email
        phone
      }
      attendance {
        __typename
        attending
        stage {
          id
          name
        }
      }
    }
  }
}
`
