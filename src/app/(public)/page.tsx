"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Upload,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Clock,
  FileSpreadsheet,
  Sparkles,
  ArrowRight,
  Check,
  Play,
  Crown,
  Coins,
  Table,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dashboardStats, tablesData, currentUser } from "@/lib/mock-data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Features data
const features = [
  {
    icon: Upload,
    title: "Upload & Sync",
    description:
      "Drag and drop your CSV or Excel files. We'll parse and index your data instantly for conversation.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language",
    description:
      "Ask questions in plain English. No SQL required. Get the insights you need with simple conversations.",
  },
  {
    icon: BarChart3,
    title: "Visual Insights",
    description:
      "Automatically generate charts and visualizations as part of your conversation responses.",
  },
];

// How it works steps
const steps = [
  {
    number: "01",
    title: "Upload your file",
    description:
      "Simply drag and drop your CSV or Excel file. We support files up to 50MB with automatic column detection.",
    icon: FileSpreadsheet,
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our AI indexes your data, understands the structure, and prepares it for natural language queries.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Chat & Export",
    description:
      "Ask questions, get answers with charts, and export insights to share with your team.",
    icon: MessageSquare,
  },
];

// Pricing tiers preview
const pricingPreview = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out",
    features: ["5 tables", "100 queries/mo", "5MB files"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For power users",
    features: ["50 tables", "1,000 queries/mo", "50MB files", "API access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large teams",
    features: ["Unlimited", "Custom limits", "SSO & SAML", "Priority support"],
  },
];

// Trusted by logos (mock)
const trustedBy = [
  "Acme Corp",
  "Globex Inc",
  "Stark Industries",
  "Wayne Enterprises",
  "Umbrella Corp",
];

export default function LandingPage() {
  return (
    <div className="relative bg-white">
      {/* Hero Section - Blue Gradient Background */}
      <section className="relative pt-20 pb-0 overflow-hidden">
        {/* Gradient Background - Fades from blue to white */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5B99FF] via-[#7FB5FF] to-white">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[90vh] py-20">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left pt-12 lg:pt-0"
            >
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 mb-8 border border-slate-200 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-vibrant-blue" />
                <span>Powered by GPT-5 AI Agent</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-4 sm:mb-6"
              >
                The System That
                <br />
                Works With You
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                From planning to execution, every step of your process becomes seamless, organized, and insight-driven.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Button asChild size="lg" className="bg-vibrant-blue text-white hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all text-base px-6 sm:px-8 py-5 sm:py-6 font-semibold w-full sm:w-auto">
                  <Link href="/auth/register" className="flex items-center justify-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-slate-700 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xs sm:text-sm text-slate-500 mt-4 sm:mt-6 text-center lg:text-left"
              >
                No credit card required • Free 14-day trial • Cancel anytime
              </motion.p>
            </motion.div>

            {/* Right Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
              style={{ perspective: "2500px" }}
            >
              <div 
                className="relative"
                style={{ 
                  transform: "rotateY(-15deg) rotateX(5deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Dashboard Preview Card */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200/50">
                  {/* Browser Chrome */}
                  <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200/80 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="bg-white rounded px-3 py-1 text-[10px] text-slate-500 flex items-center gap-2 w-32">
                        <Sparkles className="w-3 h-3 text-vibrant-blue" />
                        <span>Dashboard</span>
                      </div>
                    </div>
                  </div>

                  {/* Actual Dashboard Content */}
                  <div className="bg-slate-50 p-4 overflow-hidden h-[500px]">
                    {/* Welcome Header */}
                    <div className="mb-3">
                      <h2 className="text-base font-bold text-slate-900">Welcome back, Alex! 👋</h2>
                      <p className="text-[10px] text-slate-600">Here&apos;s your activity overview and quick actions.</p>
                    </div>

                    {/* Credits & Plan Card */}
                    <div className="bg-white rounded-xl p-3 mb-3 border border-slate-200 shadow-sm">
                      <div className="bg-gradient-to-r from-vibrant-blue/5 to-vibrant-blue/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-vibrant-blue/15">
                              <Crown className="w-4 h-4 text-vibrant-blue" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-xs font-semibold text-slate-900">Pro Plan</h3>
                                <span className="px-1.5 py-0.5 bg-success/10 text-success text-[8px] rounded font-medium">Active</span>
                              </div>
                              <p className="text-[9px] text-slate-600">Renews on Feb 15, 2026</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Credits Progress */}
                        <div className="bg-white rounded-lg p-2 mt-2">
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-1">
                              <Coins className="w-3 h-3 text-vibrant-blue" />
                              <span className="text-[9px] font-medium text-slate-900">Credits Used</span>
                            </div>
                            <span className="text-[9px] text-slate-600">156K / 200K tokens</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-1.5">
                            <div className="bg-vibrant-blue h-1.5 rounded-full" style={{ width: "78%" }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                        <div className="flex items-start justify-between mb-1">
                          <div className="p-1.5 rounded-lg bg-vibrant-blue/10">
                            <Table className="w-3 h-3 text-vibrant-blue" />
                          </div>
                        </div>
                        <p className="text-lg font-bold text-slate-900">12</p>
                        <p className="text-[9px] text-slate-600">Uploaded Tables</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                        <div className="flex items-start justify-between mb-1">
                          <div className="p-1.5 rounded-lg bg-success/10">
                            <MessageSquare className="w-3 h-3 text-success" />
                          </div>
                        </div>
                        <p className="text-lg font-bold text-slate-900">847</p>
                        <p className="text-[9px] text-slate-600">Total Queries</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                        <div className="flex items-start justify-between mb-1">
                          <div className="p-1.5 rounded-lg bg-warning/10">
                            <Clock className="w-3 h-3 text-warning" />
                          </div>
                        </div>
                        <p className="text-lg font-bold text-slate-900">24</p>
                        <p className="text-[9px] text-slate-600">Chat Sessions</p>
                      </div>
                    </div>

                    {/* Recent Tables & Chat History - Side by Side */}
                    <div className="grid grid-cols-2 gap-2">
                      {/* Recent Tables */}
                      <div className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1">
                            <FileSpreadsheet className="w-3 h-3 text-vibrant-blue" />
                            <h3 className="text-[10px] font-semibold text-slate-900">My Tables</h3>
                          </div>
                          <ArrowRight className="w-2.5 h-2.5 text-slate-400" />
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { name: "Q4 Sales Report", rows: "15.4K", status: "ready" },
                            { name: "Customer Analytics", rows: "8.7K", status: "ready" },
                            { name: "Product Inventory", rows: "3.2K", status: "ready" },
                          ].map((table, i) => (
                            <div key={i} className="flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer">
                              <div className="p-1 rounded bg-vibrant-blue/10">
                                <FileSpreadsheet className="w-2.5 h-2.5 text-vibrant-blue" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[9px] font-medium text-slate-900 truncate">{table.name}</p>
                                <p className="text-[8px] text-slate-500">{table.rows} rows</p>
                              </div>
                              <div className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent Chat History */}
                      <div className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3 text-success" />
                            <h3 className="text-[10px] font-semibold text-slate-900">Chat History</h3>
                          </div>
                          <ArrowRight className="w-2.5 h-2.5 text-slate-400" />
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { title: "Regional Sales Analysis", msgs: "12", time: "2h ago" },
                            { title: "Customer Segmentation", msgs: "8", time: "5h ago" },
                            { title: "Product Performance", msgs: "15", time: "1d ago" },
                          ].map((chat, i) => (
                            <div key={i} className="p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer">
                              <div className="flex items-start justify-between mb-0.5">
                                <p className="text-[9px] font-medium text-slate-900 truncate flex-1">{chat.title}</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="text-[8px] text-slate-500">{chat.msgs} messages</p>
                                <p className="text-[8px] text-slate-400">{chat.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shadow/Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-vibrant-blue/10 via-transparent to-transparent blur-3xl -z-10 opacity-40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="relative py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-wider text-slate-500 text-center mb-8 font-medium">
            Trusted by data teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50">
            {trustedBy.map((company) => (
              <span key={company} className="text-slate-700 text-base font-bold">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Join thousands of data-driven teams
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transform how you interact with your data and unlock insights faster than ever before.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "100k+", label: "Data queries processed" },
              { value: "2.3M+", label: "Rows analyzed" },
              { value: "+30%", label: "Time saved on average" },
              { value: "100+", label: "Enterprise customers" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              A dashboard that grows
              <br className="hidden sm:block" />
              with your scale
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Monitor your data, track usage, and manage everything from one beautiful interface.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <Card variant="elevated" className="overflow-hidden shadow-2xl border-slate-200">
              <div className="p-3 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-500 ml-2">tabletalk.ai/dashboard</span>
              </div>
              <div className="bg-slate-50 p-8">
                <div className="bg-white rounded-lg border border-slate-200 shadow-lg p-6">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Welcome back, {currentUser.name}!</h2>
                      <p className="text-slate-600 mt-1">Here&apos;s what&apos;s happening with your data today</p>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                      <Crown className="w-5 h-5 text-warning" />
                      <div>
                        <p className="text-xs text-slate-500">Tokens Remaining</p>
                        <p className="text-lg font-bold text-slate-900">{(dashboardStats.planLimit - dashboardStats.tokensUsed).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600">Total Tables</span>
                        <Table className="w-5 h-5 text-vibrant-blue" />
                      </div>
                      <p className="text-3xl font-bold text-slate-900">{dashboardStats.totalTables}</p>
                      <p className="text-xs text-success mt-1">+3 this week</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600">Total Queries</span>
                        <MessageSquare className="w-5 h-5 text-vibrant-blue" />
                      </div>
                      <p className="text-3xl font-bold text-slate-900">{dashboardStats.totalQueries.toLocaleString()}</p>
                      <p className="text-xs text-success mt-1">+127 this week</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600">Tokens Used</span>
                        <Users className="w-5 h-5 text-vibrant-blue" />
                      </div>
                      <p className="text-3xl font-bold text-slate-900">{dashboardStats.tokensUsed.toLocaleString()}</p>
                      <p className="text-xs text-slate-600 mt-1">Last 30 days</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Tables</h3>
                    <div className="space-y-3">
                      {tablesData.slice(0, 3).map((table) => (
                        <div key={table.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-vibrant-blue/50 transition-colors cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-vibrant-blue/10 flex items-center justify-center">
                              <Table className="w-5 h-5 text-vibrant-blue" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">{table.name}</p>
                              <p className="text-xs text-slate-500">{table.rows.toLocaleString()} rows • {table.uploadDate}</p>
                            </div>
                          </div>
                          <Badge className="bg-success/10 text-success border-success/20">{table.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works-new" className="relative py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-slate-700 mb-4 sm:mb-6 border border-slate-200">
              <Clock className="w-4 h-4 text-vibrant-blue" />
              <span>Quick Setup</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
              Get started in minutes
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Three simple steps to transform your data into insights.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-8 bg-white h-full border-2 border-slate-200 hover:border-vibrant-blue/30 transition-colors">
                  <div className="text-6xl font-bold text-vibrant-blue/10 mb-4">
                    {step.number}
                  </div>
                  <div className="p-3 rounded-xl bg-vibrant-blue/10 w-fit mb-6">
                    <step.icon className="w-6 h-6 text-vibrant-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="pill-label mx-auto w-fit mb-6">
              <span>FEATURES OVERVIEW</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-deep-navy"
            >
              Everything you need to
              <br />
              <span className="gradient-text">talk to your data</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Powerful features designed to unlock insights from your spreadsheets
              with zero technical knowledge required.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant="elevated"
                  className="p-6 lg:p-8 h-full hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-vibrant-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-vibrant-blue/15 transition-all">
                    <feature.icon className="w-6 h-6 text-vibrant-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional feature highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: Zap, text: "Lightning fast queries" },
              { icon: Shield, text: "Enterprise security" },
              { icon: Clock, text: "Real-time sync" },
              { icon: BarChart3, text: "Auto visualizations" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <item.icon className="w-5 h-5 text-vibrant-blue" />
                <span className="text-sm text-slate-700 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="relative py-20 lg:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="pill-label mx-auto w-fit mb-6">
              <span>HOW IT WORKS</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-deep-navy"
            >
              From raw data to insights
              <br />
              <span className="gradient-text">in three simple steps.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <Card
                    variant="elevated"
                    className="p-6 lg:p-8 h-full relative z-10 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-vibrant-blue flex items-center justify-center text-white font-bold shadow-glow">
                        {step.number}
                      </div>
                      <step.icon className="w-6 h-6 text-slate-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-deep-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-xs sm:text-sm font-medium text-slate-700 mb-4 sm:mb-6 border border-slate-200">
              <Sparkles className="w-4 h-4 text-vibrant-blue" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
              Loved by data teams
              <br className="hidden sm:block" />
              everywhere
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              See what our customers have to say about their experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote: "TableTalk AI has completely transformed how we analyze our sales data. What used to take hours now takes minutes.",
                author: "Sarah Chen",
                role: "Head of Analytics",
                company: "TechCorp",
                avatar: "SC"
              },
              {
                quote: "The natural language interface is incredibly intuitive. Our entire team can now access insights without needing SQL knowledge.",
                author: "Michael Rodriguez",
                role: "Data Manager",
                company: "RetailCo",
                avatar: "MR"
              },
              {
                quote: "Best investment we've made this year. The AI understands context and delivers exactly what we need every time.",
                author: "Emma Thompson",
                role: "Operations Director",
                company: "LogisticsPro",
                avatar: "ET"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 lg:p-8 h-full bg-white border-slate-200">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-warning">⭐</div>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-vibrant-blue/10 flex items-center justify-center">
                      <span className="text-vibrant-blue font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trusted by companies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-slate-500 mb-8">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {["Stripe", "Amazon", "Microsoft", "Shopify", "Notion", "Slack"].map((company) => (
                <div key={company} className="text-slate-400 font-semibold text-lg opacity-60">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="relative py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="pill-label mx-auto w-fit mb-6">
              <span>PRICING</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-deep-navy"
            >
              Simple, transparent pricing
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
              Start free. Upgrade when you need more power.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {pricingPreview.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant="elevated"
                  className={`p-6 lg:p-8 h-full relative ${
                    plan.popular ? "ring-2 ring-vibrant-blue shadow-glow" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-vibrant-blue text-white text-xs font-medium rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-deep-navy">{plan.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-deep-navy">{plan.price}</span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "default" : "secondary"}
                    className="w-full mt-8"
                    asChild
                  >
                    <Link href="/pricing">
                      {plan.price === "$0" ? "Get Started" : "View Details"}
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Secondary CTA - Get Started Card */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-vibrant-blue via-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl">
              {/* Decorative patterns */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center text-white">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6">
                  <FileSpreadsheet className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight px-4">
                  Let&apos;s make data analysis
                  <br className="hidden sm:block" />
                  effortless for your team
                </h2>
                <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                  Upload your first file and start asking questions in plain English.
                  No technical skills required.
                </p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-vibrant-blue hover:bg-slate-50 shadow-lg text-base px-6 sm:px-8 py-5 sm:py-6 font-semibold rounded-xl w-full sm:w-auto"
                  >
                    <Link href="/auth/register" className="flex items-center justify-center gap-2 text-vibrant-blue">
                      Get Started Free
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="ghost" 
                    size="lg"
                    className="text-white border-2 border-white/40 hover:bg-white/10 text-base px-6 sm:px-8 py-5 sm:py-6 rounded-xl w-full sm:w-auto"
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Setup in minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>No coding required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Free trial available</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
