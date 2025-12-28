"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  Clock,
  DollarSign,
  Download,
  FileText,
  Star,
  Upload,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function HiringDetailPage() {
  const params = useParams();
  const orderId = params.orderId as string;
  const [activeTab, setActiveTab] = useState<
    "request" | "deposit" | "work" | "review" | "complete"
  >("work");

  // Mock data - in real app, fetch based on orderId
  const orderData = {
    id: orderId,
    title: "Video Editing for Campaign Q3",
    category: "Video Editing",
    priority: "Urgent Priority",
    status: "IN PROGRESS",
    progress: 60,
    freelancer: {
      name: "Sarah Jenkins",
      username: "@sarahcreative",
      role: "Top Rated • Video Editor",
      avatar: "SJ",
      rating: 4.9,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    financials: {
      totalBudget: 500.0,
      depositPaid: 250.0,
      remaining: 250.0,
    },
    timeline: {
      startDate: "Oct 12, 2023",
      dueDate: "Oct 20, 2023",
      status: "3 DAYS LEFT",
    },
    description:
      "I need a high-energy, 30-second vertical video edit for our Q3 marketing campaign. The style should be fast-paced, similar to TikTok trends, with dynamic transitions and kinetic typography.",
    requirements: [
      "Resolution: 1080x1920 (9:16)",
      "Color grading to match our brand palette (Brand Guide attached)",
      "Background music syncing (Royalty-free track provided)",
      "Subtitles for all spoken dialogue",
    ],
    note: '"Please ensure the intro hook is within the first 3 seconds as discussed in the chat."',
    attachments: [
      {
        name: "Campaign_Script_v2.pdf",
        size: "2.4 MB",
        date: "Oct 10",
        type: "pdf",
      },
      {
        name: "Raw_Footage_Pack.zip",
        size: "12 GB",
        date: "Oct 11",
        type: "zip",
      },
    ],
    activityLog: [
      {
        user: "Sarah Jenkins",
        action: "updated status to",
        status: "IN PROGRESS",
        message:
          '"Started working on the rough cut. Will share a preview by Tuesday."',
        time: "Today, 10:42 AM",
        avatar: "SJ",
      },
      {
        user: "System",
        action: "processed payment",
        message: "Deposit of $250.00 was securely held in escrow.",
        time: "Oct 10, 2023, 4:30 PM",
        icon: "dollar",
      },
      {
        user: "You",
        action: "created order #84920",
        time: "Oct 10, 2023, 4:25 PM",
        icon: "file",
      },
    ],
  };

  const tabs = [
    { id: "request", label: "Request" },
    { id: "deposit", label: "Deposit" },
    { id: "work", label: "Work" },
    { id: "review", label: "Review" },
    { id: "complete", label: "Complete" },
  ];

  return (
    <div className="min-h-screen bg-[#1a161f] pb-32">
      {/* Header */}
      <div className="border-b border-border-dark/30 bg-surface-dark/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/hiring">
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white h-10 w-10 p-0"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span>Home</span>
                <span>/</span>
                <span>My Hiring Requests</span>
                <span>/</span>
                <span className="text-white">Order #{orderId}</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-transparent border-red-500/50 text-red-500 hover:bg-red-500/10 rounded-xl h-10 px-6 font-bold text-xs uppercase tracking-wider"
            >
              Dispute
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Freelancer Card */}
          <div className="lg:col-span-1">
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 border border-border-dark/40 sticky top-24">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <div className="size-24 rounded-3xl overflow-hidden border-2 border-primary/50 shadow-xl shadow-primary/20">
                    <Image
                      src={orderData.freelancer.image}
                      alt={orderData.freelancer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 p-1 rounded-full">
                    <CheckCircle2 className="size-4 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tight">
                  {orderData.freelancer.name}
                </h3>
                <p className="text-primary text-sm font-bold mb-2">
                  {orderData.freelancer.username}
                </p>
                <p className="text-gray-400 text-xs font-medium mb-4">
                  {orderData.freelancer.role}
                </p>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-lg">
                    <Star className="size-3 fill-current" />
                    <span className="text-xs font-black">
                      {orderData.freelancer.rating}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">
                    ({orderData.freelancer.reviews} reviews)
                  </span>
                </div>

                <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl h-12 font-black uppercase tracking-widest text-xs mb-3">
                  Message Talent
                </Button>
              </div>

              {/* Financials */}
              <div className="border-t border-border-dark/30 pt-6">
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4">
                  Financials
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Total Budget</span>
                    <span className="text-white font-bold">
                      ${orderData.financials.totalBudget.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-500 text-sm flex items-center gap-1">
                      <div className="size-2 bg-green-500 rounded-full" />
                      Deposit Paid
                    </span>
                    <span className="text-green-500 font-bold">
                      ${orderData.financials.depositPaid.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Remaining</span>
                    <span className="text-white font-bold">
                      ${orderData.financials.remaining.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 bg-transparent border-border-dark text-white hover:bg-surface-dark rounded-xl h-10 font-bold text-xs uppercase tracking-wider"
                >
                  <FileText className="size-4 mr-2" />
                  View Receipt
                </Button>
              </div>

              {/* Timeline */}
              <div className="border-t border-border-dark/30 pt-6 mt-6">
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4">
                  Timeline
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Start Date</span>
                    <span className="text-white font-medium text-sm">
                      {orderData.timeline.startDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Due Date</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm">
                        {orderData.timeline.dueDate}
                      </span>
                      <span className="bg-orange-500/20 text-orange-500 text-[8px] font-black px-2 py-0.5 rounded uppercase">
                        {orderData.timeline.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Details */}
          <div className="lg:col-span-2">
            {/* Order Header */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">
                      Order #{orderData.id}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">Oct 10, 2023</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                    {orderData.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-black uppercase border border-primary/20">
                      {orderData.status}
                    </span>
                    <span className="bg-background-dark px-3 py-1 rounded-lg text-xs font-bold text-gray-400 border border-border-dark/30">
                      <Briefcase className="size-3 inline mr-1" />
                      {orderData.category}
                    </span>
                    <span className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded-lg text-xs font-black uppercase border border-orange-500/20 flex items-center gap-1">
                      <Clock className="size-3" />
                      {orderData.priority}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                    Progress
                  </span>
                  <span className="text-sm font-black text-primary">
                    {orderData.progress}%
                  </span>
                </div>
                <div className="h-2 bg-background-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-primary to-purple-600 transition-all duration-500"
                    style={{ width: `${orderData.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  {tabs.map((tab, index) => (
                    <div key={tab.id} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div
                          className={`size-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                            index <= tabs.findIndex((t) => t.id === activeTab)
                              ? "bg-primary text-white"
                              : "bg-background-dark text-gray-600"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span
                          className={`text-[10px] font-bold mt-1 ${
                            index <= tabs.findIndex((t) => t.id === activeTab)
                              ? "text-white"
                              : "text-gray-600"
                          }`}
                        >
                          {tab.label}
                        </span>
                      </div>
                      {index < tabs.length - 1 && (
                        <div
                          className={`h-0.5 flex-1 ${
                            index < tabs.findIndex((t) => t.id === activeTab)
                              ? "bg-primary"
                              : "bg-background-dark"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Description */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="size-5 text-primary" />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Service Description
                </h2>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {orderData.description}
              </p>

              <div className="mb-6">
                <h3 className="text-white font-bold text-sm mb-3">
                  Requirements:
                </h3>
                <ul className="space-y-2">
                  {orderData.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <div className="size-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background-dark/50 border border-border-dark/30 rounded-2xl p-4 italic text-gray-400 text-sm">
                {orderData.note}
              </div>
            </div>

            {/* Attachments */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="size-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Attachments
                  </h2>
                </div>
                <Button className="bg-transparent border border-border-dark text-white hover:bg-surface-dark rounded-xl h-10 px-4 font-bold text-xs uppercase">
                  Download All
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {orderData.attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-background-dark/50 border border-border-dark/30 rounded-2xl p-4 hover:border-primary/50 transition-all group"
                  >
                    <div
                      className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${
                        file.type === "pdf"
                          ? "bg-red-500/10 text-red-500"
                          : "bg-blue-500/10 text-blue-500"
                      }`}
                    >
                      <FileText className="size-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm truncate">
                        {file.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {file.size} • {file.date}
                      </p>
                    </div>
                    <button className="text-gray-500 hover:text-white transition-colors">
                      <Download className="size-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Required */}
            <div className="bg-linear-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-primary/30 mb-6">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Upload className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-black text-lg mb-2 uppercase">
                    Action Required
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Review the progress update from Sarah or upload new assets.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-white text-primary hover:bg-white/90 rounded-xl h-12 px-8 font-black uppercase tracking-widest text-xs shadow-xl">
                      <CheckCircle2 className="size-4 mr-2" />
                      Mark Complete
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-xl h-12 px-8 font-black uppercase tracking-widest text-xs"
                    >
                      <Upload className="size-4 mr-2" />
                      Upload Assets
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="size-5 text-primary" />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Activity Log
                </h2>
              </div>

              <div className="space-y-6">
                {orderData.activityLog.map((activity, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0">
                      {activity.avatar ? (
                        <div className="size-10 rounded-xl bg-linear-to-br from-primary to-purple-800 flex items-center justify-center text-white font-black text-sm">
                          {activity.avatar}
                        </div>
                      ) : (
                        <div
                          className={`size-10 rounded-xl flex items-center justify-center ${
                            activity.icon === "dollar"
                              ? "bg-green-500/10 text-green-500"
                              : "bg-blue-500/10 text-blue-500"
                          }`}
                        >
                          {activity.icon === "dollar" ? (
                            <DollarSign className="size-5" />
                          ) : (
                            <FileText className="size-5" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <p className="text-white font-bold text-sm">
                          <span className="text-primary">{activity.user}</span>{" "}
                          {activity.action}{" "}
                          {activity.status && (
                            <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-black uppercase">
                              {activity.status}
                            </span>
                          )}
                        </p>
                        <span className="text-gray-500 text-xs whitespace-nowrap">
                          {activity.time}
                        </span>
                      </div>
                      {activity.message && (
                        <p className="text-gray-400 text-sm italic">
                          {activity.message}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
