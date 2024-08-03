'use client';

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useCallback, useEffect } from "react"
import { useAuthenticateUserWithPasswordMutation } from "@/hooks/gql"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import { useAuthStore } from "@/stores/auth";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function LoginForm() {
  const setUser = useAuthStore(state => state.setUser)
  const [, login] = useAuthenticateUserWithPasswordMutation();
  const router = useRouter();
  const qs = useSearchParams()
  useEffect(() => {
    const token = qs.get('token')
    if (token) {
      localStorage.setItem('token', token)
      router.replace('/app')
    }
  }, [qs, router])
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  const handleSubmit = useCallback(async (values: z.infer<typeof loginSchema>) => {
    const result = await login(values)
    if (result.data?.authenticateUserWithPassword?.__typename === 'UserAuthenticationWithPasswordSuccess') {
      setUser({
        id: result.data.authenticateUserWithPassword.item.id,
        name: result.data.authenticateUserWithPassword.item.name!,
        email: result.data.authenticateUserWithPassword.item.email!,
      })
      localStorage.setItem('token', result.data.authenticateUserWithPassword.sessionToken)
      router.replace('/app')
    }
  }, [login, router, setUser]);
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>

          <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="alex@rsvpkit.co"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Link href="#" className="ml-auto inline-block text-sm underline" tabIndex={-1}>
                        Forgot your password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Link href="http://localhost:3300/api/oauth/google">
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </Link>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
