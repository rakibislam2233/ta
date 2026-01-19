"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Bug, ChevronDown, ChevronRight, Search } from "lucide-react"
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
      <div className="w-64 bg-background border-r border-border/30 p-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-foreground font-bold">T</span>
            </div>
            <span className="text-foreground font-semibold">Talenzy</span>
          </div>
          <nav className="space-y-1">
            {["Feed", "Discover", "Wallet"].map((item) => (
              <button
                key={item}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                <span>{item}</span>
              </button>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-muted-foreground text-xs uppercase mb-2">SETTINGS</h3>
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground">
              <span>Help & Support</span>
            </button>
          </nav>
        </div>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors mt-4">
          <span>Log out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">Help & Support</h1>
          <p className="text-muted-foreground text-lg mb-8">How can we help you today?</p>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search specifically for issues, keywords, or topics..."
              className="bg-background border-border text-foreground placeholder:text-muted-foreground h-14 pl-12 pr-4 rounded-lg focus:border-primary focus:ring-primary"
            />
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-foreground font-semibold text-xl mb-4">Frequently Asked Questions</h2>
            <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedTopic === topic.toLowerCase()
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:bg-accent hover:text-foreground"
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
                  className="bg-background rounded-lg border border-border/30 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{faq.icon}</span>
                      <span className="text-foreground font-medium">{faq.question}</span>
                    </div>
                    {expandedFaq === faq.id ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-4 pb-4 pl-14">
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-background rounded-2xl p-6 border border-border/30 mb-6">
            <h2 className="text-foreground font-semibold text-xl mb-2">Contact Support</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div>
                <Label className="text-foreground mb-2 uppercase text-xs">Subject</Label>
                <select className="w-full bg-background border border-border text-foreground rounded-lg h-12 px-4 focus:border-primary focus:ring-primary">
                  <option>General Inquiry</option>
                  <option>Technical Issue</option>
                  <option>Account Problem</option>
                  <option>Payment Issue</option>
                </select>
              </div>
              <div>
                <Label className="text-foreground mb-2 uppercase text-xs">
                  Email (Optional)
                </Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 rounded-lg focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Label className="text-foreground mb-2 uppercase text-xs">Description</Label>
                <Textarea
                  placeholder="Please describe your issue in detail..."
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-32 rounded-lg focus:border-primary focus:ring-primary"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-12 font-semibold">
                Submit Request
              </Button>
            </div>
          </div>

          {/* Report a Problem */}
          <div className="bg-background rounded-2xl p-6 border border-border/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Bug className="h-6 w-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold text-lg mb-2">Report a Problem</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Found a technical bug or glitch? Let our engineering team know.
                </p>
                <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg h-10 px-6">
                  File Bug Report
                </Button>
              </div>
            </div>
          </div>

          {/* Guidelines & Legal */}
          <div className="mt-8">
            <h3 className="text-foreground font-semibold uppercase text-sm mb-4">GUIDELINES & LEGAL</h3>
            <div className="space-y-2">
              {["Community Guidelines", "Terms of Service", "Privacy Policy", "Cookie Policy"].map(
                (item) => (
                  <button
                    key={item}
                    className="w-full flex items-center justify-between p-3 bg-background rounded-lg border border-border/30 hover:bg-accent transition-colors"
                  >
                    <span className="text-foreground">{item}</span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
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


