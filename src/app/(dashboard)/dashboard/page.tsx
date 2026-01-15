"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Table,
  MessageSquare,
  Coins,
  Crown,
  ArrowRight,
  Upload,
  Eye,
  Trash2,
  Sparkles,
  Clock,
  FileSpreadsheet,
  CreditCard,
  Receipt,
  Calendar,
  Plus,
  X,
  Check,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { dashboardStats, tablesData, chatHistory, currentUser, userSubscription, userPaymentMethods } from "@/lib/mock-data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function UserDashboardPage() {
  const creditsUsedPercent = (dashboardStats.tokensUsed / dashboardStats.planLimit) * 100;
  const [showAddCard, setShowAddCard] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState(userPaymentMethods);

  return (
    <div className="space-y-6 page-transition">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Welcome back, {currentUser.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-slate-600 mt-1">
            Here&apos;s your activity overview and quick actions.
          </p>
        </div>
        <Button asChild>
          <Link href="/tables/upload">
            <Upload className="w-4 h-4 mr-2" />
            Upload CSV
          </Link>
        </Button>
      </div>

      {/* Credits & Plan Card - Prominent */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Card className="overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-vibrant-blue/5 to-vibrant-blue/10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-vibrant-blue/15">
                  <Crown className="w-8 h-8 text-vibrant-blue" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold text-slate-900">
                      {dashboardStats.currentPlan} Plan
                    </h2>
                    <Badge variant="ready">Active</Badge>
                  </div>
                  <p className="text-slate-600 mt-1">
                    Your subscription renews on Feb 15, 2026
                  </p>
                </div>
              </div>
              <Button variant="secondary" asChild>
                <Link href="/settings/billing">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Manage Billing
                </Link>
              </Button>
            </div>

            {/* Credits Usage */}
            <div className="mt-6 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-vibrant-blue" />
                  <span className="font-medium text-slate-900">Credits Used</span>
                </div>
                <span className="text-slate-600">
                  {(dashboardStats.tokensUsed / 1000).toFixed(0)}K / {(dashboardStats.planLimit / 1000).toFixed(0)}K tokens
                </span>
              </div>
              <Progress 
                value={creditsUsedPercent} 
                variant={creditsUsedPercent > 80 ? "warning" : "default"} 
              />
              {creditsUsedPercent > 80 && (
                <p className="text-sm text-warning mt-2 flex items-center gap-1">
                  <span>⚠️</span> You&apos;re running low on credits. Consider upgrading your plan.
                </p>
              )}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Subscription & Payment Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Current Subscription / Invoice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between border-b border-slate-200">
              <CardTitle className="text-lg flex items-center gap-2">
                <Receipt className="w-5 h-5 text-vibrant-blue" />
                Subscription Details
              </CardTitle>
              <Badge variant="ready">Active</Badge>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {/* Package Info */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-vibrant-blue/5 to-purple-500/5 border border-vibrant-blue/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-vibrant-blue" />
                      <span className="font-semibold text-slate-900">{userSubscription.planName}</span>
                    </div>
                    <span className="text-xl font-bold text-slate-900">{userSubscription.price}</span>
                  </div>
                  <p className="text-sm text-slate-600">{userSubscription.billingCycle}</p>
                </div>

                {/* Invoice Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-600">Invoice Number</span>
                    <span className="text-sm font-medium text-slate-900">{userSubscription.invoiceNumber}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-600">Last Payment</span>
                    <span className="text-sm font-medium text-slate-900">{userSubscription.lastPaymentDate}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-600">Amount Paid</span>
                    <span className="text-sm font-medium text-success">{userSubscription.amountPaid}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-slate-600 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Renewal Date
                    </span>
                    <span className="text-sm font-medium text-slate-900">{userSubscription.renewalDate}</span>
                  </div>
                </div>

                {/* Days Remaining */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Days until renewal</span>
                    <span className="text-sm font-semibold text-vibrant-blue">{userSubscription.daysRemaining} days</span>
                  </div>
                  <Progress value={(30 - userSubscription.daysRemaining) / 30 * 100} variant="default" />
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="secondary" size="sm" asChild className="flex-1">
                    <Link href="/settings/billing">
                      View Invoices
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <Link href="/pricing">
                      Upgrade Plan
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between border-b border-slate-200">
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-success" />
                Payment Methods
              </CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAddCard(!showAddCard)}
                className="text-vibrant-blue"
              >
                {showAddCard ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4 mr-1" />}
                {showAddCard ? "" : "Add New"}
              </Button>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {/* Add New Card Form */}
                {showAddCard && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl border border-vibrant-blue/30 bg-vibrant-blue/5 mb-4"
                  >
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Add New Card</h4>
                    <div className="space-y-3">
                      <Input placeholder="Card Number" className="text-sm" />
                      <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="MM/YY" className="text-sm" />
                        <Input placeholder="CVC" className="text-sm" />
                      </div>
                      <Input placeholder="Cardholder Name" className="text-sm" />
                      <div className="flex gap-2 pt-1">
                        <Button size="sm" className="flex-1">
                          <Check className="w-4 h-4 mr-1" />
                          Save Card
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setShowAddCard(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Existing Payment Methods */}
                {paymentMethods.map((method, index) => (
                  <div
                    key={method.id}
                    className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                      method.isDefault 
                        ? "bg-vibrant-blue/5 border border-vibrant-blue/20" 
                        : "bg-slate-50 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${method.isDefault ? "bg-vibrant-blue/10" : "bg-white border border-slate-200"}`}>
                        <CreditCard className={`w-5 h-5 ${method.isDefault ? "text-vibrant-blue" : "text-slate-500"}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-slate-900 text-sm">{method.brand}</p>
                          {method.isDefault && (
                            <Badge variant="ready" className="text-xs py-0">Default</Badge>
                          )}
                        </div>
                        <p className="text-xs text-slate-600">
                          •••• {method.last4} • Expires {method.expiryDate}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-900">
                      Edit
                    </Button>
                  </div>
                ))}

                {/* Add Payment Method Prompt */}
                {paymentMethods.length === 0 && !showAddCard && (
                  <div className="text-center py-8">
                    <CreditCard className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm text-slate-600 mb-3">No payment methods added yet</p>
                    <Button size="sm" onClick={() => setShowAddCard(true)}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add Payment Method
                    </Button>
                  </div>
                )}

                {/* Billing Settings Link */}
                <div className="pt-3 mt-3 border-t border-slate-200">
                  <Link 
                    href="/settings/billing" 
                    className="text-sm text-vibrant-blue hover:text-vibrant-blue-light flex items-center gap-1 transition-colors"
                  >
                    Manage billing settings
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <motion.div variants={fadeInUp}>
          <Card className="stats-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Uploaded Tables</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">
                  {dashboardStats.totalTables}
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-vibrant-blue/10">
                <Table className="w-5 h-5 text-vibrant-blue" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="stats-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Queries</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">
                  {dashboardStats.totalQueries.toLocaleString()}
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-success/10">
                <MessageSquare className="w-5 h-5 text-success" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="stats-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Chat Sessions</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">
                  {chatHistory?.length || 24}
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-warning/10">
                <Clock className="w-5 h-5 text-warning" />
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Tables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between border-b border-slate-200">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-vibrant-blue" />
                My Tables
              </CardTitle>
              <Link
                href="/tables"
                className="text-sm text-vibrant-blue hover:text-vibrant-blue-light flex items-center gap-1 transition-colors"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {tablesData.slice(0, 4).map((table) => (
                  <div
                    key={table.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <FileSpreadsheet className="w-4 h-4 text-slate-500" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">
                          {table.name}
                        </p>
                        <p className="text-xs text-slate-600">
                          {table.rows.toLocaleString()} rows • {table.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={table.status === "ready" ? "ready" : table.status === "processing" ? "processing" : "error"}
                        className="text-xs"
                      >
                        {table.status}
                      </Badge>
                      <Link
                        href={`/tables/${table.id}/chat`}
                        className="p-2 rounded-lg opacity-0 group-hover:opacity-100 bg-vibrant-blue/10 text-vibrant-blue transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Chats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between border-b border-slate-200">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-success" />
                Recent Chats
              </CardTitle>
              <Link
                href="/chat/history"
                className="text-sm text-vibrant-blue hover:text-vibrant-blue-light flex items-center gap-1 transition-colors"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {[
                  { title: "Q4 Sales Analysis", table: "Q4 Sales Report", time: "2 hours ago", messages: 12 },
                  { title: "Customer Segmentation", table: "Customer Analytics", time: "Yesterday", messages: 8 },
                  { title: "Inventory Check", table: "Product Inventory", time: "2 days ago", messages: 5 },
                  { title: "Marketing ROI", table: "Marketing Campaign", time: "3 days ago", messages: 15 },
                ].map((chat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-success/10">
                        <Sparkles className="w-4 h-4 text-success" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">
                          {chat.title}
                        </p>
                        <p className="text-xs text-slate-600">
                          {chat.table} • {chat.messages} messages
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">{chat.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-4"
      >
        <Card glow className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-vibrant-blue/10">
              <Upload className="w-6 h-6 text-vibrant-blue" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900">Upload New Table</h3>
              <p className="text-sm text-slate-600 mt-1">
                Import CSV or Excel files to start analyzing your data.
              </p>
              <Button asChild size="sm" className="mt-4">
                <Link href="/tables/upload">
                  Upload Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>

        <Card glow className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-success/10">
              <MessageSquare className="w-6 h-6 text-success" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900">Start New Chat</h3>
              <p className="text-sm text-slate-600 mt-1">
                Select a table and start asking questions about your data.
              </p>
              <Button asChild variant="secondary" size="sm" className="mt-4">
                <Link href="/tables">
                  Choose Table
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
