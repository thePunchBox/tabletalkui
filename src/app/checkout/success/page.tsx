"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

const confettiColors = ["#2D5BFF", "#10B981", "#8B5CF6", "#F59E0B", "#EF4444"];

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: confettiColors[i % confettiColors.length],
            left: `${Math.random() * 100}%`,
            top: -20,
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 20,
            rotate: Math.random() * 720 - 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "Pro";
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-20">
      {showConfetti && <Confetti />}

      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-success/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-vibrant-blue/10 rounded-full blur-[128px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg relative"
      >
        <Card className="p-8 lg:p-12 text-center shadow-xl">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-success" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-slate-900 mb-2"
          >
            Payment Successful!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-600 mb-6"
          >
            Welcome to TableTalkAI {plan}! Your account has been upgraded.
          </motion.p>

          {/* Plan Details */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-vibrant-blue/5 to-purple-500/5 border border-vibrant-blue/20 mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-vibrant-blue" />
              <span className="text-lg font-semibold text-slate-900">{plan} Plan</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Your subscription is now active</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <p className="text-slate-500">Invoice Number</p>
                <p className="font-medium text-slate-900">INV-2026-{Math.random().toString().slice(2, 8)}</p>
              </div>
              <div className="text-center">
                <p className="text-slate-500">Next Billing</p>
                <p className="font-medium text-slate-900">Feb 15, 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <Button asChild size="lg" className="w-full">
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <div className="flex gap-3">
              <Button variant="secondary" size="sm" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Invoice
              </Button>
              <Button variant="ghost" size="sm" className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Email Receipt
              </Button>
            </div>
          </motion.div>

          {/* Support Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-slate-500 mt-6"
          >
            A confirmation email has been sent to your registered email address.
            <br />
            Questions? <Link href="/contact" className="text-vibrant-blue hover:underline">Contact our support team</Link>
          </motion.p>
        </Card>
      </motion.div>
    </div>
  );
}
