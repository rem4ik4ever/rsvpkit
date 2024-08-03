'use client';

import React, { useEffect, useState } from 'react';
import { useAuthenticatedItemQuery } from '@/hooks/gql';
import { LogoutButton } from './logout-button';
import Link from 'next/link';

export const AuthenticatedUser = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [{ data, fetching }] = useAuthenticatedItemQuery();

  useEffect(() => {
    if (data?.authenticatedItem?.id) {
      setAuthenticated(true)
    }
  }, [data])

  if (!authenticated && !fetching) {
    return (<div>
      <h1>Not Authenticated</h1>
      <Link href="/login">
        Login
      </Link>
    </div>)
  }

  if (fetching) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Authenticated User {data?.authenticatedItem?.name}</h1>
      <LogoutButton />
    </div>
  );
}
