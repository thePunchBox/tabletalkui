"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  HelpCircle,
  Book,
  Headphones,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    value: "support@tabletalk.ai",
    href: "mailto:support@tabletalk.ai",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available Mon-Fri, 9am-6pm PST",
    value: "Start a conversation",
    href: "#",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Enterprise customers only",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
];

const faqs = [
  {
    question: "How do I upload a CSV file?",
    answer:
      "Navigate to the Tables page and click 'Upload Table'. You can drag and drop your CSV or Excel file, or click to browse your files.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support CSV (.csv) and Excel (.xlsx, .xls) files up to 50MB for Pro plans and unlimited for Enterprise.",
  },
  {
    question: "How are credits calculated?",
    answer:
      "Credits are based on token usage. Each query consumes tokens based on the complexity of your question and the amount of data processed.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time from the Billing settings page. Your access will continue until the end of your billing period.",
  },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question or need help? We&apos;re here to assist you. Choose
            your preferred method of contact below.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <a href={method.href}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="p-3 rounded-xl bg-vibrant-blue/10 w-fit mb-4 group-hover:bg-vibrant-blue/20 transition-colors">
                    <method.icon className="w-6 h-6 text-vibrant-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-vibrant-blue">
                    {method.value}
                  </p>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Send us a message
              </h2>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 text-center">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        required
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
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <HelpCircle className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-5">
                  <h3 className="font-medium text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600">{faq.answer}</p>
                </Card>
              ))}
            </div>

            {/* Help Resources */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">
                Need more help?
              </h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-vibrant-blue transition-colors"
                >
                  <Book className="w-4 h-4" />
                  Browse our Documentation
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-vibrant-blue transition-colors"
                >
                  <Headphones className="w-4 h-4" />
                  Join our Community Discord
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-vibrant-blue transition-colors"
                >
                  <Clock className="w-4 h-4" />
                  Check System Status
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <Card className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="p-4 rounded-xl bg-vibrant-blue/10">
                <MapPin className="w-8 h-8 text-vibrant-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Our Office
                </h3>
                <p className="text-slate-600 mb-4">
                  123 Innovation Drive, Suite 456
                  <br />
                  San Francisco, CA 94102
                  <br />
                  United States
                </p>
                <p className="text-sm text-slate-500">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Monday - Friday, 9:00 AM - 6:00 PM PST
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
