"use client";

import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-vibrant-blue/20 blur-xl rounded-full animate-pulse" />
          <Sparkles className="relative w-12 h-12 text-vibrant-blue animate-bounce" />
        </div>
        <p className="mt-4 text-slate-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
