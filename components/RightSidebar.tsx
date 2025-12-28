"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, ExternalLink } from "lucide-react"

export default function RightSidebar() {
  return (
    <div className="w-80 p-6 space-y-6">
      {/* Suggested Talents */}
      <div className="bg-[#221c26] rounded-2xl p-4 border border-[#4a3c53]/30">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Suggested Talents</h3>
          <button className="text-[#9419e6] text-sm hover:underline">See All</button>
        </div>
        <div className="space-y-4">
          {[
            { name: "Davide R.", role: "Photographer", avatar: "DR" },
            { name: "Anna K.", role: "Dancer", avatar: "AK" },
            { name: "James L.", role: "Developer", avatar: "JL" },
          ].map((talent, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">{talent.avatar}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{talent.name}</p>
                  <p className="text-gray-400 text-xs">{talent.role}</p>
                </div>
              </div>
              <Button
                className="bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-8 px-4 text-xs font-semibold"
              >
                {talent.role === "Developer" ? "Hire" : "Follow"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="bg-[#221c26] rounded-2xl p-4 border border-[#4a3c53]/30">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-[#9419e6]" />
          <h3 className="text-white font-semibold">Trending Now</h3>
        </div>
        <div className="space-y-3">
          {[
            { category: "Music • Trending", tag: "#TalenzyMusic", posts: "12.4k posts" },
            { category: "Art • Viral", tag: "#DigitalArt2024", posts: "8.2k posts" },
            { category: "Job Market", tag: "#RemoteWork", posts: "5.1k posts" },
          ].map((trend, index) => (
            <div key={index} className="cursor-pointer hover:bg-[#2a2330] rounded-lg p-2 transition-colors">
              <p className="text-gray-400 text-xs mb-1">{trend.category}</p>
              <p className="text-[#9419e6] text-sm font-medium mb-1">{trend.tag}</p>
              <p className="text-gray-500 text-xs">{trend.posts}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Videos */}
      <div className="bg-[#221c26] rounded-2xl p-4 border border-[#4a3c53]/30">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Popular Videos</h3>
          <button className="text-[#9419e6] text-sm hover:underline">See All</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { views: "54k" },
            { views: "32k" },
            { views: "18k" },
            { views: "120k" },
          ].map((video, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-[#9419e6]/20 to-[#7a14c4]/20 rounded-lg relative cursor-pointer hover:opacity-80 transition-opacity group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ExternalLink className="h-4 w-4 text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                {video.views} views
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
        <button className="hover:text-white transition-colors">About</button>
        <button className="hover:text-white transition-colors">Help</button>
        <button className="hover:text-white transition-colors">Terms</button>
        <button className="hover:text-white transition-colors">Privacy</button>
        <button className="hover:text-white transition-colors">Language</button>
        <p className="text-gray-500">© 2024 Talenzy, Inc.</p>
      </div>
    </div>
  )
}

