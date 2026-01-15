"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Check,
  Shield,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/mock-data";

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string; billing?: string };
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const selectedPlanId = searchParams.plan || "pro";
  const billingCycle = searchParams.billing || "monthly";
  const selectedPlan = pricingPlans.find((p) => p.id === selectedPlanId) || pricingPlans[1];
  
  const price = billingCycle === "yearly" ? selectedPlan.priceYearly : selectedPlan.priceMonthly * 12;
  const monthlyPrice = billingCycle === "yearly" ? selectedPlan.priceYearly / 12 : selectedPlan.priceMonthly;
  const savings = billingCycle === "yearly" ? (selectedPlan.priceMonthly * 12) - selectedPlan.priceYearly : 0;

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    // Redirect to success page
    window.location.href = `/checkout/success?plan=${selectedPlan.name}`;
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/pricing" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to pricing</span>
            </Link>
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-vibrant-blue" />
              <span className="text-lg font-bold text-deep-navy">
                TableTalk<span className="text-vibrant-blue">AI</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl font-bold text-slate-900 mb-6">
              Complete your purchase
            </h1>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10"
                      required
                    />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  </div>
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10"
                      required
                    />
                  </div>
                </div>

                {/* Name on Card */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/10"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Pay ${billingCycle === "yearly" ? price : monthlyPrice}/
                      {billingCycle === "yearly" ? "year" : "month"}
                    </>
                  )}
                </Button>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                  <Shield className="w-4 h-4" />
                  <span>Your payment is secured with 256-bit SSL encryption</span>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Order Summary
            </h2>

            <Card className="p-6 sticky top-6">
              {/* Plan Details */}
              <div className="flex items-start gap-4 pb-6 border-b border-slate-200">
                <div className="p-3 rounded-xl bg-vibrant-blue/10">
                  <Sparkles className="w-6 h-6 text-vibrant-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">
                    {selectedPlan.name} Plan
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {selectedPlan.description}
                  </p>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-slate-900">
                      ${monthlyPrice}
                    </span>
                    <span className="text-slate-600">/month</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="py-6 border-b border-slate-200">
                <p className="text-sm font-medium text-slate-900 mb-3">
                  What&apos;s included:
                </p>
                <ul className="space-y-2">
                  {selectedPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Billing Cycle */}
              <div className="py-6 border-b border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600">Billing cycle</span>
                  <span className="font-medium text-slate-900 capitalize">
                    {billingCycle}
                  </span>
                </div>
                {billingCycle === "yearly" && savings > 0 && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-success">Annual savings</span>
                    <span className="font-medium text-success">-${savings}</span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="text-slate-700">${price}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-600">Tax</span>
                  <span className="text-slate-700">$0.00</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-lg font-semibold text-slate-900">Total</span>
                  <span className="text-lg font-bold text-slate-900">
                    ${price}/{billingCycle === "yearly" ? "year" : "month"}
                  </span>
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-6 p-4 rounded-xl bg-success/5 border border-success/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      30-day money-back guarantee
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Not satisfied? Get a full refund within 30 days, no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
