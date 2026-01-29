"use client"

import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar"
import { PlanSidebar } from "@/src/components/layout/planSidebar"
import { AppSidebar } from "@/src/components/layout/appSideBar"

export default function PlanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden w-full">
        <AppSidebar />
        <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden bg-white px-0 lg:px-40">
          <SidebarTrigger className="text-white m-2" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
