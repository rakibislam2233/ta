"use client"

import { X, Coffee, Pizza, Flower, Diamond, Rocket, Trophy, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface SendGiftModalProps {
  username: string
  balance: number
  onClose: () => void
}

const gifts = [
  { id: "coffee", name: "Coffee", icon: Coffee, cost: 50, color: "bg-orange-500" },
  { id: "pizza", name: "Pizza", icon: Pizza, cost: 150, color: "bg-orange-500" },
  { id: "flower", name: "Flower", icon: Flower, cost: 300, color: "bg-pink-500" },
  { id: "diamond", name: "Diamond", icon: Diamond, cost: 1000, color: "bg-blue-500" },
  { id: "rocket", name: "Rocket", icon: Rocket, cost: 5000, color: "bg-red-500" },
  { id: "trophy", name: "Trophy", icon: Trophy, cost: 10000, color: "bg-yellow-500" },
]

export default function SendGiftModal({ username, balance, onClose }: SendGiftModalProps) {
  const [selectedGift, setSelectedGift] = useState("pizza")
  const [customAmount, setCustomAmount] = useState("")
  const [message, setMessage] = useState("")

  const selectedGiftData = gifts.find((g) => g.id === selectedGift)
  const platformFee = selectedGiftData ? Math.ceil(selectedGiftData.cost * 0.05) : 0
  const total = selectedGiftData
    ? selectedGiftData.cost + platformFee
    : customAmount
    ? Number(customAmount) + Math.ceil(Number(customAmount) * 0.05)
    : 0

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#221c26] rounded-2xl w-full max-w-md border border-[#4a3c53]/30">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#4a3c53]/30">
          <div>
            <h2 className="text-xl font-bold text-white">Send a Gift to @{username}</h2>
            <p className="text-gray-400 text-sm">SUPPORT TALENT CREATIVITY</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-3 py-1 bg-[#2a2330] rounded-lg">
              <span className="text-[#9419e6] font-semibold">{balance.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">Coins</span>
            </div>
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Gift Selection */}
        <div className="p-6">
          <h3 className="text-white font-semibold mb-4">Select a Gift</h3>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {gifts.map((gift) => {
              const Icon = gift.icon
              const isSelected = selectedGift === gift.id
              return (
                <button
                  key={gift.id}
                  onClick={() => setSelectedGift(gift.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? "border-[#9419e6] bg-[#9419e6]/10"
                      : "border-[#4a3c53] bg-[#2a2330] hover:border-[#9419e6]/50"
                  }`}
                >
                  <div className={`w-12 h-12 ${gift.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium mb-1">{gift.name}</p>
                  <p className="text-gray-400 text-xs">{gift.cost} coins</p>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-[#9419e6] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <Label className="text-white mb-2">Custom Amount</Label>
            <div className="relative">
              <Input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedGift("")
                }}
                className="bg-[#2a2330] border-[#4a3c53] text-white pl-4 pr-12 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
              />
              <DollarSign className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
          </div>

          {/* Personal Message */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Label className="text-white">Personal Message</Label>
              <span className="text-gray-400 text-xs">Optional</span>
            </div>
            <Textarea
              placeholder="Add a nice message for Jessica..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={140}
              className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 min-h-24 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
            />
            <p className="text-gray-400 text-xs mt-1 text-right">{message.length}/140</p>
          </div>

          {/* Summary */}
          <div className="bg-[#2a2330] rounded-lg p-4 mb-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Selected Gift</span>
              <div className="flex items-center gap-2">
                {selectedGiftData && (
                  <>
                    <div className={`w-6 h-6 ${selectedGiftData.color} rounded flex items-center justify-center`}>
                      <selectedGiftData.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">{selectedGiftData.name}</span>
                  </>
                )}
                {customAmount && <span className="text-white text-sm font-medium">Custom: ${customAmount}</span>}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Platform Fee</span>
              <span className="text-white text-sm">{platformFee} coins</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#4a3c53]">
              <span className="text-white font-semibold">Total</span>
              <span className="text-[#9419e6] font-bold text-lg">{total} coins</span>
            </div>
          </div>

          {/* Send Button */}
          <Button className="w-full bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-12 font-semibold flex items-center justify-center gap-2">
            Send Gift
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

