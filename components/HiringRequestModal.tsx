"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  Calendar,
  ChevronRight,
  DollarSign,
  FileText,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface HiringRequestModalProps {
  talentName: string;
  talentImage: string;
  onClose: () => void;
}

export default function HiringRequestModal({
  talentName,
  talentImage,
  onClose,
}: HiringRequestModalProps) {
  const [projectTitle, setProjectTitle] = useState("");
  const [description, setDescription] = useState("");
  const [offerAmount, setOfferAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("Web Design");

  const categories = [
    "Web Design",
    "Graphic Design",
    "Content Writing",
    "Video Editing",
    "Marketing",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submitting the hire request
    console.log({ projectTitle, description, offerAmount, deadline, category });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a161f] rounded-3xl w-full max-w-xl border border-border-dark/40 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative p-6 border-b border-border-dark/30 bg-surface-dark/50">
          <div className="flex items-center gap-4">
            <div className="relative size-14 rounded-2xl overflow-hidden border-2 border-primary/30">
              <Image
                src={talentImage}
                alt={talentName}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-tight">
                Hire {talentName}
              </h2>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                SEND A FORMAL PROJECT REQUEST
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl h-10 w-10 p-0"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label className="text-white font-black uppercase text-[10px] tracking-widest ml-1">
                Project Title
              </Label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  required
                  placeholder="e.g. Website Redesign"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="bg-background-dark border-border-dark/40 text-white pl-12 h-12 rounded-2xl focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white font-black uppercase text-[10px] tracking-widest ml-1">
                Category
              </Label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-background-dark border border-border-dark/40 text-white h-12 rounded-2xl px-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 appearance-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <Label className="text-white font-black uppercase text-[10px] tracking-widest ml-1">
              Project Requirements / Description
            </Label>
            <div className="relative">
              <FileText className="absolute left-4 top-4 h-4 w-4 text-gray-500" />
              <Textarea
                required
                placeholder="Describe what you need the talent to do..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-background-dark border-border-dark/40 text-white pl-12 pt-4 min-h-[120px] rounded-2xl focus:border-primary/50 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <Label className="text-white font-black uppercase text-[10px] tracking-widest ml-1">
                Offer Amount ($)
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  required
                  type="number"
                  placeholder="0.00"
                  value={offerAmount}
                  onChange={(e) => setOfferAmount(e.target.value)}
                  className="bg-background-dark border-border-dark/40 text-white pl-12 h-12 rounded-2xl focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white font-black uppercase text-[10px] tracking-widest ml-1">
                Expected Deadline
              </Label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  required
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="bg-background-dark border-border-dark/40 text-white pl-12 h-12 rounded-2xl focus:border-primary/50 focus:ring-primary/20 scheme-dark"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent border-border-dark/60 text-gray-400 hover:bg-white/5 hover:text-white rounded-2xl h-14 font-black uppercase tracking-widest text-xs transition-all"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-3 bg-primary hover:bg-primary-hover text-white rounded-2xl h-14 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
            >
              Send Hire Request
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-gray-500 text-[10px] font-bold text-center mt-6 uppercase tracking-wider">
            Talenzys secure escrow system will hold the funds safely.
          </p>
        </form>
      </div>
    </div>
  );
}
