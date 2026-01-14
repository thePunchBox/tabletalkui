"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  CreditCard,
  Shield,
  Camera,
  Save,
  AlertTriangle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { currentUser } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "profile", label: "Profile", icon: User, href: "/settings/profile" },
  { id: "billing", label: "Billing", icon: CreditCard, href: "/settings/billing" },
  { id: "security", label: "Security", icon: Shield, href: "#" },
];

export default function ProfilePage() {
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    company: "Acme Corp",
    phone: "+1 (555) 123-4567",
  });

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
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
              tab.id === "profile"
                ? "bg-vibrant-blue/15 text-vibrant-blue"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </Link>
        ))}
      </Card>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">
            Profile Information
          </h2>

          {/* Avatar */}
          <div className="flex items-center gap-6 mb-8">
            <div className="relative group">
              <Avatar
                alt={currentUser.name}
                fallback={currentUser.name.split(" ").map((n) => n[0]).join("")}
                size="xl"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </button>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">{currentUser.name}</h3>
              <p className="text-sm text-slate-600">{currentUser.email}</p>
              <button className="text-sm text-vibrant-blue hover:underline mt-1">
                Change photo
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Company
              </label>
              <Input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex justify-end mt-6 pt-6 border-t border-slate-200">
            <Button onClick={handleSave} disabled={isSaving}>
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Danger Zone */}
      <Card className="p-6 border-red-500/30">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-xl bg-red-500/15">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-900">Danger Zone</h3>
            <p className="text-sm text-slate-600 mt-1">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </div>
          <Button variant="destructive" size="sm">
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  );
}
