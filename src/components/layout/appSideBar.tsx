"use client"

import {
  LayoutDashboard,
  ListTodo,
  Users,
  CreditCard,
  FileText,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/src/components/ui/sidebar"

import Image from "next/image"

// Main navigation items
const mainItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Tasks",
    url: "#",
    icon: ListTodo,
    badge: "14",
  },
]

// 401(K) section items
const accountItems = [
  {
    title: "Employees",
    url: "#",
    icon: Users,
  },
  {
    title: "Payroll",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "Plan",
    url: "/plan",
    icon: FileText,
  },
  {
    title: "Resources",
    url: "#",
    icon: BookOpen,
  },
]

// Your Account section items
const userItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Log out",
    url: "#",
    icon: LogOut,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-none  w-full md:w-56 lg:w-64">
      <SidebarHeader className="p-4 pb-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={140} height={40} />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 mt-5">
        {/* Main Navigation */}
        <SidebarGroup className="py-2">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {mainItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      data-active={isActive}
                      className="h-10 justify-start gap-3 rounded-md px-3 text-gray-300 hover:bg-white/10 hover:text-white data-[active=true]:bg-indigo-900/50 data-[active=true]:text-white"
                    >
                      <a href={item.url}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto rounded bg-gray-600 px-2 py-0.5 text-xs text-white">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-2 bg-gray-700" />

        {/* YOUR 401(K) Section */}
        <SidebarGroup className="py-2">
          <SidebarGroupLabel className="px-3 text-[10px] font-normal tracking-wider text-gray-500">
            YOUR 401(K)
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {accountItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      data-active={isActive}
                      className="h-10 justify-start gap-3 rounded-md px-3 text-gray-300 hover:bg-white/10 hover:text-white data-[active=true]:bg-indigo-900/50 data-[active=true]:text-white"
                    >
                      <a href={item.url}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-2 bg-gray-700" />

        {/* YOUR ACCOUNT Section */}
        <SidebarGroup className="py-2">
          <SidebarGroupLabel className="px-3 text-[10px] font-normal tracking-wider text-gray-500">
            YOUR ACCOUNT
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {userItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      data-active={isActive}
                      className="h-10 justify-start gap-3 rounded-md px-3 text-gray-300 hover:bg-white/10 hover:text-white data-[active=true]:bg-indigo-900/50 data-[active=true]:text-white"
                    >
                      <a href={item.url}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}