"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Send,
  Paperclip,
  User,
  X,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock inquiries data
const inquiries = [
  {
    id: 1,
    user: { name: "Sarah Johnson", email: "sarah@company.com", avatar: "SJ" },
    subject: "API Rate Limits Exceeded",
    message: "Hi, I'm getting rate limit errors when trying to process multiple CSV files. My plan should allow 1,000 queries per month but I'm being blocked after just 200.",
    status: "open",
    priority: "high",
    createdAt: "30 min ago",
    replies: 0,
  },
  {
    id: 2,
    user: { name: "Michael Chen", email: "michael@startup.io", avatar: "MC" },
    subject: "Enterprise Setup Assistance",
    message: "We're looking to onboard our entire team onto the Enterprise plan. Can you help us set up SSO integration with our Okta instance?",
    status: "pending",
    priority: "medium",
    createdAt: "2 hours ago",
    replies: 2,
  },
  {
    id: 3,
    user: { name: "Emma Williams", email: "emma@design.co", avatar: "EW" },
    subject: "Billing Question",
    message: "I upgraded to Pro last week but I'm still seeing Free plan limits. Can you check my account?",
    status: "resolved",
    priority: "low",
    createdAt: "1 day ago",
    replies: 4,
  },
  {
    id: 4,
    user: { name: "James Brown", email: "james@tech.dev", avatar: "JB" },
    subject: "Feature Request: Export to PDF",
    message: "Would love to be able to export chat history and analysis results as PDF documents for presentations. Is this on the roadmap?",
    status: "open",
    priority: "low",
    createdAt: "2 days ago",
    replies: 1,
  },
  {
    id: 5,
    user: { name: "Olivia Davis", email: "olivia@analytics.com", avatar: "OD" },
    subject: "Cannot Upload Large CSV",
    message: "I have a 45MB CSV file that fails to upload. The error message just says 'Upload failed' with no details.",
    status: "pending",
    priority: "high",
    createdAt: "3 days ago",
    replies: 3,
  },
];

export default function InquiriesPage() {
  const [selectedInquiry, setSelectedInquiry] = useState(inquiries[0]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [replyMessage, setReplyMessage] = useState("");

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesStatus = filterStatus === "all" || inquiry.status === filterStatus;
    const matchesPriority = filterPriority === "all" || inquiry.priority === filterPriority;
    return matchesStatus && matchesPriority;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <AlertCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "resolved":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-error/10 text-error";
      case "pending":
        return "bg-warning/10 text-warning";
      case "resolved":
        return "bg-success/10 text-success";
      default:
        return "bg-slate-50 text-slate-600";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-error";
      case "medium":
        return "text-warning";
      case "low":
        return "text-slate-600";
      default:
        return "text-slate-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Inquiries</h1>
          <p className="text-slate-600 mt-1">
            {inquiries.filter(i => i.status === "open").length} open • {inquiries.filter(i => i.status === "pending").length} pending
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search inquiries..."
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
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
            </select>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-vibrant-blue"
            >
              <option value="all">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Inquiries List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <Card className="overflow-hidden">
            <div className="divide-y divide-slate-200 max-h-[600px] overflow-y-auto">
              {filteredInquiries.map((inquiry) => (
                <button
                  key={inquiry.id}
                  onClick={() => setSelectedInquiry(inquiry)}
                  className={`w-full text-left p-4 hover:bg-slate-50/50 transition-colors ${
                    selectedInquiry?.id === inquiry.id ? "bg-vibrant-blue/5 border-l-2 border-l-vibrant-blue" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                        <span className="text-xs font-semibold text-slate-900">{inquiry.user.avatar}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{inquiry.user.name}</p>
                        <p className="text-xs text-slate-500">{inquiry.createdAt}</p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)}`}>
                      {getStatusIcon(inquiry.status)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-900 line-clamp-1">{inquiry.subject}</p>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{inquiry.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs font-medium ${getPriorityColor(inquiry.priority)}`}>
                      {inquiry.priority.charAt(0).toUpperCase() + inquiry.priority.slice(1)}
                    </span>
                    <span className="text-xs text-slate-500">{inquiry.replies} replies</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Inquiry Detail */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          {selectedInquiry ? (
            <Card className="h-full flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{selectedInquiry.subject}</h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedInquiry.status)}`}>
                        {getStatusIcon(selectedInquiry.status)}
                        {selectedInquiry.status.charAt(0).toUpperCase() + selectedInquiry.status.slice(1)}
                      </span>
                      <span className={`text-xs font-medium ${getPriorityColor(selectedInquiry.priority)}`}>
                        {selectedInquiry.priority.charAt(0).toUpperCase() + selectedInquiry.priority.slice(1)} priority
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Mark Resolved
                    </Button>
                    <Button variant="outline" size="sm">
                      Escalate
                    </Button>
                  </div>
                </div>
              </div>

              {/* User Info */}
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-sm font-semibold text-slate-900">{selectedInquiry.user.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{selectedInquiry.user.name}</p>
                    <p className="text-xs text-slate-500">{selectedInquiry.user.email}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <User className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Original Message */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-900">{selectedInquiry.user.name}</span>
                    <span className="text-xs text-slate-500">{selectedInquiry.createdAt}</span>
                  </div>
                  <p className="text-sm text-slate-700">{selectedInquiry.message}</p>
                </div>

                {/* Mock Reply */}
                {selectedInquiry.replies > 0 && (
                  <div className="p-4 rounded-xl bg-vibrant-blue/5 border border-vibrant-blue/20 ml-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-900">Support Team</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-vibrant-blue/10 text-vibrant-blue">Admin</span>
                      </div>
                      <span className="text-xs text-slate-500">20 min ago</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      Hi {selectedInquiry.user.name.split(" ")[0]}, thank you for reaching out. We&apos;re looking into this issue and will get back to you shortly with a resolution.
                    </p>
                  </div>
                )}
              </div>

              {/* Reply Input */}
              <div className="p-4 border-t border-slate-200 bg-slate-50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-vibrant-blue flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-white">A</span>
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      placeholder="Type your reply..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-500 focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10 text-sm resize-none"
                    />
                    <div className="flex items-center justify-between mt-3">
                      <button className="p-2 rounded-lg hover:bg-white transition-colors">
                        <Paperclip className="w-4 h-4 text-slate-600" />
                      </button>
                      <Button disabled={!replyMessage.trim()}>
                        <Send className="w-4 h-4 mr-2" />
                        Send Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center text-slate-500">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select an inquiry to view details</p>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
