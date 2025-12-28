import MainLayout from "@/components/layout/MainLayout"
import { Camera, Pencil, Share, CheckCircle2, MapPin, Link as LinkIcon, Calendar, Briefcase, Heart, Star, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  const portfolioItems = [
    { id: 1, type: "video", title: "Guitar Performance", pinned: false },
    { id: 2, type: "image", title: "Creative Agency", pinned: false },
    { id: 3, type: "video", title: "Pinned Video", pinned: true },
    { id: 4, type: "video", title: "Road Trip", pinned: false },
    { id: 5, type: "video", title: "Motion Graphics", pinned: false },
    { id: 6, type: "image", title: "Books Collection", locked: true },
    { id: 7, type: "image", title: "Portrait 1", pinned: false },
    { id: 8, type: "image", title: "Portrait 2", pinned: false },
    { id: 9, type: "image", title: "Portrait 3", pinned: false },
  ]

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        {/* Cover Image */}
        <div className="relative h-64 bg-gradient-to-br from-[#9419e6] to-[#7a14c4]">
          <button className="absolute bottom-4 right-4 bg-[#2a2330] hover:bg-[#332840] text-white p-2 rounded-lg">
            <Camera className="h-5 w-5" />
          </button>
        </div>

        {/* Profile Header */}
        <div className="px-6 pb-6">
          <div className="flex items-start justify-between -mt-16 mb-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] border-4 border-[#1b1121] flex items-center justify-center">
                <span className="text-white font-bold text-3xl">AT</span>
              </div>
              <button className="absolute bottom-0 right-0 bg-[#9419e6] hover:bg-[#a824f0] text-white p-2 rounded-full">
                <Pencil className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-3 mt-20">
              <Button className="bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-10 px-6 font-semibold">
                Edit Profile
              </Button>
              <Button
                variant="outline"
                className="bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-10 px-4"
              >
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* User Info */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold text-white">Alex Talent</h1>
              <CheckCircle2 className="h-6 w-6 text-blue-500" />
              <span className="px-3 py-1 bg-green-500/20 text-green-500 text-xs font-semibold rounded-full">
                HIRING
              </span>
            </div>
            <p className="text-gray-400 mb-4">@alextalent</p>
            <p className="text-white mb-4">
              Multidisciplinary creative director & visual artist 🎨. Creating digital experiences that matter. Obsessed
              with colors and motion. Open for collaborations! ✨
            </p>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                <span>alexcreatives.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Joined March 2021</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Visual Arts</span>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-white font-semibold">142</p>
                <p className="text-gray-400 text-sm">POSTS</p>
              </div>
              <div>
                <p className="text-white font-semibold">12.5k</p>
                <p className="text-gray-400 text-sm">FOLLOWERS</p>
              </div>
              <div>
                <p className="text-white font-semibold">480</p>
                <p className="text-gray-400 text-sm">FOLLOWING</p>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-red-500" />
                <p className="text-white font-semibold">48k</p>
                <p className="text-gray-400 text-sm ml-1">LOVES</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <p className="text-white font-semibold">4.9</p>
                <p className="text-gray-400 text-sm ml-1">RATING</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-[#4a3c53]/30 mb-6">
            {["Posts", "Saved", "Liked", "About", "Reviews"].map((tab, index) => (
              <button
                key={tab}
                className={`pb-4 px-2 border-b-2 transition-colors ${
                  index === 0
                    ? "border-[#9419e6] text-white font-semibold"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-3 gap-4">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gradient-to-br from-[#9419e6]/20 to-[#7a14c4]/20 rounded-2xl overflow-hidden group cursor-pointer hover:opacity-80 transition-opacity"
              >
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                  </div>
                )}
                {item.pinned && (
                  <div className="absolute top-3 left-3 bg-[#9419e6] text-white text-xs font-semibold px-2 py-1 rounded">
                    PINNED
                  </div>
                )}
                {item.locked && (
                  <div className="absolute top-3 right-3 bg-[#2a2330] text-white p-2 rounded-full">
                    <span className="text-xs">🔒</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

