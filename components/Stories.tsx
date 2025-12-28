"use client"

import { Plus } from "lucide-react"

interface Story {
  id: string
  username: string
  avatar: string
  hasStory: boolean
}

const stories: Story[] = [
  { id: "1", username: "My Story", avatar: "AT", hasStory: true },
  { id: "2", username: "Sarah_S", avatar: "SS", hasStory: true },
  { id: "3", username: "Mike_Da...", avatar: "MD", hasStory: true },
  { id: "4", username: "Jenny_Art", avatar: "JA", hasStory: true },
  { id: "5", username: "Tom_Tech", avatar: "TT", hasStory: false },
  { id: "6", username: "Lisa_M", avatar: "LM", hasStory: true },
]

export default function Stories() {
  return (
    <div className="bg-[#221c26] rounded-2xl p-4 mb-6 border border-[#4a3c53]/30">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold relative ${
                story.hasStory
                  ? "bg-gradient-to-br from-[#9419e6] to-[#7a14c4] ring-2 ring-[#9419e6]"
                  : "bg-[#2a2330] ring-2 ring-[#4a3c53]"
              }`}
            >
              {story.id === "1" ? (
                <Plus className="h-6 w-6" />
              ) : (
                <span className="text-sm">{story.avatar}</span>
              )}
            </div>
            <p className="text-gray-400 text-xs text-center max-w-[80px] truncate group-hover:text-white transition-colors">
              {story.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

