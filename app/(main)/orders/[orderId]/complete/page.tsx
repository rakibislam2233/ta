"use client"

import { useParams } from "next/navigation"
import { Upload, Check, AlertTriangle, X, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function JobCompletionPage() {
  const params = useParams()
  const orderId = params?.orderId as string

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">Job Completion Flow</h1>
      <p className="text-gray-400 mb-8">
        Review and manage job completion steps for Clients and Creators.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mark Job as Complete - Client View */}
        <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-semibold text-lg">Mark Job as Complete</h2>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-[#2a2330] rounded-lg">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
                <span className="text-white font-semibold text-sm">SJ</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold">Video Edit for Campaign X</p>
                <p className="text-gray-400 text-sm">Creator: @SarahJane</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#9419e6]/20 text-[#9419e6] text-xs font-semibold rounded-full">
                Escrowed
              </span>
              <div className="flex-1 text-right">
                <p className="text-gray-400 text-xs">Total Amount</p>
                <p className="text-white font-bold">$250.00</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="satisfaction"
                className="border-[#4a3c53] data-[state=checked]:bg-[#9419e6] data-[state=checked]:border-[#9419e6] mt-1"
              />
              <Label htmlFor="satisfaction" className="text-gray-300 text-sm cursor-pointer">
                I confirm the work is completed to my satisfaction and I have received all deliverables.
              </Label>
            </div>

            <div>
              <Label className="text-white mb-2">Completion Notes (Optional)</Label>
              <Textarea
                placeholder="Write a nice review or feedback for the creator..."
                className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 min-h-24 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
              />
            </div>

            <Button className="w-full bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-12 font-semibold flex items-center justify-center gap-2">
              <Lock className="h-4 w-4" />
              Confirm & Release Payment
            </Button>

            <p className="text-gray-400 text-xs text-center">
              Funds will be released from escrow immediately.
            </p>
          </div>
        </div>

        {/* Submit for Completion - Creator View */}
        <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-semibold text-lg">Submit for Completion</h2>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg h-8 px-3 text-xs font-semibold">
              CREATOR VIEW
            </Button>
          </div>

          <div className="space-y-4">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-6">
              {["Started", "In Progress", "Review", "Done"].map((step, index) => (
                <div key={step} className="flex flex-col items-center flex-1">
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

            <div className="border-2 border-dashed border-[#4a3c53] rounded-lg p-8 text-center hover:border-[#9419e6] transition-colors cursor-pointer">
              <Upload className="h-10 w-10 text-[#9419e6] mx-auto mb-3" />
              <p className="text-white font-medium mb-1">Drag & drop deliverables</p>
              <p className="text-gray-400 text-sm">
                or <span className="text-[#9419e6] hover:underline">browse files</span>
              </p>
              <p className="text-gray-500 text-xs mt-2">Supports MP4, PNG, JPG up to 2GB</p>
            </div>

            <div>
              <Label className="text-white mb-2">Message to Client</Label>
              <Textarea
                defaultValue="Here are the final files..."
                className="bg-[#2a2330] border-[#4a3c53] text-white min-h-24 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
              />
            </div>

            <Button className="w-full bg-white hover:bg-gray-100 text-[#1b1121] rounded-lg h-12 font-semibold">
              Send Request
            </Button>
          </div>
        </div>

        {/* Report an Issue */}
        <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-semibold text-lg">Report an Issue</h2>
            <span className="px-3 py-1 bg-red-500/20 text-red-500 text-xs font-semibold rounded-full">
              DISPUTE
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-400 text-sm">
                  Opening a dispute will pause the payment timer and escalate this job to Talenzy support team.
                </p>
              </div>
            </div>

            <div>
              <Label className="text-white mb-2">Reason for Dispute</Label>
              <select className="w-full bg-[#2a2330] border border-[#4a3c53] text-white rounded-lg h-12 px-4 focus:border-[#9419e6] focus:ring-[#9419e6]">
                <option>Select a reason...</option>
                <option>Work not completed</option>
                <option>Quality issues</option>
                <option>Missing deliverables</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <Label className="text-white mb-2">Evidence (Screenshots/Files)</Label>
              <Button
                variant="outline"
                className="w-full bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-12 flex items-center justify-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Upload Proof
              </Button>
            </div>

            <div>
              <Label className="text-white mb-2">Explanation</Label>
              <Textarea
                placeholder="Please describe the issue in detail..."
                className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 min-h-32 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
              />
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-12"
              >
                Cancel
              </Button>
              <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-lg h-12 font-semibold">
                Submit Dispute
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

