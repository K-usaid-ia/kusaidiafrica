// src/app/about/page.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FaHandshake,
  FaUsers,
  FaGlobe,
  FaChartLine,
  FaRegLightbulb,
  FaRegComments,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserShield,
  FaProjectDiagram,
  FaServer,
  FaDatabase,
  FaCheckCircle,
  FaTimesCircle,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaRocket,
  FaMoneyBillWave,
  FaLightbulb,
  FaChartPie,
  FaWater,
  FaLock,
  FaStar,
  FaChevronRight,
  FaChevronLeft,
  FaCompressAlt,
  FaExpandAlt,
  FaLeaf,
  FaUserPlus,
  FaTruck,
  FaBuilding,
  FaAd,
  FaChartArea,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaShareAlt,
  FaPaperPlane,
  FaInfoCircle,
  FaGithub,
  FaGlobeAfrica,
  FaBug,
  FaQuestionCircle,
  FaChessKnight,
  FaGavel,
} from "react-icons/fa";
import ContactForm from "@/components/contact/ContactForm";

const slides = [
  // Slide 1: Title
  {
    id: "title",
    title: "KUSAIDIA: Help That Hits Home",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <div className="mb-4 sm:mb-8 relative">
          <div className="absolute inset-0 bg-blue-600 rounded-xl blur-md opacity-30 transform -rotate-3"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-8 py-4 sm:py-6 rounded-xl shadow-2xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              KUSAIDIA
            </h1>
          </div>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
          Direct, Transparent Aid Powered by Blockchain
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-600 mb-6 sm:mb-10">
          Presented by Maku P. Mazakpe | March 2025
        </p>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-50 via-white to-blue-50",
  },

  // Slide 2: Problem Statement
  {
    id: "problem",
    title: "The Broken Aid Pipeline",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-12">
          Aid's <span className="text-red-600">Trust Crisis</span>
        </h3>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-5xl mx-auto">
          {[
            {
              title: "Untrusted",
              desc: "80% of donors doubt impact delivery",
              icon: <FaUsers className="text-red-600 text-3xl sm:text-5xl" />,
            },
            {
              title: "Inefficient",
              desc: "30% lost to delays & fraud",
              icon: (
                <FaChartArea className="text-red-600 text-3xl sm:text-5xl" />
              ),
            },
            {
              title: "Slow",
              desc: "Months to deliver essentials",
              icon: <FaClock className="text-red-600 text-3xl sm:text-5xl" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-700 h-2 w-full"></div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
          Sources: CAF 2023, OECD 2023 | $50B Africa aid, $200B+ global in 2025
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-gray-50 to-blue-50",
  },

  // Slide 3: Solution
  {
    id: "solution",
    title: "KUSAIDIA – Direct Impact",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 sm:mb-10">
          Our Solution
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mx-auto">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              How It Works
            </h4>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Smart Contract Automation",
                  desc: "Eliminates intermediaries & corruption",
                },
                {
                  title: "Real-time Tracking",
                  desc: "Full transparency & accountability",
                },
                {
                  title: "Direct-to-vendor Model",
                  desc: "Fast, cost-effective, secure distribution",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                    <FaCheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800 text-base sm:text-lg">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-full relative mb-6 sm:mb-8">
              {/* <img src="/api/placeholder/400/300" alt="Direct impact" className="rounded-xl shadow-lg mx-auto" /> */}
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 sm:p-4 rounded-lg shadow-md">
                <p className="font-bold text-base sm:text-lg md:text-xl">
                  Days not months
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-6 rounded-xl shadow-xl text-white text-center w-full max-w-xs">
              <FaWater size={32} className="mb-2 sm:mb-3 mx-auto" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                $50
              </p>
              <p className="text-base sm:text-lg md:text-xl">
                delivers water in days—verified & tracked
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-50 to-white",
  },

  // Slide 8: How It Works
  {
    id: "how-it-works",
    title: "How It Works",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 sm:mb-10">
          The Process
        </h3>
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 sm:gap-6">
          {/* <div className="flex-1 relative">
              <img src="/api/placeholder/400/300" alt="Blockchain aid distribution" className="rounded-xl shadow-lg mx-auto" />
            </div> */}
          <div className="flex-1">
            <div className="space-y-3 sm:space-y-6">
              {[
                {
                  step: 1,
                  title: "Donor funds a project",
                  desc: "Select a specific project to support",
                },
                {
                  step: 2,
                  title: "Smart contract generates a purchase order",
                  desc: "Automatically prepared for local vendors",
                },
                {
                  step: 3,
                  title: "Verified vendor delivers resources",
                  desc: "Local vendors provide supplies or services",
                },
                {
                  step: 4,
                  title: "Payment released upon delivery verification",
                  desc: "Funds automatically released with proof of delivery",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 sm:p-5 rounded-xl shadow-md flex items-start"
                >
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                    <span className="text-sm sm:text-base">{item.step}</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-base sm:text-lg text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-white",
  },

  // Slide 4: Market Opportunity
  {
    id: "market",
    title: "A $300B Frontier",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10">
          The <span className="text-blue-600">Market</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 w-full max-w-5xl mx-auto">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  label: "Africa Aid Inflow",
                  value: "$50B",
                  icon: <FaChartLine />,
                  note: "Annual, OECD 2023",
                },
                {
                  label: "Global Aid Market",
                  value: "$300B",
                  icon: <FaChartPie />,
                  note: "UN OCHA 2024",
                },
                {
                  label: "Donor Trust Gap",
                  value: "80%",
                  icon: <FaUsers />,
                  note: "CAF 2023",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                    {item.label}
                  </span>
                  <div className="text-blue-600 text-xl sm:text-2xl md:text-3xl font-bold flex items-center">
                    <span>{item.value}</span>
                    <span className="ml-2">{item.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-40 h-40 sm:w-56 md:w-64 sm:h-56 md:h-64 mb-6 sm:mb-8">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-xl"
              >
                <circle cx="50" cy="50" r="45" fill="#EBF4FF" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#E0E7FF"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="10"
                  strokeDasharray="251"
                  strokeDashoffset="50"
                  transform="rotate(-90 50 50)"
                />
                <circle cx="50" cy="50" r="30" fill="#FFFFFF" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <p className="text-blue-600 font-black text-3xl sm:text-4xl md:text-5xl">
                  80%
                </p>
                <p className="text-base sm:text-lg font-bold text-blue-800">
                  Doubt Aid Impact
                </p>
              </div>
            </div>
            <div className="bg-blue-100 px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-md border-2 border-blue-200">
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                Targeting small donors + NGOs with blockchain trust
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
          Sources: OECD (2023), UN OCHA (2024), Charities Aid Foundation (CAF)
          2023 Report
        </div>
      </div>
    ),
    bgColor: "bg-white",
  },

  // Slide 5: Competitor Analysis
  {
    id: "competition",
    title: "We're Different",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 py-8 sm:py-12 bg-gradient-to-br from-blue-50 to-gray-100">
        {/* Header */}
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-12">
          We <span className="text-blue-600">Stand Out</span>
        </h3>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mx-auto">
          {/* Others Card */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl relative border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-t-2xl"></div>
            <h4 className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-800 mb-4 sm:mb-6 pt-3 sm:pt-4">
              OTHERS
            </h4>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Slow",
                  desc: "UNICEF: Months of bureaucracy",
                  icon: (
                    <FaClock className="text-red-600 text-xl sm:text-2xl" />
                  ),
                },
                {
                  title: "Expensive",
                  desc: "GoFundMe: 7.9% + $0.30 fees",
                  icon: (
                    <FaDollarSign className="text-red-600 text-xl sm:text-2xl" />
                  ),
                },
                {
                  title: "Complex",
                  desc: "BitGive: Technical barriers",
                  icon: (
                    <FaShieldAlt className="text-red-600 text-xl sm:text-2xl" />
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-red-600 text-base sm:text-lg md:text-xl">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kusaidia Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl text-white relative hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-full h-3 bg-blue-900 rounded-t-2xl"></div>
            <h4 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 pt-3 sm:pt-4">
              KUSAIDIA
            </h4>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Fast",
                  desc: "1-3 days delivery",
                  icon: (
                    <FaRocket className="text-blue-100 text-xl sm:text-2xl" />
                  ),
                },
                {
                  title: "Low-Cost",
                  desc: "2-5% platform fee",
                  icon: (
                    <FaMoneyBillWave className="text-blue-100 text-xl sm:text-2xl" />
                  ),
                },
                {
                  title: "Simple",
                  desc: "User-friendly platform",
                  icon: (
                    <FaLightbulb className="text-blue-100 text-xl sm:text-2xl" />
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-base sm:text-lg md:text-xl">
                      {item.title}
                    </p>
                    <p className="text-blue-100 text-xs sm:text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-50 to-gray-100",
  },

  // Slide 6: Business Model
  {
    id: "business-model",
    title: "How We Work & Win",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10">
          Our Business Model
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 w-full max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg text-white">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b border-blue-300">
              Revenue Streams
            </h4>
            <div className="space-y-4 sm:space-y-6 text-left">
              {[
                {
                  title: "2-5% Platform Fee",
                  desc: "Covers vetting, tracking, delivery",
                  icon: <FaChartLine />,
                },
                {
                  title: "Insurance Commissions",
                  desc: "10-20% from risk coverage partners",
                  icon: <FaShieldAlt />,
                },
                {
                  title: "Premium Analytics",
                  desc: "Subscriptions for NGOs & donors",
                  icon: <FaChartPie />,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg md:text-xl">
                      {item.title}
                    </p>
                    <p className="text-blue-100 text-xs sm:text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-sm"></div>
              <div className="relative flex items-center justify-center w-40 h-40 sm:w-56 sm:h-56 mx-auto rounded-full border-8 border-white shadow-xl overflow-hidden">
                {/* <img src="/api/placeholder/200/200" alt="Blockchain aid delivery" className="w-full h-full object-cover" /> */}
              </div>
            </div>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="bg-blue-100 px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-md border-2 border-blue-200 mx-auto">
                <div className="flex items-center">
                  <FaLock className="text-blue-600 mr-2" />
                  <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                    Lean + Locked on Blockchain
                  </p>
                </div>
              </div>
              <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-md mx-auto">
                <p className="text-blue-600 font-bold text-xs sm:text-sm md:text-base">
                  Milestone payments, zero waste
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-white",
  },

  // Slide 7: Traction & Roadmap
  {
    id: "roadmap",
    title: "From Vision to Victory",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 sm:mb-10">
          Our Path Forward
        </h3>
        <div className="mb-4 sm:mb-8">
          <div className="bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl shadow-lg inline-block">
            <div className="flex items-center">
              <FaUsers className="text-blue-600 mr-2 sm:mr-3" size={20} />
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
                Traction: <span className="text-blue-600">X+</span> interviews
                with NGOs & donors
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-1 bg-gray-200 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
              {[
                {
                  num: 1,
                  title: "Research",
                  desc: "Market validation",
                  active: false,
                },
                {
                  num: 2,
                  title: "MVP",
                  desc: "Core functionality",
                  active: false,
                },
                {
                  num: 3,
                  title: "Testing",
                  desc: "Initial pilot projects",
                  active: true,
                },
                {
                  num: 4,
                  title: "Partners",
                  desc: "NGO partnerships",
                  active: false,
                },
                {
                  num: 5,
                  title: "Launch",
                  desc: "Full market release",
                  active: false,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center relative">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${
                      item.active ? "bg-blue-600" : "bg-blue-100"
                    } rounded-full flex items-center justify-center mb-3 sm:mb-4 border-4 border-white shadow-md z-10`}
                  >
                    <span
                      className={`text-sm sm:text-base ${
                        item.active ? "text-white" : "text-blue-600"
                      }`}
                    >
                      {item.num}
                    </span>
                  </div>
                  <div
                    className={`${
                      item.active
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-gray-800"
                    } p-3 sm:p-4 rounded-lg shadow-sm w-full`}
                  >
                    <p className="font-bold text-sm sm:text-base">
                      {item.title}
                    </p>
                    <p
                      className={`${
                        item.active ? "text-blue-100" : "text-gray-600"
                      } text-xs sm:text-sm`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  {item.active && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rotate-45 hidden md:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {/* <img src="/api/placeholder/500/150" alt="Growth projection" className="rounded-lg shadow-md" /> */}
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-50 to-white",
  },

  // Slide 8: Challenges & Solutions
  {
    id: "weak-points",
    title: "Our Challenges & Solutions",
    content: (
      <div className="flex flex-col items-center justify-start h-full w-full text-center px-4 py-6 sm:py-8 bg-gradient-to-br from-gray-50 to-blue-100 overflow-hidden">
        {/* Header */}
        <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
          Facing <span className="text-blue-600">All Risks</span> Head-On
        </h3>

        {/* Scrollable Grid */}
        <div className="w-full max-w-5xl mx-auto h-[calc(100%-150px)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                challenge: "Tight Funding",
                desc: "$10K-$150K limits scale",
                solution: "Focus on MVP, chase follow-on",
                icon: (
                  <FaDollarSign className="text-red-600 text-xl sm:text-2xl" />
                ),
              },
              {
                challenge: "Vendor Reliability",
                desc: "Local vendors may fail",
                solution: "Partner with logistics pros",
                icon: <FaTruck className="text-red-600 text-xl sm:text-2xl" />,
              },
              {
                challenge: "Blockchain Barriers",
                desc: "Crypto adoption slow",
                solution: "Add fiat, simplify UX",
                icon: <FaLock className="text-red-600 text-xl sm:text-2xl" />,
              },
              {
                challenge: "Revenue Uncertainty",
                desc: "2-5% fee may not sustain",
                solution: "Test insurance, analytics early",
                icon: (
                  <FaChartLine className="text-red-600 text-xl sm:text-2xl" />
                ),
              },
              {
                challenge: "Small Team",
                desc: "3 people overstretched",
                solution: "Hire ops, tap community",
                icon: <FaUsers className="text-red-600 text-xl sm:text-2xl" />,
              },
              {
                challenge: "Overpromising",
                desc: "Delays hurt credibility",
                solution: "Set modest goals, exceed them",
                icon: <FaClock className="text-red-600 text-xl sm:text-2xl" />,
              },
              {
                challenge: "Regulatory Hurdles",
                desc: "Laws could block us",
                solution: "Budget for legal, start small",
                icon: <FaGavel className="text-red-600 text-xl sm:text-2xl" />,
              },
              {
                challenge: "Competition",
                desc: "Big players may copy",
                solution: "Move fast, build moat",
                icon: (
                  <FaChessKnight className="text-red-600 text-xl sm:text-2xl" />
                ),
              },
              {
                challenge: "Donor Skepticism",
                desc: "Trust takes time",
                solution: "Show pilots, market hard",
                icon: (
                  <FaQuestionCircle className="text-red-600 text-xl sm:text-2xl" />
                ),
              },
              {
                challenge: "Technical Debt",
                desc: "MVP bugs could crash",
                solution: "Audit contracts, test rigorously",
                icon: <FaBug className="text-red-600 text-xl sm:text-2xl" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-3 sm:p-4 rounded-lg shadow-md border border-gray-100 flex items-start space-x-3 sm:space-x-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0">{item.icon}</div>
                {/* Text */}
                <div className="text-left">
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 leading-tight">
                    {item.challenge}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {item.desc}
                  </p>
                  <p className="text-xs sm:text-sm text-blue-600 font-semibold mt-1 leading-tight">
                    Fix: {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
          Every pitfall’s a step—we’re climbing to $300B.
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-gray-50 to-blue-100",
  },

  // Financials & Funding Ask
  {
    id: "financials",
    title: "Prize Money & Impact",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10">
          The <span className="text-blue-600">Plan</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mx-auto">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Prize Allocation
            </h4>
            <p className="text-blue-600 text-2xl sm:text-3xl font-bold">$10K</p>
            <div className="text-gray-600 text-sm sm:text-base mt-2 space-y-2">
              <p>$2K (20%) - Build MVP (8 months)</p>
              <p>$8K (80%) - Team Split (3 members, ~$2.67K each)</p>
            </div>
          </div>
          <div className="bg-blue-600 p-4 sm:p-6 rounded-xl shadow-lg text-white">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              Next Steps
            </h4>
            <p className="text-2xl sm:text-3xl font-bold">Pilot Ready</p>
            <p className="text-blue-100 text-sm sm:text-base">
              5 Deliveries in 8 Months
            </p>
            <p className="text-blue-200 text-xs sm:text-sm mt-2">
              Scales with More Funding
            </p>
          </div>
        </div>
        <div className="mt-6 text-gray-500 text-xs sm:text-sm">
          Lean budget powers our 8-month roadmap from hackathon to real impact.
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-50 to-white",
  },

  {
    id: "financials",
    title: "Prize Money & Impact",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10">
          The <span className="text-blue-600">Plan</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mx-auto">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Prize Allocation
            </h4>
            <p className="text-blue-600 text-2xl sm:text-3xl font-bold">$10K</p>
            <div className="text-gray-600 text-sm sm:text-base mt-2 space-y-2">
              <p>$7K (70%) - MVP + Pilot (8 months)</p>
              <p>$3K (30%) - Team Split (3 members, ~$1K each)</p>
            </div>
          </div>
          <div className="bg-blue-600 p-4 sm:p-6 rounded-xl shadow-lg text-white">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              Next Steps
            </h4>
            <p className="text-2xl sm:text-3xl font-bold">10 Deliveries</p>
            <p className="text-blue-100 text-sm sm:text-base">
              Live Pilot by Dec 2025
            </p>
            <p className="text-blue-200 text-xs sm:text-sm mt-2">
              Proof for Bigger Funding
            </p>
          </div>
        </div>
        <div className="mt-6 text-gray-500 text-xs sm:text-sm">
          $7K builds a blockchain-tracked MVP, $3K fuels our team—impact starts
          now.
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-50 to-white",
  },

  // Slide 10: Team
  {
    id: "team",
    title: "The Minds Behind It",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10">
          Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
          {[
            {
              name: "Maku P. Mazakpe",
              role: "Tech Lead",
              icon: <FaRocket size={20} className="sm:text-xl" />,
            },
            {
              name: "Nana Abokoma Sika Antwi",
              role: "Communication Lead",
              icon: <FaLightbulb size={20} className="sm:text-xl" />,
            },
            {
              name: "Andy",
              role: "Partnerships",
              icon: <FaHandshake size={20} className="sm:text-xl" />,
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transform transition hover:scale-105"
            >
              <div className="h-32 sm:h-48 overflow-hidden">
                <img
                  src="/api/placeholder/300/200"
                  alt={member.name}
                  className="w-full h-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                  {member.role}
                </p>
                <div className="flex justify-center">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                    <span className="text-blue-600">{member.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    bgColor: "bg-white",
  },

  // Closing
  {
    id: "closing",
    title: "Let’s Make Aid Work",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 py-8 sm:py-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        {/* Header */}
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-10">
          <span className="text-blue-100">KUSAIDIA</span> Starts Here
        </h3>

        {/* Core Message */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-10">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-100 mb-4 sm:mb-6">
            $10K Fuels 10 Deliveries in 8 Months
          </p>
          <p className="text-base sm:text-lg md:text-xl text-blue-200">
            From this hackathon to real impact—procurement, delivery,
            trust—powered by blockchain.
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="bg-white text-blue-600 rounded-xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">
            Award Us $10K to Shift the Aid Paradigm
          </p>
          <p className="text-sm sm:text-base mt-2">
            Join us to rewrite how $50B moves—starting now.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base md:text-lg font-medium">
            Maku P. Mazakpe | kusaidia75@gmail.com | @KusaidiaHQ
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            {[
              { icon: <FaTwitter />, link: "https://twitter.com/KusaidiaHQ" },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/company/kusaidia",
              },
              { icon: <FaGithub />, link: "https://github.com/kusaidia" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Visual */}
        <div className="mt-6 sm:mt-8">
          <FaRocket className="text-blue-100 text-3xl sm:text-4xl animate-bounce" />
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
  },

  // Slide 13: Contact
  {
    id: "contact",
    title: "Get In Touch",
    content: (
      <div className="flex flex-col items-center justify-start min-h-full w-full text-center px-4 py-8 sm:py-12 bg-gradient-to-r from-blue-50 to-gray-100">
        {/* Horizontal Scrollable Container */}
        <div className="w-full max-w-6xl mx-auto h-[60vh] sm:h-[70vh] overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 flex space-x-4 sm:space-x-6 px-3 sm:px-4 snap-x snap-mandatory">
          {/* Combined Contact Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-8 min-w-[280px] sm:min-w-[320px] max-w-[320px] sm:max-w-[400px] flex-shrink-0 transform transition-all hover:shadow-xl hover:-translate-y-2 duration-300 snap-center">
            <h4 className="text-xl sm:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6 flex items-center justify-center">
              <FaInfoCircle className="text-blue-600 mr-2" />{" "}
              <span className="text-blue-600">Let's Connect</span>
            </h4>
            <div className="space-y-4 sm:space-y-6 text-left">
              {[
                {
                  icon: (
                    <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-2xl" />
                  ),
                  title: "Location",
                  details: ["Nairobi, Kenya", "Kilimani X Center, 3rd Floor"],
                },
                {
                  icon: (
                    <FaPhone className="text-blue-600 text-lg sm:text-2xl" />
                  ),
                  title: "Phone",
                  details: ["+254 700 000 000"],
                },
                {
                  icon: (
                    <FaEnvelope className="text-blue-600 text-lg sm:text-2xl" />
                  ),
                  title: "Email",
                  details: ["kusaidia75@gmail.com"],
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="p-2 sm:p-3 rounded-full bg-blue-100 mr-3 sm:mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">
                      {item.title}
                    </p>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-xs sm:text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Combined Form & Social Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-8 min-w-[280px] sm:min-w-[320px] max-w-[320px] sm:max-w-[400px] flex-shrink-0 transform transition-all hover:shadow-xl hover:-translate-y-2 duration-300 snap-center">
            <h4 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center justify-center">
              <FaPaperPlane className="text-blue-600 mr-2" /> Send a Message
            </h4>
            <ContactForm />

            {/* Social Section */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
              <h5 className="text-base sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center justify-center">
                <FaShareAlt className="text-blue-600 mr-2" /> Stay Connected
              </h5>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  {
                    icon: <FaTwitter />,
                    label: "X",
                    link: "https://twitter.com/Kusaidia",
                  },
                  { icon: <FaLinkedin />, label: "LinkedIn", link: "#" },
                  { icon: <FaFacebook />, label: "Facebook", link: "#" },
                  { icon: <FaInstagram />, label: "Instagram", link: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-r from-blue-50 to-gray-100",
  },

  // Slide 9: Tech Stack
  {
    id: "tech-stack",
    title: "Our Technology",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10">
          Tech Stack
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-5xl mx-auto">
          {[
            {
              title: "Frontend",
              icon: <FaLightbulb size={20} className="sm:text-xl" />,
              items: [
                { name: "React.js", desc: "Sleek & user-friendly" },
                {
                  name: "Responsive Design",
                  desc: "Mobile & desktop optimized",
                },
              ],
            },
            {
              title: "Backend",
              icon: <FaShieldAlt size={20} className="sm:text-xl" />,
              items: [
                { name: "Django", desc: "Robust API & contract interactions" },
                { name: "PostgreSQL", desc: "Scalable & efficient database" },
                { name: "Docker", desc: "Seamless deployment" },
              ],
            },
            {
              title: "Blockchain",
              icon: <FaLock size={20} className="sm:text-xl" />,
              items: [
                { name: "Celo", desc: "Secure & low-cost transactions" },
                { name: "Smart Contracts", desc: "Automated, secure payments" },
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-blue-600">{section.icon}</span>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                {section.title}
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg"
                  >
                    <p className="font-medium text-gray-700 text-sm sm:text-base">
                      {item.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-10">
          {/* <img src="/api/placeholder/700/150" alt="System architecture diagram" className="rounded-lg shadow-lg" /> */}
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-50 to-white",
  },

  // Slide 11: Competitive Analysis
  {
    id: "competitive-analysis",
    title: "Competitive Landscape",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 py-6 sm:py-12 bg-gradient-to-br from-blue-100 to-gray-50">
        {/* Header */}
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-12">
          Competitive <span className="text-blue-600">Landscape</span>
        </h3>

        {/* Table Container */}
        <div className="w-full max-w-6xl mx-auto overflow-x-auto rounded-xl shadow-2xl">
          <table className="min-w-full bg-white rounded-xl overflow-hidden border-separate border-spacing-0">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-left">
                <th className="py-3 px-3 sm:py-4 sm:px-6 text-sm sm:text-lg font-semibold rounded-tl-xl">
                  Features
                </th>
                <th className="py-3 px-3 sm:py-4 sm:px-6 text-sm sm:text-lg font-semibold">
                  KUSAIDIA
                </th>
                <th className="py-3 px-3 sm:py-4 sm:px-6 text-sm sm:text-lg font-semibold">
                  Traditional NGOs
                </th>
                <th className="py-3 px-3 sm:py-4 sm:px-6 text-sm sm:text-lg font-semibold">
                  GoFundMe
                </th>
                <th className="py-3 px-3 sm:py-4 sm:px-6 text-sm sm:text-lg font-semibold rounded-tr-xl">
                  Crypto Solutions
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Transparency",
                  kusaidia: "Full blockchain tracking",
                  ngo: "Limited reporting",
                  gofundme: "Basic",
                  crypto: "Full but complex",
                },
                {
                  feature: "Speed of Delivery",
                  kusaidia: "1-3 days (goods)",
                  ngo: "Months",
                  gofundme: "1-2 weeks (funds)",
                  crypto: "Minutes (transactions)",
                },
                {
                  feature: "Fees",
                  kusaidia: "2-5%",
                  ngo: "20-30%",
                  gofundme: "7.9% + $0.30",
                  crypto: "Variable gas fees",
                },
                {
                  feature: "Ease of Use",
                  kusaidia: "Simple interface",
                  ngo: "Straightforward",
                  gofundme: "User-friendly",
                  crypto: "Technical barriers",
                },
                {
                  feature: "Impact Verification",
                  kusaidia: "Real-time verification",
                  ngo: "Annual reports only",
                  gofundme: "Self-reported",
                  crypto: "On-chain but complex",
                },
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-gray-200 hover:bg-blue-50 transition-colors duration-200 ${
                    idx === 4 ? "rounded-bl-xl rounded-br-xl" : ""
                  }`}
                >
                  <td className="py-2 px-3 sm:py-4 sm:px-6 font-medium text-gray-700 text-left text-xs sm:text-sm md:text-base">
                    {row.feature}
                  </td>
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <div className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                      <span className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base">
                        {row.kusaidia}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <div className="flex items-center">
                      {row.ngo.includes("Limited") ||
                      row.ngo.includes("Months") ||
                      row.ngo.includes("20-30%") ? (
                        <FaTimesCircle className="text-red-500 mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <FaCheckCircle className="text-green-500 mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                      <span className="text-gray-600 text-xs sm:text-sm md:text-base">
                        {row.ngo}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <div className="flex items-center">
                      {row.gofundme.includes("Basic") ||
                      row.gofundme.includes("weeks") ||
                      row.gofundme.includes("7.9%") ? (
                        <FaTimesCircle className="text-red-500 mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <FaCheckCircle className="text-green-500 mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                      <span className="text-gray-600 text-xs sm:text-sm md:text-base">
                        {row.gofundme}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-3 sm:py-4 sm:px-6">
                    <div className="flex items-center">
                      {row.crypto.includes("complex") ||
                      row.crypto.includes("barriers") ? (
                        <FaTimesCircle className="text-red-500 mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <FaCheckCircle className="text-green-500 mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                      <span className="text-gray-600 text-xs sm:text-sm md:text-base">
                        {row.crypto}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 italic">
          Crypto Solutions: BitGive, GiveCrypto | Data as of March 2025
        </p>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-100 to-gray-50",
  },
  // Revenue Streams UI Component
  {
    id: "revenue-streams",
    title: "How Kusaidia Makes Money",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 py-8 sm:py-12 bg-gray-50">
        {/* Header */}
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-12">
          <span className="text-blue-600">Revenue</span> Streams
        </h3>

        {/* Grid of Revenue Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl mx-auto">
          {[
            {
              title: "Platform Service Fees",
              subtitle: "2-5% per project",
              desc: "Covers vetting, tracking, and delivery. $500K aid at 5% = $25K.",
              icon: (
                <FaChartLine className="text-blue-600 text-2xl sm:text-3xl" />
              ),
              why: "Donors pay for transparency—beats 10-30% aid waste.",
            },
            {
              title: "Insurance Commissions",
              subtitle: "10-20% of premiums",
              desc: "Partner for risk coverage. $10K premiums at 15% = $1.5K/project.",
              icon: (
                <FaShieldAlt className="text-blue-600 text-2xl sm:text-3xl" />
              ),
              why: "Boosts trust, recurring cash, no fee hikes.",
            },
            {
              title: "Premium Analytics",
              subtitle: "$500/month subscriptions",
              desc: "Data for NGOs. 10 subscribers = $5K/month.",
              icon: (
                <FaChartPie className="text-blue-600 text-2xl sm:text-3xl" />
              ),
              why: "Leverages blockchain data for partners.",
            },
            {
              title: "Enterprise Solutions",
              subtitle: "Licensing fees",
              desc: "$50K setup + $10K/month per client.",
              icon: (
                <FaBuilding className="text-blue-600 text-2xl sm:text-3xl" />
              ),
              why: "Scales tech to big players affordably.",
            },
            {
              title: "Vendor Partnership Fees",
              subtitle: "$1K/year per vendor",
              desc: "50 vendors = $50K/year for contract access.",
              icon: <FaTruck className="text-blue-600 text-2xl sm:text-3xl" />,
              why: "Monetizes our supply chain network.",
            },
            {
              title: "Donor Memberships",
              subtitle: "$10/month tier",
              desc: "1,000 donors = $120K/year for perks.",
              icon: (
                <FaUserPlus className="text-blue-600 text-2xl sm:text-3xl" />
              ),
              why: "Turns donors into loyal supporters.",
            },
            {
              title: "Carbon/ESG Credits",
              subtitle: "10% of credit sales",
              desc: "$100K credits = $10K/project.",
              icon: <FaLeaf className="text-blue-600 text-2xl sm:text-3xl" />,
              why: "Taps corporate sustainability trends.",
            },
            {
              title: "Sponsorships",
              subtitle: "$5K per campaign",
              desc: "5 projects = $25K from ethical brands.",
              icon: <FaAd className="text-blue-600 text-2xl sm:text-3xl" />,
              why: "Non-intrusive audience leverage.",
            },
          ].map((stream, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4">{stream.icon}</div>
              {/* Title & Subtitle */}
              <h4 className="text-base sm:text-xl font-bold text-gray-800">
                {stream.title}
              </h4>
              <p className="text-xs sm:text-sm text-blue-600 font-semibold mb-1 sm:mb-2">
                {stream.subtitle}
              </p>
              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                {stream.desc}
              </p>
              {/* Why It Works */}
              <p className="text-gray-500 text-xs italic">"{stream.why}"</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
          Built lean, powered by blockchain—revenue scales with impact.
        </div>
      </div>
    ),
    bgColor: "bg-gray-50",
  },

  {
    id: "financials",
    title: "Funding Ask & Financials",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10">
          The <span className="text-blue-600">Numbers</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mx-auto">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Funding Ask
            </h4>
            <p className="text-blue-600 text-2xl sm:text-3xl font-bold">
              $150K
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              $50K MVP + $100K Year 1
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">10% Equity</p>
          </div>
          <div className="bg-blue-600 p-4 sm:p-6 rounded-xl shadow-lg text-white">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              Year 1 Revenue
            </h4>
            <p className="text-2xl sm:text-3xl font-bold">$25K</p>
            <p className="text-blue-100 text-sm sm:text-base">
              5% of $500K Aid Moved
            </p>
            <p className="text-blue-200 text-xs sm:text-sm mt-2">
              Scales to Billions
            </p>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-50 to-white",
  },
  {
    id: "closing",
    title: "Rewrite the Future of Aid",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 py-8 sm:py-12 bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900">
        {/* Header */}
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-10">
          Join the <span className="text-blue-600">Aid Revolution</span>
        </h3>

        {/* Core Message */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-10">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            $150K Unlocks a $300B Opportunity
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Direct procurement. Verified delivery. Blockchain trust—scaling to
            billions.
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="bg-blue-600 text-white rounded-xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">
            Invest $150K to Transform Global Giving
          </p>
          <p className="text-sm sm:text-base mt-2 text-blue-100">
            Partner with us to make every dollar count—starting today.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
            Maku P. Mazakpe | kusaidia75@gmail.com | @KusaidiaHQ
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            {[
              { icon: <FaTwitter />, link: "https://twitter.com/KusaidiaHQ" },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/company/kusaidia",
              },
              { icon: <FaGithub />, link: "https://github.com/kusaidia" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Visual */}
        <div className="mt-6 sm:mt-8">
          <FaGlobeAfrica className="text-blue-600 text-3xl sm:text-4xl animate-pulse" />
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-200",
  },
];

// return (
//   <div>
//     {slides.map((slide) => (
//       <section key={slide.id} className={`${slide.bgColor} min-h-screen flex items-center justify-center py-12`}>
//         <div className="w-full max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">{slide.title}</h2>
//           {slide.content}
//         </div>
//       </section>
//     ))}
//   </div>
// );

// PitchDeck Component (unchanged, abbreviated for brevity)
const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      } else if (e.key === "Escape" && isFullScreen) {
        setIsFullScreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isFullScreen]);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isFullScreen
          ? "fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
          : "py-16 bg-gray-50"
      }`}
    >
      <div
        className={`relative mx-auto px-4 sm:px-6 transition-all duration-300 ${
          isFullScreen ? "w-full h-full max-w-none p-8" : "max-w-4xl lg:px-8"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2
            className={`font-extrabold text-indigo-600 ${
              isFullScreen ? "text-4xl" : "text-3xl"
            }`}
          >
            KUSAIDIA Pitch Deck
          </h2>
          <button
            onClick={toggleFullScreen}
            className="p-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors"
          >
            {isFullScreen ? (
              <FaCompressAlt size={20} />
            ) : (
              <FaExpandAlt size={20} />
            )}
          </button>
        </div>
        <div className="h-1 bg-gray-200 rounded-full mb-6">
          <div
            className="h-1 bg-indigo-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
        <div className="relative">
          <div
            className={`rounded-xl shadow-xl overflow-hidden transition-all duration-500 flex flex-col ${
              isFullScreen ? "h-[calc(100vh-200px)]" : "h-[500px]"
            } ${slides[currentSlide].bgColor}`}
          >
            <div className="p-6 md:p-10 flex-grow overflow-auto">
              {slides[currentSlide].content}
            </div>
          </div>
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between pointer-events-none px-4">
            <button
              onClick={() =>
                currentSlide > 0 && setCurrentSlide((prev) => prev - 1)
              }
              className={`p-3 rounded-full shadow-lg pointer-events-auto transition-all ${
                currentSlide > 0
                  ? "bg-white text-indigo-600 opacity-80 hover:opacity-100 hover:bg-indigo-50"
                  : "opacity-0 cursor-default"
              }`}
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={() =>
                currentSlide < slides.length - 1 &&
                setCurrentSlide((prev) => prev + 1)
              }
              className={`p-3 rounded-full shadow-lg pointer-events-auto transition-all ${
                currentSlide < slides.length - 1
                  ? "bg-white text-indigo-600 opacity-80 hover:opacity-100 hover:bg-indigo-50"
                  : "opacity-0 cursor-default"
              }`}
            >
              <FaChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center mt-6 space-x-2 flex-wrap">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-indigo-600 w-4"
                    : "bg-gray-300 hover:bg-indigo-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            {slides[currentSlide].title}
          </h3>
        </div>
        {isFullScreen && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
            Press{" "}
            <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-700">
              Esc
            </kbd>{" "}
            to exit fullscreen
          </div>
        )}
      </div>
    </div>
  );
};

// Milestones data (unchanged from your latest version)
const milestones = [
  {
    title: "Validate Idea & Research",
    period: "Month 1-2 (x - y 2025)",
    description:
      "We kick off by proving the concept—talking to donors, NGOs, and vendors to understand their needs. No heavy coding yet, just listening and learning to ensure KUSAIDIA solves a real problem.",
    highlight: "Focus: Market insights, no dev rush.",
  },
  {
    title: "Build MVP & Revenue Model",
    period: "Month 3-4 (x - y 2025)",
    description:
      "We build a lean minimum viable product—a simple platform linking donors to vendors. Alongside, we draft a revenue model to keep it sustainable, focusing on fast, efficient development.",
    highlight: "Focus: Lean prototype, cost-effective.",
  },
  {
    title: "Test with Users & Iterate",
    period: "Month 5-6 (x - y 2025)",
    description:
      "Real users—donors and vendors—test the MVP with small projects, like delivering supplies. We tweak based on their input and start drafting a proposal to show what works.",
    highlight: "Focus: User feedback, proposal prep.",
  },
  {
    title: "Prep Pitch & Secure Partners",
    period: "Month 7 (y 2025)",
    description:
      "With a tested platform, we polish our pitch for partners—NGOs, blockchain experts, and local networks. The goal is to lock in support to scale KUSAIDIA’s reach.",
    highlight: "Focus: Partnerships, pitch ready.",
  },
  {
    title: "Launch Small & Gather Data",
    period: "Month 8 (x - y 2025)",
    description:
      "We launch quietly with small, live projects—think $50 deliveries—tracking every step. Data from this fuels our next pitch for funding to grow bigger.",
    highlight: "Focus: Live start, data for growth.",
  },
];

const AdminInstructions = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion
          type="single"
          collapsible
          className="w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
        >
          <AccordionItem value="admin-guide">
            <AccordionTrigger className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-t-xl p-6 transition-all duration-300">
              <span className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Kusaidia Admin Guide
              </span>
            </AccordionTrigger>
            <AccordionContent className="p-8 space-y-8 bg-gray-50">
              {/* Project Verification Process */}
              <div className="space-y-6">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Project Verification Process
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">
                      1. Initial Review
                    </h4>
                    <p className="text-gray-700 mt-2">
                      When a project enters "pending_review" status, carefully
                      examine:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>
                        Project description and goals for clarity and
                        feasibility
                      </li>
                      <li>Organization credentials and history</li>
                      <li>Location and beneficiary information for accuracy</li>
                      <li>Contact information for completeness</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">
                      2. Success Metrics Validation
                    </h4>
                    <p className="text-gray-700 mt-2">
                      Strong success metrics should be:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>
                        Specific and measurable (e.g., "500 students will have
                        access to clean water")
                      </li>
                      <li>Relevant to the project goals</li>
                      <li>Achievable within the project scope and timeline</li>
                      <li>Time-bound with clear deadlines</li>
                    </ul>
                    <p className="mt-3 text-amber-700 font-medium italic">
                      Edit vague metrics to be concrete before approval.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">
                      3. Impact Assessment Review
                    </h4>
                    <p className="text-gray-700 mt-2">
                      Effective impact assessment methods should describe:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>
                        Data collection techniques (surveys, interviews,
                        observations)
                      </li>
                      <li>
                        Frequency of measurement (e.g., baseline, midpoint,
                        completion)
                      </li>
                      <li>Who will be conducting the assessment</li>
                      <li>How results will be reported and verified</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">
                      4. Milestone Evaluation
                    </h4>
                    <p className="text-gray-700 mt-2">
                      Check that each milestone:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Has a clear deliverable</li>
                      <li>Includes a reasonable budget allocation</li>
                      <li>Has a feasible timeline</li>
                      <li>Together, milestones cover the full project scope</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Setting Fees */}
              <div className="space-y-6">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Setting Fees
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">
                      Vetting Fee Guidelines
                    </h4>
                    <p className="text-gray-700 mt-2">
                      When setting vetting fees, consider:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Project complexity (more complex = more vetting)</li>
                      <li>Typical range: 1-3% of total project budget</li>
                      <li>Higher risk projects may warrant higher fees</li>
                      <li>First-time organizations may need deeper checks</li>
                    </ul>
                    <p className="mt-3 text-blue-700 font-medium italic">
                      Higher fees may extend fundraising timelines.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">
                      Insurance Fee Guidelines
                    </h4>
                    <p className="text-gray-700 mt-2">
                      Apply insurance fees when:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Projects involve construction or infrastructure</li>
                      <li>Activities have safety risks</li>
                      <li>Vulnerable populations are involved</li>
                      <li>Timeline exceeds one year</li>
                    </ul>
                    <p className="mt-3 text-gray-700">Typical rates:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                      <li>Low-risk: 1-2% of budget</li>
                      <li>Medium-risk: 3-5% of budget</li>
                      <li>High-risk: 6-10% of budget</li>
                    </ul>
                  </div>
                  <div className="bg-amber-100 p-5 rounded-lg shadow-sm border border-amber-300">
                    <h4 className="text-lg font-semibold text-amber-800">
                      Important Note on Fee Changes
                    </h4>
                    <p className="mt-2 text-amber-800">Fee changes impact:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-amber-700">
                      <li>Funding percentage</li>
                      <li>Status transitions (e.g., delays to "active")</li>
                      <li>Donor perceptions</li>
                      <li>Implementation funds vs. admin costs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Blockchain Management */}
              <div className="space-y-6">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Blockchain Management
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">
                      Registration Process
                    </h4>
                    <p className="text-gray-700 mt-2">
                      Post-approval, projects auto-register on the blockchain:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>
                        <code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">
                          register_project_on_blockchain
                        </code>{" "}
                        creates the record
                      </li>
                      <li>
                        <code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">
                          blockchain_tx_hash
                        </code>{" "}
                        is populated on success
                      </li>
                      <li>
                        <code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">
                          contract_address
                        </code>{" "}
                        follows after confirmation
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">
                      Troubleshooting Registration Issues
                    </h4>
                    <p className="text-gray-700 mt-2">If registration fails:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>
                        Verify organization’s{" "}
                        <code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">
                          wallet_address
                        </code>
                      </li>
                      <li>Check blockchain network connectivity</li>
                      <li>Ensure contract registry is deployed</li>
                      <li>Inspect transaction status on the explorer</li>
                    </ul>
                    <p className="mt-3 text-blue-700 font-medium italic">
                      Manually trigger via "Register on Blockchain" button.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">
                      Milestone Registration
                    </h4>
                    <p className="text-gray-700 mt-2">
                      Milestones register post-project setup:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Vendors need valid wallet addresses</li>
                      <li>
                        <code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">
                          register_project_milestones
                        </code>{" "}
                        handles this
                      </li>
                      <li>Purchase orders are generated</li>
                      <li>
                        <code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">
                          blockchain_tx_hash
                        </code>{" "}
                        populates on success
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

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
                We’re here to make your support count—delivering help straight
                to the people who turn it into change.
              </p>
            </div>
          </div>
        </div>

        {/* Pitch Deck */}
        <PitchDeck />

        {/* Mission Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  KUSAIDIA—Swahili for “to help”—is about getting your support
                  where it’s needed most, without the mess. Imagine a school in
                  Kumasi needing pads: your money goes straight to a local
                  vendor who delivers them fast. No middlemen, no waste—just
                  real help you can see and trust.
                </p>
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
                <h3 className="text-lg font-medium text-gray-900">
                  No Middlemen
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Your support skips the bureaucracy and lands with vendors who
                  get the job done—like supplying a village with water.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-medium text-gray-900">
                  Real Needs Met
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  From pads for girls to seeds for farmers, we fund what
                  communities need, delivered by locals who know best.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-medium text-gray-900">
                  You See It All
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Track every step—from your gift to the vendor’s hands—thanks
                  to a system that keeps it clear and honest.
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
                A team passionate about making help simple, fast, and
                real—starting in Africa, for the world.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <div className="max-w-2xl text-center">
                <p className="text-base text-gray-600">
                  We’re builders, dreamers, and doers—united by a belief that
                  support shouldn’t get stuck. KUSAIDIA started with a simple
                  idea: if a community needs something, let’s get it to them
                  directly. Using smart tech, we cut the clutter and connect you
                  to vendors who deliver. This is just the beginning—join us as
                  we grow.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-medium text-gray-700">
                Join <span className="text-indigo-600">{visitorCount}</span>{" "}
                visitors learning about KUSAIDIA’s mission.
              </p>
            </div>
          </div>
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
                Here’s how we’re bringing KUSAIDIA to life—connecting your
                support to real change, step by step.
              </p>
            </div>
            <div className="mt-12 relative">
              <div className="absolute inset-0 flex justify-center">
                <div className="w-1 bg-indigo-200 h-full"></div>
              </div>
              <div className="relative space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full z-10 mt-2"></div>
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

        {/* Admin Instructions Section */}
        <AdminInstructions />

        {/* CTA Section */}
        <div className="bg-indigo-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to Help?</span>
              <span className="block">Join the Movement</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-100">
              Be part of a new way to support Africa—direct, real, and right
              where it’s needed.
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
            <a
              href="https://x.com/kusaidiaafrica"
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
