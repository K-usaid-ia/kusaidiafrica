"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/AuthContext";
import { useEffect } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { useVisitorAnalytics } from '@/hooks/useVisitorAnalytics';

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
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
              <span className="text-2xl font-bold text-bice_blue" style={{ color: '#0A678E' }}>
                KUSAIDIA
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/about"
                className="text-gray-600 hover:text-bice_blue px-3 py-2 rounded-md text-sm font-medium"
                style={{ '--tw-text-opacity': 1, color: '#0A678E' } as React.CSSProperties}
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
              <span className="block text-bice_blue" style={{ color: '#0A678E' }}>
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-picton_blue opacity-50 cursor-not-allowed"
                style={{ backgroundColor: '#0AA3E1' }}
              >
                Connect Wallet (Coming Soon)
              </button>
            </div>
          </div>
        </div>

        {/* Pain Points Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-rich_black text-center" style={{ color: '#031D29' }}>
              What’s Wrong with Aid?
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-rich_black" style={{ color: '#031D29' }}>
                  Donors Doubt
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  80% of you worry your money isn’t making a difference.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-rich_black" style={{ color: '#031D29' }}>
                  Funds Vanish
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  30% of aid—billions—disappears to fraud or delays.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-rich_black" style={{ color: '#031D29' }}>
                  Help Crawls
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  It takes months for essentials to reach communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-cerulean-100" style={{ backgroundColor: '#d0e7f1' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-rich_black" style={{ color: '#031D29' }}>
              Help Us Fix Aid
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We’re researching until May 2025—share your challenges to shape Kusaidia. Surveys available on request!
            </p>
            <div className="mt-10 max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Be Part of the Fix */}
        <div className="bg-lapis_lazuli py-16" style={{ backgroundColor: '#095A7C' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">
              <span className="block">Be Part of the Fix</span>
              <span className="block">
                Join {loading ? '...' : error ? 'Others' : visitorCount} Others
              </span>
            </h2>
            <p className="mt-4 text-lg text-cerulean-200" style={{ color: '#a1cfe2' }}>
              Help us build a better way to deliver aid—fast, direct, and real.
            </p>
            <Link
              href="#help-us-fix-aid"
              className="mt-8 inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-bice_blue bg-white hover:bg-cerulean-50"
              style={{ color: '#0A678E', backgroundColor: '#ffffff', '--tw-bg-opacity-hover': 1, '--tw-bg-color-hover': '#f3f8fa' } as React.CSSProperties}
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