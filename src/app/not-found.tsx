"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, HelpCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-vibrant-blue/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[128px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative"
      >
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <Sparkles className="w-8 h-8 text-vibrant-blue" />
          <span className="text-2xl font-bold text-slate-900">
            TableTalk<span className="text-vibrant-blue">AI</span>
          </span>
        </Link>

        {/* 404 Illustration */}
        <div className="relative mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[150px] lg:text-[200px] font-bold text-slate-100 leading-none select-none"
          >
            404
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="p-6 rounded-full bg-vibrant-blue/10">
              <Search className="w-16 h-16 text-vibrant-blue" />
            </div>
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 max-w-md mx-auto mb-8">
            Oops! The page you&apos;re looking for seems to have wandered off.
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Link>
          </Button>
        </motion.div>

        {/* Help Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-vibrant-blue transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Need help? Contact our support team
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
