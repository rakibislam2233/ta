"use client";

import PublicHome from "@/components/pages/PublicHome";
import Post from "@/components/Post";
import Stories from "@/components/Stories";
import { Mic, PenTool, ShoppingBag, Video } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const isPublic = searchParams.get("view") === "public";

  if (isPublic) {
    return <PublicHome />;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Stories */}
      <Stories />

      {/* "What's your talent today?" Input Section */}
      <div className="bg-surface-dark rounded-xl p-4 border border-border-dark/30">
        <div className="flex items-center gap-4 mb-4">
          {/* User Avatar */}
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-[#7a14c4] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xs">AT</span>
          </div>
          {/* Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="What's your talent today?"
              className="w-full h-12 bg-[#1b1121] rounded-full pl-5 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary border border-border-dark/30 transition-shadow"
            />
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex justify-between items-center px-4 pt-2">
          <ActionButton icon={Video} label="Video" />
          <ActionButton icon={Mic} label="Live" />
          <ActionButton icon={PenTool} label="Article" />
          <ActionButton icon={ShoppingBag} label="Job" />
        </div>
      </div>

      {/* Post 1 - GuitarMaster */}
      <Post
        id="1"
        username="GuitarMaster"
        userAvatar="GM"
        timeAgo="2h ago"
        category="Music"
        location="Los Angeles"
        caption="Practicing a new riff inspired by the classics. Let me know what you think! 🎸 #TalenzyMusic #GuitarSolo"
        hashtags={[]} // Hashtags included in caption for simpler rendering if Post component supports it, OR passed separately
        mediaType="image" // Using image as per design mockup appearance (static) or video if player needed. Mockup looks like a static image of a video player.
        likes={1200}
        comments={84}
        originalAudio=""
      />
    </div>
  );
}

function ActionButton({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
      <div className="p-2 rounded-lg group-hover:bg-[#2a2330]">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      {/* Helper text if needed, though design just shows icons distributed? 
             Actually Image 1 shows icon buttons row: Video (Purple), etc. 
             Let's just show icons? 
             Wait, Image 1 has: [Purple Icon] [Purple Icon] [Purple Icon] [Purple Icon]. 
             No text labels visible in the small bar. 
             I'll stick to icons with tooltips or just icons.
         */}
    </button>
  );
}
