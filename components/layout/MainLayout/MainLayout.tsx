"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"
import RightSidebar from "@/components/RightSidebar"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()
  // Hide right sidebar for messages, hiring, settings pages
  const hideRightSidebar = pathname?.includes("/messages") || pathname?.includes("/hiring") || pathname?.includes("/settings")

  return (
    <div className="min-h-screen bg-background-dark flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 flex overflow-y-auto">
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          {!hideRightSidebar && <RightSidebar />}
        </div>
      </div>
    </div>
  )
}

