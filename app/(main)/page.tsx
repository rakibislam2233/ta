"use client";

import PostCard from "@/components/FeedPost";
import PublicHome from "@/components/pages/PublicHome";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { FileText, PlusCircle, Radio, Video } from "lucide-react";
import Image from "next/image";

import { MOCK_POSTS } from "@/lib/data";

export default function Home() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <PublicHome />;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pb-32">
      {/* Stories Section */}
      <div className="py-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-600 p-0.5 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
              <div className="w-full h-full bg-surface-dark rounded-full flex items-center justify-center">
                <PlusCircle className="text-primary h-6 w-6" />
              </div>
            </div>
            <span className="text-xs text-white font-medium">My Story</span>
          </div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[72px] cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full border-2 border-primary p-0.5 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-800">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      1500000000000 + i
                    }?w=100&h=100&fit=crop`}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-xs text-white font-medium truncate w-full text-center">
                User {i}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Create Post Input */}
      <div className="bg-surface-dark rounded-xl p-6 border border-border-dark mb-8">
        <div className="flex gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-[#7a14c4] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">AT</span>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="What's your talent today?"
              className="w-full h-10 bg-background-dark border border-border-dark rounded-full px-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <ActionButton icon={Video} label="Video" color="text-red-500" />
            <ActionButton icon={Radio} label="Live" color="text-red-600" />
            <ActionButton
              icon={FileText}
              label="Article"
              color="text-green-500"
            />
          </div>
          <Button className="bg-primary hover:bg-[#a824f0] text-white rounded-lg px-6 h-9 text-sm font-bold shadow-glow">
            Post
          </Button>
        </div>
      </div>

      {/* Feed Posts */}
      <div className="space-y-8">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  color,
}: {
  icon: any;
  label: string;
  color: string;
}) {
  return (
    <button className="flex items-center gap-2 hover:bg-background-dark px-3 py-2 rounded-lg transition-colors group">
      <Icon className={`h-4 w-4 ${color}`} />
      <span className="text-gray-400 font-medium text-xs group-hover:text-white transition-colors">
        {label}
      </span>
    </button>
  );
}
