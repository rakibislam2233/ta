"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  CheckCircle2,
  DollarSign,
  MessageSquare,
  Upload,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

type RequestStatus =
  | "PENDING"
  | "NEGOTIATING"
  | "ACCEPTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "REJECTED";

export default function WhoHiredMeDetailPage() {
  const params = useParams();
  const hiringId = params.hiringId as string;

  // State management
  const [status, setStatus] = useState<RequestStatus>("NEGOTIATING");
  const [workDescription, setWorkDescription] = useState("");
  const [counterOffer, setCounterOffer] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [showNegotiation, setShowNegotiation] = useState(false);

  // Mock negotiation history
  const [negotiations, setNegotiations] = useState([
    {
      from: "client",
      amount: 1200,
      message: "Initial offer",
      timestamp: "Oct 25, 2023",
    },
    {
      from: "freelancer",
      amount: 1500,
      message: "My counter offer",
      timestamp: "Oct 26, 2023",
    },
    {
      from: "client",
      amount: 1350,
      message: "Latest offer from client",
      timestamp: "Oct 27, 2023",
    },
  ]);

  // Mock data
  const requestData = {
    id: hiringId,
    title: "Website Redesign Project",
    category: "Web Design",
    status: status,
    client: {
      name: "Tech Startup Inc",
      username: "@techstartup",
      avatar: "TS",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
    },
    financials: {
      originalOffer: 1200.0,
      currentOffer: negotiations[negotiations.length - 1].amount,
      advancePaid: negotiations[negotiations.length - 1].amount / 2,
      remaining: negotiations[negotiations.length - 1].amount / 2,
    },
    timeline: {
      requestDate: "Oct 25, 2023",
      deadline: "Nov 15, 2023",
      status: "21 DAYS LEFT",
    },
    description:
      "We need a complete redesign of our company website. The design should be modern, clean, and user-friendly. We're looking for a responsive design that works well on all devices.",
    requirements: [
      "Homepage redesign",
      "About Us page",
      "Services page",
      "Contact form integration",
      "Mobile responsive design",
      "SEO optimization",
    ],
  };

  const latestOffer = negotiations[negotiations.length - 1];
  const isClientTurn = latestOffer.from === "client";

  const handleAcceptOffer = () => {
    setStatus("ACCEPTED");
  };

  const handleRejectOffer = () => {
    setStatus("REJECTED");
  };

  const handleSendCounterOffer = () => {
    if (counterOffer) {
      setNegotiations([
        ...negotiations,
        {
          from: "freelancer",
          amount: parseFloat(counterOffer),
          message: `Counter offer sent to client: $${counterOffer}`,
          timestamp: new Date().toLocaleDateString(),
        },
      ]);
      setCounterOffer("");
      setShowNegotiation(false);
    }
  };

  // ... (getStatusBadge and other helpers)
  const getStatusBadge = () => {
    const badges = {
      PENDING: {
        color: "bg-orange-500/20 text-orange-500",
        text: "PENDING APPROVAL",
      },
      NEGOTIATING: {
        color: "bg-blue-500/20 text-blue-500",
        text: "NEGOTIATING",
      },
      ACCEPTED: { color: "bg-green-500/20 text-green-500", text: "ACCEPTED" },
      IN_PROGRESS: { color: "bg-primary/20 text-primary", text: "IN PROGRESS" },
      COMPLETED: { color: "bg-green-500/20 text-green-500", text: "COMPLETED" },
      REJECTED: { color: "bg-red-500/20 text-red-500", text: "REJECTED" },
    };
    return badges[status];
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
                <span>Who Hired Me</span>
                <span>/</span>
                <span className="text-white">Request #{hiringId}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 border border-border-dark/40">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <div className="size-24 rounded-3xl overflow-hidden border-2 border-primary/50 shadow-xl shadow-primary/20">
                    <Image
                      src={requestData.client.image}
                      alt={requestData.client.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 p-1 rounded-full border-2 border-surface-dark">
                    <CheckCircle2 className="size-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {requestData.client.name}
                </h3>
                <p className="text-primary text-sm font-bold">
                  {requestData.client.username}
                </p>
              </div>

              <div className="border-t border-border-dark/30 pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs font-black uppercase tracking-widest">
                    Current Offer
                  </span>
                  <span className="text-white font-black text-xl">
                    ${requestData.financials.currentOffer}
                  </span>
                </div>
                <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-xl h-12 font-black uppercase tracking-widest text-xs">
                  <MessageSquare className="size-4 mr-2" />
                  Message Client
                </Button>
              </div>
            </div>

            {/* Financial Status After Acceptance */}
            {(status === "ACCEPTED" || status === "IN_PROGRESS") && (
              <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 border border-border-dark/40">
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4">
                  Escrow Status
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Advance (50%)</span>
                    <span className="text-green-500 font-bold">
                      ${requestData.financials.advancePaid}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">On Completion</span>
                    <span className="text-white font-bold">
                      ${requestData.financials.remaining}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-500 uppercase font-black">
                  Request #{requestData.id}
                </span>
                <span
                  className={`${
                    getStatusBadge().color
                  } px-2 py-0.5 rounded text-[10px] font-black uppercase`}
                >
                  {getStatusBadge().text}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white mb-6 uppercase tracking-tight">
                {requestData.title}
              </h1>

              {/* NEGOTIATION SYSTEM */}
              {status === "NEGOTIATING" && (
                <div className="space-y-6">
                  {/* Latest Offer Highlight Box */}
                  {isClientTurn && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <div className="flex items-start gap-4">
                        <div className="size-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                          <DollarSign className="size-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-blue-400 font-black uppercase text-xs tracking-widest mb-1">
                            Latest Client Offer
                          </p>
                          <h4 className="text-2xl font-black text-white mb-1">
                            ${latestOffer.amount}
                          </h4>
                          <p className="text-gray-400 text-xs">
                            You can accept this offer, reject it, or send a new
                            counter-offer.
                          </p>
                        </div>
                      </div>

                      {/* 3-Button System */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                        <Button
                          onClick={handleAcceptOffer}
                          className="bg-green-500 hover:bg-green-600 text-white rounded-xl h-11 font-black uppercase tracking-widest text-xs shadow-lg shadow-green-500/20"
                        >
                          Accept Offer
                        </Button>
                        <Button
                          onClick={handleRejectOffer}
                          variant="outline"
                          className="bg-transparent border-red-500/50 text-red-500 hover:bg-red-500/10 rounded-xl h-11 font-black uppercase tracking-widest text-xs"
                        >
                          Reject Offer
                        </Button>
                        <Button
                          onClick={() => setShowNegotiation(true)}
                          className="bg-primary hover:bg-primary-hover text-white rounded-xl h-11 font-black uppercase tracking-widest text-xs"
                        >
                          Counter Offer
                        </Button>
                      </div>
                    </div>
                  )}

                  {!isClientTurn && (
                    <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center">
                      <Clock className="size-8 text-primary mx-auto mb-3 animate-pulse" />
                      <p className="text-primary font-black uppercase text-xs tracking-widest mb-1">
                        Waiting for Client
                      </p>
                      <p className="text-gray-400 text-xs">
                        You sent a counter offer of <b>${latestOffer.amount}</b>
                        . Waiting for client response.
                      </p>
                    </div>
                  )}

                  {showNegotiation && (
                    <div className="p-6 bg-background-dark/50 rounded-2xl border border-border-dark/30 animate-in zoom-in-95 duration-200">
                      <label className="text-white font-black uppercase text-[10px] tracking-widest mb-3 block">
                        Your New Offer ($)
                      </label>
                      <input
                        type="number"
                        value={counterOffer}
                        onChange={(e) => setCounterOffer(e.target.value)}
                        placeholder="Enter amount..."
                        className="w-full bg-background-dark border border-border-dark/40 rounded-xl h-12 px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/20 mb-4"
                      />
                      <div className="flex gap-3">
                        <Button
                          onClick={handleSendCounterOffer}
                          className="flex-1 bg-primary text-white h-11 font-black uppercase text-xs"
                        >
                          Send Offer
                        </Button>
                        <Button
                          onClick={() => setShowNegotiation(false)}
                          variant="ghost"
                          className="flex-1 text-gray-400 h-11 font-black uppercase text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Negotiation History */}
                  <div className="space-y-4 mt-8">
                    <h4 className="text-gray-500 font-black uppercase text-xs tracking-widest">
                      Negotiation History
                    </h4>
                    {negotiations.map((neg, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 ${
                          neg.from === "freelancer" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`p-4 rounded-2xl max-w-[80%] ${
                            neg.from === "freelancer"
                              ? "bg-primary/20 border border-primary/30 rounded-tr-none"
                              : "bg-surface-dark/80 border border-border-dark/40 rounded-tl-none"
                          }`}
                        >
                          <div className="flex justify-between gap-4 mb-2">
                            <span className="text-[10px] font-black uppercase tracking-tight text-gray-400">
                              {neg.from === "client" ? "Client" : "You"}
                            </span>
                            <span className="text-[10px] text-gray-500 font-bold">
                              {neg.timestamp}
                            </span>
                          </div>
                          <p className="text-white font-black text-lg">
                            ${neg.amount}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {neg.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Post-Acceptance / Work Submission */}
              {(status === "ACCEPTED" || status === "IN_PROGRESS") && (
                <div className="space-y-6">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-6 text-green-500" />
                      <div>
                        <p className="text-green-500 font-black uppercase text-xs tracking-widest">
                          Offer Accepted!
                        </p>
                        <p className="text-gray-300 text-sm">
                          You are officially hired for{" "}
                          <b>${latestOffer.amount}</b>. You can now submit your
                          work below.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-dark/30 rounded-2xl p-6 border border-border-dark/20">
                    <h3 className="text-white font-black uppercase text-sm tracking-widest mb-4">
                      Submit Deliverables
                    </h3>
                    <Textarea
                      placeholder="Describe your work..."
                      className="bg-background-dark border-border-dark/40 mb-4 h-32 text-white"
                      value={workDescription}
                      onChange={(e) => setWorkDescription(e.target.value)}
                    />
                    <div className="border-2 border-dashed border-border-dark/40 rounded-2xl p-8 text-center hover:border-primary/50 transition-all cursor-pointer">
                      <Upload className="size-8 text-gray-600 mx-auto mb-2" />
                      <p className="text-gray-400 text-xs font-bold">
                        Drop files here or click to upload
                      </p>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-600 text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs mt-6 shadow-xl shadow-primary/20">
                      Submit Work for Review
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Description Card */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40">
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-4">
                Project Requirements
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {requestData.description}
              </p>
              <div className="space-y-2">
                {requestData.requirements.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-gray-400 text-sm"
                  >
                    <div className="size-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
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
