import { useAuth } from "@/context/AuthContext";
import {
  Bell,
  Menu,
  MessageCircle,
  Mic,
  Music,
  Palette,
  PlusSquare,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-6">
          {/* Left: Logo (Only on non-home pages) */}
          {!isHome && (
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="size-8 rounded-lg bg-linear-to-br from-primary to-purple-400 flex items-center justify-center shadow-glow">
                <Sparkles className="text-white h-5 w-5 fill-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white hidden sm:block">
                Talenzy
              </span>
            </Link>
          )}

          {/* Center: Search Bar */}
          <div
            className={`relative flex-1 ${
              isHome ? "max-w-xl" : "max-w-md mx-auto"
            }`}
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-text-secondary" />
            </div>
            <input
              className="block w-full pl-10 pr-4 py-2 bg-surface-dark border border-border-dark rounded-full text-sm text-white placeholder-text-secondary focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
              placeholder="Search..."
              type="text"
            />
          </div>

          <button className="md:hidden p-2 text-white">
            <Menu className="h-6 w-6" />
          </button>

          {/* Right Side Actions (Hidden on mobile for now) */}
          <div className="hidden md:flex items-center gap-2">
            {!isHome && isAuthenticated ? (
              <>
                <button
                  className="p-2 text-text-secondary hover:text-white transition-colors"
                  aria-label="Upload"
                >
                  <PlusSquare className="h-5 w-5" />
                </button>
                <button
                  className="p-2 text-text-secondary hover:text-white transition-colors"
                  aria-label="Messages"
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button
                  className="p-2 text-text-secondary hover:text-white transition-colors relative"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
                </button>
                <Link href="/profile" className="ml-2">
                  <div className="size-8 rounded-full bg-surface-dark border border-border-dark overflow-hidden cursor-pointer hover:border-primary transition-colors">
                    <div className="w-full h-full bg-linear-to-tr from-blue-500 to-purple-500"></div>
                  </div>
                </Link>
              </>
            ) : !isHome && !isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/auth/login"
                  className="text-sm font-semibold text-white hover:text-primary transition-colors px-3 py-1.5"
                >
                  Log In
                </Link>
                <Link
                  href="/auth/register"
                  className="text-sm font-bold bg-white text-primary hover:bg-gray-100 px-4 py-1.5 rounded-full transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              // Home Page Right Side (Default / Existing)
              <div className="flex items-center gap-4">
                <button className="p-2 text-text-secondary hover:text-white transition-colors relative group">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
                </button>
                <div className="size-8 rounded-full bg-surface-dark border border-border-dark overflow-hidden cursor-pointer hover:border-primary transition-colors">
                  <div className="w-full h-full bg-linear-to-tr from-blue-500 to-purple-500"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Chips Row (Only on Home Page) */}
        {isHome && (
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
        )}
      </div>
    </header>
  );
}
