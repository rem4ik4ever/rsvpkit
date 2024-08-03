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
import { Input } from "@/components/ui/input"
import { useRegisterUserMutation } from "@/hooks/gql"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
})

export function RegisterForm() {
  const [, register] = useRegisterUserMutation();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    resolver: zodResolver(signupSchema)
  })

  const handleSubmit = useCallback(async (values: z.infer<typeof signupSchema>) => {
    await register(values)
    router.replace('/app')
  }, [register, router]);

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>

          <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Name</FormLabel>
                    <Input
                      id="name"
                      type="name"
                      placeholder="Rem Rsvpkit"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="rem@rsvpkit.com"
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
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Link href="/api/oauth">
              <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button>
            </Link>
          </form>

        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
