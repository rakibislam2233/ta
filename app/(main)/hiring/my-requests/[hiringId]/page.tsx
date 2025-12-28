"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  CheckCircle2,
  DollarSign,
  FileText,
  MessageSquare,
  Star,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function MyHireRequestDetailPage() {
  const params = useParams();
  const hiringId = params.hiringId as string;
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [negotiationOffer, setNegotiationOffer] = useState("");

  // Mock data - in real app, fetch based on hiringId
  const orderData = {
    id: hiringId,
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
  };

  const handleSubmitReview = () => {
    // Handle review submission
    console.log("Review submitted:", { rating, review });
    setShowReviewForm(false);
  };

  const handleNegotiation = () => {
    // Handle negotiation/beat
    console.log("Negotiation offer:", negotiationOffer);
  };

  return (
    <div className="min-h-screen bg-[#1a161f] pb-32">
      {/* Header */}
      <div className="border-b border-border-dark/30 bg-surface-dark/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
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
                <span className="text-white">Order #{hiringId}</span>
              </div>
            </div>
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
                  <MessageSquare className="size-4 mr-2" />
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
                      {orderData.category}
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
              </div>
            </div>

            {/* Negotiation/Beat Section */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <DollarSign className="size-5 text-primary" />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Negotiate Price
                </h2>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                Not satisfied with the current price? Make a counter offer to
                the freelancer.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-white font-bold text-sm mb-2 block">
                    Your Offer ($)
                  </label>
                  <input
                    type="number"
                    value={negotiationOffer}
                    onChange={(e) => setNegotiationOffer(e.target.value)}
                    placeholder="Enter your offer amount"
                    className="w-full bg-background-dark border border-border-dark/30 rounded-xl h-12 px-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <Button
                  onClick={handleNegotiation}
                  className="w-full bg-primary hover:bg-primary-hover text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20"
                >
                  Send Counter Offer
                </Button>
              </div>
            </div>

            {/* Review Section */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Star className="size-5 text-primary" />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Leave a Review
                </h2>
              </div>

              {!showReviewForm ? (
                <Button
                  onClick={() => setShowReviewForm(true)}
                  className="w-full bg-white text-primary hover:bg-white/90 rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                >
                  <ThumbsUp className="size-4 mr-2" />
                  Write a Review
                </Button>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-white font-bold text-sm mb-3 block">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`size-8 ${
                              star <= rating
                                ? "fill-yellow-500 text-yellow-500"
                                : "text-gray-600"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-bold text-sm mb-2 block">
                      Your Review
                    </label>
                    <Textarea
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="Share your experience working with this freelancer..."
                      className="min-h-[120px] bg-background-dark border-border-dark/30 text-white"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleSubmitReview}
                      className="flex-1 bg-primary hover:bg-primary-hover text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                    >
                      Submit Review
                    </Button>
                    <Button
                      onClick={() => setShowReviewForm(false)}
                      variant="outline"
                      className="flex-1 bg-transparent border-border-dark text-white hover:bg-surface-dark rounded-xl h-12 font-bold uppercase tracking-widest text-xs"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Service Description */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40">
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

              <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
