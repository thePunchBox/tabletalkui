"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, AlertTriangle, CreditCard, Shield, Scale, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TermsPage() {
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
            <FileText className="w-4 h-4" />
            Legal
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600">
            Last updated: January 15, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-8 lg:p-12">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 mb-4">
                By accessing or using TableTalkAI (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, you may not access the Service.
              </p>
              <p className="text-slate-600">
                These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-slate-600 mb-4">
                TableTalkAI provides an AI-powered data analysis platform that allows users to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Upload CSV and Excel files for analysis</li>
                <li>Query data using natural language</li>
                <li>Generate visualizations and insights</li>
                <li>Export and share analysis results</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                3. User Accounts
              </h2>
              <p className="text-slate-600 mb-4">
                When you create an account, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms.
              </p>
              <p className="text-slate-600 mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Safeguarding your password</li>
                <li>All activities under your account</li>
                <li>Notifying us of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                4. Subscriptions and Payments
              </h2>
              <div className="flex items-start gap-3 mb-4 p-4 rounded-xl bg-vibrant-blue/5 border border-vibrant-blue/20">
                <CreditCard className="w-5 h-5 text-vibrant-blue shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Billing Information</p>
                  <p className="text-sm text-slate-600">All paid subscriptions are billed in advance on a monthly or annual basis.</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                <strong>Free Trial:</strong> New users may be eligible for a free trial period. At the end of the trial, you will be charged the applicable subscription fee unless you cancel.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Refunds:</strong> Subscription fees are non-refundable except as required by law. You may cancel your subscription at any time, and access will continue until the end of the current billing period.
              </p>
              <p className="text-slate-600">
                <strong>Price Changes:</strong> We reserve the right to modify subscription fees. You will be notified at least 30 days before any price changes take effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                5. Acceptable Use
              </h2>
              <p className="text-slate-600 mb-4">
                You agree NOT to use the Service to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Upload illegal, harmful, or offensive content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Attempt to gain unauthorized access to systems</li>
                <li>Distribute malware or engage in hacking</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Use the Service for competitive analysis</li>
                <li>Resell or redistribute the Service without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-slate-600 mb-4">
                The Service and its original content, features, and functionality are owned by TableTalkAI and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-slate-600">
                You retain all rights to data you upload. By uploading content, you grant us a limited license to process and analyze your data solely for providing the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                7. Data and Privacy
              </h2>
              <p className="text-slate-600 mb-4">
                Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to the collection and use of information as described in the Privacy Policy.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-success/5 border border-success/20">
                <Shield className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Your Data, Your Control</p>
                  <p className="text-sm text-slate-600">You can export or delete your data at any time through your account settings.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                8. Service Availability
              </h2>
              <p className="text-slate-600 mb-4">
                We strive to provide 99.9% uptime but do not guarantee uninterrupted access. We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Perform scheduled maintenance</li>
                <li>Modify or discontinue features</li>
                <li>Suspend accounts that violate these Terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                9. Limitation of Liability
              </h2>
              <div className="flex items-start gap-3 mb-4 p-4 rounded-xl bg-warning/5 border border-warning/20">
                <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Important Notice</p>
                  <p className="text-sm text-slate-600">Please read this section carefully as it limits our liability to you.</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TABLETALKAJ SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
              </p>
              <p className="text-slate-600">
                Our total liability shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                10. Indemnification
              </h2>
              <p className="text-slate-600">
                You agree to defend, indemnify, and hold harmless TableTalkAI and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                11. Governing Law
              </h2>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Scale className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-600">
                    These Terms shall be governed by the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of San Francisco County, California.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-slate-600">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes via email or through the Service. Continued use after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                13. Contact Us
              </h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Email: legal@tabletalk.ai</li>
                <li>Address: 123 Innovation Drive, Suite 456, San Francisco, CA 94102</li>
              </ul>
            </section>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
