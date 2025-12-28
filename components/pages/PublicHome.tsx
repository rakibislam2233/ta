"use client";

import PostCard from "@/components/FeedPost";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export default function PublicHome() {
  const [showJoinToast, setShowJoinToast] = useState(true);

  const post1 = {
    mediaUrl:
      "https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=1000",
    avatarUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100",
    username: "GuitarHero",
    audioName: "Original Audio",
    timestamp: "2h ago",
    caption:
      "Practicing a new solo for the upcoming gig! What do you guys think of this riff? #music #rock",
    likes: "1.2k",
    comments: "45",
  };

  const post2 = {
    mediaUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    username: "NeonDreamer",
    audioName: "Concept Art",
    timestamp: "5h ago",
    caption:
      "The future is bright. Latest concept art for my personal project. #art #design",
    likes: "3.4k",
    comments: "120",
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-12 pb-32">
      <PostCard post={post1} />
      <PostCard post={post2} />

      {/* Floating Join Banner */}
      {showJoinToast && (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
          <div className="glass-panel border border-primary/30 p-4 rounded-xl shadow-glow max-w-xs flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col text-left">
                <h4 className="text-white font-bold text-base">Join Talenzy</h4>
                <p className="text-text-secondary text-xs">
                  Share your talent and get hired today!
                </p>
              </div>
              <button
                onClick={() => setShowJoinToast(false)}
                className="text-text-secondary hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <Button className="w-full py-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-lg transition-colors">
              Sign Up Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
