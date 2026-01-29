"use client"

import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar"
import { DashboardSidebar } from "@/src/components/layout/dashboardSidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden w-full">
        <DashboardSidebar />
        <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden bg-[#000B4E]">
          <SidebarTrigger className="text-white m-2" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
