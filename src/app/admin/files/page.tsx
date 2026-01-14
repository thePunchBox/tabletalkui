"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Download,
  FileSpreadsheet,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  HardDrive,
  FileUp,
  Calendar,
  User,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock files data
const files = [
  { id: 1, name: "sales_q1_2024.csv", user: "Sarah Johnson", email: "sarah@company.com", size: "2.4 MB", rows: 15420, queries: 45, uploaded: "Apr 15, 2024" },
  { id: 2, name: "customer_data.csv", user: "Michael Chen", email: "michael@startup.io", size: "12.8 MB", rows: 89234, queries: 156, uploaded: "Apr 14, 2024" },
  { id: 3, name: "inventory.csv", user: "Emma Williams", email: "emma@design.co", size: "856 KB", rows: 3421, queries: 12, uploaded: "Apr 13, 2024" },
  { id: 4, name: "marketing_metrics.csv", user: "James Brown", email: "james@tech.dev", size: "4.1 MB", rows: 28910, queries: 78, uploaded: "Apr 12, 2024" },
  { id: 5, name: "hr_records_2024.csv", user: "Benjamin Garcia", email: "ben@finance.com", size: "18.2 MB", rows: 125000, queries: 234, uploaded: "Apr 11, 2024" },
  { id: 6, name: "product_catalog.csv", user: "Isabella Anderson", email: "bella@health.org", size: "6.7 MB", rows: 45678, queries: 67, uploaded: "Apr 10, 2024" },
  { id: 7, name: "user_analytics.csv", user: "William Taylor", email: "william@corp.net", size: "9.3 MB", rows: 67890, queries: 89, uploaded: "Apr 9, 2024" },
  { id: 8, name: "financial_report.csv", user: "Sophia Martinez", email: "sophia@media.io", size: "3.2 MB", rows: 21345, queries: 34, uploaded: "Apr 8, 2024" },
];

const stats = [
  { label: "Total Files", value: "12,384", icon: FileSpreadsheet },
  { label: "Storage Used", value: "847 GB", icon: HardDrive },
  { label: "Uploads Today", value: "142", icon: FileUp },
  { label: "Active This Week", value: "3,421", icon: Calendar },
];

export default function FilesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<number[]>([]);

  const filteredFiles = files.filter((file) => {
    return file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.email.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const toggleSelectFile = (id: number) => {
    setSelectedFiles(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedFiles.length === filteredFiles.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(filteredFiles.map(f => f.id));
    }
  };

  const formatSize = (size: string) => {
    return size;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">File Management</h1>
          <p className="text-slate-600 mt-1">
            Monitor and manage all uploaded CSV files
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export List
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
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-vibrant-blue/10">
                  <stat.icon className="w-5 h-5 text-vibrant-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search files by name, user, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-500 focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10 text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <select className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-vibrant-blue">
              <option value="all">All Users</option>
              <option value="pro">Pro Users</option>
              <option value="enterprise">Enterprise Users</option>
            </select>
            <select className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-vibrant-blue">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="largest">Largest First</option>
              <option value="most-queries">Most Queries</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Files Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-4">
                    <input
                      type="checkbox"
                      checked={selectedFiles.length === filteredFiles.length && filteredFiles.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-slate-200 text-vibrant-blue focus:ring-vibrant-blue"
                    />
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">File Name</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Uploaded By</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Size</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Rows</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Queries</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-600">Uploaded</th>
                  <th className="text-right p-4 text-sm font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFiles.map((file, index) => (
                  <tr
                    key={file.id}
                    className={`border-b border-slate-200 hover:bg-slate-50/50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                    }`}
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedFiles.includes(file.id)}
                        onChange={() => toggleSelectFile(file.id)}
                        className="w-4 h-4 rounded border-slate-200 text-vibrant-blue focus:ring-vibrant-blue"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-vibrant-blue/10">
                          <FileSpreadsheet className="w-5 h-5 text-vibrant-blue" />
                        </div>
                        <span className="text-sm font-medium text-slate-900">{file.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                          <span className="text-xs font-semibold text-slate-900">
                            {file.user.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{file.user}</p>
                          <p className="text-xs text-slate-500">{file.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-700">{formatSize(file.size)}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-700">{file.rows.toLocaleString()}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-vibrant-blue">{file.queries}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">{file.uploaded}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors" title="View File">
                          <Eye className="w-4 h-4 text-slate-600" />
                        </button>
                        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors" title="Download">
                          <Download className="w-4 h-4 text-slate-600" />
                        </button>
                        <button className="p-2 hover:bg-error/10 rounded-lg transition-colors" title="Delete File">
                          <Trash2 className="w-4 h-4 text-error" />
                        </button>
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
              Showing {filteredFiles.length} of {files.length} files
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>
                <ChevronLeft className="w-4 h-4 text-slate-600" />
              </button>
              <span className="px-3 py-1 rounded-lg bg-vibrant-blue text-white text-sm font-medium">1</span>
              <button className="px-3 py-1 rounded-lg hover:bg-slate-50 text-sm text-slate-600 transition-colors">2</button>
              <button className="px-3 py-1 rounded-lg hover:bg-slate-50 text-sm text-slate-600 transition-colors">3</button>
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Bulk Actions */}
      {selectedFiles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <Card className="px-6 py-3 flex items-center gap-4 shadow-lg">
            <span className="text-sm text-slate-700">
              {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} selected
            </span>
            <div className="h-4 w-px bg-slate-200" />
            <button className="text-sm text-vibrant-blue hover:underline">Download All</button>
            <button className="text-sm text-error hover:underline">Delete All</button>
            <button
              onClick={() => setSelectedFiles([])}
              className="text-sm text-slate-600 hover:underline"
            >
              Clear
            </button>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
