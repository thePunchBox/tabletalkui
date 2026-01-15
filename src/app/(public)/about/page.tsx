"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Target,
  Heart,
  Zap,
  Shield,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible with AI and data analysis, constantly improving our technology.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "Every feature we build starts with understanding our users' needs and making their work easier.",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description:
      "Your data is sacred. We employ enterprise-grade security to protect every piece of information.",
  },
  {
    icon: Heart,
    title: "Customer Success",
    description:
      "We're not successful unless our customers are. Your growth is our priority.",
  },
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "10M+", label: "Queries Processed" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Countries" },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "/team/sarah.jpg",
    bio: "Former ML engineer at Google, passionate about democratizing data analysis.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    image: "/team/michael.jpg",
    bio: "Ex-Amazon, built scalable systems serving millions of users.",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    image: "/team/emily.jpg",
    bio: "Product veteran from Stripe, focused on creating delightful user experiences.",
  },
  {
    name: "David Kim",
    role: "Head of AI",
    image: "/team/david.jpg",
    bio: "PhD from Stanford, leading research in natural language understanding.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vibrant-blue/10 text-vibrant-blue text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Our Story
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6"
          >
            Making Data Analysis
            <br />
            <span className="gradient-text">Accessible to Everyone</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            We believe that powerful data insights shouldn&apos;t require a PhD
            in statistics or years of SQL experience. That&apos;s why we built
            TableTalkAI – to let anyone ask questions about their data in plain
            English and get instant, accurate answers.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <p className="text-3xl lg:text-4xl font-bold text-vibrant-blue mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <Card glow className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Democratizing Data Intelligence
                </h2>
                <p className="text-slate-600 mb-6">
                  Every day, businesses make critical decisions based on data.
                  But too often, the people who need insights the most are the
                  ones who can&apos;t access them – because they don&apos;t know
                  SQL, don&apos;t have time to learn complex analytics tools, or
                  simply don&apos;t have the technical background.
                </p>
                <p className="text-slate-600">
                  We&apos;re on a mission to change that. By combining
                  cutting-edge AI with intuitive design, we&apos;re making it
                  possible for anyone to have a conversation with their data and
                  get the answers they need – instantly.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-vibrant-blue/20 to-purple-500/20 flex items-center justify-center">
                  <Globe className="w-32 h-32 text-vibrant-blue/50" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-vibrant-blue/10 shrink-0">
                      <value.icon className="w-6 h-6 text-vibrant-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The passionate people behind TableTalkAI
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={member.name} className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-vibrant-blue/20 to-purple-500/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-vibrant-blue">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-vibrant-blue mb-3">{member.role}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <Card className="p-8 bg-gradient-to-r from-vibrant-blue/5 to-purple-500/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Award className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Awards & Recognition
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="font-semibold text-slate-900">
                  TechCrunch Disrupt
                </p>
                <p className="text-sm text-slate-600">
                  Startup Battlefield Finalist 2025
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="font-semibold text-slate-900">
                  ProductHunt
                </p>
                <p className="text-sm text-slate-600">
                  #1 Product of the Day
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="font-semibold text-slate-900">
                  Forbes 30 Under 30
                </p>
                <p className="text-sm text-slate-600">
                  Enterprise Technology 2025
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Card glow className="p-12">
            <Zap className="w-12 h-12 text-vibrant-blue mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Data Analysis?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8">
              Join thousands of teams who are already using TableTalkAI to unlock
              insights from their data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/auth/register">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
