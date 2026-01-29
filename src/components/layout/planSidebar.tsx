"use client"

import {
  LayoutDashboard,
  FileText,
  PieChart,
  TrendingUp,
  DollarSign,
  Shield,
  ArrowLeft,
  Settings,
  HelpCircle,
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

// Back to dashboard
const backItem = {
  title: "Back to Dashboard",
  url: "/",
  icon: ArrowLeft,
}

// Plan navigation items
const planItems = [
  {
    title: "Plan Overview",
    url: "/plan",
    icon: FileText,
  },
  {
    title: "Contributions",
    url: "/plan/contributions",
    icon: DollarSign,
  },
  {
    title: "Investments",
    url: "/plan/investments",
    icon: TrendingUp,
  },
  {
    title: "Analytics",
    url: "/plan/analytics",
    icon: PieChart,
  },
  {
    title: "Compliance",
    url: "/plan/compliance",
    icon: Shield,
  },
]

// Support section items
const supportItems = [
  {
    title: "Plan Settings",
    url: "/plan/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    url: "/plan/help",
    icon: HelpCircle,
  },
]

export function PlanSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-none w-full md:w-56 lg:w-64 bg-[#1E293B]">
      <SidebarHeader className="p-4 pb-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={140} height={40} />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 mt-5">
        {/* Back to Dashboard */}
        <SidebarGroup className="py-2">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-10 justify-start gap-3 rounded-md px-3 text-gray-400 hover:bg-white/10 hover:text-white"
                >
                  <a href={backItem.url}>
                    <backItem.icon className="h-5 w-5" />
                    <span>{backItem.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-2 bg-slate-600" />

        {/* PLAN MANAGEMENT Section */}
        <SidebarGroup className="py-2">
          <SidebarGroupLabel className="px-3 text-[10px] font-normal tracking-wider text-slate-500">
            PLAN MANAGEMENT
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {planItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      data-active={isActive}
                      className="h-10 justify-start gap-3 rounded-md px-3 text-slate-300 hover:bg-white/10 hover:text-white data-[active=true]:bg-emerald-600 data-[active=true]:text-white"
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

        <SidebarSeparator className="mx-2 bg-slate-600" />

        {/* SUPPORT Section */}
        <SidebarGroup className="py-2">
          <SidebarGroupLabel className="px-3 text-[10px] font-normal tracking-wider text-slate-500">
            SUPPORT
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {supportItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      data-active={isActive}
                      className="h-10 justify-start gap-3 rounded-md px-3 text-slate-300 hover:bg-white/10 hover:text-white data-[active=true]:bg-emerald-600 data-[active=true]:text-white"
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
