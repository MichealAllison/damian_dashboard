"use client"

import { Home, PlusCircle } from "lucide-react"
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

// Account items with image icons
interface AccountItem {
  title: string
  url: string
  iconType: "outline" | "image"
  image?: string
  iconBg?: string
}

const accountItems: AccountItem[] = [
  {
    title: "Home",
    url: "/",
    iconType: "outline",
  },
  {
    title: "Investments",
    url: "/investments",
    iconType: "image",
    image: "retirement",
    iconBg: "bg-[#ffffff]",
  },
  {
    title: "Savings",
    url: "/cash",
    iconType: "image",
    image: "safety",
    iconBg: "bg-[#ffffff]",
  },
  {
    title: "Documents",
    url: "/documents",
    iconType: "image",
    image: "checking",
    iconBg: "bg-[#ffffff]",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-none w-full md:w-56 lg:w-64 bg-[#000B4E]">
      <SidebarHeader className="p-4 pb-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={140} height={40} />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 mt-4">
        {/* YOUR ADVISOR Section */}
        <SidebarGroup className="py-2">
          <SidebarGroupLabel className="px-0 text-[11px] font-normal tracking-wider text-gray-400 uppercase">
            Your Advisor
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <div className="text-white font-medium text-base">Tom Advisor</div>
            <div className="mt-2 space-y-5">
              <div className="h-[8px] w-3/4 bg-[#424B83] rounded" />
              <div className="h-[8px] w-3/4 bg-[#424B83] rounded" />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-0 my-4 bg-[#424B83] h-1" />

        {/* Account Navigation */}
        <SidebarGroup className="py-2">
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {accountItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      data-active={isActive}
                      className="h-11 justify-start gap-3 rounded-lg px-2 text-gray-300 hover:bg-white/10 hover:text-white data-[active=true]:text-white"
                    >
                      <a href={item.url} className="flex items-center gap-3">
                        {item.iconType === "outline" ? (
                          <>
                            <span className="flex items-center flex-shrink-0" style={{ width: 32, height: 32 }}>
                              <Home className="text-white" style={{ width: 28, height: 28 }} strokeWidth={2} />
                            </span>
                            <span className="h-[6px] w-12 bg-[#424B83] rounded-full ml-2" />
                          </>
                        ) : (
                          <>
                            <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${item.iconBg}`}>
                              <img
                                src={`/images/${item.image}.png`}
                                alt={item.title}
                                className="h-4 w-4"
                              />
                            </div>
                            <div className="flex-1 flex items-center gap-2">
                              <span className="h-[6px] flex-1 bg-[#424B83] rounded-full" />
                            </div>
                          </>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Add New Button */}
        <SidebarGroup className="py-4">
          <SidebarGroupContent>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-2">
              <PlusCircle className="h-5 w-5" />
              <span className="text-sm">Add new</span>
            </button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
