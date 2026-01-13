"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingPlans } from "@/lib/mock-data";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Feature comparison data
const featureComparison = [
  { feature: "Number of tables", starter: "5", pro: "50", enterprise: "Unlimited" },
  { feature: "Monthly queries", starter: "100", pro: "1,000", enterprise: "Unlimited" },
  { feature: "Token limit", starter: "50K", pro: "200K", enterprise: "Unlimited" },
  { feature: "Max file size", starter: "5 MB", pro: "50 MB", enterprise: "No limit" },
  { feature: "API access", starter: false, pro: true, enterprise: true },
  { feature: "Advanced analytics", starter: false, pro: true, enterprise: true },
  { feature: "Priority support", starter: false, pro: true, enterprise: true },
  { feature: "Custom integrations", starter: false, pro: false, enterprise: true },
  { feature: "SSO & SAML", starter: false, pro: false, enterprise: true },
  { feature: "Audit logs", starter: false, pro: false, enterprise: true },
  { feature: "SLA guarantee", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated support", starter: false, pro: false, enterprise: true },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="relative pt-32 lg:pt-40 pb-20 lg:pb-32">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Save 20% with yearly billing</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Choose your plan
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Start free and scale as you grow. All plans include our core features
            with no hidden fees.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <span className={`text-sm ${!isYearly ? "text-white" : "text-gray-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? "bg-accent-blue" : "bg-dark-surface"
              } border border-dark-border`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                  isYearly ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-white" : "text-gray-400"}`}>
              Yearly
              <span className="ml-2 text-accent-blue">-20%</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-blue text-white text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-5xl font-bold text-white">
                    ${isYearly ? plan.priceYearly / 12 : plan.priceMonthly}
                  </span>
                  <span className="text-gray-400">/month</span>
                  {isYearly && plan.priceMonthly > 0 && (
                    <p className="text-sm text-accent-blue mt-1">
                      Billed ${plan.priceYearly}/year
                    </p>
                  )}
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "default" : "secondary"}
                  className="w-full mt-8"
                  asChild
                >
                  <Link href="/auth/register">
                    {plan.priceMonthly === 0 ? "Get Started Free" : "Start Free Trial"}
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Compare all features
          </h2>

          <Card variant="dark" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-border">
                    <th className="text-left p-4 text-sm font-medium text-gray-400">
                      Feature
                    </th>
                    <th className="text-center p-4 text-sm font-medium text-white">
                      Starter
                    </th>
                    <th className="text-center p-4 text-sm font-medium text-white bg-accent-blue/10">
                      Pro
                    </th>
                    <th className="text-center p-4 text-sm font-medium text-white">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-dark-border ${
                        index % 2 === 0 ? "bg-dark-surface/30" : ""
                      }`}
                    >
                      <td className="p-4 text-sm text-gray-300">{row.feature}</td>
                      <td className="text-center p-4">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <Check className="w-5 h-5 text-accent-green mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-300">{row.starter}</span>
                        )}
                      </td>
                      <td className="text-center p-4 bg-accent-blue/5">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-accent-green mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-300">{row.pro}</span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {typeof row.enterprise === "boolean" ? (
                          row.enterprise ? (
                            <Check className="w-5 h-5 text-accent-green mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-300">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Have questions?{" "}
            <Link href="#" className="text-accent-blue hover:underline">
              Check our FAQ
            </Link>{" "}
            or{" "}
            <Link href="#" className="text-accent-blue hover:underline">
              contact sales
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
