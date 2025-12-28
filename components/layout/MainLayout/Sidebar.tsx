"use client";

import { useAuth } from "@/context/AuthContext";
import {
  Compass,
  Info,
  Layers,
  Settings,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const navItems = [
    { href: "/explore", icon: Compass, label: "Explore" },
    { href: "/trending", icon: TrendingUp, label: "Trending" },
    { href: "/categories", icon: Layers, label: "Categories" },
    { href: "/about", icon: Info, label: "About" },
  ];

  const accountItems = [
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="w-64 h-full flex flex-col border-r border-border-dark bg-[#0f0f13] flex-shrink-0 z-20 hidden md:flex fixed top-0 left-0">
      <div className="p-6 flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 cursor-pointer">
          <div className="size-10 rounded-xl bg-linear-to-br from-primary to-purple-400 flex items-center justify-center shadow-glow">
            <Sparkles className="text-white h-6 w-6 fill-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-white">
              Talenzy
            </h1>
            <p className="text-text-secondary text-xs font-medium">
              Unleash Your Potential
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
                  active
                    ? "bg-surface-dark text-white border border-border-dark/50 shadow-sm"
                    : "text-text-secondary hover:bg-surface-dark hover:text-white"
                }`}
              >
                <item.icon
                  className={`h-6 w-6 transition-colors ${
                    active ? "text-primary " : ""
                  }`}
                />
                <span
                  className={`text-sm ${
                    active ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          <div className="mt-8 pt-8 border-t border-border-dark">
            <p className="px-4 text-xs font-bold text-text-secondary uppercase tracking-wider mb-4">
              Your Account
            </p>
            {(isAuthenticated ? accountItems : []).map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                    active
                      ? "bg-surface-dark text-white"
                      : "text-text-secondary hover:bg-surface-dark hover:text-white"
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}

            {!isAuthenticated && (
              <Link
                href="/auth/register"
                className="w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-text-secondary hover:bg-surface-dark hover:text-white"
              >
                <User className="h-6 w-6" />
                <span className="text-sm font-medium">Sign In / Register</span>
              </Link>
            )}
          </div>
        </nav>

        {/* Footer Buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="w-full h-10 rounded-lg border border-border-dark hover:bg-surface-dark text-white text-sm font-bold transition-all"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link href="/auth/register" className="w-full">
                <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-glow transition-all">
                  Sign Up
                </button>
              </Link>
              <Link href="/auth/login" className="w-full">
                <button className="w-full h-10 rounded-lg border border-border-dark hover:bg-surface-dark text-white text-sm font-bold transition-all">
                  Log In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
