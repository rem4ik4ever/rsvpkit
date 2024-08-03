'use client'
import { useAuthStore } from "@/stores/auth";
import { createUrqlClient } from "@/urql";
import { UrqlProvider } from "@urql/next";
import { useRouter } from "next/navigation";
import { ReactNode, Suspense, useEffect, useMemo } from "react";

const GqlProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UrqlProvider client={client} ssr={ssr}>
      <Suspense>
        {children}
      </Suspense>
    </UrqlProvider>
  )
}

export default GqlProvider;
