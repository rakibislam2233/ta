"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Compass,
  Briefcase,
  MessageSquare,
  Bell,
  Bookmark,
  Wallet,
  User,
  Settings,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Compass, label: "Explore", href: "/explore" },
    { icon: Briefcase, label: "Hiring", href: "/hiring" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Bookmark, label: "Saved", href: "/saved" },
    { icon: Wallet, label: "Wallet", href: "/wallet" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(href)
  }

  return (
    <div className="w-64 bg-[#221c26] border-r border-[#4a3c53]/30 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-[#4a3c53]/30">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#9419e6] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-white text-xl font-semibold">Talenzy</span>
        </Link>
        <p className="text-gray-400 text-xs mt-1 ml-12">Unleash Your Potential</p>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-b border-[#4a3c53]/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
            <span className="text-white font-semibold">AT</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm">Alex Talent</p>
            <p className="text-gray-400 text-xs">@alextalent</p>
            <div className="flex gap-4 mt-1">
              <span className="text-gray-500 text-xs">12.5k FOLLOWERS</span>
              <span className="text-gray-500 text-xs">480 FOLLOWING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? "bg-[#9419e6] text-white"
                    : "text-gray-400 hover:bg-[#2a2330] hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Create Post Button */}
      <div className="p-4 border-t border-[#4a3c53]/30">
        <Button className="w-full bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-12 font-semibold">
          <Plus className="h-5 w-5 mr-2" />
          Create Post
        </Button>
      </div>
    </div>
  )
}

