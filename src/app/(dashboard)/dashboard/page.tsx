"use client";

import React from "react";
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
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { dashboardStats, tablesData, chatHistory, currentUser } from "@/lib/mock-data";

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
