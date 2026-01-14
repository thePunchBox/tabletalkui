"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Table, MessageSquare, Settings, CreditCard, LogOut, ChevronLeft, Sparkles, Menu, X, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { currentUser } from "@/lib/mock-data";

const navItems = [
  { name: "Home", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Tables", href: "/tables", icon: Table },
  { name: "Upload CSV", href: "/tables/upload", icon: Upload },
  { name: "Chat History", href: "/chat/history", icon: MessageSquare },
];

const bottomNavItems = [
  { name: "Profile", href: "/settings/profile", icon: Settings },
  { name: "Billing", href: "/settings/billing", icon: CreditCard },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }: SidebarProps) {
  const pathname = usePathname();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-vibrant-blue shrink-0" />
          {!isCollapsed && <span className="text-lg font-bold text-slate-900">TableTalk<span className="text-vibrant-blue">AI</span></span>}
        </Link>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="hidden lg:flex p-1.5 rounded-lg hover:bg-slate-100">
          <ChevronLeft className={cn("w-5 h-5 text-slate-500 transition-transform", isCollapsed && "rotate-180")} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.name}>
                <Link href={item.href} onClick={() => setIsMobileOpen(false)}
                  className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
                    isActive ? "bg-vibrant-blue/10 text-vibrant-blue font-medium" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}>
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-3 py-4 border-t border-slate-200">
        <ul className="space-y-1 mb-4">
          {bottomNavItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.name}>
                <Link href={item.href} onClick={() => setIsMobileOpen(false)}
                  className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
                    isActive ? "bg-vibrant-blue/10 text-vibrant-blue font-medium" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}>
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={cn("flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100 cursor-pointer", isCollapsed && "justify-center")}>
          <Avatar alt={currentUser.name} fallback={currentUser.name.split(" ").map((n) => n[0]).join("")} size="sm" />
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">{currentUser.name}</p>
              <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside className={cn("hidden lg:flex flex-col fixed left-0 top-0 h-screen bg-white border-r border-slate-200 z-40 transition-all shadow-sm", isCollapsed ? "w-20" : "w-64")}>
        <SidebarContent />
      </aside>
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/20 z-40 lg:hidden" onClick={() => setIsMobileOpen(false)} />
            <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-slate-200 z-50 lg:hidden shadow-xl">
              <button onClick={() => setIsMobileOpen(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100"><X className="w-5 h-5 text-slate-500" /></button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        <button onClick={onMenuClick} className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-slate-100"><Menu className="w-5 h-5 text-slate-600" /></button>
        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-vibrant-blue/10 text-vibrant-blue text-sm font-medium">
            <Sparkles className="w-4 h-4" /> Pro Plan
          </div>
          <Avatar alt={currentUser.name} fallback={currentUser.name.split(" ").map((n) => n[0]).join("")} size="md" />
        </div>
      </div>
    </header>
  );
}
