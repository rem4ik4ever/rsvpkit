'use client';
import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/hooks/gql";
import { useAuthStore } from "@/stores/auth";
import { useUrqlClient } from "@/urql";
import { useRouter } from "next/navigation";
import { useCallback } from "react";



export const LogoutButton = () => {
  const { resetClient } = useUrqlClient()
  const [, logout] = useLogoutMutation();
  const setUser = useAuthStore(state => state.setUser);
  const router = useRouter();
  const handleLogout = useCallback(async () => {
    await logout({});
    setUser(null);
    resetClient();
    localStorage.removeItem('token');
    router.replace('/login');
  }, [logout, router, resetClient, setUser])
  return (
    <Button type="button" variant="ghost" size="sm" className="text-left px-1 py-0" onClick={handleLogout}>Logout</Button >
  )
}
