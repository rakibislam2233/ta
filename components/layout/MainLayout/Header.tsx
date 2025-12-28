"use client";

import {
  Bell,
  Menu,
  Mic,
  Music,
  Palette,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "All", icon: null },
  { id: "music", label: "Music", icon: Music },
  { id: "comedy", label: "Comedy", icon: Sparkles },
  { id: "design", label: "Design", icon: Palette },
  { id: "dance", label: "Dance", icon: User },
  { id: "magic", label: "Magic", icon: Sparkles },
  { id: "acting", label: "Acting", icon: Mic },
];

export default function Header() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-border-dark">
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
        {/* Search Row */}
        <div className="flex items-center justify-between gap-6">
          <div className="relative flex-1 max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-text-secondary" />
            </div>
            <input
              className="block w-full pl-10 pr-4 py-2.5 bg-surface-dark border border-border-dark rounded-full text-sm text-white placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              placeholder="Search for talents, videos, or hashtags..."
              type="text"
            />
          </div>

          <button className="md:hidden p-2 text-white">
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-text-secondary hover:text-white transition-colors relative group">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
            </button>
            <div className="size-8 rounded-full bg-surface-dark border border-border-dark overflow-hidden cursor-pointer hover:border-primary transition-colors">
              <div className="w-full h-full bg-linear-to-tr from-blue-500 to-purple-500"></div>
            </div>
          </div>
        </div>

        {/* Chips Row */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-white text-background-dark font-bold shadow-sm"
                  : "bg-surface-dark border border-border-dark text-text-secondary hover:text-white hover:border-primary/50 font-medium"
              }`}
            >
              {cat.icon && <cat.icon className="h-3.5 w-3.5" />}
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
