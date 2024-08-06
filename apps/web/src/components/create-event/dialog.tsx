'use client';

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import React, { useCallback } from "react"
import WizardComponent from "../wizard"
import { EventTypeAndNameForm } from "./event-type-and-name-form"
import { EventScheduleForm } from "./event-schedule-form"
import { EventLocationForm } from "./event-location-form"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateEventMutation } from "@/hooks/gql";
import { toast } from "sonner";

const schema = z.object({
  name: z.string(),
  type: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
  location: z.object({
    address: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    })
  })
})

export default function CreateEventDialog({ children }: { children: React.ReactNode }) {
  const [createEventResult, createEvent] = useCreateEventMutation()
  const [parent] = useAutoAnimate()
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      type: '',
      startsAt: new Date(),
      endsAt: new Date(),
      location: {
        address: "",
        coordinates: {
          lat: 0,
          lng: 0
        }
      }
    }
  })
  const handleSubmit = useCallback(async () => {
    const values = form.getValues()
    const result = await createEvent({
      data: {
        name: values.name,
        type: values.type,
        startsAt: values.startsAt,
        endsAt: values.endsAt,
        location: {
          address: values.location.address,
          coordinates: values.location.coordinates
        }
      }
    });
    if (result.error) {
      toast.error('Something went wrong')
    }
    if (result.data) {
      toast('Event was successfully created')
    }
    console.log({ result })
  }, [form, createEvent])
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Event</DialogTitle>
          <DialogDescription>Let's add some basic information</DialogDescription>
        </DialogHeader>
        <WizardComponent
          animationRef={parent}
          initialStep="type-and-name"
          steps={{
            'type-and-name': {
              key: 'type-and-name',
              render: ({ navigateToStep }) => <EventTypeAndNameForm
                initialValues={{ name: form.getValues().name, type: form.getValues().type }}
                onSubmit={(values) => {
                  form.setValue('name', values.name)
                  form.setValue('type', values.type)
                  navigateToStep('schedule')
                }} />
            },
            'schedule': {
              key: 'schedule',
              render: ({ navigateToStep }) => <EventScheduleForm
                initialValues={{ startsAt: form.getValues().startsAt, endsAt: form.getValues().endsAt }}
                onBack={() => {
                  navigateToStep('type-and-name')
                }}
                onSubmit={(values) => {
                  form.setValue('startsAt', values.startsAt)
                  form.setValue('endsAt', values.endsAt)
                  navigateToStep('location')
                }} />
            },
            'location': {
              key: 'location',
              render: ({ navigateToStep }) => <EventLocationForm
                initialValues={{ location: form.getValues().location }}
                onBack={() => navigateToStep('schedule')}
                isLoading={createEventResult.fetching}
                onSubmit={async (values) => {
                  if (values.location) {
                    try {
                      form.setValue('location', values.location)
                      await handleSubmit();
                    } catch (error) {
                      toast.error('Something went wrong')
                    }
                  }
                }} />
            }
          }}

        />
      </DialogContent>
    </Dialog>
  )
}
