"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Download,
  Gem,
  TrendingUp,
  Users,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Eye,
  Plus,
  RefreshCw,
  Mail,
  MoreVertical,
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

// Mock credits data
const userCredits = [
  { id: 1, name: "Sarah Johnson", email: "sarah@company.com", plan: "Pro", creditsLimit: 200000, creditsUsed: 156000, lastUsed: "2 hours ago", status: "normal" },
  { id: 2, name: "Michael Chen", email: "michael@startup.io", plan: "Enterprise", creditsLimit: -1, creditsUsed: 450000, lastUsed: "1 hour ago", status: "normal" },
  { id: 3, name: "Emma Williams", email: "emma@design.co", plan: "Starter", creditsLimit: 50000, creditsUsed: 48500, lastUsed: "30 mins ago", status: "low" },
  { id: 4, name: "James Brown", email: "james@tech.dev", plan: "Pro", creditsLimit: 200000, creditsUsed: 89000, lastUsed: "5 hours ago", status: "normal" },
  { id: 5, name: "Olivia Davis", email: "olivia@analytics.com", plan: "Starter", creditsLimit: 50000, creditsUsed: 49800, lastUsed: "1 day ago", status: "critical" },
  { id: 6, name: "William Taylor", email: "william@corp.net", plan: "Pro", creditsLimit: 200000, creditsUsed: 111000, lastUsed: "3 hours ago", status: "normal" },
  { id: 7, name: "Sophia Martinez", email: "sophia@media.io", plan: "Starter", creditsLimit: 50000, creditsUsed: 12000, lastUsed: "2 days ago", status: "normal" },
  { id: 8, name: "Benjamin Garcia", email: "ben@finance.com", plan: "Enterprise", creditsLimit: -1, creditsUsed: 890000, lastUsed: "Just now", status: "normal" },
  { id: 9, name: "Isabella Anderson", email: "bella@health.org", plan: "Pro", creditsLimit: 200000, creditsUsed: 178000, lastUsed: "4 hours ago", status: "low" },
  { id: 10, name: "Lucas Thompson", email: "lucas@edu.com", plan: "Starter", creditsLimit: 50000, creditsUsed: 5000, lastUsed: "1 week ago", status: "normal" },
];

const usageData = [
  { date: "Jan 1", credits: 850000 },
  { date: "Jan 5", credits: 920000 },
  { date: "Jan 10", credits: 1100000 },
  { date: "Jan 15", credits: 1350000 },
  { date: "Jan 20", credits: 1520000 },
  { date: "Jan 25", credits: 1680000 },
  { date: "Jan 30", credits: 1800000 },
];

const stats = [
  { label: "Total Allocated", value: "2.5M", subtext: "credits", icon: Gem, color: "vibrant-blue" },
  { label: "Credits Used", value: "1.8M", subtext: "this month", icon: TrendingUp, color: "success" },
  { label: "Avg Per User", value: "12,500", subtext: "credits", icon: Users, color: "purple-500" },
  { label: "Low Credit Users", value: "45", subtext: "need attention", icon: AlertTriangle, color: "warning" },
];

export default function CreditsPage() {
  const [filterPlan, setFilterPlan] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = userCredits.filter((user) => {
    const matchesPlan = filterPlan === "all" || user.plan.toLowerCase() === filterPlan;
    const matchesStatus = filterStatus === "all" || user.status === filterStatus;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlan && matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-error/10 text-error";
      case "low":
        return "bg-warning/10 text-warning";
      default:
        return "bg-success/10 text-success";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "critical":
        return "Critical";
      case "low":
        return "Low";
      default:
        return "Normal";
    }
  };

  const formatCredits = (credits: number) => {
    if (credits === -1) return "Unlimited";
    if (credits >= 1000000) return `${(credits / 1000000).toFixed(1)}M`;
    if (credits >= 1000) return `${(credits / 1000).toFixed(0)}K`;
    return credits.toString();
  };

  const getUsagePercentage = (used: number, limit: number) => {
    if (limit === -1) return 0; // Unlimited
    return Math.round((used / limit) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Credits Overview</h1>
          <p className="text-slate-600 mt-1">
            Monitor user credit usage across the platform
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
                <div className={`p-3 rounded-xl bg-${stat.color}/10`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                <p className="text-xs text-slate-500">{stat.subtext}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Usage Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Credit Usage Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={usageData}>
                <defs>
                  <linearGradient id="creditGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2D5BFF" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#2D5BFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="date" stroke="#64748B" fontSize={12} />
                <YAxis 
                  stroke="#64748B" 
                  fontSize={12} 
                  tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                  formatter={(value: number) => [`${formatCredits(value)} credits`, "Usage"]}
                />
                <Area
                  type="monotone"
                  dataKey="credits"
                  stroke="#2D5BFF"
                  strokeWidth={2}
                  fill="url(#creditGradient)"
                />
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
              placeholder="Search users by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-500 focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10 text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={filterPlan}
              onChange={(e) => setFilterPlan(e.target.value)}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:border-vibrant-blue"
            >
              <option value="all">All Plans</option>
              <option value="starter">Starter</option>
              <option value="pro">Pro</option>
              <option value="enterprise">Enterprise</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:border-vibrant-blue"
            >
              <option value="all">All Status</option>
              <option value="normal">Normal</option>
              <option value="low">Low Credits</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Credits Table */}
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
                  <th className="text-left p-4 text-sm font-medium text-slate-600">User</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Plan</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Credits Limit</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Used</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Remaining</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Usage</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Last Used</th>
                  <th className="text-right p-4 text-sm font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => {
                  const remaining = user.creditsLimit === -1 ? -1 : user.creditsLimit - user.creditsUsed;
                  const usagePercent = getUsagePercentage(user.creditsUsed, user.creditsLimit);
                  
                  return (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-slate-900">{user.name}</p>
                          <p className="text-sm text-slate-500">{user.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                          user.plan === "Enterprise" ? "bg-purple-100 text-purple-700" :
                          user.plan === "Pro" ? "bg-vibrant-blue/10 text-vibrant-blue" :
                          "bg-slate-100 text-slate-600"
                        }`}>
                          {user.plan}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-slate-900 font-medium">
                          {formatCredits(user.creditsLimit)}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-slate-700">
                          {formatCredits(user.creditsUsed)}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`font-medium ${
                          remaining !== -1 && remaining < 5000 ? "text-error" :
                          remaining !== -1 && remaining < 20000 ? "text-warning" :
                          "text-slate-900"
                        }`}>
                          {formatCredits(remaining)}
                        </span>
                      </td>
                      <td className="p-4">
                        {user.creditsLimit !== -1 ? (
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 rounded-full bg-slate-200 overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  usagePercent >= 90 ? "bg-error" :
                                  usagePercent >= 70 ? "bg-warning" :
                                  "bg-success"
                                }`}
                                style={{ width: `${usagePercent}%` }}
                              />
                            </div>
                            <span className="text-xs text-slate-500">{usagePercent}%</span>
                          </div>
                        ) : (
                          <span className="text-xs text-slate-500">N/A</span>
                        )}
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-medium inline-flex items-center gap-1 ${getStatusBadge(user.status)}`}>
                          {user.status === "critical" && <AlertTriangle className="w-3 h-3" />}
                          {getStatusText(user.status)}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-slate-600">{user.lastUsed}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors" title="View Details">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors" title="Add Credits">
                            <Plus className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors" title="Reset Credits">
                            <RefreshCw className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors" title="Send Warning">
                            <Mail className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Showing {filteredUsers.length} of {userCredits.length} users
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm text-slate-600 px-3">Page {currentPage}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => p + 1)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Legend */}
      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="text-slate-600">Normal (more than 30% remaining)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-slate-600">Low (10-30% remaining)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-error" />
            <span className="text-slate-600">Critical (less than 10% remaining)</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
