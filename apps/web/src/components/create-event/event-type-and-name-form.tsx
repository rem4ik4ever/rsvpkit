import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useCallback } from "react"

export const eventTypeAndNameSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  type: z.string().min(1, 'Type is required')
})

export const EventTypeAndNameForm = ({ onSubmit, initialValues }: { initialValues?: z.infer<typeof eventTypeAndNameSchema>, onSubmit: (values: z.infer<typeof eventTypeAndNameSchema>) => void }) => {
  const form = useForm({
    resolver: zodResolver(eventTypeAndNameSchema),
    defaultValues: {
      name: '',
      type: 'wedding',
      ...(initialValues ?? {})
    }
  })
  const handleSubmit: SubmitHandler<z.infer<typeof eventTypeAndNameSchema>> = useCallback((values) => {
    onSubmit(values)
  }, [onSubmit])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Alex's Birthday!" type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="type"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the occasion?</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Wedding, Birthday, Social..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="meetup">Meetup</SelectItem>
                    <SelectItem value="party">Party</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end">
          <Button type="submit">
            Next
          </Button>
        </div>
      </form>
    </Form>
  )
}
