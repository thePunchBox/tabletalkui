"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Download,
  DollarSign,
  TrendingUp,
  CreditCard,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
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
} from "recharts";

// Mock payment data
const payments = [
  { id: "PAY-001", user: "Sarah Johnson", email: "sarah@company.com", plan: "Pro", amount: 29, status: "completed", date: "Apr 15, 2024", method: "Visa •••• 4242" },
  { id: "PAY-002", user: "Michael Chen", email: "michael@startup.io", plan: "Enterprise", amount: 99, status: "completed", date: "Apr 15, 2024", method: "Mastercard •••• 5555" },
  { id: "PAY-003", user: "James Brown", email: "james@tech.dev", plan: "Pro", amount: 29, status: "completed", date: "Apr 14, 2024", method: "Visa •••• 1234" },
  { id: "PAY-004", user: "William Taylor", email: "william@corp.net", plan: "Pro", amount: 29, status: "pending", date: "Apr 14, 2024", method: "Amex •••• 3782" },
  { id: "PAY-005", user: "Benjamin Garcia", email: "ben@finance.com", plan: "Enterprise", amount: 99, status: "completed", date: "Apr 13, 2024", method: "Visa •••• 9876" },
  { id: "PAY-006", user: "Isabella Anderson", email: "bella@health.org", plan: "Pro", amount: 29, status: "failed", date: "Apr 13, 2024", method: "Mastercard •••• 4444" },
  { id: "PAY-007", user: "Sarah Johnson", email: "sarah@company.com", plan: "Pro", amount: 29, status: "refunded", date: "Apr 12, 2024", method: "Visa •••• 4242" },
  { id: "PAY-008", user: "Michael Chen", email: "michael@startup.io", plan: "Enterprise", amount: 99, status: "completed", date: "Apr 12, 2024", method: "Mastercard •••• 5555" },
];

const revenueData = [
  { date: "Apr 1", revenue: 1250 },
  { date: "Apr 5", revenue: 1890 },
  { date: "Apr 10", revenue: 2340 },
  { date: "Apr 15", revenue: 2890 },
  { date: "Apr 20", revenue: 3200 },
  { date: "Apr 25", revenue: 3650 },
  { date: "Apr 30", revenue: 4200 },
];

const stats = [
  { label: "Total Revenue", value: "$48,294", change: "+12.5%", icon: DollarSign },
  { label: "Transactions", value: "1,284", change: "+8.2%", icon: CreditCard },
  { label: "Avg Transaction", value: "$37.60", change: "+3.1%", icon: TrendingUp },
  { label: "This Month", value: "$12,450", change: "+15.3%", icon: Calendar },
];

export default function PaymentsPage() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPayments = payments.filter((payment) => {
    const matchesStatus = filterStatus === "all" || payment.status === filterStatus;
    const matchesSearch = payment.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "failed":
        return <XCircle className="w-4 h-4" />;
      case "refunded":
        return <RefreshCw className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-warning/10 text-warning";
      case "failed":
        return "bg-error/10 text-error";
      case "refunded":
        return "bg-slate-500/10 text-slate-500";
      default:
        return "bg-slate-50 text-slate-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
          <p className="text-slate-600 mt-1">
            Manage transactions and revenue
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-vibrant-blue/10">
                  <stat.icon className="w-5 h-5 text-vibrant-blue" />
                </div>
                <span className="text-sm text-success font-medium">{stat.change}</span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Revenue Trend</h2>
              <p className="text-sm text-slate-600">Daily revenue for April 2024</p>
            </div>
            <select className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-vibrant-blue">
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
            </select>
          </div>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="date" stroke="#64748B" fontSize={12} />
                <YAxis stroke="#64748B" fontSize={12} tickFormatter={(v) => `$${v}`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  formatter={(value: number) => [`$${value}`, "Revenue"]}
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

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by ID, user, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-500 focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10 text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-vibrant-blue"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
              <option value="refunded">Refunded</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Payments Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Transaction ID</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">User</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Plan</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Amount</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Method</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Date</th>
                  <th className="text-right p-4 text-sm font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment, index) => (
                  <tr
                    key={payment.id}
                    className={`border-b border-slate-200 hover:bg-slate-50/50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                    }`}
                  >
                    <td className="p-4">
                      <span className="text-sm font-mono text-slate-900">{payment.id}</span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm font-medium text-slate-900">{payment.user}</p>
                        <p className="text-xs text-slate-500">{payment.email}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        payment.plan === "Enterprise" ? "bg-deep-navy/10 text-deep-navy" :
                        payment.plan === "Pro" ? "bg-vibrant-blue/10 text-vibrant-blue" :
                        "bg-slate-50 text-slate-600"
                      }`}>
                        {payment.plan}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-semibold text-slate-900">${payment.amount}</span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                        {getStatusIcon(payment.status)}
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">{payment.method}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">{payment.date}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors" title="View Details">
                          <Eye className="w-4 h-4 text-slate-600" />
                        </button>
                        {payment.status === "completed" && (
                          <button className="p-2 hover:bg-warning/10 rounded-lg transition-colors" title="Refund">
                            <RefreshCw className="w-4 h-4 text-warning" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Showing {filteredPayments.length} of {payments.length} transactions
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>
                <ChevronLeft className="w-4 h-4 text-slate-600" />
              </button>
              <span className="px-3 py-1 rounded-lg bg-vibrant-blue text-white text-sm font-medium">1</span>
              <button className="px-3 py-1 rounded-lg hover:bg-slate-50 text-sm text-slate-600 transition-colors">2</button>
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
