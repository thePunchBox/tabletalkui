"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MessageSquare,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { chatHistory } from "@/lib/mock-data";

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

// Skeleton for loading
function ChatSkeleton() {
  return (
    <div className="p-4 animate-pulse border-b border-app-border last:border-0">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-glass-medium" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-glass-medium" />
          <div className="h-3 w-1/2 rounded bg-glass-light" />
        </div>
      </div>
    </div>
  );
}

// Empty state
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="w-20 h-20 rounded-full bg-glass-light flex items-center justify-center mb-6">
        <MessageSquare className="w-10 h-10 text-text-disabled" />
      </div>
      <h3 className="text-xl font-semibold text-text-heading mb-2">
        No conversations yet
      </h3>
      <p className="text-text-secondary text-center max-w-md mb-6">
        Start chatting with your tables to see your conversation history here.
      </p>
      <Link
        href="/tables"
        className="text-accent-blue-light hover:underline flex items-center gap-1"
      >
        Browse your tables
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

// Group chats by date
function groupChatsByDate(chats: typeof chatHistory) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);

  const groups: Record<string, typeof chatHistory> = {
    Today: [],
    Yesterday: [],
    "Last 7 Days": [],
    Older: [],
  };

  chats.forEach((chat) => {
    const chatDate = new Date(chat.lastMessage);
    if (chatDate.toDateString() === today.toDateString()) {
      groups["Today"].push(chat);
    } else if (chatDate.toDateString() === yesterday.toDateString()) {
      groups["Yesterday"].push(chat);
    } else if (chatDate > lastWeek) {
      groups["Last 7 Days"].push(chat);
    } else {
      groups["Older"].push(chat);
    }
  });

  return groups;
}

export default function ChatHistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Filter chats
  const filteredChats = chatHistory.filter(
    (chat) =>
      chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.tableName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedChats = groupChatsByDate(filteredChats);
  const showEmptyState = chatHistory.length === 0;
  const showNoResults = filteredChats.length === 0 && !showEmptyState;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-heading tracking-tight">
          Chat History
        </h1>
        <p className="text-text-secondary mt-1">
          Browse and continue your previous conversations.
        </p>
      </div>

      {!showEmptyState && (
        <>
          {/* Search */}
          <Card className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-disabled" />
              <Input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          {/* Loading Skeletons */}
          {isLoading && (
            <Card>
              {[1, 2, 3, 4, 5].map((i) => (
                <ChatSkeleton key={i} />
              ))}
            </Card>
          )}

          {/* No Results */}
          {showNoResults && (
            <Card className="p-12 text-center">
              <Search className="w-12 h-12 text-text-disabled mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-heading mb-2">
                No conversations found
              </h3>
              <p className="text-text-secondary">
                Try adjusting your search query
              </p>
            </Card>
          )}

          {/* Grouped Chats */}
          {!isLoading && !showNoResults && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              {Object.entries(groupedChats).map(
                ([group, chats]) =>
                  chats.length > 0 && (
                    <motion.div key={group} variants={fadeInUp}>
                      <h2 className="text-sm font-medium text-text-secondary uppercase tracking-widest mb-3">
                        {group}
                      </h2>
                      <Card>
                        {chats.map((chat, index) => (
                          <Link
                            key={chat.id}
                            href={`/tables/${chat.tableId}/chat`}
                            className={`block p-4 hover:bg-glass-light transition-colors group ${
                              index < chats.length - 1
                                ? "border-b border-app-border"
                                : ""
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <div className="p-2 rounded-xl bg-accent-blue/15 shrink-0">
                                <Sparkles className="w-5 h-5 text-accent-blue-light" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-4">
                                  <h3 className="font-medium text-text-heading truncate group-hover:text-accent-blue-light transition-colors">
                                    {chat.title}
                                  </h3>
                                  <span className="text-xs text-text-secondary shrink-0">
                                    {new Date(chat.lastMessage).toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </span>
                                </div>
                                <p className="text-sm text-text-secondary mt-0.5">
                                  {chat.tableName}
                                </p>
                                <p className="text-sm text-text-disabled mt-1 truncate">
                                  {chat.messageCount} messages
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-text-disabled opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            </div>
                          </Link>
                        ))}
                      </Card>
                    </motion.div>
                  )
              )}
            </motion.div>
          )}
        </>
      )}

      {/* Empty State */}
      {showEmptyState && <EmptyState />}
    </div>
  );
}
