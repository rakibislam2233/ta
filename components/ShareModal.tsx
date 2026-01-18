"use client"

import { X, Link2, RefreshCw, Plus, Send, QrCode, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface ShareModalProps {
  title: string
  username: string
  views: string
  description: string
  onClose: () => void
}

export default function ShareModal({
  title,
  username,
  views,
  description,
  onClose,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false)
  const embedCode = `<iframe src="https://talenzy.com/embed/v/1:`

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#221c26] rounded-2xl w-full max-w-2xl border border-[#4a3c53]/30 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#4a3c53]/30">
          <h2 className="text-xl font-bold text-white">Share this creation</h2>
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Preview */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <div className="bg-[#2a2330] rounded-xl p-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center shrink-0">
              <span className="text-white font-bold">SS</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold mb-1">{title}</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#9419e6]">@{username}</span>
                <div className="w-4 h-4 bg-[#9419e6] rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-[#9419e6]">{views}</span>
              </div>
              <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <h3 className="text-white font-semibold text-sm uppercase mb-4">QUICK ACTIONS</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Link2, label: "Copy Link" },
              { icon: RefreshCw, label: "Repost" },
              { icon: Plus, label: "Story" },
              { icon: Send, label: "Message" },
            ].map((action, index) => {
              const Icon = action.icon
              return (
                <button
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-[#2a2330] rounded-lg hover:bg-[#332840] transition-colors"
                >
                  <Icon className="h-6 w-6 text-[#9419e6]" />
                  <span className="text-white text-xs">{action.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Share Externally */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <h3 className="text-white font-semibold text-sm uppercase mb-4">SHARE EXTERNALLY</h3>
          <div className="flex items-center justify-center gap-6">
            {[
              { name: "Facebook", icon: "f", color: "bg-blue-600" },
              { name: "X", icon: "X", color: "bg-black" },
              { name: "WhatsApp", icon: "💬", color: "bg-green-500" },
              { name: "LinkedIn", icon: "💼", color: "bg-blue-700" },
              { name: "More", icon: "⋯", color: "bg-[#2a2330]" },
            ].map((platform, index) => (
              <button
                key={index}
                className="flex flex-col items-center gap-2"
              >
                <div className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-semibold">{platform.icon}</span>
                </div>
                <span className="text-gray-400 text-xs">{platform.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Embed Code */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <h3 className="text-white font-semibold text-sm uppercase mb-4">EMBED CODE</h3>
          <div className="flex gap-2">
            <Input
              type="text"
              value={embedCode}
              readOnly
              className="bg-[#2a2330] border-[#4a3c53] text-white font-mono text-sm flex-1"
            />
            <Button
              onClick={handleCopy}
              className="bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-10 px-4"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* QR Code */}
        <div className="p-6">
          <h3 className="text-white font-semibold text-sm uppercase mb-4">SCAN</h3>
          <Button
            variant="outline"
            className="bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-10 px-4 flex items-center gap-2"
          >
            <QrCode className="h-4 w-4" />
            QR Code
          </Button>
        </div>
      </div>
    </div>
  )
}


