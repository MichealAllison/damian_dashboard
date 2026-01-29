import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/layout/appSideBar";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damian Dashboard",
  description: "Dashboard for Damian application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anuphan.variable} font-sans`}>
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden w-full">
            <AppSidebar />
            <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden bg-[#000B4E]">
              <SidebarTrigger />
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
