"use client"

import { Lightbulb, Image, Video, Music, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function CreatePost() {
  const [caption, setCaption] = useState("")

  return (
    <div className="bg-[#221c26] rounded-2xl p-4 mb-6 border border-[#4a3c53]/30">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
          <span className="text-white font-semibold text-sm">AT</span>
        </div>
        <Input
          type="text"
          placeholder="What's your talent today?"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="flex-1 bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
          >
            <Image className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
          >
            <Video className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
          >
            <Music className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
          >
            <FileText className="h-5 w-5" />
          </Button>
        </div>
        <Button
          className="bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-10 px-6 font-semibold"
        >
          Post
        </Button>
      </div>
    </div>
  )
}

