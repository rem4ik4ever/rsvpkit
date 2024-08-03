'use client';
import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/hooks/gql";
import { useUrqlClient } from "@/urql";
import { useRouter } from "next/navigation";
import { useCallback } from "react";



export const LogoutButton = () => {
  const { resetClient } = useUrqlClient()
  const [, logout] = useLogoutMutation();
  const router = useRouter();
  const handleLogout = useCallback(async () => {
    await logout({});
    resetClient();
    localStorage.removeItem('token');
    router.replace('/login');
  }, [logout, router, resetClient])
  return (
    <Button onClick={handleLogout}>Logout</Button >
  )
}
