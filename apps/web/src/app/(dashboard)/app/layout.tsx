import { UrqlClientProvider } from "@/urql";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <UrqlClientProvider>
      {children}
    </UrqlClientProvider>
  )
}

export default DashboardLayout;
