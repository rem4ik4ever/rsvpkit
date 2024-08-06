import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useCallback } from "react"
import { LocationSearch, Map, PlacesAutocomplete } from "./location-search"

const eventLocationSchema = z.object({
  location: z.object({
    address: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    })
  }).optional()
})

export const EventLocationForm = ({ onSubmit, onBack, isLoading, initialValues = {} }: { onBack: () => void, isLoading?: boolean, onSubmit: (values: z.infer<typeof eventLocationSchema>) => void, initialValues?: z.infer<typeof eventLocationSchema> }) => {
  const form = useForm({
    resolver: zodResolver(eventLocationSchema),
    defaultValues: {
      location: {
        address: '',
        coordinates: {
          lat: 0,
          lng: 0
        }
      },
      ...initialValues
    }
  })
  const handleSubmit: SubmitHandler<z.infer<typeof eventLocationSchema>> = useCallback((values) => {
    onSubmit(values)
  }, [onSubmit])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4">
        <FormField
          name="location"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <LocationSearch
                  location={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="w-full flex justify-between">
          <Button type="button" onClick={onBack} disabled={isLoading} variant="outline">
            Back
          </Button>
          <Button type="submit" isLoading={isLoading}>
            Create
          </Button>
        </div>
      </form>
    </Form>
  )
}
