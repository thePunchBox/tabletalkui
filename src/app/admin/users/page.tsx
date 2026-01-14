"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Download,
  MoreVertical,
  Mail,
  Ban,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  UserPlus,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock user data
const users = [
  { id: 1, name: "Sarah Johnson", email: "sarah@company.com", plan: "Pro", credits: 850, files: 23, status: "active", joined: "Jan 15, 2024" },
  { id: 2, name: "Michael Chen", email: "michael@startup.io", plan: "Enterprise", credits: 5000, files: 156, status: "active", joined: "Feb 3, 2024" },
  { id: 3, name: "Emma Williams", email: "emma@design.co", plan: "Free", credits: 45, files: 5, status: "trial", joined: "Mar 20, 2024" },
  { id: 4, name: "James Brown", email: "james@tech.dev", plan: "Pro", credits: 320, files: 42, status: "active", joined: "Jan 8, 2024" },
  { id: 5, name: "Olivia Davis", email: "olivia@analytics.com", plan: "Free", credits: 0, files: 2, status: "inactive", joined: "Dec 15, 2023" },
  { id: 6, name: "William Taylor", email: "william@corp.net", plan: "Pro", credits: 1200, files: 67, status: "active", joined: "Feb 28, 2024" },
  { id: 7, name: "Sophia Martinez", email: "sophia@media.io", plan: "Free", credits: 89, files: 8, status: "active", joined: "Apr 1, 2024" },
  { id: 8, name: "Benjamin Garcia", email: "ben@finance.com", plan: "Enterprise", credits: 4500, files: 234, status: "active", joined: "Nov 10, 2023" },
  { id: 9, name: "Isabella Anderson", email: "bella@health.org", plan: "Pro", credits: 560, files: 31, status: "active", joined: "Mar 5, 2024" },
  { id: 10, name: "Lucas Thompson", email: "lucas@edu.com", plan: "Free", credits: 12, files: 3, status: "trial", joined: "Apr 10, 2024" },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlan = selectedPlan === "all" || user.plan.toLowerCase() === selectedPlan;
    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus;
    return matchesSearch && matchesPlan && matchesStatus;
  });

  const toggleSelectUser = (id: number) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(u => u.id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
          <p className="text-slate-600 mt-1">
            {users.length} total users • {users.filter(u => u.status === "active").length} active
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

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
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-vibrant-blue"
            >
              <option value="all">All Plans</option>
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="enterprise">Enterprise</option>
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-vibrant-blue"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="trial">Trial</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="overflow-hidden">
          {/* Mobile Card View */}
          <div className="lg:hidden divide-y divide-slate-200">
            {filteredUsers.map((user) => (
              <div key={user.id} className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleSelectUser(user.id)}
                      className="w-4 h-4 rounded border-slate-200 text-vibrant-blue focus:ring-vibrant-blue flex-shrink-0"
                    />
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-slate-900">
                        {user.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">{user.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors" title="View Details">
                      <Eye className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors" title="Send Email">
                      <Mail className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-error/10 rounded-lg transition-colors" title="Suspend User">
                      <Ban className="w-4 h-4 text-error" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-7">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    user.plan === "Enterprise" ? "bg-deep-navy/10 text-deep-navy" :
                    user.plan === "Pro" ? "bg-vibrant-blue/10 text-vibrant-blue" :
                    "bg-slate-50 text-slate-600"
                  }`}>
                    {user.plan}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    user.status === "active" ? "bg-success/10 text-success" :
                    user.status === "trial" ? "bg-vibrant-blue/10 text-vibrant-blue" :
                    "bg-slate-500/10 text-slate-500"
                  }`}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pl-7">
                  <span><span className="font-medium">{user.credits.toLocaleString()}</span> credits</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{user.files} files</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>Joined {user.joined}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-slate-200 text-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">User</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Plan</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Credits</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Files</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Joined</th>
                  <th className="text-right p-4 text-sm font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`border-b border-slate-200 hover:bg-slate-50/50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                    }`}
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleSelectUser(user.id)}
                        className="w-4 h-4 rounded border-slate-200 text-vibrant-blue focus:ring-vibrant-blue"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-slate-900">
                            {user.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-slate-900 truncate">{user.name}</p>
                          <p className="text-xs text-slate-500 truncate">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.plan === "Enterprise" ? "bg-deep-navy/10 text-deep-navy" :
                        user.plan === "Pro" ? "bg-vibrant-blue/10 text-vibrant-blue" :
                        "bg-slate-50 text-slate-600"
                      }`}>
                        {user.plan}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-700 font-medium">
                        {user.credits.toLocaleString()}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-700">{user.files}</span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.status === "active" ? "bg-success/10 text-success" :
                        user.status === "trial" ? "bg-vibrant-blue/10 text-vibrant-blue" :
                        "bg-slate-500/10 text-slate-500"
                      }`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">{user.joined}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors" title="View Details">
                          <Eye className="w-4 h-4 text-slate-600" />
                        </button>
                        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors" title="Send Email">
                          <Mail className="w-4 h-4 text-slate-600" />
                        </button>
                        <button className="p-2 hover:bg-error/10 rounded-lg transition-colors" title="Suspend User">
                          <Ban className="w-4 h-4 text-error" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Showing {filteredUsers.length} of {users.length} users
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>
                <ChevronLeft className="w-4 h-4 text-slate-600" />
              </button>
              <span className="px-3 py-1 rounded-lg bg-vibrant-blue text-white text-sm font-medium">1</span>
              <button className="px-3 py-1 rounded-lg hover:bg-slate-50 text-sm text-slate-600 transition-colors hidden sm:inline-block">2</button>
              <button className="px-3 py-1 rounded-lg hover:bg-slate-50 text-sm text-slate-600 transition-colors hidden sm:inline-block">3</button>
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl"
        >
          <Card className="px-4 sm:px-6 py-3 flex flex-wrap items-center justify-center gap-2 sm:gap-4 shadow-lg">
            <span className="text-xs sm:text-sm text-slate-700">
              {selectedUsers.length} user{selectedUsers.length > 1 ? "s" : ""} selected
            </span>
            <div className="hidden sm:block h-4 w-px bg-slate-200" />
            <button className="text-xs sm:text-sm text-vibrant-blue hover:underline">Send Email</button>
            <button className="text-xs sm:text-sm text-warning hover:underline">Suspend</button>
            <button className="text-xs sm:text-sm text-error hover:underline">Delete</button>
            <button
              onClick={() => setSelectedUsers([])}
              className="text-xs sm:text-sm text-slate-600 hover:underline"
            >
              Clear
            </button>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
