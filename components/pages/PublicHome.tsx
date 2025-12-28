"use client";

import PostCard from "@/components/FeedPost";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

import { MOCK_POSTS } from "@/lib/data";

export default function PublicHome() {
  const [showJoinToast, setShowJoinToast] = useState(true);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-12 pb-32">
      <div className="space-y-8">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {/* Floating Join Banner */}
      {showJoinToast && (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10">
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
