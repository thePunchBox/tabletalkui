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
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { dashboardStats, tablesData } from "@/lib/mock-data";

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

const statsCards = [
  {
    title: "Total Tables",
    value: dashboardStats.totalTables,
    icon: Table,
    color: "text-accent-blue-light",
    bgColor: "bg-accent-blue/15",
  },
  {
    title: "Total Queries",
    value: dashboardStats.totalQueries.toLocaleString(),
    icon: MessageSquare,
    color: "text-accent-green",
    bgColor: "bg-accent-green/15",
  },
  {
    title: "Tokens Used",
    value: `${(dashboardStats.tokensUsed / 1000).toFixed(0)}K`,
    subtitle: `of ${(dashboardStats.planLimit / 1000).toFixed(0)}K`,
    icon: Coins,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/15",
    progress: (dashboardStats.tokensUsed / dashboardStats.planLimit) * 100,
  },
  {
    title: "Current Plan",
    value: dashboardStats.currentPlan,
    icon: Crown,
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/15",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-heading tracking-tight">Dashboard</h1>
          <p className="text-text-secondary mt-1">
            Welcome back! Here&apos;s an overview of your data.
          </p>
        </div>
        <Button asChild>
          <Link href="/tables/upload">
            <Upload className="w-4 h-4 mr-2" />
            Upload Table
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {statsCards.map((stat, index) => (
          <motion.div key={stat.title} variants={fadeInUp}>
            <Card glow className="stats-card">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-text-secondary">{stat.title}</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-2xl font-bold text-text-heading">
                      {stat.value}
                    </p>
                    {stat.subtitle && (
                      <span className="text-sm text-text-disabled">
                        {stat.subtitle}
                      </span>
                    )}
                  </div>
                  {stat.progress !== undefined && (
                    <div className="mt-3">
                      <Progress
                        value={stat.progress}
                        variant={stat.progress > 80 ? "warning" : "default"}
                      />
                    </div>
                  )}
                </div>
                <div className={`p-2.5 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Tables */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between border-b border-app-border">
            <CardTitle className="text-lg">Recent Tables</CardTitle>
            <Link
              href="/tables"
              className="text-sm text-accent-blue-light hover:text-accent-blue flex items-center gap-1 transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-app-border">
                    <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary uppercase tracking-wider">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary uppercase tracking-wider hidden sm:table-cell">
                      Rows
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary uppercase tracking-wider hidden md:table-cell">
                      Size
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary uppercase tracking-wider hidden lg:table-cell">
                      Last Query
                    </th>
                    <th className="text-right py-3 px-4 text-xs font-medium text-text-secondary uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tablesData.slice(0, 5).map((table) => (
                    <tr
                      key={table.id}
                      className="border-b border-app-border last:border-0 hover:bg-glass-light transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-text-heading">
                            {table.name}
                          </p>
                          <p className="text-sm text-text-secondary">
                            {table.fileName}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-text-primary hidden sm:table-cell">
                        {table.rows.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-text-primary hidden md:table-cell">
                        {table.size}
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            table.status === "ready"
                              ? "ready"
                              : table.status === "processing"
                              ? "processing"
                              : "error"
                          }
                        >
                          {table.status.charAt(0).toUpperCase() +
                            table.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-text-secondary hidden lg:table-cell">
                        {table.lastQueried === "Never"
                          ? "Never"
                          : new Date(table.lastQueried).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/tables/${table.id}/chat`}
                            className="p-2 rounded-lg hover:bg-accent-blue/15 text-text-secondary hover:text-accent-blue-light transition-colors"
                            title="Chat"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </Link>
                          <button
                            className="p-2 rounded-lg hover:bg-glass-light text-text-secondary hover:text-text-heading transition-colors"
                            title="View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 rounded-lg hover:bg-red-500/15 text-text-secondary hover:text-red-400 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-4"
      >
        <Card glow className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent-blue/15">
              <Upload className="w-6 h-6 text-accent-blue-light" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-text-heading">Upload New Table</h3>
              <p className="text-sm text-text-secondary mt-1">
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
            <div className="p-3 rounded-xl bg-accent-green/15">
              <MessageSquare className="w-6 h-6 text-accent-green" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-text-heading">View Chat History</h3>
              <p className="text-sm text-text-secondary mt-1">
                Browse your previous conversations and insights.
              </p>
              <Button asChild variant="secondary" size="sm" className="mt-4">
                <Link href="/chat/history">
                  View History
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
