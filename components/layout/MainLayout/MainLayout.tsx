"use client";

import RightSidebar from "@/components/RightSidebar";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Hide right sidebar on specific full-width or focused pages
  const hideRightSidebar =
    pathname.includes("/messages") ||
    pathname.includes("/settings") ||
    pathname.includes("/auth");

  return (
    <div className="flex min-h-screen bg-background-dark text-white font-display selection:bg-primary selection:text-white overflow-hidden md:pl-64">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative group/main w-full">
        {/* Sticky Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth">{children}</div>
      </main>

      {!hideRightSidebar && (
        <div className="hidden xl:block w-80 border-l border-border-dark bg-background-dark h-screen sticky top-0">
          <RightSidebar />
        </div>
      )}
    </div>
  );
}
