"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { Bell, MessageSquare, Search, Upload } from "lucide-react"

export default function TopBar() {
  return (
    <div className="w-full bg-background border-b border-border px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search talents, jobs, hashtags..."
              className="bg-background border-input text-foreground placeholder:text-muted-foreground h-12 pl-12 pr-4 rounded-lg focus:border-primary focus:ring-primary w-full"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-primary hover:bg-primary/90 border-primary text-primary-foreground rounded-lg h-10 px-4"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg h-10 w-10 p-0"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg h-10 w-10 p-0 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary transition-all">
            <span className="text-primary-foreground font-semibold text-sm">AT</span>
          </div>
        </div>
      </div>
    </div>
  )
}