"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Sparkles,
  Table,
  Calendar,
  Hash,
  Type,
  DollarSign,
  Copy,
  Check,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
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
  suggestedQueries,
  type ChatMessage,
} from "@/lib/mock-data";

// Column type icons
const columnTypeIcons: Record<string, React.ElementType> = {
  Date: Calendar,
  Product: Type,
  Region: Type,
  Sales: DollarSign,
  Units: Hash,
  default: Type,
};

export default function ChatPage({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<ChatMessage[]>(sampleChatMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Find the table data
  const table = tablesData.find((t) => t.id === params.id) || tablesData[0];

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

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSuggestion = (query: string) => {
    setInputValue(query);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-4">
      {/* Metadata Sidebar */}
      <Card className="hidden lg:flex flex-col w-72 shrink-0">
        <div className="p-4 border-b border-app-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent-blue/15">
              <Table className="w-5 h-5 text-accent-blue-light" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-text-heading truncate">
                {table.name}
              </h2>
              <p className="text-xs text-text-secondary">{table.fileName}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <h3 className="text-xs font-medium text-text-secondary uppercase tracking-widest mb-3">
              Table Info
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-xl bg-glass-light border border-app-border">
                <p className="text-lg font-bold text-text-heading">
                  {table.rows.toLocaleString()}
                </p>
                <p className="text-xs text-text-secondary">Rows</p>
              </div>
              <div className="p-3 rounded-xl bg-glass-light border border-app-border">
                <p className="text-lg font-bold text-text-heading">
                  {table.columns}
                </p>
                <p className="text-xs text-text-secondary">Columns</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium text-text-secondary uppercase tracking-widest mb-3">
              Columns
            </h3>
            <div className="space-y-1">
              {table.columnNames.map((column) => {
                const IconComponent =
                  columnTypeIcons[column] || columnTypeIcons.default;
                return (
                  <button
                    key={column}
                    onClick={() => setInputValue(`What is the distribution of ${column}?`)}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-glass-light text-left transition-colors group border border-transparent hover:border-app-border"
                  >
                    <IconComponent className="w-4 h-4 text-text-disabled" />
                    <span className="text-sm text-text-primary flex-1 truncate">
                      {column}
                    </span>
                    <ChevronRight className="w-4 h-4 text-text-disabled opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Card>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col min-w-0">
        <Card className="flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] lg:max-w-[70%] px-4 py-3 ${
                    message.role === "user"
                      ? "chat-bubble-user"
                      : "chat-bubble-ai"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-accent-blue-light" />
                      <span className="text-xs font-medium text-accent-blue-light">
                        TableTalk AI
                      </span>
                    </div>
                  )}

                  <p className={`text-sm leading-relaxed ${
                    message.role === "user" ? "text-white" : "text-text-primary"
                  }`}>{message.content}</p>

                  {/* Chart - Dark Mode Styling */}
                  {message.chartData && (
                    <div className="mt-4 p-4 bg-glass-light rounded-xl border border-app-border">
                      <ResponsiveContainer width="100%" height={200}>
                        {message.chartType === "line" ? (
                          <LineChart data={message.chartData}>
                            <XAxis
                              dataKey="name"
                              tick={{ fontSize: 12, fill: "#64748B" }}
                              axisLine={{ stroke: "#1E293B" }}
                              tickLine={false}
                            />
                            <YAxis
                              tick={{ fontSize: 12, fill: "#64748B" }}
                              axisLine={{ stroke: "#1E293B" }}
                              tickLine={false}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#0A0F19",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "0.75rem",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                              }}
                              labelStyle={{ color: "#94A3B8" }}
                              itemStyle={{ color: "#22D3EE" }}
                            />
                            <Line
                              type="monotone"
                              dataKey="value"
                              stroke="#22D3EE"
                              strokeWidth={2}
                              dot={{ fill: "#22D3EE", strokeWidth: 0 }}
                            />
                          </LineChart>
                        ) : (
                          <BarChart data={message.chartData}>
                            <XAxis
                              dataKey="name"
                              tick={{ fontSize: 12, fill: "#64748B" }}
                              axisLine={{ stroke: "#1E293B" }}
                              tickLine={false}
                            />
                            <YAxis
                              tick={{ fontSize: 12, fill: "#64748B" }}
                              axisLine={{ stroke: "#1E293B" }}
                              tickLine={false}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#0A0F19",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "0.75rem",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                              }}
                              labelStyle={{ color: "#94A3B8" }}
                              itemStyle={{ color: "#3B82F6" }}
                            />
                            <defs>
                              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#2563EB" />
                              </linearGradient>
                            </defs>
                            <Bar
                              dataKey="value"
                              fill="url(#barGradient)"
                              radius={[4, 4, 0, 0]}
                            />
                          </BarChart>
                        )}
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* Actions */}
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-app-border">
                      <button
                        onClick={() => handleCopy(message.content, message.id)}
                        className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-heading transition-colors"
                      >
                        {copiedId === message.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-accent-green" />
                            <span className="text-accent-green">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-heading transition-colors">
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Regenerate</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-start"
                >
                  <div className="chat-bubble-ai px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent-blue-light animate-pulse" />
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-text-disabled rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-text-disabled rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-text-disabled rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Queries */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {suggestedQueries.map((query) => (
                <button
                  key={query}
                  onClick={() => handleSuggestion(query)}
                  className="px-3 py-1.5 text-xs font-medium text-text-secondary bg-glass-light hover:bg-glass-medium rounded-full transition-colors border border-app-border hover:border-accent-blue/50"
                >
                  {query}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-app-border">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask a question about your data..."
                  className="w-full h-12 px-5 pr-12 rounded-full bg-glass-light border border-app-border text-text-heading placeholder:text-text-disabled focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-all"
                />
              </div>
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                className="h-12 w-12 rounded-full shrink-0"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
