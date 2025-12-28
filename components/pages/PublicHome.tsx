"use client";

import { Button } from "@/components/ui/button";
import {
  Bell,
  Bookmark,
  Gift,
  Heart,
  MessageSquare,
  Music2,
  Search,
  Share2,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PublicHome() {
  const [showJoinToast, setShowJoinToast] = useState(true);

  const tags = ["All", "Music", "Comedy", "Design", "Dance", "Magic", "Acting"];

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-theme(spacing.16))] relative">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-border-dark/30 bg-[#221c26]/50 backdrop-blur-md sticky top-0 z-20">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for talents, videos, or hashtags..."
              className="w-full h-10 bg-[#1b1121] border border-border-dark/30 rounded-full pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Notification Bell with Dot */}
          <div className="relative cursor-pointer hover:bg-white/5 p-2 rounded-full transition-colors">
            <Bell className="h-5 w-5 text-gray-400" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-[#221c26]"></span>
          </div>
          {/* Generic Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7a14c4] to-[#4a3c53] cursor-pointer" />
        </div>
      </header>

      {/* Filter Chips */}
      <div className="h-14 flex items-center gap-3 px-6 overflow-x-auto scrollbar-hide border-b border-border-dark/30 bg-background-dark/95 z-10">
        {tags.map((tag, i) => (
          <button
            key={tag}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              i === 0
                ? "bg-white text-black"
                : "bg-[#2a2330] text-gray-400 hover:bg-[#332840] hover:text-white"
            }`}
          >
            {i === 1 && <Music2 className="inline mr-1.5 h-3.5 w-3.5" />}
            {i === 3 && <span className="inline mr-1.5">🎨</span>}
            {i === 4 && <span className="inline mr-1.5">🩰</span>}
            {i === 5 && <span className="inline mr-1.5">🪄</span>}
            {i === 6 && <span className="inline mr-1.5">🎤</span>}
            {tag}
          </button>
        ))}
      </div>

      {/* Main Feed Content - Single Large Video Card */}
      <div className="flex-1 overflow-y-auto p-6 flex justify-center">
        <div className="relative w-full max-w-[400px] aspect-9/16 bg-black rounded-xl overflow-hidden shadow-2xl group border border-border-dark/30">
          {/* Main Video Background using Unsplash Image */}
          <Image
            src="https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=1000" // Concert/Guitarist
            alt="Guitar Performance"
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />

          {/* Right Side Actions */}
          <div className="absolute right-4 bottom-20 flex flex-col items-center gap-6 z-10">
            <ActionItem icon={Heart} label="1.2k" />
            <ActionItem icon={MessageSquare} label="45" />
            <ActionItem
              icon={Gift}
              label="Gift"
              color="text-pink-500"
              bgColor="bg-pink-500/20"
            />
            <ActionItem icon={Bookmark} label="Save" />
            <ActionItem icon={Share2} label="" />
          </div>

          {/* Bottom Info */}
          <div className="absolute left-4 bottom-6 right-16 z-10 text-white text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full border-2 border-primary p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100"
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-base shadow-black drop-shadow-md">
                  GuitarHero
                </h3>
                <p className="text-xs text-gray-300 flex items-center gap-1">
                  <Music2 className="h-3 w-3" /> Original Audio • 2h ago
                </p>
              </div>
              {/* Hire Me Button - Small pill */}
              <Button
                variant="outline"
                className="h-7 text-xs border-white/30 text-white hover:bg-white/20 ml-2 rounded-full px-3"
              >
                Hire Me
              </Button>
            </div>
            <p className="text-sm text-gray-100 mb-2 line-clamp-2 drop-shadow-md">
              Practicing a new solo for the upcoming gig! What do you guys think
              of this riff?
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-bold opacity-90">
              <span className="text-[#ff4d4d]">🎸</span>
              <span className="text-[#ffae42]">🔥</span>
              <span className="text-primary hover:underline cursor-pointer">
                #music
              </span>
              <span className="text-primary hover:underline cursor-pointer">
                #rock
              </span>
              <span className="text-primary hover:underline cursor-pointer">
                #guitar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Join Talenzy Toast */}
      {showJoinToast && (
        <div className="absolute bottom-6 right-6 w-80 bg-[#1e1e1e] border border-border-dark/50 p-4 rounded-xl shadow-2xl z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <button
            onClick={() => setShowJoinToast(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <h4 className="text-white font-bold mb-1">Join Talenzy</h4>
          <p className="text-gray-400 text-xs mb-3">
            Share your talent and get hired today!
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
            Sign Up Now
          </Button>
        </div>
      )}
    </div>
  );
}

function ActionItem({
  icon: Icon,
  label,
  color = "text-white",
  bgColor = "bg-white/10",
}: {
  icon: any;
  label: string;
  color?: string;
  bgColor?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`p-3 rounded-full backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer ${bgColor} ${color}`}
      >
        <Icon className={`h-6 w-6 ${label === "Gift" ? "" : "fill-current"}`} />
      </div>
      {label && (
        <span className="text-xs font-semibold text-white shadow-black drop-shadow-md">
          {label}
        </span>
      )}
    </div>
  );
}
