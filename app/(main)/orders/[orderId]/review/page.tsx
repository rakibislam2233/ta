"use client"

import { useParams } from "next/navigation"
import { X, Star, ToggleLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Link from "next/link"

export default function ReviewPage() {
  const params = useParams()
  const orderId = params?.orderId as string
  const [rating, setRating] = useState(4)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [wouldHireAgain, setWouldHireAgain] = useState<"yes" | "no" | null>(null)
  const [review, setReview] = useState("")
  const [isPublic, setIsPublic] = useState(true)

  const tags = ["Communication", "Quality", "Professionalism", "Value"]
  const feedback = ["Great!", "Good", "Okay", "Poor", "Terrible"]

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#221c26] rounded-2xl w-full max-w-2xl border border-[#4a3c53]/30">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#4a3c53]/30">
          <h2 className="text-2xl font-bold text-white">Rate Your Experience</h2>
          <Link href={`/orders/${orderId}`}>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
            >
              <X className="h-6 w-6" />
            </Button>
          </Link>
        </div>

        {/* Talent Info */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
              <span className="text-white font-bold text-xl">AR</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Alex Rhythm</h3>
              <p className="text-gray-400 text-sm">Music Production Job #{orderId}</p>
            </div>
          </div>
        </div>

        {/* Star Rating */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="text-white font-semibold">{feedback[5 - rating]}</span>
          </div>
        </div>

        {/* What went well */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <h3 className="text-white font-semibold mb-4">What went well?</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-[#9419e6] text-white"
                    : "bg-[#2a2330] text-gray-400 hover:bg-[#332840] hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Would you hire again */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <h3 className="text-white font-semibold mb-4">Would you hire Alex again?</h3>
          <div className="flex gap-3">
            <button
              onClick={() => setWouldHireAgain("yes")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                wouldHireAgain === "yes"
                  ? "bg-[#9419e6] text-white"
                  : "bg-[#2a2330] text-gray-400 hover:bg-[#332840] hover:text-white"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setWouldHireAgain("no")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                wouldHireAgain === "no"
                  ? "bg-[#9419e6] text-white"
                  : "bg-[#2a2330] text-gray-400 hover:bg-[#332840] hover:text-white"
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Written Review */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <div className="flex items-center justify-between mb-2">
            <Label className="text-white">Written Review</Label>
            <span className="text-gray-400 text-sm">Optional</span>
          </div>
          <Textarea
            placeholder="Share details about your experience..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            maxLength={500}
            className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 min-h-32 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
          />
          <p className="text-gray-400 text-xs mt-1 text-right">{review.length}/500</p>
        </div>

        {/* Make review public */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold mb-1">Make review public</h3>
              <p className="text-gray-400 text-sm">Review will be visible on creator's profile</p>
            </div>
            <button
              onClick={() => setIsPublic(!isPublic)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isPublic ? "bg-[#9419e6]" : "bg-[#4a3c53]"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isPublic ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-6">
          <Button className="w-full bg-gradient-to-r from-[#9419e6] to-[#7a14c4] hover:from-[#a824f0] hover:to-[#8a19d4] text-white rounded-lg h-12 font-semibold">
            Submit Review
          </Button>
        </div>
      </div>
    </div>
  )
}

