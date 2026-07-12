"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information Collection",
      content:
        "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and business details.",
    },
    {
      title: "2. How We Use Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you about products and services, and to protect WebFlok and our users.",
    },
    {
      title: "3. Data Security",
      content:
        "We implement reasonable security measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.",
    },
    {
      title: "4. Third-Party Services",
      content:
        "We may use third-party services like Google Analytics to help us understand how our users use the site. These third parties have their own privacy policies.",
    },
    {
      title: "5. Cookies",
      content:
        "We use cookies and similar technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
    },
  ];

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden selection:bg-secondary/30">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-6 pt-32 md:pt-40 pb-20">
        <div className="space-y-4 mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-on-surface-variant font-bold uppercase tracking-widest text-xs opacity-60">
            Last Updated: May 2026
          </p>
        </div>

        <div className="prose prose-teal max-w-none space-y-12">
          <p className="text-lg text-on-surface-variant leading-relaxed">
            At WebFlok, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website or use our services.
          </p>

          {sections.map((section, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight">
                {section.title}
              </h2>
              <p className="text-on-surface-variant leading-relaxed opacity-90">
                {section.content}
              </p>
            </div>
          ))}

          <div className="pt-8 border-t border-outline-variant">
            <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">
              Contact Us
            </h2>
            <p className="text-on-surface-variant leading-relaxed opacity-90">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <span className="font-bold text-primary">
                legal@webflok.agency
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
