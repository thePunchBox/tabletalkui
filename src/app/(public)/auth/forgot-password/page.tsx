"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Simulate sending reset email
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-32 px-4">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <Card className="p-8 shadow-xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-vibrant-blue" />
              <span className="text-2xl font-bold text-slate-900">
                TableTalk<span className="text-vibrant-blue">AI</span>
              </span>
            </Link>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h1 className="text-2xl font-semibold text-slate-900 mb-2">
                Check your email
              </h1>
              <p className="text-slate-600 mb-6">
                We&apos;ve sent a password reset link to{" "}
                <span className="font-medium text-slate-900">{email}</span>
              </p>
              <p className="text-sm text-slate-500 mb-6">
                Didn&apos;t receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-vibrant-blue hover:underline"
                >
                  try again
                </button>
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/auth/login">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to login
                </Link>
              </Button>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h1 className="text-2xl font-semibold text-slate-900 mb-2">
                  Forgot your password?
                </h1>
                <p className="text-slate-600">
                  No worries! Enter your email and we&apos;ll send you a reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`pl-10 ${error ? "border-red-500" : ""}`}
                    />
                  </div>
                  {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>

                <div className="text-center">
                  <Link
                    href="/auth/login"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to login
                  </Link>
                </div>
              </form>
            </>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
