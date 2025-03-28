"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { useVisitorAnalytics } from '@/hooks/useVisitorAnalytics';

export default function AboutPage() {
const { visitorCount, loading, error } = useVisitorAnalytics('about');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <span className="text-2xl font-bold text-indigo-600">
                  KUSAIDIA
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <div className="relative bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About Kusaidia
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We’re tackling aid’s biggest problems—trust, waste, and
              delays—starting with your help.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Our Mission
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 text-center">
              Kusaidia—Swahili for “to help”—wants your support to reach African
              communities directly. Too much aid gets lost or stuck. We’re
              finding a better way.
            </p>
          </div>
        </div>

        {/* Research Focus Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              What We’re Testing
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 text-center">
              Over the next two months (April-May 2025), we’re digging into
              these assumptions:
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-indigo-600">
                  Do Donors Need Proof?
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  80% distrust aid—does seeing every step fix that?
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-indigo-600">
                  Can Vendors Deliver Fast?
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Months are too slow—can locals do it in days?
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-indigo-600">
                  Does Direct Work?
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Cutting middlemen sounds good—but is it practical?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved Section (replaced with ContactForm) */}
        <div className="py-16 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Get Involved Now</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We’re researching until May 2025—share your challenges to shape Kusaidia. Surveys available on request!
            </p>
            <div className="mt-10 max-w-lg mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* CTA Section (form removed) */}
        <div className="bg-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">
              <span className="block">Be Part of the Fix</span>
              <span className="block">
                Join {loading ? '...' : error ? 'Others' : visitorCount} Others
              </span>
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Help us make aid work—direct, fast, and real—for Africa and beyond.
            </p>
            <Link
              href="#get-involved" // Links back to Get Involved section
              className="mt-8 inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Share Your Input
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-gray-400">
            © 2025 KUSAIDIA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
