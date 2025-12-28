"use client"

import { Search, ChevronDown, ChevronRight, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function HelpPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [selectedTopic, setSelectedTopic] = useState("all")

  const faqs = [
    {
      id: 1,
      question: "How do I withdraw my earnings?",
      answer: "You can withdraw your earnings by going to your Wallet page and clicking the 'Withdraw' button. Funds are typically processed within 24-48 hours.",
      icon: "🎥",
      topic: "monetization",
    },
    {
      id: 2,
      question: "Why didn't my gift send?",
      answer: "If your gift didn't send, please check your coin balance and ensure you have sufficient funds. If the issue persists, contact support.",
      icon: "🎁",
      topic: "general",
    },
    {
      id: 3,
      question: "How do I verify my talent profile?",
      answer: "To verify your profile, go to Settings > Verification and follow the steps to submit your identification documents and selfie.",
      icon: "✓",
      topic: "account",
    },
  ]

  const topics = ["All Topics", "General", "Monetization", "Account", "Technical"]

  return (
    <div className="flex h-full">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#221c26] border-r border-[#4a3c53]/30 p-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#9419e6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <span className="text-white font-semibold">Talenzy</span>
          </div>
          <nav className="space-y-1">
            {["Feed", "Discover", "Wallet"].map((item) => (
              <button
                key={item}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#2a2330] hover:text-white transition-colors"
              >
                <span>{item}</span>
              </button>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-gray-400 text-xs uppercase mb-2">SETTINGS</h3>
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#2a2330] hover:text-white transition-colors">
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#9419e6] text-white">
              <span>Help & Support</span>
            </button>
          </nav>
        </div>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors mt-4">
          <span>Log out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-2">Help & Support</h1>
          <p className="text-gray-400 text-lg mb-8">How can we help you today?</p>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search specifically for issues, keywords, or topics..."
              className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-14 pl-12 pr-4 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
            />
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-white font-semibold text-xl mb-4">Frequently Asked Questions</h2>
            <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedTopic === topic.toLowerCase()
                      ? "bg-[#9419e6] text-white"
                      : "bg-[#2a2330] text-gray-400 hover:bg-[#332840] hover:text-white"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-[#221c26] rounded-lg border border-[#4a3c53]/30 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-[#2a2330] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{faq.icon}</span>
                      <span className="text-white font-medium">{faq.question}</span>
                    </div>
                    {expandedFaq === faq.id ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-4 pb-4 pl-14">
                      <p className="text-gray-300 text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30 mb-6">
            <h2 className="text-white font-semibold text-xl mb-2">Contact Support</h2>
            <p className="text-gray-400 text-sm mb-6">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div>
                <Label className="text-white mb-2 uppercase text-xs">Subject</Label>
                <select className="w-full bg-[#2a2330] border border-[#4a3c53] text-white rounded-lg h-12 px-4 focus:border-[#9419e6] focus:ring-[#9419e6]">
                  <option>General Inquiry</option>
                  <option>Technical Issue</option>
                  <option>Account Problem</option>
                  <option>Payment Issue</option>
                </select>
              </div>
              <div>
                <Label className="text-white mb-2 uppercase text-xs">
                  Email (Optional)
                </Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                />
              </div>
              <div>
                <Label className="text-white mb-2 uppercase text-xs">Description</Label>
                <Textarea
                  placeholder="Please describe your issue in detail..."
                  className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 min-h-32 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                />
              </div>
              <Button className="w-full bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-12 font-semibold">
                Submit Request
              </Button>
            </div>
          </div>

          {/* Report a Problem */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Bug className="h-6 w-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">Report a Problem</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Found a technical bug or glitch? Let our engineering team know.
                </p>
                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-lg h-10 px-6">
                  File Bug Report
                </Button>
              </div>
            </div>
          </div>

          {/* Guidelines & Legal */}
          <div className="mt-8">
            <h3 className="text-white font-semibold uppercase text-sm mb-4">GUIDELINES & LEGAL</h3>
            <div className="space-y-2">
              {["Community Guidelines", "Terms of Service", "Privacy Policy", "Cookie Policy"].map(
                (item) => (
                  <button
                    key={item}
                    className="w-full flex items-center justify-between p-3 bg-[#221c26] rounded-lg border border-[#4a3c53]/30 hover:bg-[#2a2330] transition-colors"
                  >
                    <span className="text-white">{item}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

