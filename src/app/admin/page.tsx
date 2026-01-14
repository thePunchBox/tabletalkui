"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  DollarSign,
  FileSpreadsheet,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Link from "next/link";

// Mock data for admin dashboard
const stats = [
  {
    label: "Total Users",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "vibrant-blue",
  },
  {
    label: "Revenue (MTD)",
    value: "$48,294",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    color: "success",
  },
  {
    label: "Active Files",
    value: "12,384",
    change: "+23.1%",
    trend: "up",
    icon: FileSpreadsheet,
    color: "purple-500",
  },
  {
    label: "Open Inquiries",
    value: "34",
    change: "-5.3%",
    trend: "down",
    icon: MessageSquare,
    color: "warning",
  },
];

const revenueData = [
  { name: "Jan", revenue: 32000, users: 1800 },
  { name: "Feb", revenue: 35000, users: 1950 },
  { name: "Mar", revenue: 38000, users: 2100 },
  { name: "Apr", revenue: 36500, users: 2200 },
  { name: "May", revenue: 42000, users: 2450 },
  { name: "Jun", revenue: 48294, users: 2847 },
];

const planDistribution = [
  { name: "Free", users: 1420, fill: "#94a3b8" },
  { name: "Pro", users: 980, fill: "#2D5BFF" },
  { name: "Enterprise", users: 447, fill: "#0A1128" },
];

const recentUsers = [
  { id: 1, name: "Sarah Johnson", email: "sarah@company.com", plan: "Pro", status: "active", joined: "2 hours ago" },
  { id: 2, name: "Michael Chen", email: "michael@startup.io", plan: "Enterprise", status: "active", joined: "5 hours ago" },
  { id: 3, name: "Emma Williams", email: "emma@design.co", plan: "Free", status: "trial", joined: "1 day ago" },
  { id: 4, name: "James Brown", email: "james@tech.dev", plan: "Pro", status: "active", joined: "2 days ago" },
  { id: 5, name: "Olivia Davis", email: "olivia@analytics.com", plan: "Free", status: "inactive", joined: "3 days ago" },
];

const recentInquiries = [
  { id: 1, user: "Sarah Johnson", subject: "API Rate Limits", status: "open", priority: "high", time: "30 min ago" },
  { id: 2, user: "Michael Chen", subject: "Enterprise Setup", status: "pending", priority: "medium", time: "2 hours ago" },
  { id: 3, user: "Emma Williams", subject: "Billing Question", status: "resolved", priority: "low", time: "1 day ago" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-600 mt-1">
            Monitor your platform performance and user activity
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/users">View All Users</Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl bg-${stat.color}/10`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === "up" ? "text-success" : "text-error"
                }`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Revenue Overview</h2>
                <p className="text-sm text-slate-600">Monthly revenue trends</p>
              </div>
              <select className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-vibrant-blue">
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>All time</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E5E7EB",
                      borderRadius: "12px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#2D5BFF"
                    fill="url(#revenueGradient)"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2D5BFF" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#2D5BFF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Plan Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 h-full">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Plan Distribution</h2>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={planDistribution} layout="vertical">
                  <XAxis type="number" stroke="#64748B" fontSize={12} />
                  <YAxis type="category" dataKey="name" stroke="#64748B" fontSize={12} width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E5E7EB",
                      borderRadius: "12px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value: number) => [`${value.toLocaleString()} users`, "Users"]}
                  />
                  <Bar dataKey="users" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {planDistribution.map((plan) => (
                <div key={plan.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: plan.fill }} />
                    <span className="text-slate-700">{plan.name}</span>
                  </div>
                  <span className="text-slate-600">{plan.users} users</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Tables Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Recent Users</h2>
              <Link href="/admin/users" className="text-sm text-vibrant-blue hover:underline flex items-center gap-1">
                View all <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between py-3 border-b border-slate-200 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                      <span className="text-sm font-semibold text-slate-900">
                        {user.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      user.plan === "Enterprise" ? "bg-deep-navy/10 text-deep-navy" :
                      user.plan === "Pro" ? "bg-vibrant-blue/10 text-vibrant-blue" :
                      "bg-slate-50 text-slate-600"
                    }`}>
                      {user.plan}
                    </span>
                    <p className="text-xs text-slate-500 mt-1">{user.joined}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Recent Inquiries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Recent Inquiries</h2>
              <Link href="/admin/inquiries" className="text-sm text-vibrant-blue hover:underline flex items-center gap-1">
                View all <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{inquiry.subject}</p>
                      <p className="text-xs text-slate-500 mt-1">From: {inquiry.user}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                      inquiry.status === "open" ? "bg-error/10 text-error" :
                      inquiry.status === "pending" ? "bg-warning/10 text-warning" :
                      "bg-success/10 text-success"
                    }`}>
                      {inquiry.status === "open" && <AlertCircle className="w-3 h-3" />}
                      {inquiry.status === "pending" && <Clock className="w-3 h-3" />}
                      {inquiry.status === "resolved" && <CheckCircle className="w-3 h-3" />}
                      {inquiry.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className={`text-xs font-medium ${
                      inquiry.priority === "high" ? "text-error" :
                      inquiry.priority === "medium" ? "text-warning" :
                      "text-slate-600"
                    }`}>
                      {inquiry.priority.charAt(0).toUpperCase() + inquiry.priority.slice(1)} priority
                    </span>
                    <span className="text-xs text-slate-500">{inquiry.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
