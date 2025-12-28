"use client"

import { Heart, MessageCircle, Share2, Gift, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Post from "@/components/Post"
import { useState } from "react"

export default function GiftsPage() {
  const [showGiftModal, setShowGiftModal] = useState(false)

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        <Post
          id="1"
          username="Jessica Melody"
          userAvatar="JM"
          timeAgo="2 hours ago"
          category="Music"
          caption="Practicing a new song for the upcoming concert! What do you guys think? 🎸✨ #music #guitar #live"
          hashtags={["#music", "#guitar", "#live"]}
          mediaType="image"
          likes={2400}
          comments={142}
          originalAudio=""
        />

        {/* Comment Section */}
        <div className="bg-[#221c26] rounded-2xl p-4 border border-[#4a3c53]/30 mt-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
              <span className="text-white font-semibold text-xs">AT</span>
            </div>
            <Input
              type="text"
              placeholder="Send message..."
              className="flex-1 bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-10 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
            />
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
            >
              <span className="text-xl">😊</span>
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
            >
              <Share2 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              className="text-yellow-500 hover:text-yellow-400 hover:bg-transparent p-0 h-auto"
            >
              <Gift className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Gift Sent Notification */}
      {showGiftModal && (
        <div className="fixed top-4 right-4 bg-[#221c26] rounded-lg p-4 border border-[#4a3c53]/30 shadow-2xl z-50 max-w-sm">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#9419e6] rounded-full flex items-center justify-center flex-shrink-0">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-white font-semibold">Gift Sent!</p>
                <button
                  onClick={() => setShowGiftModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <span className="text-xl">×</span>
                </button>
              </div>
              <p className="text-gray-400 text-sm">Just now</p>
              <p className="text-white text-sm mt-1">
                You successfully sent 500 Coins to @JessicaMelody.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

