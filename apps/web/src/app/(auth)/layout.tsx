'use client'
import { createAuthUrqlClient } from "@/urql";
import { UrqlProvider } from "@urql/next";
import { ReactNode, Suspense, useMemo } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [client, ssr] = useMemo(() => createAuthUrqlClient(), [])
  return (
    <UrqlProvider client={client} ssr={ssr}>
      <Suspense>
        {children}
      </Suspense>
    </UrqlProvider>
  )
}

export default DashboardLayout;
