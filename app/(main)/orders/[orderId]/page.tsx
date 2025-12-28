import { ArrowLeft, CheckCircle2, Star, MessageCircle, MoreVertical, AlertTriangle, Download, Upload, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OrderDetailsPage({ params }: { params: { orderId: string } }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link href="/hiring" className="hover:text-white">My Hiring Requests</Link>
        <span>/</span>
        <span className="text-white">Order #{params.orderId}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Talent Profile Card */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">SJ</span>
                </div>
                <CheckCircle2 className="absolute -bottom-1 -right-1 h-6 w-6 text-[#9419e6] bg-[#221c26] rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Sarah Jenkins</h3>
              <p className="text-gray-400 text-sm mb-3">Top Rated • Video Editor</p>
              <div className="flex items-center justify-center gap-1 mb-4">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-white font-medium">4.9</span>
                <span className="text-gray-400 text-sm">(120 reviews)</span>
              </div>
              <Button className="w-full bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-10 font-semibold">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message Talent
              </Button>
            </div>
          </div>

          {/* Financials Card */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <h3 className="text-white font-semibold mb-4">FINANCIALS</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Budget</span>
                <span className="text-white font-semibold">$500.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Deposit Paid</span>
                <span className="text-green-500 font-semibold">$250.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Remaining</span>
                <span className="text-white font-semibold">$250.00</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-10"
            >
              View Receipt
            </Button>
          </div>

          {/* Timeline Card */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <h3 className="text-white font-semibold mb-4">TIMELINE</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Start Date</p>
                <p className="text-white font-medium">Oct 12, 2023</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Due Date</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#9419e6] rounded-full"></div>
                  <p className="text-white font-medium">Oct 20, 2023</p>
                </div>
                <span className="inline-block mt-2 px-3 py-1 bg-[#9419e6]/20 text-[#9419e6] text-xs font-semibold rounded-full">
                  3 DAYS LEFT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Details Card */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 text-sm">Order #{params.orderId}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400 text-sm">Oct 10, 2023</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Video Editing for Campaign Q3</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#9419e6] text-white text-xs font-semibold rounded-full">
                    IN PROGRESS
                  </span>
                  <span className="px-3 py-1 bg-[#2a2330] text-gray-400 text-xs font-semibold rounded-full flex items-center gap-1">
                    <span>🎥</span> Video Editing
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-500 text-xs font-semibold rounded-full flex items-center gap-1">
                    <span>⚡</span> Urgent Priority
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
                >
                  <MoreVertical className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500/30 rounded-lg h-10 px-4"
                >
                  Dispute
                </Button>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Working</span>
                <span className="text-gray-400 text-sm">60%</span>
              </div>
              <div className="w-full h-2 bg-[#2a2330] rounded-full overflow-hidden">
                <div className="h-full bg-[#9419e6] rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="flex items-center justify-between">
              {["Request", "Deposit", "Work", "Review", "Complete"].map((step, index) => (
                <div key={step} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                      index <= 2
                        ? "bg-[#9419e6] text-white"
                        : "bg-[#2a2330] text-gray-500"
                    }`}
                  >
                    {index < 2 ? (
                      <Check className="h-4 w-4" />
                    ) : index === 2 ? (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    ) : (
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    )}
                  </div>
                  <span
                    className={`text-xs ${
                      index <= 2 ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Description */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📄</span>
              <h3 className="text-white font-semibold">Service Description</h3>
            </div>
            <p className="text-gray-300 mb-4">
              I need a high-energy, 30-second vertical video edit for our Q3 marketing campaign. The style should be
              fast-paced, similar to TikTok trends, with dynamic transitions and kinetic typography.
            </p>
            <div className="mb-4">
              <p className="text-white font-medium mb-2">Requirements:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                <li>Resolution: 1080x1920 (9:16)</li>
                <li>Color grading to match our brand palette (Brand Guide attached)</li>
                <li>Background music syncing (Royalty-free track provided)</li>
                <li>Subtitles for all spoken dialogue</li>
              </ul>
            </div>
            <p className="text-gray-400 text-sm italic">
              *"Please ensure the intro hook is within the first 3 seconds as discussed in the chat."
            </p>
          </div>

          {/* Attachments */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📁</span>
                <h3 className="text-white font-semibold">Attachments</h3>
              </div>
              <button className="text-[#9419e6] text-sm hover:underline">Download All</button>
            </div>
            <div className="space-y-3">
              {[
                { name: "Campaign_Script_v2.pdf", size: "2.4 MB", date: "Oct 10", type: "pdf" },
                { name: "Raw_Footage_Pack.zip", size: "1.2 GB", date: "Oct 10", type: "zip" },
              ].map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#2a2330] rounded-lg hover:bg-[#332840] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#9419e6]/20 rounded flex items-center justify-center">
                      <span className="text-[#9419e6] font-bold text-xs">{file.type.toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{file.name}</p>
                      <p className="text-gray-400 text-xs">
                        {file.size} • {file.date}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Action Required */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <h3 className="text-white font-semibold mb-2">Action Required</h3>
            <p className="text-gray-400 text-sm mb-4">
              Review the progress update from Sarah or upload new assets.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-10 px-4 flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Upload Assets
              </Button>
              <Button className="bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-10 px-4 font-semibold flex items-center gap-2">
                <Check className="h-4 w-4" />
                Mark Complete
              </Button>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <h3 className="text-white font-semibold mb-4">Activity Log</h3>
            <div className="space-y-4">
              {[
                {
                  user: "Sarah Jenkins",
                  action: "updated status to IN PROGRESS",
                  quote: "Started working on the rough cut. Will share a preview by Tuesday.",
                  time: "Today, 10:42 AM",
                  icon: "👤",
                  color: "bg-[#9419e6]",
                },
                {
                  user: "System",
                  action: "processed payment",
                  details: "Deposit of $250.00 was securely held in escrow.",
                  time: "Oct 10, 2023, 4:30 PM",
                  icon: "$",
                  color: "bg-green-500",
                },
                {
                  user: "You",
                  action: "created order #84920",
                  time: "Oct 10, 2023, 4:25 PM",
                  icon: "✓",
                  color: "bg-blue-500",
                },
              ].map((activity, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 ${activity.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                      {activity.icon}
                    </div>
                    {index < 2 && (
                      <div className="w-0.5 h-full bg-[#4a3c53] mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold">{activity.user}</span>
                      <span className="text-gray-400">{activity.action}</span>
                    </div>
                    {activity.quote && (
                      <p className="text-gray-300 text-sm italic mb-1">"{activity.quote}"</p>
                    )}
                    {activity.details && (
                      <p className="text-gray-300 text-sm mb-1">{activity.details}</p>
                    )}
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

