import React from 'react';
import { getSsrUrqlClient } from '@/urql'
import { authenticatedItemQuery } from '@/graphql/authenticatedItem'

const client = getSsrUrqlClient();

export const AuthenticatedUserSsr = async () => {
  const user = await client.query(authenticatedItemQuery, {});
  console.log({ user });
  return (
    <h1>Not Authenticated</h1>
  )
}
