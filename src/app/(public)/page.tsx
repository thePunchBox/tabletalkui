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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    <div className="relative">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Now with GPT-4 Vision Support</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              Turn Your{" "}
              <span className="gradient-text-blue">Tables</span>
              <br />
              Into Conversations.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Upload your CSV or Excel files and chat with your data using
              natural language. Get instant insights, visualizations, and answers
              without writing a single line of code.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg">
                <Link href="/auth/register">
                  Start for Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="#demo">
                  <Play className="w-5 h-5 mr-2" />
                  See it in action
                </Link>
              </Button>
            </motion.div>

            {/* Trusted by */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 pt-8 border-t border-dark-border"
            >
              <p className="text-sm text-gray-500 mb-6">
                Trusted by data teams at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {trustedBy.map((company) => (
                  <span key={company} className="text-gray-500 text-sm font-medium">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Demo */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
            <Card variant="glass" className="relative overflow-hidden mx-auto max-w-5xl">
              <div className="p-4 border-b border-dark-border flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-500 ml-4">TableTalk AI - Q4 Sales Analysis</span>
              </div>
              <div className="p-6 lg:p-8 grid lg:grid-cols-3 gap-6">
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="text-sm text-gray-400">Columns</div>
                  {["Date", "Product", "Region", "Sales", "Units"].map((col) => (
                    <div
                      key={col}
                      className="px-3 py-2 bg-dark-surface rounded-lg text-sm text-gray-300"
                    >
                      {col}
                    </div>
                  ))}
                </div>
                {/* Chat preview */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-accent-blue/20 text-white px-4 py-2 rounded-2xl rounded-br-sm text-sm max-w-xs">
                      What were the top regions by sales?
                    </div>
                  </div>
                  <div className="flex">
                    <div className="glass px-4 py-3 rounded-2xl rounded-bl-sm text-sm text-gray-200 max-w-md">
                      <p className="mb-3">Based on your data, here are the top regions:</p>
                      <div className="space-y-2">
                        {[
                          { region: "North America", value: "$425K" },
                          { region: "Europe", value: "$312K" },
                          { region: "Asia Pacific", value: "$287K" },
                        ].map((item, i) => (
                          <div
                            key={item.region}
                            className="flex items-center justify-between bg-dark-surface/50 px-3 py-2 rounded-lg"
                          >
                            <span className="text-gray-300">{item.region}</span>
                            <span className="text-accent-blue font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-white"
            >
              Everything you need to
              <br />
              <span className="gradient-text">talk to your data</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
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
                  variant="glass"
                  className="p-6 lg:p-8 h-full hover:bg-white/[0.08] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
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
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-surface/50 border border-dark-border"
              >
                <item.icon className="w-5 h-5 text-accent-blue" />
                <span className="text-sm text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="relative py-20 lg:py-32 bg-dark-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-white"
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
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <Card
                    variant="dark"
                    className="p-6 lg:p-8 h-full relative z-10"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                      <step.icon className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-white"
            >
              Simple, transparent pricing
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-400">
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
                  variant={plan.popular ? "glass" : "dark"}
                  className={`p-6 lg:p-8 h-full relative ${
                    plan.popular ? "ring-2 ring-accent-blue" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-blue text-white text-xs font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-accent-blue" />
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

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Card variant="glass" className="p-8 lg:p-16 text-center relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to talk to your data?
                </h2>
                <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
                  Join thousands of analysts, marketers, and teams who are getting
                  faster insights from their spreadsheets.
                </p>
                <Button asChild size="xl">
                  <Link href="/auth/register">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <p className="mt-4 text-sm text-gray-500">
                  No credit card required • Free forever plan
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
