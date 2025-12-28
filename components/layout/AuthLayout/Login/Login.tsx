"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    // Simulate API call
    console.log("Login data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Call login from context to update state and redirect
    login();
  };

  return (
    <div className="w-full max-w-md mx-auto fade-in">
      <div className="bg-transparent lg:bg-surface-dark lg:rounded-2xl lg:p-8 lg:shadow-2xl lg:border lg:border-border-dark/30">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
          <p className="text-gray-400 text-sm">
            Please enter your details to sign in.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Email Address
            </label>
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="h-12 bg-background-dark border-border-dark/50 text-white placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 rounded-lg"
            />
            {errors.email && (
              <p className="text-xs text-red-500 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Password
            </label>
            <div className="relative">
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="h-12 bg-background-dark border-border-dark/50 text-white placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 pr-10 rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 ml-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-4 h-4 rounded border border-gray-600 bg-background-dark group-hover:border-primary transition-colors flex items-center justify-center">
                {/* Checkbox logic would go here ideally */}
              </div>
              <span className="text-gray-400 group-hover:text-gray-300">
                Remember me
              </span>
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-primary hover:text-[#a824f0] font-medium transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-linear-to-r from-primary to-[#7a14c4] hover:from-[#7a14c4] hover:to-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/25 transition-all mt-2"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-surface-dark px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              className="h-12 bg-[#2a2330] border-border-dark text-white hover:bg-[#332840] rounded-lg"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 bg-[#1877F2] border-transparent text-white hover:bg-[#1877F2]/90 rounded-lg"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.603-2.797 4.16v1.912h4.141l-.542 3.667h-3.599v7.98c0 .103.016.204.016.307a10.04 10.04 0 0 0 5.067-8.287l.006-.006c0-5.523-4.477-10-10-10S-.217 6.477-.217 12l.004.008a10.04 10.04 0 0 0 5.068 8.287c.01-.103.016-.204.025-.307l4.221-16.303Z" />
              </svg>
              Facebook
            </Button>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-primary hover:text-[#a824f0] font-semibold transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
