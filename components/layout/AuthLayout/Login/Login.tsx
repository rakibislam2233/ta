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
    <section className="w-full max-w-md mx-auto fade-in">
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
            className="w-full h-12 bg-linear-to-r from-primary to-[#7a14c4] hover:from-[#7a14c4] hover:to-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/25 transition-all mt-2 cursor-pointer"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
          <p className="text-center text-gray-400 text-sm mt-8">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-primary hover:text-[#a824f0] font-semibold transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
