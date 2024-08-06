import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { addHours, addMinutes, format, setHours, setMinutes } from 'date-fns'
import { DatePicker } from "../ui/date-picker"
import { useCallback } from "react"

const eventScheduleSchema = z.object({
  startsAt: z.date(),
  endsAt: z.date()
})

const freshDate = (d?: Date) => {
  const date = d ?? new Date()
  date.setHours(0, 0, 0, 0)
  return date
}

export const EventScheduleForm = ({ onSubmit, onBack, initialValues }: { initialValues?: z.infer<typeof eventScheduleSchema>, onBack: () => void, onSubmit: (values: z.infer<typeof eventScheduleSchema>) => void }) => {
  const form = useForm({
    resolver: zodResolver(eventScheduleSchema),
    defaultValues: {
      startsAt: freshDate(),
      endsAt: addHours(freshDate(), 5),
      ...(initialValues ?? {})
    }
  })

  const handleSubmit: SubmitHandler<z.infer<typeof eventScheduleSchema>> = useCallback((values) => {
    onSubmit(values)
  }, [onSubmit])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4">
        <FormField
          name="startsAt"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start</FormLabel>
              <FormControl>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <DatePicker value={field.value} onChange={d => field.onChange(freshDate(d))} />
                  </div>
                  <Input type="time" value={format(field.value, "kk:mm")} onChange={e => {
                    const [hours, minutes] = e.target.value.split(":")
                    let newDate = addHours(freshDate(field.value), parseInt(hours))
                    newDate = addMinutes(newDate, parseInt(minutes))
                    console.log({ val: e.target.value, hours: parseInt(hours), minutes: parseInt(minutes), newDate })
                    field.onChange(newDate)
                  }} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="endsAt"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>End</FormLabel>
              <FormControl>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <DatePicker value={field.value} onChange={d => field.onChange(freshDate(d))} />
                  </div>
                  <Input type="time" value={format(field.value, "kk:mm")} onChange={e => {
                    const [hours, minutes] = e.target.value.split(":")
                    let newDate = addHours(freshDate(field.value), parseInt(hours))
                    newDate = addMinutes(newDate, parseInt(minutes))
                    console.log({ val: e.target.value, hours: parseInt(hours), minutes: parseInt(minutes), newDate })
                    field.onChange(newDate)
                  }} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">
            Next
          </Button>
        </div>
      </form>
    </Form>
  )
}
