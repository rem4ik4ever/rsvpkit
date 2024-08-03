'use client'

import { registerUrql } from "@urql/next/rsc";
import { env } from "./env";
import { createClient, cacheExchange, ssrExchange, fetchExchange, type SSRExchange, type Client, UrqlProvider } from '@urql/next'
import { authExchange } from '@urql/exchange-auth'
import React, { Suspense, useCallback } from "react";

export const getToken = () => {
  return new Promise<string>((resolve) => {
    if (typeof window === 'undefined') return resolve('');
    const token = localStorage.getItem('token') as string;
    return resolve(token);
  })
}

const logout = () => {
  localStorage.removeItem('token');
}


export const urqlClient = createClient({
  url: env.NEXT_PUBLIC_GRAPHQL_URL,
  exchanges: [cacheExchange, authExchange(async utils => {
    const token = await getToken();
    return {
      addAuthToOperation: (operation) => {
        if (!token) return operation;
        return utils.appendHeaders(operation, {
          Authorization: `Bearer ${token}`
        })
      },
      didAuthError(error, _operation) {
        return error.graphQLErrors.some(e => e.extensions?.code === 'FORBIDDEN');
      },
      async refreshAuth() {
        logout();
      },
      //willAuthError(operation) {
      //  if (
      //    operation.kind === 'mutation' &&
      //    // Here we find any mutation definition with the "login" field
      //    operation.query.definitions.some(definition => {
      //      return (
      //        definition.kind === 'OperationDefinition' &&
      //        definition.selectionSet.selections.some(node => {
      //          // The field name is just an example, since signup may also be an exception
      //          return node.kind === 'Field' && node.name.value === 'authenticateUserWithPassword';
      //        })
      //      );
      //    })
      //  ) {
      //    return false;
      //  } else if (false /* is JWT expired? */) {
      //    return true;
      //  } else {
      //    return false;
      //  }
      //}
    }
  }), fetchExchange],
  suspense: true,
});

export const createUrqlClient: () => [Client, SSRExchange] = () => {
  const ssr = ssrExchange({
    isClient: typeof window !== 'undefined'
  });

  const client = createClient({
    url: env.NEXT_PUBLIC_GRAPHQL_URL,
    exchanges: [cacheExchange, ssr, authExchange(async utils => {
      const token = await getToken();
      return {
        addAuthToOperation: (operation) => {
          if (!token) return operation;
          return utils.appendHeaders(operation, {
            Authorization: `Bearer ${token}`
          })
        },
        didAuthError(error, _operation) {
          return error.graphQLErrors.some(e => e.extensions?.code === 'FORBIDDEN');
        },
        async refreshAuth() {
          logout();
        },
        //willAuthError(operation) {
        //  if (
        //    operation.kind === 'mutation' &&
        //    // Here we find any mutation definition with the "login" field
        //    operation.query.definitions.some(definition => {
        //      return (
        //        definition.kind === 'OperationDefinition' &&
        //        definition.selectionSet.selections.some(node => {
        //          // The field name is just an example, since signup may also be an exception
        //          return node.kind === 'Field' && node.name.value === 'authenticateUserWithPassword';
        //        })
        //      );
        //    })
        //  ) {
        //    return false;
        //  } else if (false /* is JWT expired? */) {
        //    return true;
        //  } else {
        //    return false;
        //  }
        //}
      }
    }), fetchExchange],
    suspense: true,
  });

  return [client, ssr]
}


export const createAuthUrqlClient: () => [Client, SSRExchange] = () => {
  const ssr = ssrExchange({
    isClient: typeof window !== 'undefined'
  });

  const client = createClient({
    url: env.NEXT_PUBLIC_GRAPHQL_URL,
    exchanges: [cacheExchange, ssr, fetchExchange],
    suspense: true,
  });

  return [client, ssr]
}


export const getSsrUrqlClient = () => {
  const makeClient = () => {
    return createClient({
      url: env.NEXT_PUBLIC_GRAPHQL_URL,
      exchanges: [cacheExchange, fetchExchange],
    });
  };

  const { getClient } = registerUrql(makeClient);
  return getClient();
}


interface ClientState {
  resetClient: () => void
}
const ClientContext = React.createContext<ClientState>({
  // this is just to satisfy the TS compiler. If you're using JS you can just omit the default value.
  resetClient: undefined
} as any);

export function UrqlClientProvider({ children }: { children: React.ReactNode }) {
  const clientRef = React.useRef<[Client, SSRExchange]>(createUrqlClient());

  const resetClient = useCallback(() => {
    clientRef.current = createUrqlClient()
  }, [])

  const [client, ssr] = clientRef.current

  return (
    <ClientContext.Provider
      value={{
        resetClient
      }}
    >
      <UrqlProvider client={client} ssr={ssr}>
        <Suspense>
          {children}
        </Suspense>
      </UrqlProvider>
    </ClientContext.Provider>
  );
}

export const useUrqlClient = () => React.useContext(ClientContext);
