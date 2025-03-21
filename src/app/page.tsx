// src/app/page.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/AuthContext";
import { useEffect, useState } from "react";
import { trackVisitor, getVisitorCount } from "@/lib/firebase";
import VisitorCounter from "@/components/VisitorCounter";

export default function HomePage() {
  const router = useRouter();
  const { connectWallet, isAuthenticated } = useAuth();
  const [loaded, setLoaded] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  // Track visitors and update count on page load
  useEffect(() => {
    const handlePageLoad = async () => {
      if (!loaded) {
        try {
          // First get the visitor count without incrementing
          const currentCount = await getVisitorCount();
          setVisitorCount(currentCount);

          // Then track the new visit and update the count
          const newCount = await trackVisitor("home");
          setVisitorCount(newCount);
          setLoaded(true);
        } catch (error) {
          console.error("Error tracking visitors:", error);
          setLoaded(true);
        }
      }
    };

    handlePageLoad();

    // Redirect if authenticated
    if (isAuthenticated) {
      router.push("/projects");
    }
  }, [loaded, isAuthenticated, router]);

  const handleGetStarted = () => {
    connectWallet();
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Diagonal Ribbon */}
      <div className="absolute w-32 h-8 bg-yellow-500 transform rotate-45 origin-bottom-left translate-x-8 -translate-y-2 shadow-md">
        <p className="text-black text-sm font-medium text-center pt-1">
          Proof of Concept
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-600">
                  KUSAIDIA
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/about"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Connect Your Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover opacity-80"
                  src="/images/african-community.jpg"
                  alt="African community smiling"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-600 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Make a Difference You Can See
                  </span>
                  <span className="block text-indigo-200">
                    Backed by Blockchain
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
                  With KUSAIDIA, your support flows straight to vendors in
                  Africa—reaching communities quickly, clearly, and without the
                  clutter. Real help, real outcomes.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <button
                      onClick={handleGetStarted}
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Start Making an Impact
                    </button>
                    <Link
                      href="/projects"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 sm:px-8"
                    >
                      See Real Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              How It Works
            </h2>
            <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Follow the journey of a Kusaidia project from idea to impact,
              powered by transparency and blockchain technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Step 1: Draft */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition hover:scale-105">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Draft
                </h3>
                <p className="text-gray-600">
                  An organization creates a project proposal with clear goals
                  and needs.
                </p>
              </div>

              {/* Step 2: Pending Review */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition hover:scale-105">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Pending Review
                </h3>
                <p className="text-gray-600">
                  Admins review the project for legitimacy and feasibility.
                </p>
              </div>

              {/* Step 3: Approved */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition hover:scale-105">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Approved
                </h3>
                <p className="text-gray-600">
                  Project is validated, listed for funding, and added to the
                  blockchain.
                </p>
              </div>

              {/* Step 4: Active */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition hover:scale-105">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Active
                </h3>
                <p className="text-gray-600">
                  Fully funded, the project kicks off with funds sent to
                  vendors.
                </p>
              </div>

              {/* Step 5: Completed */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition hover:scale-105">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Completed
                </h3>
                <p className="text-gray-600">
                  Goals are met, impact is verified, and the project wraps up
                  successfully.
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">
              *Projects may be cancelled if they fail review or funding stages.
            </p>
          </div>
        </section>

        {/* Impact Highlights */}
        <div className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                Why KUSAIDIA?
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                Your Support, Their Future
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                We cut the clutter so every dollar you give builds a better
                tomorrow—tracked from your wallet to their hands.
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                    <div className="-mt-6">
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </span>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        See Every Step
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        Blockchain locks in every move—watch your impact unfold
                        in real time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                    <div className="-mt-6">
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </span>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        Quick and Direct
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        Your support goes straight to vendors, delivering
                        fast—days, not months—with no waste.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                    <div className="-mt-6">
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </span>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        Trust Built In
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        Every project is checked and proven, so you know your
                        generosity counts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial / Impact Preview */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Real Change, Real Stories
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                See how your support can transform lives—straight from the
                source.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <div className="max-w-lg bg-gray-50 rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic">
                  "With KUSAIDIA, we built a school in 3 months—every step was
                  clear, every dollar mattered."
                </p>
                <p className="mt-4 text-indigo-600 font-medium">
                  — Amina, Community Leader, Kenya (Coming Soon)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section with Live Visitor Count */}
        <div className="bg-indigo-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Be the Change Today</span>
              <span className="block">Your Impact Starts Here</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-100">
              Join us to empower Africa with support that's fast, fair, and
              fully yours to track.
            </p>
            <div className="mt-8 flex flex-col items-center">
              <div className="bg-white/15 backdrop-blur-sm rounded-lg py-5 px-8 mb-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-base uppercase tracking-wider text-indigo-200 font-medium">
                    Community Impact
                  </div>
                  <div className="text-xl text-white">
                    Join{" "}
                    <VisitorCounter
                      pageName="home"
                      className="text-3xl font-bold text-yellow-300 inline-flex items-center"
                    />{" "}
                    <span className="relative inline-block">
                      visitors
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300/0 via-yellow-300 to-yellow-300/0"></span>
                    </span>{" "}
                    making an impact with
                  </div>
                  <div className="text-2xl font-extrabold text-white">
                    KUSAIDIA
                    <span className="ml-1 text-yellow-300">✦</span>
                  </div>
                </div>
              </div>
              <Link
                href="/projects"
                className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
              >
                Discover Your Impact
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/kusaidiaafrica"
              className="text-gray-400 hover:text-indigo-600"
            >
              X
            </a>
            <a
              href="mailto:kusaidia75@gmail.com"
              className="text-gray-400 hover:text-indigo-600"
            >
              Contact Us
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            © 2025 KUSAIDIA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
