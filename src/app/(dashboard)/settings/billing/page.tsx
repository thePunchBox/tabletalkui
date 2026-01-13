"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  CreditCard,
  Shield,
  Check,
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "profile", label: "Profile", icon: User, href: "/settings/profile" },
  { id: "billing", label: "Billing", icon: CreditCard, href: "/settings/billing" },
  { id: "security", label: "Security", icon: Shield, href: "#" },
];

const planFeatures = [
  "Unlimited tables",
  "200K tokens/month",
  "Priority support",
  "Advanced analytics",
  "API access",
];

const invoices = [
  { id: "INV-001", date: "Dec 2024", amount: "$29.00", status: "Paid" },
  { id: "INV-002", date: "Nov 2024", amount: "$29.00", status: "Paid" },
  { id: "INV-003", date: "Oct 2024", amount: "$29.00", status: "Paid" },
];

const usage = [
  { label: "Tables", used: 12, limit: "Unlimited", progress: null },
  { label: "Queries", used: 847, limit: 1000, progress: 84.7 },
  { label: "Tokens", used: 156000, limit: 200000, progress: 78 },
];

export default function BillingPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-heading tracking-tight">
          Settings
        </h1>
        <p className="text-text-secondary mt-1">
          Manage your account preferences and settings.
        </p>
      </div>

      {/* Tabs */}
      <Card className="p-1 flex gap-1">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors",
              tab.id === "billing"
                ? "bg-accent-blue/15 text-accent-blue-light"
                : "text-text-secondary hover:bg-glass-light hover:text-text-heading"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </Link>
        ))}
      </Card>

      {/* Current Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card glow className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-purple" />
                <h2 className="text-lg font-semibold text-text-heading">
                  Pro Plan
                </h2>
              </div>
              <p className="text-text-secondary mt-1">
                You&apos;re on the Pro plan, billed monthly.
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-text-heading">$29</p>
              <p className="text-sm text-text-secondary">/month</p>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {planFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-text-primary"
              >
                <Check className="w-4 h-4 text-accent-green shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <Button variant="secondary">Change Plan</Button>
            <Button variant="ghost" className="text-text-secondary">
              Cancel Subscription
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Usage */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-text-heading mb-6">
          Usage This Month
        </h2>
        <div className="space-y-6">
          {usage.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text-primary">
                  {item.label}
                </span>
                <span className="text-sm text-text-secondary">
                  {item.used.toLocaleString()} / {typeof item.limit === "number" ? item.limit.toLocaleString() : item.limit}
                </span>
              </div>
              {item.progress !== null && (
                <Progress
                  value={item.progress}
                  variant={item.progress > 80 ? "warning" : "default"}
                />
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Invoice History */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-text-heading mb-6">
          Invoice History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-app-border">
                <th className="text-left py-3 text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Invoice
                </th>
                <th className="text-left py-3 text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left py-3 text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-left py-3 text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Status
                </th>
                <th className="text-right py-3 text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="border-b border-app-border last:border-0 hover:bg-glass-light transition-colors"
                >
                  <td className="py-3 text-sm text-text-heading font-medium">
                    {invoice.id}
                  </td>
                  <td className="py-3 text-sm text-text-primary">
                    {invoice.date}
                  </td>
                  <td className="py-3 text-sm text-text-primary">
                    {invoice.amount}
                  </td>
                  <td className="py-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent-green/15 text-accent-green border border-accent-green/30">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 rounded-lg hover:bg-glass-light text-text-secondary hover:text-text-heading transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-glass-light text-text-secondary hover:text-text-heading transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Payment Method */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-glass-light">
              <CreditCard className="w-6 h-6 text-text-primary" />
            </div>
            <div>
              <p className="font-medium text-text-heading">•••• •••• •••• 4242</p>
              <p className="text-sm text-text-secondary">Expires 12/2026</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            Update
          </Button>
        </div>
      </Card>
    </div>
  );
}
