"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Features", href: "/#features" },
  { name: "How it Works", href: "/#how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 pt-4 px-4"
      >
        <nav className="max-w-7xl mx-auto">
          <div className={cn(
            "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
            isScrolled 
              ? "bg-white/95 backdrop-blur-lg border border-slate-200 shadow-lg" 
              : "bg-white border border-slate-200 shadow-md"
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Sparkles className="w-5 h-5 text-vibrant-blue" />
              <span className="text-lg font-bold text-slate-900">
                TableTalk AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-slate-50 rounded-full px-2 py-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-slate-900 hover:bg-white transition-all font-medium px-4 py-2 rounded-full"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/auth/login"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium px-4 py-2 rounded-full hover:bg-slate-50"
              >
                Log In
              </Link>
              <Button asChild size="sm" className="bg-vibrant-blue hover:bg-blue-600 text-white font-medium px-5 rounded-full shadow-sm">
                <Link href="/auth/register">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="absolute inset-0 bg-white/98 backdrop-blur-xl" />
          <nav className="relative pt-24 px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-slate-700 hover:text-slate-900 transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-200 my-4" />
              <Link
                href="/auth/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-slate-700 hover:text-slate-900 transition-colors py-2"
              >
                Login
              </Link>
              <Button asChild className="mt-4">
                <Link href="/auth/register">Get Started Free</Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}
