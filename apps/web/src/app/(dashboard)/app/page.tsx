import { AuthenticatedUser } from "@/app/components/auth/authenticated-user";

export default function Dashboard() {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center">
      <h1>This is dashboard</h1>
      <AuthenticatedUser />
    </div>
  )
}
