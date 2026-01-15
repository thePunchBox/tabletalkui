"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, FileCheck, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vibrant-blue/10 text-vibrant-blue text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Privacy Policy
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600">
            Last updated: January 15, 2026
          </p>
        </motion.div>

        {/* Quick Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          <Card className="p-4 text-center">
            <Lock className="w-6 h-6 text-vibrant-blue mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-900">Data Encrypted</p>
            <p className="text-xs text-slate-600">AES-256 encryption</p>
          </Card>
          <Card className="p-4 text-center">
            <Eye className="w-6 h-6 text-success mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-900">No Data Selling</p>
            <p className="text-xs text-slate-600">Your data is yours</p>
          </Card>
          <Card className="p-4 text-center">
            <Server className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-900">GDPR Compliant</p>
            <p className="text-xs text-slate-600">Full compliance</p>
          </Card>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-slate max-w-none"
        >
          <Card className="p-8 lg:p-12">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-600 mb-4">
                TableTalkAI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
              <p className="text-slate-600">
                Please read this privacy policy carefully. By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-lg font-medium text-slate-900 mt-6 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-slate-600 mb-4">
                We may collect personal information that you voluntarily provide when registering for an account, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Name and email address</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Company name and job title</li>
                <li>Profile preferences and settings</li>
              </ul>

              <h3 className="text-lg font-medium text-slate-900 mt-6 mb-3">
                2.2 Usage Data
              </h3>
              <p className="text-slate-600 mb-4">
                We automatically collect certain information when you use our service:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Device information</li>
                <li>Usage patterns and feature interactions</li>
                <li>Query history and analytics data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-slate-600 mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To process your transactions and subscriptions</li>
                <li>To send you important updates and notifications</li>
                <li>To improve our service and develop new features</li>
                <li>To provide customer support</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-slate-600 mb-4">
                We implement robust security measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>AES-256 encryption for data at rest</li>
                <li>TLS 1.3 encryption for data in transit</li>
                <li>Regular security audits and penetration testing</li>
                <li>SOC 2 Type II certification</li>
                <li>Multi-factor authentication options</li>
                <li>Regular automated backups</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                5. Data Retention
              </h2>
              <p className="text-slate-600 mb-4">
                We retain your data for as long as your account is active or as needed to provide services. You can request deletion of your data at any time. After account deletion:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Personal data is deleted within 30 days</li>
                <li>Uploaded files are permanently removed</li>
                <li>Anonymized analytics data may be retained</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-slate-600 mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                7. Third-Party Services
              </h2>
              <p className="text-slate-600 mb-4">
                We use trusted third-party services that may have access to your information:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Stripe - Payment processing</li>
                <li>AWS - Cloud infrastructure</li>
                <li>OpenAI - AI language models</li>
                <li>Vercel - Application hosting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                8. Cookies
              </h2>
              <p className="text-slate-600">
                We use essential cookies to provide our service and optional analytics cookies to improve user experience. You can manage cookie preferences in your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-slate-600">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                10. Contact Us
              </h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Email: privacy@tabletalk.ai</li>
                <li>Address: 123 Innovation Drive, Suite 456, San Francisco, CA 94102</li>
              </ul>
            </section>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
