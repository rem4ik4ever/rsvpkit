'use client';

import { LogoutButton } from "@/app/components/auth/logout-button";
import { Logo } from "@/components/logo";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuthenticatedItemQuery, useLogoutMutation } from "@/hooks/gql";
import { useAuthStore } from "@/stores/auth";
import { CalendarCheck2Icon, HomeIcon, LineChartIcon, Package2Icon, PackageIcon, PanelLeftIcon, SearchIcon, ShoppingCartIcon, UsersIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Suspense } from "react";

const breadcrumbMap = {
  '/app': [
    { text: 'Dashboard', href: '/app' }
  ],
  '/app/events': [
    { text: 'Dashboard', href: '/app' },
    { text: 'Events', href: '/app/events' }
  ],
}

export const DashboardHeader = () => {
  const pathname = usePathname() as keyof typeof breadcrumbMap;
  const breadcrumb = breadcrumbMap[pathname] || []
  const user = useAuthStore(state => state.user)

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeftIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              prefetch={false}
            >
              <CalendarCheck2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only"><Logo /></span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <HomeIcon className="h-5 w-5" />
              Dashboard
            </Link>
            <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
              <ShoppingCartIcon className="h-5 w-5" />
              Orders
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <PackageIcon className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <UsersIcon className="h-5 w-5" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <LineChartIcon className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {
            breadcrumb.map(({ text, href }, index) => (
              <>
                {
                  index > 0 && <BreadcrumbSeparator />
                }
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={href}>{text}</BreadcrumbLink>
                </BreadcrumbItem>
              </>
            ))
          }
          {/*<BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#" prefetch={false}>
                Dashboard
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#" prefetch={false}>
                Orders
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Recent Orders</BreadcrumbPage>
          </BreadcrumbItem>*/}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
            <Image
              src={user?.avatarUrl!}
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
              style={{ aspectRatio: "36/36", objectFit: "cover" }}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
