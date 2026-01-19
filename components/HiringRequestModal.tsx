"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Briefcase,
    Calendar,
    ChevronRight,
    DollarSign,
    FileText,
    X,
} from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

const hiringRequestSchema = z.object({
  projectTitle: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Description is required"),
  offerAmount: z.string().min(1, "Offer amount is required"),
  deadline: z.string().min(1, "Deadline is required"),
  category: z.string().min(1, "Category is required"),
});

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
  const form = useForm<z.infer<typeof hiringRequestSchema>>({
    resolver: zodResolver(hiringRequestSchema),
    defaultValues: {
      projectTitle: "",
      description: "",
      offerAmount: "",
      deadline: "",
      category: "Web Design",
    },
  });

  const onSubmit = (data: z.infer<typeof hiringRequestSchema>) => {
    console.log(data);
    onClose();
  };

  const categories = [
    "Web Design",
    "Graphic Design",
    "Content Writing",
    "Video Editing",
    "Marketing",
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-3xl w-full max-w-xl border border-border/40 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative p-6 border-b border-border/30 bg-card/50">
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
              <h2 className="text-xl font-black text-foreground uppercase tracking-tight">
                Hire {talentName}
              </h2>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                SEND A FORMAL PROJECT REQUEST
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl h-10 w-10 p-0"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormField
                control={form.control}
                name="projectTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-black uppercase text-[10px] tracking-widest ml-1">
                      Project Title
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          {...field}
                          placeholder="e.g. Website Redesign"
                          className="bg-card border-border/40 text-foreground pl-12 h-12 rounded-2xl focus:border-primary/50 focus:ring-primary/20"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-black uppercase text-[10px] tracking-widest ml-1">
                      Category
                    </FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full bg-card border border-border/40 text-foreground h-12 rounded-2xl px-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 appearance-none cursor-pointer"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-black uppercase text-[10px] tracking-widest ml-1">
                    Project Requirements / Description
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        {...field}
                        placeholder="Describe what you need the talent to do..."
                        className="bg-card border-border/40 text-foreground pl-12 pt-4 min-h-[120px] rounded-2xl focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FormField
                control={form.control}
                name="offerAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-black uppercase text-[10px] tracking-widest ml-1">
                      Offer Amount ($)
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          {...field}
                          type="number"
                          placeholder="0.00"
                          className="bg-card border-border/40 text-foreground pl-12 h-12 rounded-2xl focus:border-primary/50 focus:ring-primary/20"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-black uppercase text-[10px] tracking-widest ml-1">
                      Expected Deadline
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          {...field}
                          type="date"
                          className="bg-card border-border/40 text-foreground pl-12 h-12 rounded-2xl focus:border-primary/50 focus:ring-primary/20 scheme-dark"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 bg-transparent border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground rounded-2xl h-14 font-black uppercase tracking-widest text-xs transition-all"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl h-14 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
              >
                Send Hire Request
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-muted-foreground text-[10px] font-bold text-center mt-6 uppercase tracking-wider">
              Talenzys secure escrow system will hold the funds safely.
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
