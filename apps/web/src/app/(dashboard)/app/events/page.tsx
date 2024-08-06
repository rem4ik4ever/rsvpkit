'use client';

import CreateEventDialog from "@/components/create-event/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrderDirection } from "@/generated/graphql";
import { useEventsQuery } from "@/hooks/gql";
import { format } from "date-fns";
import { CirclePlusIcon, FileIcon, ListFilterIcon, MapPinIcon, MenuIcon, MoveHorizontalIcon } from "lucide-react";

export default function EventsPage() {
  const [result] = useEventsQuery({
    variables: {
      take: 20,
      skip: 0,
      orderBy: {
        startsAt: OrderDirection.Asc
      },
      where: {}
    }
  });
  console.log({ result })
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="ongoing" className="hidden sm:flex">
              Ongoing
            </TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilterIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Completed</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Ongoing</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <FileIcon className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
            </Button>
            <CreateEventDialog>
              <Button size="sm" className="h-8 gap-1">
                <CirclePlusIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Create event</span>
              </Button>
            </CreateEventDialog>
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Events</CardTitle>
              <CardDescription>Manage your events and track attendance.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead >Invites sent</TableHead>
                    <TableHead className="hidden md:table-cell">Time</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result.data?.events?.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="hidden sm:table-cell">
                        {event.name}
                      </TableCell>
                      <TableCell>
                        {event.invitationsCount}
                      </TableCell>
                      <TableCell>
                        {event.invitationsCount}
                      </TableCell>
                      <TableCell className="font-medium hidden md:table-cell">
                        <div>
                          <div>
                            {format(event.startsAt, 'PP')}
                          </div>
                          <div className="whitespace-nowrap text-xs">
                            {format(event.startsAt, 'p')} - {format(event.endsAt, 'p')}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs">
                        <Button type="button" variant={"ghost"}>
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {event.location.address}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MenuIcon className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-{result.data?.events?.length}</strong> of <strong className="mr-0.5">{result.data?.eventsCount}</strong>
                events
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
