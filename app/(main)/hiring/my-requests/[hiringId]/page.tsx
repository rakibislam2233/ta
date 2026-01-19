"use client";

import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    CheckCircle2,
    Clock,
    DollarSign,
    MessageSquare,
    Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

type OrderStatus =
  | "NEGOTIATING"
  | "ACCEPTED"
  | "IN_PROGRESS"
  | "PENDING_REVIEW"
  | "COMPLETED"
  | "CANCELLED"
  | "DISPUTED";

export default function MyHireRequestDetailPage() {
  const params = useParams();
  const hiringId = params.hiringId as string;

  // State management
  const [status, setStatus] = useState<OrderStatus>("NEGOTIATING");
  const [counterOffer, setCounterOffer] = useState("");
  const [showNegotiation, setShowNegotiation] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);

  // Mock negotiation history
  const [negotiations, setNegotiations] = useState([
    {
      from: "client",
      amount: 1200,
      message: "My initial offer",
      timestamp: "Oct 25, 2023",
    },
    {
      from: "freelancer",
      amount: 1500,
      message: "Talent sent a counter offer",
      timestamp: "Oct 26, 2023",
    },
  ]);

  const latestOffer = negotiations[negotiations.length - 1];
  const isFreelancerTurn = latestOffer.from === "freelancer";

  // Mock data
  const orderData = {
    id: hiringId,
    title: "Website Redesign Project",
    category: "Web Design",
    status: status,
    freelancer: {
      name: "Sarah Jenkins",
      username: "@sarahcreative",
      avatar: "SJ",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      rating: 4.8,
      reviews: 42,
    },
    financials: {
      totalBudget: latestOffer.amount,
      depositPaid: latestOffer.amount / 2,
      remaining: latestOffer.amount / 2,
    },
    description:
      "I need a high-energy, complete redesign of our company website. The design should be modern, clean, and user-friendly.",
    requirements: [
      "Resolution: 1080p",
      "Brand palette matching",
      "Responsive Design",
      "SEO Ready",
    ],
  };

  const handleAcceptOffer = () => {
    setStatus("ACCEPTED");
  };

  const handleRejectOffer = () => {
    setStatus("CANCELLED");
  };

  const handleSendCounterOffer = () => {
    if (counterOffer) {
      setNegotiations([
        ...negotiations,
        {
          from: "client",
          amount: parseFloat(counterOffer),
          message: `Sending counter offer to talent: $${counterOffer}`,
          timestamp: new Date().toLocaleDateString(),
        },
      ]);
      setCounterOffer("");
      setShowNegotiation(false);
    }
  };

  const getStatusBadge = () => {
    const badges = {
      NEGOTIATING: {
        color: "bg-blue-500/20 text-blue-500",
        text: "NEGOTIATING",
      },
      ACCEPTED: { color: "bg-green-500/20 text-green-500", text: "ACCEPTED" },
      IN_PROGRESS: { color: "bg-primary/20 text-primary", text: "IN PROGRESS" },
      PENDING_REVIEW: {
        color: "bg-yellow-500/20 text-yellow-500",
        text: "PENDING REVIEW",
      },
      COMPLETED: { color: "bg-green-500/20 text-green-500", text: "COMPLETED" },
      CANCELLED: { color: "bg-red-500/20 text-red-500", text: "CANCELLED" },
      DISPUTED: { color: "bg-orange-500/20 text-orange-500", text: "DISPUTED" },
    };
    return badges[status];
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="border-b border-border/30 bg-background/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/hiring">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground h-10 w-10 p-0"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <span>My Hire Requests</span>
                <span>/</span>
                <span className="text-foreground">Order #{hiringId}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-background/50 backdrop-blur-xl rounded-3xl p-6 border border-border/40">
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
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 p-1 rounded-full border-2 border-background">
                    <CheckCircle2 className="size-4 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl  text-foreground uppercase tracking-tight">
                  {orderData.freelancer.name}
                </h3>
                <p className="text-primary text-sm font-bold">
                  {orderData.freelancer.username}
                </p>
                <div className="flex items-center justify-center gap-1 mt-2 text-xs font-bold text-muted-foreground">
                  <Star className="size-3 fill-yellow-500 text-yellow-500" />
                  <span>{orderData.freelancer.rating}</span>
                  <span>({orderData.freelancer.reviews} reviews)</span>
                </div>
              </div>

              <div className="border-t border-border/30 pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-xs  uppercase tracking-widest">
                    Pricing
                  </span>
                  <span className="text-foreground  text-xl">
                    ${latestOffer.amount}
                  </span>
                </div>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-xl h-12  uppercase tracking-widest text-xs">
                  <MessageSquare className="size-4 mr-2" />
                  Message Talent
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/40">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] text-muted-foreground uppercase  tracking-widest">
                  Order #{orderData.id}
                </span>
                <span
                  className={`${getStatusBadge().color} px-2 py-0.5 rounded text-[10px]  uppercase tracking-widest`}
                >
                  {getStatusBadge().text}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl  text-foreground mb-6 uppercase tracking-tight">
                {orderData.title}
              </h1>

              {/* NEGOTIATION SYSTEM */}
              {status === "NEGOTIATING" && (
                <div className="space-y-6">
                  {/* Latest Offer Highlight Box */}
                  {isFreelancerTurn && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <div className="flex items-start gap-4">
                        <div className="size-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                          <DollarSign className="size-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-blue-400  uppercase text-xs tracking-widest mb-1">
                            Latest Freelancer Offer
                          </p>
                          <h4 className="text-2xl  text-foreground mb-1">
                            ${latestOffer.amount}
                          </h4>
                          <p className="text-muted-foreground text-xs">
                            You can accept this counter-offer, reject it, or
                            send a new price.
                          </p>
                        </div>
                      </div>

                      {/* 3-Button System */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                        <Button
                          onClick={handleAcceptOffer}
                          className="bg-green-500 hover:bg-green-600 text-primary-foreground rounded-xl h-11  uppercase tracking-widest text-xs shadow-lg shadow-green-500/20"
                        >
                          Accept Offer
                        </Button>
                        <Button
                          onClick={handleRejectOffer}
                          variant="outline"
                          className="bg-transparent border-red-500/50 text-red-500 hover:bg-red-500/10 rounded-xl h-11  uppercase tracking-widest text-xs"
                        >
                          Reject Offer
                        </Button>
                        <Button
                          onClick={() => setShowNegotiation(true)}
                          className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl h-11  uppercase tracking-widest text-xs"
                        >
                          Counter Offer
                        </Button>
                      </div>
                    </div>
                  )}

                  {!isFreelancerTurn && (
                    <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center">
                      <Clock className="size-8 text-primary mx-auto mb-3 animate-pulse" />
                      <p className="text-primary  uppercase text-xs tracking-widest mb-1">
                        Waiting for Talent
                      </p>
                      <p className="text-muted-foreground text-xs">
                        You sent a counter offer of <b>${latestOffer.amount}</b>
                        . Waiting for talent response.
                      </p>
                    </div>
                  )}

                  {showNegotiation && (
                    <div className="p-6 bg-background/50 rounded-2xl border border-border/30 animate-in zoom-in-95 duration-200">
                      <label className="text-foreground  uppercase text-[10px] tracking-widest mb-3 block">
                        Your New Offer ($)
                      </label>
                      <input
                        type="number"
                        value={counterOffer}
                        onChange={(e) => setCounterOffer(e.target.value)}
                        placeholder="Enter amount..."
                        className="w-full bg-background border border-border/40 rounded-xl h-12 px-4 text-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 mb-4"
                      />
                      <div className="flex gap-3">
                        <Button
                          onClick={handleSendCounterOffer}
                          className="flex-1 bg-primary text-primary-foreground h-11  uppercase text-xs"
                        >
                          Send Offer
                        </Button>
                        <Button
                          onClick={() => setShowNegotiation(false)}
                          variant="ghost"
                          className="flex-1 text-muted-foreground h-11  uppercase text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Negotiation History */}
                  <div className="space-y-4">
                    <h4 className="text-muted-foreground  uppercase text-xs tracking-widest flex items-center gap-2">
                      Negotiation History
                    </h4>
                    {negotiations.map((neg, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 ${
                          neg.from === "client" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`p-4 rounded-2xl max-w-[80%] ${
                            neg.from === "client"
                              ? "bg-primary/20 border border-primary/30 rounded-tr-none"
                              : "bg-background/80 border border-border/40 rounded-tl-none"
                          }`}
                        >
                          <div className="flex justify-between gap-4 mb-2">
                            <span className="text-[10px]  uppercase tracking-tight text-muted-foreground">
                              {neg.from === "client" ? "You" : "Sarah J."}
                            </span>
                            <span className="text-[10px] text-muted-foreground font-bold">
                              {neg.timestamp}
                            </span>
                          </div>
                          <p className="text-foreground  text-lg">
                            ${neg.amount}
                          </p>
                          <p className="text-muted-foreground text-xs mt-1">
                            {neg.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Post Acceptance Status */}
              {(status === "ACCEPTED" || status === "IN_PROGRESS") && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="size-6 text-green-500" />
                    <div>
                      <p className="text-green-500  uppercase text-xs tracking-widest">
                        Order Accepted!
                      </p>
                      <p className="text-muted-foreground text-sm">
                        The talent has accepted your offer of{" "}
                        <b>${latestOffer.amount}</b>. The project is now in
                        progress.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Service Details Card */}
            <div className="bg-background/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/40">
              <h3 className="text-foreground  uppercase text-sm tracking-widest mb-4">
                Service Description
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {orderData.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {orderData.requirements.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider bg-background/50 p-3 rounded-xl border border-border/30"
                  >
                    <CheckCircle2 className="size-3 text-primary" />
                    <span>{req}</span>
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