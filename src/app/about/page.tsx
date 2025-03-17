// src/app/about/page.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackVisitor } from "@/utils/analytics";
import { useAuth } from "@/features/auth/AuthContext";
import { useRouter } from "next/navigation";

const milestones = [
  {
    title: "Validate Idea & Research",
    period: "Month 1-2 (April - May 2025)",
    description:
      "We kick off by proving the concept—talking to donors, NGOs, and vendors to understand their needs. No heavy coding yet, just listening and learning to ensure KUSAIDIA solves a real problem.",
    highlight: "Focus: Market insights, no dev rush.",
  },
  {
    title: "Build MVP & Revenue Model",
    period: "Month 3-4 (June - July 2025)",
    description:
      "We build a lean minimum viable product—a simple platform linking donors to vendors. Alongside, we draft a revenue model to keep it sustainable, focusing on fast, efficient development.",
    highlight: "Focus: Lean prototype, cost-effective.",
  },
  {
    title: "Test with Users & Iterate",
    period: "Month 5-6 (August - September 2025)",
    description:
      "Real users—donors and vendors—test the MVP with small projects, like delivering supplies. We tweak based on their input and start drafting a proposal to show what works.",
    highlight: "Focus: User feedback, proposal prep.",
  },
  {
    title: "Prep Pitch & Secure Partners",
    period: "Month 7 (October 2025)",
    description:
      "With a tested platform, we polish our pitch for partners—NGOs, blockchain experts, and local networks. The goal is to lock in support to scale KUSAIDIA’s reach.",
    highlight: "Focus: Partnerships, pitch ready.",
  },
  {
    title: "Launch Small & Gather Data",
    period: "Month 8 (November - December 2025)",
    description:
      "We launch quietly with small, live projects—think $50 deliveries—tracking every step. Data from this fuels our next pitch for funding to grow bigger.",
    highlight: "Focus: Live start, data for growth.",
  },
];

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const { connectWallet, isAuthenticated } = useAuth();
  const router = useRouter();


    // Track visitors and update count on page load
    useEffect(() => {
      if (!loaded) {
        const count = trackVisitor("home");
        setVisitorCount(count);
        setLoaded(true);
      }
      if (isAuthenticated) {
        router.push("/projects");
      }
    }, [loaded, isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <span className="text-2xl font-bold text-indigo-600">
                    KUSAIDIA
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                See Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <div className="relative bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                About KUSAIDIA
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                We’re here to make your support count—delivering help straight to the people who turn it into change.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  KUSAIDIA—Swahili for “to help”—is about getting your support where it’s needed most, without the mess. Imagine a school in Kumasi needing pads: your money goes straight to a local vendor who delivers them fast. No middlemen, no waste—just real help you can see and trust.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  className="w-full rounded-lg shadow-md"
                  src="/images/vendor-delivery.jpg"
                  alt="Vendor delivering supplies to a community"
                />
              </div>
            </div>
          </div>
        </div>

        {/* How We’re Different */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                What Sets Us Apart
              </h2>
              <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Help That Goes Direct
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-medium text-gray-900">No Middlemen</h3>
                <p className="mt-2 text-base text-gray-500">
                  Your support skips the bureaucracy and lands with vendors who get the job done—like supplying a village with water.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-medium text-gray-900">Real Needs Met</h3>
                <p className="mt-2 text-base text-gray-500">
                  From pads for girls to seeds for farmers, we fund what communities need, delivered by locals who know best.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-medium text-gray-900">You See It All</h3>
                <p className="mt-2 text-base text-gray-500">
                  Track every step—from your gift to the vendor’s hands—thanks to a system that keeps it clear and honest.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Who We Are
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                A team passionate about making help simple, fast, and real—starting in Africa, for the world.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <div className="max-w-2xl text-center">
                <p className="text-base text-gray-600">
                  We’re builders, dreamers, and doers—united by a belief that support shouldn’t get stuck. KUSAIDIA started with a simple idea: if a community needs something, let’s get it to them directly. Using smart tech, we cut the clutter and connect you to vendors who deliver. This is just the beginning—join us as we grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-700">
            Join <span className="text-indigo-600">{visitorCount}</span> visitors learning about KUSAIDIA’s mission.
          </p>
        </div>

        {/* Milestones Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                Our Journey
              </h2>
              <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Milestones to Impact
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                Here’s how we’re bringing KUSAIDIA to life—connecting your support to real change, step by step.
              </p>
            </div>
            <div className="mt-12 relative">
              {/* Timeline Line */}
              <div className="absolute inset-0 flex justify-center">
                <div className="w-1 bg-indigo-200 h-full"></div>
              </div>
              {/* Milestones */}
              <div className="relative space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Dot on Timeline */}
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full z-10 mt-2"></div>
                    {/* Milestone Content */}
                    <div className="ml-6 bg-white p-6 rounded-lg shadow-md w-full">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <h3 className="text-lg font-medium text-gray-900">
                          {milestone.title}
                        </h3>
                        <span className="text-sm text-indigo-600 font-semibold">
                          {milestone.period}
                        </span>
                      </div>
                      <p className="mt-2 text-base text-gray-500">
                        {milestone.description}
                      </p>
                      <p className="mt-1 text-sm font-medium text-indigo-700">
                        {milestone.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to Help?</span>
              <span className="block">Join the Movement</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-100">
              Be part of a new way to support Africa—direct, real, and right where it’s needed.
            </p>
            <Link
              href="/projects"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com" className="text-gray-400 hover:text-indigo-600">
              X
            </a>
            <a href="mailto:info@kusaidia.org" className="text-gray-400 hover:text-indigo-600">
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