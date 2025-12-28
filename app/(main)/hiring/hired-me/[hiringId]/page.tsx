"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  CheckCircle2,
  DollarSign,
  FileText,
  MessageSquare,
  Upload,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function WhoHiredMeDetailPage() {
  const params = useParams();
  const hiringId = params.hiringId as string;
  const [workDescription, setWorkDescription] = useState("");
  const [betAmount, setBetAmount] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  // Mock data - in real app, fetch based on hiringId
  const requestData = {
    id: hiringId,
    title: "Website Redesign Project",
    category: "Web Design",
    status: "ACTIVE",
    client: {
      name: "Tech Startup Inc",
      username: "@techstartup",
      avatar: "TS",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
    },
    financials: {
      totalBudget: 1200.0,
      advancePaid: 600.0,
      remaining: 600.0,
    },
    timeline: {
      startDate: "Oct 25, 2023",
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

  const handleSubmitWork = () => {
    console.log("Work submitted:", {
      description: workDescription,
      files: selectedFiles,
    });
  };

  const handlePlaceBet = () => {
    console.log("Bet placed:", betAmount);
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
                    <span className="text-gray-500 text-sm">Total Budget</span>
                    <span className="text-white font-bold">
                      ${requestData.financials.totalBudget.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-500 text-sm flex items-center gap-1">
                      <div className="size-2 bg-green-500 rounded-full" />
                      Advance Received
                    </span>
                    <span className="text-green-500 font-bold">
                      ${requestData.financials.advancePaid.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">On Completion</span>
                    <span className="text-white font-bold">
                      ${requestData.financials.remaining.toFixed(2)}
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
                      {requestData.timeline.startDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Deadline</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm">
                        {requestData.timeline.deadline}
                      </span>
                      <span className="bg-green-500/20 text-green-500 text-[8px] font-black px-2 py-0.5 rounded uppercase">
                        {requestData.timeline.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Work Submission */}
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
                    <span className="text-xs text-gray-500">Oct 25, 2023</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                    {requestData.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-lg text-xs font-black uppercase border border-green-500/20">
                      {requestData.status}
                    </span>
                    <span className="bg-background-dark px-3 py-1 rounded-lg text-xs font-bold text-gray-400 border border-border-dark/30">
                      {requestData.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Submission Section */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Upload className="size-5 text-primary" />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Submit Your Work
                </h2>
              </div>

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

            {/* Betting Section */}
            <div className="bg-linear-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-primary/30 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary flex items-center justify-center">
                  <DollarSign className="size-5 text-white" />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Place a Bet
                </h2>
              </div>

              <p className="text-gray-300 text-sm mb-4">
                Confident in your work? Place a bet on the quality of your
                delivery. Higher bets show commitment!
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-white font-bold text-sm mb-2 block">
                    Bet Amount ($)
                  </label>
                  <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    placeholder="Enter bet amount"
                    className="w-full bg-background-dark border border-border-dark/30 rounded-xl h-12 px-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    This amount will be held in escrow until work approval
                  </p>
                </div>
                <Button
                  onClick={handlePlaceBet}
                  className="w-full bg-white text-primary hover:bg-white/90 rounded-xl h-12 font-black uppercase tracking-widest text-xs shadow-xl"
                >
                  Place Bet
                </Button>
              </div>
            </div>

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
