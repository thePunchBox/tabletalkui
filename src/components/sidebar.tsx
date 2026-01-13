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
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Tables", href: "/tables", icon: Table },
  { name: "Upload", href: "/tables/upload", icon: Upload },
  { name: "Chat History", href: "/chat/history", icon: MessageSquare },
];

const bottomNavItems = [
  { name: "Settings", href: "/settings/profile", icon: Settings },
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
      <div className="flex items-center justify-between h-16 px-4 border-b border-app-border">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-accent-blue-light shrink-0" />
          {!isCollapsed && <span className="text-lg font-bold text-text-heading">TableTalk<span className="text-accent-blue-light">AI</span></span>}
        </Link>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="hidden lg:flex p-1.5 rounded-lg hover:bg-glass-light">
          <ChevronLeft className={cn("w-5 h-5 text-text-secondary transition-transform", isCollapsed && "rotate-180")} />
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
                    isActive ? "bg-accent-blue/15 text-accent-blue-light" : "text-text-secondary hover:bg-glass-light hover:text-text-heading"
                  )}>
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-3 py-4 border-t border-app-border">
        <ul className="space-y-1 mb-4">
          {bottomNavItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.name}>
                <Link href={item.href} onClick={() => setIsMobileOpen(false)}
                  className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
                    isActive ? "bg-accent-blue/15 text-accent-blue-light" : "text-text-secondary hover:bg-glass-light hover:text-text-heading"
                  )}>
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={cn("flex items-center gap-3 p-2 rounded-xl hover:bg-glass-light cursor-pointer", isCollapsed && "justify-center")}>
          <Avatar alt={currentUser.name} fallback={currentUser.name.split(" ").map((n) => n[0]).join("")} size="sm" />
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-heading truncate">{currentUser.name}</p>
              <p className="text-xs text-text-secondary truncate">{currentUser.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside className={cn("hidden lg:flex flex-col fixed left-0 top-0 h-screen bg-app-surface-solid/80 backdrop-blur-xl border-r border-app-border z-40 transition-all", isCollapsed ? "w-20" : "w-64")}>
        <SidebarContent />
      </aside>
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setIsMobileOpen(false)} />
            <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} className="fixed left-0 top-0 h-screen w-72 bg-app-surface-solid border-r border-app-border z-50 lg:hidden">
              <button onClick={() => setIsMobileOpen(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-glass-light"><X className="w-5 h-5" /></button>
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
    <header className="sticky top-0 z-30 h-16 bg-app-surface-solid/60 backdrop-blur-xl border-b border-app-border">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        <button onClick={onMenuClick} className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-glass-light"><Menu className="w-5 h-5 text-text-secondary" /></button>
        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/15 text-accent-blue-light text-sm font-medium">
            <Sparkles className="w-4 h-4" /> Pro Plan
          </div>
          <Avatar alt={currentUser.name} fallback={currentUser.name.split(" ").map((n) => n[0]).join("")} size="md" />
        </div>
      </div>
    </header>
  );
}
