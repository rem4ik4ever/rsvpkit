'use client';

import { UrqlClientProvider } from "@/urql";
import { ReactNode, useEffect, useState } from "react";
import { SideNavigation } from "./side-navigation"
import { DashboardHeader } from "./header"
import { useAuthenticatedItemQuery } from "@/hooks/gql";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth";
import { Loader2Icon } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [{ data, fetching }] = useAuthenticatedItemQuery();
  const router = useRouter();
  const setUser = useAuthStore(state => state.setUser)
  useEffect(() => {
    if (!fetching && !data?.authenticatedItem?.id) {
      router.push('/login')
    } else if (!fetching && data?.authenticatedItem) {
      setUser({
        name: data.authenticatedItem.name!,
        email: data.authenticatedItem.email!,
        id: data.authenticatedItem.id,
        avatarUrl: data.authenticatedItem.avatarUrl!
      })
      setLoading(false)
    }
  }, [data, fetching, router, setUser])
  if (fetching && !data || loading) {
    return <div className="h-screen w-full flex items-center justify-center">
      <Loader2Icon className="h-10 w-10 animate-spin" />
    </div>
  }
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideNavigation />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <DashboardHeader />
        {children}
      </div>
      <Toaster />
    </div>
  )
}
