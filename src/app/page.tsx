"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/AuthContext";
import { useEffect, useState } from "react";
import { trackVisitor, getVisitorCount } from "@/lib/firebase";
import VisitorCounter from "@/components/VisitorCounter";
import ContactForm from "@/components/contact/ContactForm";
import { useVisitorAnalytics } from '@/hooks/useVisitorAnalytics';


export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [loaded, setLoaded] = useState(false);
  const { visitorCount, loading, error } = useVisitorAnalytics('home');

  useEffect(() => {
    if (isAuthenticated) router.push("/projects");
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">
                KUSAIDIA
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/about"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
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
              <span className="block">Aid Is Broken</span>
              <span className="block text-indigo-600">
                Let’s Fix It Together
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              80% of donors don’t trust where their money goes. 30% gets lost to
              waste. Kusaidia is rethinking how help reaches Africa—starting
              with you.
            </p>
            <div className="mt-10">
              <button
                disabled
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 opacity-50 cursor-not-allowed"
              >
                Connect Wallet (Coming Soon)
              </button>
            </div>
          </div>
        </div>

        {/* Pain Points Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              What’s Wrong with Aid?
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900">
                  Donors Doubt
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  80% of you worry your money isn’t making a difference.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900">
                  Funds Vanish
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  30% of aid—billions—disappears to fraud or delays.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900">
                  Help Crawls
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  It takes months for essentials to reach communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section (replaces Help Us Fix Aid) */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Help Us Fix Aid</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We’re researching until May 2025—share your challenges to shape Kusaidia. Surveys available on request!
            </p>
            <div className="mt-10 max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Be Part of the Fix (form removed) */}
        <div className="bg-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">
              <span className="block">Be Part of the Fix</span>
              <span className="block">
                Join {loading ? '...' : error ? 'Others' : visitorCount} Others
              </span>
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Help us build a better way to deliver aid—fast, direct, and real.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Get Involved
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
