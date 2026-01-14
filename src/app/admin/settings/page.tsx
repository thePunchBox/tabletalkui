"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Bell,
  Shield,
  Mail,
  Globe,
  Database,
  Key,
  Save,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">
          Configure your admin panel preferences
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Settings Sections */}
        <div className="lg:col-span-2 space-y-6">
          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-vibrant-blue/10">
                  <Bell className="w-5 h-5 text-vibrant-blue" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>
                  <p className="text-sm text-slate-600">Manage how you receive alerts</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email Notifications</p>
                    <p className="text-xs text-slate-500">Receive updates via email</p>
                  </div>
                  <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      emailNotifications ? "bg-vibrant-blue" : "bg-slate-50"
                    } border border-slate-200`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        emailNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Push Notifications</p>
                    <p className="text-xs text-slate-500">Receive browser push alerts</p>
                  </div>
                  <button
                    onClick={() => setPushNotifications(!pushNotifications)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      pushNotifications ? "bg-vibrant-blue" : "bg-slate-50"
                    } border border-slate-200`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        pushNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-slate-900">New User Alerts</p>
                    <p className="text-xs text-slate-500">Get notified when users sign up</p>
                  </div>
                  <select className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-vibrant-blue">
                    <option>Instant</option>
                    <option>Daily digest</option>
                    <option>Weekly digest</option>
                    <option>Never</option>
                  </select>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-success/10">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Security</h2>
                  <p className="text-sm text-slate-600">Protect your admin account</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Two-Factor Authentication</p>
                    <p className="text-xs text-slate-500">Add an extra layer of security</p>
                  </div>
                  <button
                    onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      twoFactorAuth ? "bg-success" : "bg-slate-50"
                    } border border-slate-200`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        twoFactorAuth ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Session Timeout</p>
                    <p className="text-xs text-slate-500">Auto logout after inactivity</p>
                  </div>
                  <select className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-vibrant-blue">
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                  </select>
                </div>

                <div className="py-3">
                  <Button variant="outline" size="sm">
                    <Key className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Database className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">System</h2>
                  <p className="text-sm text-slate-600">Platform-wide settings</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Maintenance Mode</p>
                    <p className="text-xs text-slate-500">Temporarily disable user access</p>
                  </div>
                  <button
                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      maintenanceMode ? "bg-error" : "bg-slate-50"
                    } border border-slate-200`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        maintenanceMode ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Default Language</p>
                    <p className="text-xs text-slate-500">Default platform language</p>
                  </div>
                  <select className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-vibrant-blue">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Data Retention</p>
                    <p className="text-xs text-slate-500">Auto-delete old data after</p>
                  </div>
                  <select className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-vibrant-blue">
                    <option>30 days</option>
                    <option>90 days</option>
                    <option>1 year</option>
                    <option>Never</option>
                  </select>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Email All Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Backup Database
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Globe className="w-4 h-4 mr-2" />
                  Clear Cache
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* System Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">System Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Version</span>
                  <span className="text-slate-700 font-medium">2.4.1</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Environment</span>
                  <span className="text-success font-medium">Production</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Last Deploy</span>
                  <span className="text-slate-700 font-medium">Apr 15, 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Uptime</span>
                  <span className="text-slate-700 font-medium">99.97%</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
