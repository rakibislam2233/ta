"use client"

import { CheckCircle2, User, FileText, Camera, Link as LinkIcon, Calendar, Upload, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const verifySchema = z.object({
  legalName: z.string().min(2, "Legal name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  country: z.string().min(1, "Country is required"),
  whyVerify: z.string().optional(),
  instagramLink: z.string().url("Invalid URL").optional().or(z.literal("")),
  articleLink: z.string().url("Invalid URL").optional().or(z.literal("")),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
})

type VerifyFormValues = z.infer<typeof verifySchema>

export default function VerifyPage() {
  const form = useForm<VerifyFormValues>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      legalName: "",
      dateOfBirth: "",
      country: "",
      whyVerify: "",
      instagramLink: "",
      articleLink: "",
      agreeToTerms: false,
    },
  })

  const onSubmit = (data: VerifyFormValues) => {
    console.log(data)
    // Handle verification submission
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-[#221c26] rounded-2xl p-8 border border-[#4a3c53]/30">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#9419e6] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Get Verified on Talenzy</h1>
          <p className="text-gray-400 text-lg">
            Unlock exclusive monetization features, increased visibility, and build trust with your audience. Join the
            elite circle of Talenzy creators.
          </p>
        </div>

        {/* Eligibility Requirements */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-5 w-5 text-[#9419e6]" />
            <h3 className="text-white font-semibold uppercase">ELIGIBILITY REQUIREMENTS</h3>
          </div>
          <div className="space-y-2">
            {["Minimum 1k followers", "Active in last 30 days", "No community violations"].map(
              (requirement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#9419e6]" />
                  <span className="text-gray-300">{requirement}</span>
                </div>
              )
            )}
          </div>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-[#9419e6]" />
              <h3 className="text-white font-semibold">Personal Information</h3>
            </div>
            <div className="space-y-4">
              <div>
                <Label className="text-white mb-2">Legal Full Name</Label>
                <Input
                  {...form.register("legalName")}
                  placeholder="As shown on ID"
                  className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                />
                {form.formState.errors.legalName && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.legalName.message}</p>
                )}
              </div>
              <div>
                <Label className="text-white mb-2">Date of Birth</Label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    {...form.register("dateOfBirth")}
                    placeholder="mm/dd/yyyy"
                    className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-4 pr-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                  />
                </div>
                {form.formState.errors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.dateOfBirth.message}</p>
                )}
              </div>
              <div>
                <Label className="text-white mb-2">Country of Residence</Label>
                <select
                  {...form.register("country")}
                  className="w-full bg-[#2a2330] border border-[#4a3c53] text-white rounded-lg h-12 px-4 focus:border-[#9419e6] focus:ring-[#9419e6]"
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
                {form.formState.errors.country && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.country.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Identification Document */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#9419e6]" />
                <h3 className="text-white font-semibold">Identification Document</h3>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Encrypted & Secure</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Please upload a clear photo of your government-issued ID (Passport, Driver's License, or National ID).
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-[#4a3c53] rounded-lg p-6 text-center hover:border-[#9419e6] transition-colors cursor-pointer">
                <FileText className="h-8 w-8 text-[#9419e6] mx-auto mb-2" />
                <p className="text-white text-sm font-medium mb-1">Front of ID</p>
                <p className="text-gray-400 text-xs">SVG, PNG, JPG or GIF</p>
              </div>
              <div className="border-2 border-dashed border-[#4a3c53] rounded-lg p-6 text-center hover:border-[#9419e6] transition-colors cursor-pointer">
                <FileText className="h-8 w-8 text-[#9419e6] mx-auto mb-2" />
                <p className="text-white text-sm font-medium mb-1">Back of ID</p>
                <p className="text-gray-400 text-xs">Required for cards</p>
              </div>
            </div>
          </div>

          {/* Selfie Verification */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-5 w-5 text-[#9419e6]" />
              <h3 className="text-white font-semibold">Selfie Verification</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Take a selfie holding your ID card next to your face. Make sure details are legible.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 border-2 border-dashed border-[#4a3c53] rounded-lg p-8 text-center hover:border-[#9419e6] transition-colors cursor-pointer">
                <Camera className="h-10 w-10 text-[#9419e6] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Upload Selfie</p>
              </div>
              <div className="w-32 h-32 bg-[#2a2330] rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">Example</span>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LinkIcon className="h-5 w-5 text-[#9419e6]" />
              <h3 className="text-white font-semibold">Additional Information</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-white">Why should you be verified? (Optional)</Label>
                </div>
                <Textarea
                  {...form.register("whyVerify")}
                  placeholder="Tell us about your achievements or influence..."
                  className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 min-h-24 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                />
              </div>
              <div>
                <Label className="text-white mb-2">Relevant Links</Label>
                <div className="space-y-3">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl">📷</span>
                    <Input
                      {...form.register("instagramLink")}
                      placeholder="https://instagram.com/yourusername"
                      className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-12 pr-4 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl">📰</span>
                    <Input
                      {...form.register("articleLink")}
                      placeholder="https://nytimes.com/article-about-you"
                      className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-12 pr-4 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Checkbox
                {...form.register("agreeToTerms")}
                className="border-[#4a3c53] data-[state=checked]:bg-[#9419e6] data-[state=checked]:border-[#9419e6] mt-1"
              />
              <Label className="text-gray-400 text-sm cursor-pointer">
                I agree to the{" "}
                <a href="/terms" className="text-[#9419e6] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-[#9419e6] hover:underline">
                  Privacy Policy
                </a>
                .
              </Label>
            </div>
            <p className="text-gray-400 text-sm italic">
              I certify that the information provided is accurate. False information may result in account suspension.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-12 font-semibold flex items-center justify-center gap-2"
          >
            Submit Verification Request
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>

          <p className="text-gray-400 text-sm text-center">
            Review typically takes 24-48 hours. You will be notified via email and in-app notification.
          </p>
        </form>
      </div>
    </div>
  )
}

