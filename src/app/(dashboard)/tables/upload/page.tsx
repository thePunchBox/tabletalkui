"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileSpreadsheet,
  CheckCircle,
  AlertCircle,
  X,
  ArrowRight,
  Table,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type UploadState = "idle" | "uploading" | "processing" | "success" | "error";

export default function UploadPage() {
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [progress, setProgress] = useState(0);
  const [isDragActive, setIsDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const simulateUpload = useCallback((file: File) => {
    setFileName(file.name);
    setUploadState("uploading");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadState("processing");
          setTimeout(() => {
            setUploadState("success");
          }, 1500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);

      const files = e.dataTransfer.files;
      if (files?.[0]) {
        simulateUpload(files[0]);
      }
    },
    [simulateUpload]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files?.[0]) {
        simulateUpload(files[0]);
      }
    },
    [simulateUpload]
  );

  const resetUpload = () => {
    setUploadState("idle");
    setProgress(0);
    setFileName(null);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-heading tracking-tight">
          Upload Table
        </h1>
        <p className="text-text-secondary mt-1">
          Import your CSV or Excel files to start chatting with your data.
        </p>
      </div>

      {/* Upload Zone */}
      <Card glow className="p-8">
        <AnimatePresence mode="wait">
          {uploadState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  isDragActive
                    ? "border-accent-blue bg-accent-blue/10 shadow-glow-blue"
                    : "border-app-border hover:border-accent-blue/50 hover:bg-glass-light"
                }`}
              >
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center gap-4">
                  <div className={`p-4 rounded-2xl transition-colors ${
                    isDragActive ? "bg-accent-blue/20" : "bg-glass-light"
                  }`}>
                    <Upload className={`w-10 h-10 ${
                      isDragActive ? "text-accent-blue-light" : "text-text-secondary"
                    }`} />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-text-heading">
                      {isDragActive
                        ? "Drop your file here"
                        : "Drag & drop your file here"}
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      or{" "}
                      <span className="text-accent-blue-light hover:underline cursor-pointer">
                        browse files
                      </span>
                    </p>
                  </div>
                  <p className="text-xs text-text-disabled">
                    Supports CSV, XLSX, XLS up to 50MB
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {(uploadState === "uploading" || uploadState === "processing") && (
            <motion.div
              key="uploading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-8"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <FileSpreadsheet className="w-8 h-8 text-accent-blue-light" />
                <span className="text-lg font-medium text-text-heading truncate max-w-xs">
                  {fileName}
                </span>
              </div>
              <div className="max-w-md mx-auto mb-4">
                <Progress value={progress} />
              </div>
              <p className="text-sm text-text-secondary">
                {uploadState === "uploading"
                  ? `Uploading... ${progress}%`
                  : "Processing your data..."}
              </p>
              {uploadState === "processing" && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Sparkles className="w-4 h-4 text-accent-blue-light animate-pulse" />
                  <span className="text-sm text-accent-blue-light">
                    Analyzing columns and data types
                  </span>
                </div>
              )}
            </motion.div>
          )}

          {uploadState === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-accent-green/15 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">
                Upload Complete!
              </h3>
              <p className="text-text-secondary mb-6">
                Your table &quot;{fileName}&quot; is ready for analysis.
              </p>

              {/* Preview Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
                <div className="p-4 rounded-xl bg-glass-light border border-app-border">
                  <p className="text-2xl font-bold text-text-heading">15,420</p>
                  <p className="text-xs text-text-secondary">Rows</p>
                </div>
                <div className="p-4 rounded-xl bg-glass-light border border-app-border">
                  <p className="text-2xl font-bold text-text-heading">12</p>
                  <p className="text-xs text-text-secondary">Columns</p>
                </div>
                <div className="p-4 rounded-xl bg-glass-light border border-app-border">
                  <p className="text-2xl font-bold text-text-heading">2.4MB</p>
                  <p className="text-xs text-text-secondary">Size</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Button asChild>
                  <Link href="/tables/tbl_1/chat">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start Chatting
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/tables">
                    <Table className="w-4 h-4 mr-2" />
                    View All Tables
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}

          {uploadState === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/15 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">
                Upload Failed
              </h3>
              <p className="text-text-secondary mb-6">
                There was an error processing your file. Please try again.
              </p>
              <Button onClick={resetUpload}>Try Again</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Tips */}
      <Card className="p-6">
        <h3 className="text-sm font-medium text-text-heading mb-4">
          Tips for best results
        </h3>
        <ul className="space-y-3">
          {[
            "Ensure your file has headers in the first row",
            "Remove any merged cells before uploading",
            "Use consistent date formats across columns",
            "Clean any empty rows or columns",
          ].map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-text-secondary">
              <CheckCircle className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
              {tip}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
