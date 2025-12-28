"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  DollarSign,
  FileText,
  MessageSquare,
  Upload,
  X,
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
  const [status, setStatus] = useState<RequestStatus>("PENDING"); // PENDING, NEGOTIATING, ACCEPTED, IN_PROGRESS, COMPLETED, REJECTED
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
      currentOffer: 1200.0,
      advancePaid: 600.0,
      remaining: 600.0,
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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleAcceptRequest = () => {
    setStatus("ACCEPTED");
    console.log("Request accepted");
  };

  const handleRejectRequest = () => {
    setStatus("REJECTED");
    console.log("Request rejected");
  };

  const handleSendCounterOffer = () => {
    if (counterOffer) {
      setNegotiations([
        ...negotiations,
        {
          from: "freelancer",
          amount: parseFloat(counterOffer),
          message: `Counter offer: $${counterOffer}`,
          timestamp: new Date().toLocaleDateString(),
        },
      ]);
      setStatus("NEGOTIATING");
      setCounterOffer("");
      setShowNegotiation(false);
      console.log("Counter offer sent:", counterOffer);
    }
  };

  const handleAcceptClientOffer = () => {
    setStatus("ACCEPTED");
    console.log("Client offer accepted");
  };

  const handleSubmitWork = () => {
    setStatus("IN_PROGRESS");
    console.log("Work submitted:", {
      description: workDescription,
      files: selectedFiles,
    });
  };

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
                <span>Home</span>
                <span>/</span>
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
          {/* Left Column - Client Card */}
          <div className="lg:col-span-1">
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 border border-border-dark/40 sticky top-24">
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
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 p-1 rounded-full">
                    <CheckCircle2 className="size-4 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tight">
                  {requestData.client.name}
                </h3>
                <p className="text-primary text-sm font-bold mb-4">
                  {requestData.client.username}
                </p>

                <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl h-12 font-black uppercase tracking-widest text-xs mb-3">
                  <MessageSquare className="size-4 mr-2" />
                  Message Client
                </Button>
              </div>

              {/* Financials */}
              <div className="border-t border-border-dark/30 pt-6">
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4">
                  Payment Details
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Current Offer</span>
                    <span className="text-white font-bold text-lg">
                      ${requestData.financials.currentOffer.toFixed(2)}
                    </span>
                  </div>
                  {status === "ACCEPTED" ||
                  status === "IN_PROGRESS" ||
                  status === "COMPLETED" ? (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-green-500 text-sm flex items-center gap-1">
                          <div className="size-2 bg-green-500 rounded-full" />
                          Advance (50%)
                        </span>
                        <span className="text-green-500 font-bold">
                          ${requestData.financials.advancePaid.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">
                          On Completion
                        </span>
                        <span className="text-white font-bold">
                          ${requestData.financials.remaining.toFixed(2)}
                        </span>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>

              {/* Timeline */}
              <div className="border-t border-border-dark/30 pt-6 mt-6">
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4">
                  Timeline
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Request Date</span>
                    <span className="text-white font-medium text-sm">
                      {requestData.timeline.requestDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Deadline</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm">
                        {requestData.timeline.deadline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            {/* Request Header */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">
                      Request #{requestData.id}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">
                      {requestData.timeline.requestDate}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                    {requestData.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`${
                        getStatusBadge().color
                      } px-3 py-1 rounded-lg text-xs font-black uppercase border`}
                    >
                      {getStatusBadge().text}
                    </span>
                    <span className="bg-background-dark px-3 py-1 rounded-lg text-xs font-bold text-gray-400 border border-border-dark/30">
                      {requestData.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PENDING - Accept/Reject or Negotiate */}
            {status === "PENDING" && (
              <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <AlertCircle className="size-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Respond to Hire Request
                  </h2>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  The client has sent you a hire request. You can accept the
                  offer, reject it, or negotiate for a better price.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Button
                    onClick={handleAcceptRequest}
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs shadow-xl"
                  >
                    <CheckCircle2 className="size-4 mr-2" />
                    Accept Offer
                  </Button>
                  <Button
                    onClick={handleRejectRequest}
                    variant="outline"
                    className="w-full bg-transparent border-red-500/50 text-red-500 hover:bg-red-500/10 rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                  >
                    <X className="size-4 mr-2" />
                    Reject Offer
                  </Button>
                </div>

                <Button
                  onClick={() => setShowNegotiation(!showNegotiation)}
                  className="w-full bg-primary hover:bg-primary-hover text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20"
                >
                  <DollarSign className="size-4 mr-2" />
                  Negotiate Price
                </Button>

                {showNegotiation && (
                  <div className="mt-6 p-6 bg-background-dark/50 rounded-2xl border border-border-dark/30">
                    <label className="text-white font-bold text-sm mb-2 block">
                      Your Counter Offer ($)
                    </label>
                    <input
                      type="number"
                      value={counterOffer}
                      onChange={(e) => setCounterOffer(e.target.value)}
                      placeholder="Enter your desired price"
                      className="w-full bg-background-dark border border-border-dark/30 rounded-xl h-12 px-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 mb-4"
                    />
                    <div className="flex gap-3">
                      <Button
                        onClick={handleSendCounterOffer}
                        className="flex-1 bg-primary hover:bg-primary-hover text-white rounded-xl h-10 font-bold uppercase text-xs"
                      >
                        Send Counter Offer
                      </Button>
                      <Button
                        onClick={() => setShowNegotiation(false)}
                        variant="outline"
                        className="flex-1 bg-transparent border-border-dark text-gray-400 hover:bg-surface-dark rounded-xl h-10 font-bold uppercase text-xs"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* NEGOTIATING - Show negotiation history */}
            {status === "NEGOTIATING" && (
              <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <DollarSign className="size-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Price Negotiation
                  </h2>
                </div>

                <div className="space-y-3 mb-6">
                  {negotiations.map((neg, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl ${
                        neg.from === "client"
                          ? "bg-background-dark/50 border border-border-dark/30"
                          : "bg-primary/10 border border-primary/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase">
                          {neg.from === "client"
                            ? "Client Offer"
                            : "Your Counter Offer"}
                        </span>
                        <span className="text-xs text-gray-500">
                          {neg.timestamp}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium text-sm">
                          {neg.message}
                        </span>
                        <span className="text-white font-black text-xl">
                          ${neg.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Latest Offer Highlight */}
                {negotiations.length > 0 &&
                  negotiations[negotiations.length - 1].from === "client" && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
                      <p className="text-blue-400 text-sm font-bold mb-2">
                        💰 Client's Latest Offer: $
                        {negotiations[negotiations.length - 1].amount}
                      </p>
                      <p className="text-gray-400 text-xs">
                        You can accept this offer, reject it, or send a new
                        counter-offer.
                      </p>
                    </div>
                  )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <Button
                    onClick={handleAcceptClientOffer}
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs shadow-xl"
                  >
                    <CheckCircle2 className="size-4 mr-2" />
                    Accept Offer
                  </Button>
                  <Button
                    onClick={handleRejectRequest}
                    variant="outline"
                    className="w-full bg-transparent border-red-500/50 text-red-500 hover:bg-red-500/10 rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                  >
                    <X className="size-4 mr-2" />
                    Reject Offer
                  </Button>
                  <Button
                    onClick={() => setShowNegotiation(true)}
                    className="w-full bg-primary hover:bg-primary-hover text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                  >
                    <DollarSign className="size-4 mr-2" />
                    Counter Offer
                  </Button>
                </div>

                {showNegotiation && (
                  <div className="mt-6 p-6 bg-background-dark/50 rounded-2xl border border-border-dark/30">
                    <label className="text-white font-bold text-sm mb-2 block">
                      New Counter Offer ($)
                    </label>
                    <input
                      type="number"
                      value={counterOffer}
                      onChange={(e) => setCounterOffer(e.target.value)}
                      placeholder="Enter your desired price"
                      className="w-full bg-background-dark border border-border-dark/30 rounded-xl h-12 px-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 mb-4"
                    />
                    <div className="flex gap-3">
                      <Button
                        onClick={handleSendCounterOffer}
                        className="flex-1 bg-primary hover:bg-primary-hover text-white rounded-xl h-10 font-bold uppercase text-xs"
                      >
                        Send Counter Offer
                      </Button>
                      <Button
                        onClick={() => setShowNegotiation(false)}
                        variant="outline"
                        className="flex-1 bg-transparent border-border-dark text-gray-400 hover:bg-surface-dark rounded-xl h-10 font-bold uppercase text-xs"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ACCEPTED or IN_PROGRESS - Work Submission */}
            {(status === "ACCEPTED" || status === "IN_PROGRESS") && (
              <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Upload className="size-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Submit Your Work
                  </h2>
                </div>

                {status === "ACCEPTED" && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
                    <p className="text-green-500 text-sm font-bold">
                      ✓ Request accepted! You can now start working and submit
                      your deliverables.
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="text-white font-bold text-sm mb-2 block">
                      Work Description
                    </label>
                    <Textarea
                      value={workDescription}
                      onChange={(e) => setWorkDescription(e.target.value)}
                      placeholder="Describe what you've completed and any notes for the client..."
                      className="min-h-[120px] bg-background-dark border-border-dark/30 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-white font-bold text-sm mb-2 block">
                      Upload Files
                    </label>
                    <div className="border-2 border-dashed border-border-dark/50 rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <Upload className="size-12 text-gray-600 mb-3" />
                        <p className="text-white font-bold mb-1">
                          Click to upload files
                        </p>
                        <p className="text-gray-500 text-xs">
                          or drag and drop your files here
                        </p>
                      </label>
                    </div>
                    {selectedFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {selectedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-background-dark/50 p-3 rounded-lg"
                          >
                            <FileText className="size-4 text-primary" />
                            <span className="text-white text-sm flex-1">
                              {file.name}
                            </span>
                            <span className="text-gray-500 text-xs">
                              {(file.size / 1024).toFixed(2)} KB
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={handleSubmitWork}
                    className="w-full bg-primary hover:bg-primary-hover text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20"
                  >
                    <CheckCircle2 className="size-4 mr-2" />
                    Submit Work for Review
                  </Button>
                </div>
              </div>
            )}

            {/* REJECTED */}
            {status === "REJECTED" && (
              <div className="bg-red-500/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-red-500/30 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <X className="size-5 text-red-500" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Request Rejected
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  You have declined this hire request. The client has been
                  notified.
                </p>
              </div>
            )}

            {/* Project Requirements */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="size-5 text-primary" />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Project Requirements
                </h2>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {requestData.description}
              </p>

              <div>
                <h3 className="text-white font-bold text-sm mb-3">
                  Deliverables:
                </h3>
                <ul className="space-y-2">
                  {requestData.requirements.map((req, index) => (
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
