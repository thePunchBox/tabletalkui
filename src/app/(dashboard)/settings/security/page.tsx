"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  CreditCard,
  Shield,
  Key,
  Smartphone,
  AlertTriangle,
  Check,
  Eye,
  EyeOff,
  LogOut,
  Monitor,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "profile", label: "Profile", icon: User, href: "/settings/profile" },
  { id: "billing", label: "Billing", icon: CreditCard, href: "/settings/billing" },
  { id: "security", label: "Security", icon: Shield, href: "/settings/security" },
];

// Mock active sessions data
const activeSessions = [
  {
    id: 1,
    device: "MacBook Pro",
    browser: "Chrome 120",
    location: "San Francisco, CA",
    ip: "192.168.1.***",
    lastActive: "Current session",
    isCurrent: true,
  },
  {
    id: 2,
    device: "iPhone 15 Pro",
    browser: "Safari Mobile",
    location: "San Francisco, CA",
    ip: "192.168.1.***",
    lastActive: "2 hours ago",
    isCurrent: false,
  },
  {
    id: 3,
    device: "Windows PC",
    browser: "Firefox 121",
    location: "New York, NY",
    ip: "10.0.0.***",
    lastActive: "3 days ago",
    isCurrent: false,
  },
];

// Mock login history
const loginHistory = [
  { date: "Jan 15, 2026 - 10:23 AM", location: "San Francisco, CA", device: "MacBook Pro", status: "success" },
  { date: "Jan 14, 2026 - 3:45 PM", location: "San Francisco, CA", device: "iPhone 15 Pro", status: "success" },
  { date: "Jan 13, 2026 - 9:12 AM", location: "New York, NY", device: "Windows PC", status: "success" },
  { date: "Jan 12, 2026 - 11:30 PM", location: "Unknown", device: "Unknown", status: "failed" },
  { date: "Jan 10, 2026 - 2:15 PM", location: "San Francisco, CA", device: "MacBook Pro", status: "success" },
];

export default function SecurityPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showTwoFactorSetup, setShowTwoFactorSetup] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change
    alert("Password changed successfully!");
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleRevokeSession = (sessionId: number) => {
    // Handle session revocation
    alert(`Session ${sessionId} revoked`);
  };

  const handleRevokeAllSessions = () => {
    // Handle revoking all sessions
    alert("All other sessions have been revoked");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Settings
        </h1>
        <p className="text-slate-600 mt-1">
          Manage your account preferences and settings.
        </p>
      </div>

      {/* Tabs */}
      <Card className="p-1 flex gap-1">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors",
              tab.id === "security"
                ? "bg-vibrant-blue/15 text-vibrant-blue"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </Link>
        ))}
      </Card>

      {/* Change Password */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-vibrant-blue/10">
              <Key className="w-5 h-5 text-vibrant-blue" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Change Password</h2>
              <p className="text-sm text-slate-600">Update your account password</p>
            </div>
          </div>

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <Input
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                  }
                  placeholder="Enter current password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <Input
                  type={showNewPassword ? "text" : "password"}
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                  }
                  placeholder="Enter new password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Must be at least 8 characters with uppercase, lowercase, and numbers
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                  }
                  placeholder="Confirm new password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="mt-2">
              Update Password
            </Button>
          </form>
        </Card>
      </motion.div>

      {/* Two-Factor Authentication */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${twoFactorEnabled ? "bg-success/10" : "bg-slate-100"}`}>
                <Smartphone className={`w-5 h-5 ${twoFactorEnabled ? "text-success" : "text-slate-500"}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-slate-900">Two-Factor Authentication</h2>
                  {twoFactorEnabled && (
                    <Badge variant="ready" className="text-xs">Enabled</Badge>
                  )}
                </div>
                <p className="text-sm text-slate-600">
                  Add an extra layer of security to your account
                </p>
              </div>
            </div>
            <Button
              variant={twoFactorEnabled ? "ghost" : "secondary"}
              size="sm"
              onClick={() => {
                if (twoFactorEnabled) {
                  setTwoFactorEnabled(false);
                } else {
                  setShowTwoFactorSetup(!showTwoFactorSetup);
                }
              }}
            >
              {twoFactorEnabled ? "Disable" : showTwoFactorSetup ? "Cancel" : "Enable"}
            </Button>
          </div>

          {/* 2FA Setup Form */}
          {showTwoFactorSetup && !twoFactorEnabled && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 pt-6 border-t border-slate-200"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-slate-900 mb-3">
                    1. Scan QR Code with your authenticator app
                  </p>
                  <div className="w-40 h-40 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-slate-200 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-xs text-slate-500">QR Code</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Or enter manually: XXXX-XXXX-XXXX-XXXX
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 mb-3">
                    2. Enter verification code
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Enter 6-digit code" maxLength={6} />
                    <Button
                      onClick={() => {
                        setTwoFactorEnabled(true);
                        setShowTwoFactorSetup(false);
                      }}
                      className="w-full"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Verify & Enable
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">
                    Recommended apps: Google Authenticator, Authy, 1Password
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </Card>
      </motion.div>

      {/* Active Sessions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Monitor className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Active Sessions</h2>
                <p className="text-sm text-slate-600">Manage your logged-in devices</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-error hover:text-error hover:bg-error/10"
              onClick={handleRevokeAllSessions}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign out all
            </Button>
          </div>

          <div className="space-y-3">
            {activeSessions.map((session) => (
              <div
                key={session.id}
                className={`flex items-center justify-between p-4 rounded-xl border ${
                  session.isCurrent
                    ? "border-vibrant-blue/30 bg-vibrant-blue/5"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl ${session.isCurrent ? "bg-vibrant-blue/10" : "bg-white border border-slate-200"}`}>
                    <Monitor className={`w-5 h-5 ${session.isCurrent ? "text-vibrant-blue" : "text-slate-500"}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-slate-900 text-sm">{session.device}</p>
                      {session.isCurrent && (
                        <Badge variant="ready" className="text-xs py-0">Current</Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-600">
                      {session.browser} • {session.location}
                    </p>
                    <p className="text-xs text-slate-500">{session.lastActive}</p>
                  </div>
                </div>
                {!session.isCurrent && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 hover:text-error hover:bg-error/10"
                    onClick={() => handleRevokeSession(session.id)}
                  >
                    Revoke
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Login History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-warning/10">
              <Clock className="w-5 h-5 text-warning" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Login History</h2>
              <p className="text-sm text-slate-600">Recent account activity</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="text-left py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="text-left py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Device
                  </th>
                  <th className="text-right py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {loginHistory.map((login, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-3 text-sm text-slate-900">{login.date}</td>
                    <td className="py-3 text-sm text-slate-700">{login.location}</td>
                    <td className="py-3 text-sm text-slate-700">{login.device}</td>
                    <td className="py-3 text-right">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          login.status === "success"
                            ? "bg-success/15 text-success border border-success/30"
                            : "bg-error/15 text-error border border-error/30"
                        }`}
                      >
                        {login.status === "success" ? "Success" : "Failed"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 border-error/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-error/10">
              <AlertTriangle className="w-5 h-5 text-error" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Danger Zone</h2>
              <p className="text-sm text-slate-600">Irreversible account actions</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <p className="font-medium text-slate-900 text-sm">Delete Account</p>
                <p className="text-xs text-slate-600">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button variant="ghost" size="sm" className="text-error hover:bg-error/10">
                Delete Account
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
