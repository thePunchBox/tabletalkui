"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Grid3X3,
  List,
  Plus,
  MessageSquare,
  Eye,
  Trash2,
  FileSpreadsheet,
  Upload,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { tablesData, type Table as TableType } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

// Skeleton component for loading states
function TableSkeleton() {
  return (
    <Card className="p-4 animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-slate-200" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-slate-200" />
          <div className="h-3 w-1/2 rounded bg-slate-100" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="h-3 rounded bg-slate-100" />
        <div className="h-3 rounded bg-slate-100" />
        <div className="h-3 rounded bg-slate-100" />
      </div>
    </Card>
  );
}

// Empty state component
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">
        <FileSpreadsheet className="w-10 h-10 text-slate-400" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        No tables yet
      </h3>
      <p className="text-slate-600 text-center max-w-md mb-6">
        Upload your first CSV or Excel file to start chatting with your data
        using natural language.
      </p>
      <Button asChild>
        <Link href="/tables/upload">
          <Upload className="w-4 h-4 mr-2" />
          Upload Your First Table
        </Link>
      </Button>
    </motion.div>
  );
}

export default function TablesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = useState(false);

  // Filter tables based on search
  const filteredTables = tablesData.filter(
    (table) =>
      table.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      table.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Check if we should show empty state
  const showEmptyState = tablesData.length === 0;
  const showNoResults = filteredTables.length === 0 && !showEmptyState;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            My Tables
          </h1>
          <p className="text-slate-600 mt-1">
            Manage and chat with your uploaded data files.
          </p>
        </div>
        <Button asChild>
          <Link href="/tables/upload">
            <Plus className="w-4 h-4 mr-2" />
            Upload Table
          </Link>
        </Button>
      </div>

      {!showEmptyState && (
        <>
          {/* Search & Filters */}
          <Card className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search tables..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    viewMode === "grid"
                      ? "bg-vibrant-blue/15 text-vibrant-blue"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    viewMode === "list"
                      ? "bg-vibrant-blue/15 text-vibrant-blue"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>

          {/* Loading Skeletons */}
          {isLoading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <TableSkeleton key={i} />
              ))}
            </div>
          )}

          {/* No Results */}
          {showNoResults && (
            <Card className="p-12 text-center">
              <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                No tables found
              </h3>
              <p className="text-slate-600">
                Try adjusting your search query
              </p>
            </Card>
          )}

          {/* Tables Grid/List */}
          {!isLoading && !showNoResults && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className={cn(
                viewMode === "grid"
                  ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "space-y-3"
              )}
            >
              {filteredTables.map((table) => (
                <motion.div key={table.id} variants={fadeInUp}>
                  <Card glow className="p-4 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-vibrant-blue/15 shrink-0">
                        <FileSpreadsheet className="w-6 h-6 text-vibrant-blue" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 truncate">
                          {table.name}
                        </h3>
                        <p className="text-sm text-slate-600 truncate">
                          {table.fileName}
                        </p>
                      </div>
                      <Badge
                        variant={
                          table.status === "ready"
                            ? "ready"
                            : table.status === "processing"
                            ? "processing"
                            : "error"
                        }
                      >
                        {table.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-200">
                      <div>
                        <p className="text-xs text-slate-600">Rows</p>
                        <p className="text-sm font-medium text-slate-900">
                          {table.rows.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600">Columns</p>
                        <p className="text-sm font-medium text-slate-900">
                          {table.columns}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600">Size</p>
                        <p className="text-sm font-medium text-slate-900">
                          {table.size}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={`/tables/${table.id}/chat`}
                        className="p-2 rounded-lg hover:bg-vibrant-blue/15 text-slate-500 hover:text-vibrant-blue transition-colors"
                        title="Chat"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </Link>
                      <button
                        className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-red-500/15 text-slate-500 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </>
      )}

      {/* Empty State */}
      {showEmptyState && <EmptyState />}
    </div>
  );
}
