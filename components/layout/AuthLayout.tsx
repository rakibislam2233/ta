"use client"

import { ReactNode } from "react"
import Link from "next/link"

interface AuthLayoutProps {
  children: ReactNode
  showBackToLogin?: boolean
  showCreateAccount?: boolean
}

export default function AuthLayout({ 
  children, 
  showBackToLogin = false,
  showCreateAccount = false 
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b1121] via-[#2d1b3d] to-[#1b1121] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#9419e6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-white text-xl font-semibold">Talenzy</span>
          </Link>
          {showCreateAccount && (
            <div className="flex items-center gap-4">
              <span className="text-white text-sm">New here?</span>
              <Link 
                href="/auth/register"
                className="px-4 py-2 bg-[#221c26] text-white rounded-lg hover:bg-[#2a2330] transition-colors"
              >
                Create Account
              </Link>
            </div>
          )}
          {showBackToLogin && (
            <Link 
              href="/auth/login"
              className="text-white text-sm hover:text-[#9419e6] transition-colors"
            >
              Help
            </Link>
          )}
        </div>
        {children}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            © 2024 Talenzy. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

