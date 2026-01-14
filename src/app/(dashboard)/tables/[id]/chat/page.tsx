"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Send,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  ArrowLeft,
  Menu,
  X,
  FileSpreadsheet,
  MessageSquare,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  tablesData,
  sampleChatMessages,
  chatHistory,
  type ChatMessage,
} from "@/lib/mock-data";
import { use } from "react";

export default function ChatPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [messages, setMessages] = useState<ChatMessage[]>(sampleChatMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Find the table data
  const table = tablesData.find((t) => t.id === resolvedParams.id) || tablesData[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      role: "user",
      content: inputValue,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: `msg_${Date.now() + 1}`,
        role: "assistant",
        content:
          "Based on your query, I've analyzed the data and found some interesting insights. Here's a visualization of the results:",
        timestamp: new Date().toISOString(),
        chartData: [
          { name: "Jan", value: 4000 },
          { name: "Feb", value: 3000 },
          { name: "Mar", value: 5000 },
          { name: "Apr", value: 4500 },
          { name: "May", value: 6000 },
          { name: "Jun", value: 5500 },
        ],
        chartType: "bar",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const regenerateResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      const newResponse: ChatMessage = {
        id: `msg_${Date.now()}`,
        role: "assistant",
        content: "Here's an alternative analysis based on your data:",
        timestamp: new Date().toISOString(),
        chartData: [
          { name: "Q1", value: 12000 },
          { name: "Q2", value: 15000 },
          { name: "Q3", value: 18000 },
          { name: "Q4", value: 22000 },
        ],
        chartType: "line",
      };
      setMessages((prev) => [...prev.slice(0, -1), newResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] -m-4 lg:-m-6">
      {/* Chat History Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="h-full bg-white border-r border-slate-200 flex-shrink-0 overflow-hidden"
          >
            <div className="flex flex-col h-full w-[280px]">
              {/* Sidebar Header */}
              <div className="p-4 border-b border-slate-200">
                <Button className="w-full justify-start" variant="secondary">
                  <Plus className="w-4 h-4 mr-2" />
                  New Chat
                </Button>
              </div>

              {/* Chat History List */}
              <div className="flex-1 overflow-y-auto p-3">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider px-2 mb-2">
                  Recent Chats
                </p>
                <div className="space-y-1">
                  {chatHistory?.slice(0, 10).map((chat, index) => (
                    <Link
                      key={chat.id}
                      href={`/tables/${chat.tableId}/chat`}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                        index === 0
                          ? "bg-vibrant-blue/10 text-vibrant-blue"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{chat.title}</span>
                    </Link>
                  )) || (
                    <>
                      {["Q4 Sales Analysis", "Customer Insights", "Inventory Query", "Marketing ROI", "Revenue Trends"].map((title, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm cursor-pointer transition-all ${
                            i === 0
                              ? "bg-vibrant-blue/10 text-vibrant-blue"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          <MessageSquare className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{title}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>

              {/* Current Table Info */}
              <div className="p-3 border-t border-slate-200">
                <div className="p-3 rounded-xl bg-slate-50">
                  <div className="flex items-center gap-2 mb-2">
                    <FileSpreadsheet className="w-4 h-4 text-vibrant-blue" />
                    <span className="text-sm font-medium text-slate-900 truncate">
                      {table.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {table.rows.toLocaleString()} rows • {table.columns} columns
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat Header */}
        <div className="h-14 px-4 flex items-center gap-3 border-b border-slate-200 bg-white">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link
            href="/tables"
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-vibrant-blue" />
            <span className="font-medium text-slate-900">{table.name}</span>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto py-6 px-4">
            {messages.length === 0 ? (
              // Empty State with Suggestions
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-vibrant-blue/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-vibrant-blue" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Start a conversation
                </h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Ask questions about your data in natural language. I&apos;ll analyze
                  your table and provide insights with visualizations.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                  {["What are the total sales by region?", "Show me the sales trend over time", "Which product has the highest revenue?", "Compare Q3 vs Q4 performance"].map((query, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(query)}
                      className="p-3 text-left rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all text-sm text-slate-700"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Messages
              <div className="space-y-6">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] ${
                        message.role === "user"
                          ? "chat-bubble-user"
                          : "chat-bubble-ai"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>

                      {/* Chart */}
                      {message.chartData && (
                        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                          <ResponsiveContainer width="100%" height={200}>
                            {message.chartType === "line" ? (
                              <LineChart data={message.chartData}>
                                <XAxis
                                  dataKey="name"
                                  axisLine={false}
                                  tickLine={false}
                                  tick={{ fill: "#64748B", fontSize: 12 }}
                                />
                                <YAxis
                                  axisLine={false}
                                  tickLine={false}
                                  tick={{ fill: "#64748B", fontSize: 12 }}
                                />
                                <Tooltip
                                  contentStyle={{
                                    background: "#FFFFFF",
                                    border: "1px solid #E2E8F0",
                                    borderRadius: "12px",
                                  }}
                                />
                                <Line
                                  type="monotone"
                                  dataKey="value"
                                  stroke="#2D5BFF"
                                  strokeWidth={2}
                                  dot={{ fill: "#2D5BFF", r: 4 }}
                                />
                              </LineChart>
                            ) : (
                              <BarChart data={message.chartData}>
                                <XAxis
                                  dataKey="name"
                                  axisLine={false}
                                  tickLine={false}
                                  tick={{ fill: "#64748B", fontSize: 12 }}
                                />
                                <YAxis
                                  axisLine={false}
                                  tickLine={false}
                                  tick={{ fill: "#64748B", fontSize: 12 }}
                                />
                                <Tooltip
                                  contentStyle={{
                                    background: "#FFFFFF",
                                    border: "1px solid #E2E8F0",
                                    borderRadius: "12px",
                                  }}
                                />
                                <Bar
                                  dataKey="value"
                                  fill="#2D5BFF"
                                  radius={[6, 6, 0, 0]}
                                />
                              </BarChart>
                            )}
                          </ResponsiveContainer>
                        </div>
                      )}

                      {/* Actions for AI messages */}
                      {message.role === "assistant" && (
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-200">
                          <button
                            onClick={() => copyToClipboard(message.content, message.id)}
                            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
                          >
                            {copiedId === message.id ? (
                              <Check className="w-4 h-4 text-success" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={regenerateResponse}
                            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="chat-bubble-ai">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-vibrant-blue animate-pulse" />
                        <span className="text-slate-600">Analyzing your data...</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-slate-200 bg-white p-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question about your data..."
                rows={1}
                className="w-full px-4 py-3 pr-12 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 resize-none focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10"
                style={{ minHeight: "48px", maxHeight: "200px" }}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-2 bottom-2 p-2 rounded-lg bg-vibrant-blue text-white hover:bg-vibrant-blue-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 text-center mt-2">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
