'use client';

import React, { createContext, ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand'
import { createStore } from 'zustand/vanilla'

interface SessionUser {
  id: string
  name: string
  email: string
  avatarUrl?: string
}

interface AuthStore {
  user: SessionUser | null
  setUser: (user: SessionUser | null) => void
}
export const createAuthStore = () => {
  return createStore<AuthStore>()((set) => ({
    user: null,
    setUser: (user) => set({ user })
  }))
}

export type AuthStoreApi = ReturnType<typeof createAuthStore>

export const AuthStoreContext = createContext<AuthStoreApi | undefined>(
  undefined,
)

export interface AuthStoreProviderProps {
  children: ReactNode
}

export const AuthStoreProvider = ({
  children,
}: AuthStoreProviderProps) => {
  const storeRef = useRef<AuthStoreApi>()

  if (!storeRef.current) {
    storeRef.current = createAuthStore()
  }

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  )
}

export const useAuthStore = <T,>(
  selector: (store: AuthStore) => T,
): T => {
  const authStoreContext = useContext(AuthStoreContext)

  if (!authStoreContext) {
    throw new Error(`useAuthStore must be used within AuthStoreProvider`)
  }

  return useStore(authStoreContext, selector)
}
