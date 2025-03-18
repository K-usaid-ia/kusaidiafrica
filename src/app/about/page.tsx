// src/app/about/page.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackVisitor } from "@/utils/analytics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {
  FaArrowRight,
  FaArrowLeft,
  FaChartPie,
  FaHandshake,
  FaMoneyBillWave,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaLock,
  FaChevronRight,
  FaChevronLeft,
  FaCompressAlt,
  FaExpandAlt,
  FaCheckCircle,
  FaWater,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
} from "react-icons/fa"; 

// Define slides data
const slides = [
  // Slide 1: Title
  {
    title: "KUSAIDIA: Help That Hits Home",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <div className="bg-gradient-to-r from-indigo-800 to-indigo-600 p-2 rounded-xl inline-block mb-8 shadow-xl">
          <h3 className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100 px-8 py-4">
            KUSAIDIA
          </h3>
        </div>
        <p className="text-3xl font-bold text-gray-800 mb-6 w-full">
          Direct, Transparent Aid Powered by Blockchain
        </p>
        <p className="text-xl font-medium text-gray-700 mb-10">
          Presented by Maku .P. Mazakpe | March 2025
        </p>
        <div className="mt-4 text-indigo-600 animate-bounce">
          <FaLightbulb size={80} />
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-indigo-100 via-white to-indigo-50",
  },
  
  // Slide 2: Problem Statement
  {
    title: "The Broken Aid Pipeline",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-5xl font-extrabold text-gray-900 mb-10">Why Aid <span className="text-red-600">Fails</span></h3>
        <div className="grid grid-cols-1 gap-8 text-xl w-full max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-1 rounded-xl shadow-lg">
            <div className="bg-white p-6 rounded-xl flex items-center">
              <div className="text-red-600 mr-6">
                <FaShieldAlt size={40} />
              </div>
              <div className="text-left">
                <span className="text-red-600 font-bold text-2xl block mb-1">Opaque</span>
                <span className="text-gray-700 text-xl font-medium">Donors can't see where their money goes.</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-1 rounded-xl shadow-lg">
            <div className="bg-white p-6 rounded-xl flex items-center">
              <div className="text-red-600 mr-6">
                <FaClock size={40} />
              </div>
              <div className="text-left">
                <span className="text-red-600 font-bold text-2xl block mb-1">Slow</span>
                <span className="text-gray-700 text-xl font-medium">Months to reach communities in need.</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-1 rounded-xl shadow-lg">
            <div className="bg-white p-6 rounded-xl flex items-center">
              <div className="text-red-600 mr-6">
                <FaDollarSign size={40} />
              </div>
              <div className="text-left">
                <span className="text-red-600 font-bold text-2xl block mb-1">Costly</span>
                <span className="text-gray-700 text-xl font-medium">Up to 30% lost to fees and overhead.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-red-500 animate-pulse">
          <FaChartPie size={70} />
        </div>
      </div>
    ),
    bgColor: "bg-white",
  },
  
  // Slide 3: Solution
  {
    title: "KUSAIDIA – Direct Impact",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-5xl font-extrabold text-indigo-600 mb-10">Our Solution</h3>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1 border-l-8 border-indigo-600">
            <h4 className="text-2xl font-bold text-indigo-800 mb-6">How We Do It</h4>
            <div className="text-xl text-gray-700 flex flex-col space-y-6">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-indigo-600 rounded-full mr-4"></span>
                <p className="font-bold">Blockchain Tracking</p>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-indigo-600 rounded-full mr-4"></span>
                <p className="font-bold">No Middlemen</p>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-indigo-600 rounded-full mr-4"></span>
                <p className="font-bold">Fast Delivery</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 rounded-xl shadow-lg flex-1 flex flex-col items-center justify-center text-white">
            <div className="text-white mb-6 relative">
              <FaWater size={70} />
              <div className="absolute -right-4 -top-4 bg-green-500 rounded-full p-2">
                <FaCheckCircle size={24} />
              </div>
            </div>
            <p className="text-4xl font-bold mb-4">
              $50
            </p>
            <p className="text-xl">
              delivers water in days—verified & tracked
            </p>
          </div>
        </div>
        <div className="mt-12 text-indigo-600">
          <FaRocket size={70} className="animate-pulse" />
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-indigo-50 to-white",
  },
  
  // Slide 4: Market Opportunity
  {
    title: "A $300B Opportunity",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-5xl font-extrabold text-gray-900 mb-10">The <span className="text-indigo-600">Market</span></h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1">
            <div className="text-2xl font-bold text-gray-700 flex flex-col space-y-8">
              <p className="flex items-center justify-between">
                <span className="flex items-center">
                  <span className="inline-block w-5 h-5 bg-indigo-600 rounded-full mr-4"></span>
                  Africa Aid:
                </span>
                <span className="text-indigo-600 text-3xl">$50B</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="flex items-center">
                  <span className="inline-block w-5 h-5 bg-indigo-600 rounded-full mr-4"></span>
                  Want Transparency:
                </span>
                <span className="text-indigo-600 text-3xl">70%</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="flex items-center">
                  <span className="inline-block w-5 h-5 bg-indigo-600 rounded-full mr-4"></span>
                  Total Market:
                </span>
                <span className="text-indigo-600 text-3xl">$300B</span>
              </p>
            </div>
          </div>
          <div className="relative w-64 h-64">
            <svg viewBox="0 0 36 36" className="w-full h-full drop-shadow-xl">
              {/* Background circle */}
              <circle cx="18" cy="18" r="15.9155" fill="#EBF4FF" />
              
              {/* Light track */}
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E0E7FF"
                strokeWidth="2"
              />
              
              {/* Percentage arc - 70% */}
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="4"
                strokeDasharray="100"
                strokeDashoffset="30"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
              
              {/* Add inner shadow */}
              <circle cx="18" cy="18" r="12" fill="#FFFFFF" />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-indigo-600 font-black text-5xl">70%</p>
              <p className="text-lg font-bold text-indigo-800">Want Better Aid</p>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mt-10 bg-indigo-50 px-8 py-3 rounded-full shadow-md inline-block text-xl font-bold border-2 border-indigo-100">
          Targeting small donors + NGOs
        </p>
      </div>
    ),
    bgColor: "bg-white",
  },
  
  // Slide 5: Competitor Analysis
  {
    title: "We're Different",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-5xl font-extrabold text-indigo-600 mb-10">
          Standing Out
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-gray-400">
            <p className="font-bold text-2xl text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">OTHERS:</p>
            <div className="text-xl text-gray-600 flex flex-col space-y-6">
              <p className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                <span className="font-semibold text-red-500">Slow</span>
                <span className="ml-2">(UNICEF)</span>
              </p>
              <p className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                <span className="font-semibold text-red-500">Expensive</span>
                <span className="ml-2">(GoFundMe)</span>
              </p>
              <p className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                <span className="font-semibold text-red-500">Complex</span>
                <span className="ml-2">(Crypto)</span>
              </p>
            </div>
          </div>
          <div className="bg-indigo-600 p-8 rounded-xl shadow-lg text-white border-t-8 border-indigo-800">
            <p className="font-bold text-2xl mb-6 pb-2 border-b-2 border-indigo-300">KUSAIDIA:</p>
            <div className="text-xl flex flex-col space-y-6">
              <p className="flex items-center">
                <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                <span className="font-bold">Fast</span>
                <span className="ml-2 text-indigo-200">(Days, not months)</span>
              </p>
              <p className="flex items-center">
                <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                <span className="font-bold">Low-cost</span>
                <span className="ml-2 text-indigo-200">(2-5% fee)</span>
              </p>
              <p className="flex items-center">
                <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                <span className="font-bold">Simple</span>
                <span className="ml-2 text-indigo-200">(User-friendly)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-indigo-600">
          <FaUsers size={70} />
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-indigo-50 to-white",
  },
  
  // Slide 6: Business Model
  {
    title: "How We Work & Win",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-5xl font-extrabold text-gray-900 mb-10">Our Model</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 rounded-xl shadow-lg flex-1 text-white">
            <h4 className="text-2xl font-bold mb-6 pb-2 border-b border-indigo-300">Revenue Streams</h4>
            <div className="text-xl flex flex-col space-y-6">
              <p className="flex items-center">
                <span className="inline-block mr-4 text-indigo-200">
                  <FaChartLine size={24} />
                </span>
                <span className="font-bold">2-5% platform fee</span>
              </p>
              <p className="flex items-center">
                <span className="inline-block mr-4 text-indigo-200">
                  <FaChartPie size={24} />
                </span>
                <span className="font-bold">Premium analytics</span>
              </p>
              <p className="flex items-center">
                <span className="inline-block mr-4 text-indigo-200">
                  <FaUsers size={24} />
                </span>
                <span className="font-bold">Enterprise solutions</span>
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="bg-white w-48 h-48 rounded-full flex items-center justify-center shadow-xl overflow-hidden border-8 border-indigo-100">
              <img
                src="/api/placeholder/180/180"
                alt="Vendor delivering aid"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-2xl font-bold text-indigo-600 bg-white px-6 py-3 rounded-full shadow-md border-2 border-indigo-100">
              Lean + Transparent
            </p>
          </div>
        </div>
        <div className="mt-8 text-indigo-600">
          <FaMoneyBillWave size={60} />
        </div>
      </div>
    ),
    bgColor: "bg-white",
  },
  
  // Slide 7: Traction & Roadmap
  {
    title: "From Vision to Victory",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-5xl font-extrabold text-indigo-600 mb-10">Our Path</h3>
        <div className="mb-10 flex justify-center">
          <p className="text-2xl font-bold text-gray-700 bg-white px-6 py-3 rounded-full shadow-md border-2 border-indigo-200">
            Traction: <span className="text-indigo-600">20+</span> interviews with NGOs & donors
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col sm:flex-row justify-between relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-200 -translate-y-1/2 hidden sm:block"></div>
            
            {/* Timeline points */}
            <div className="flex flex-col items-center mb-6 sm:mb-0 relative z-10">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3 border-4 border-white">
                <span className="text-indigo-600 font-bold">1-2</span>
              </div>
              <p className="text-xl font-bold text-gray-700">Research</p>
            </div>
            
            <div className="flex flex-col items-center mb-6 sm:mb-0 relative z-10">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3 border-4 border-white">
                <span className="text-indigo-600 font-bold">3-4</span>
              </div>
              <p className="text-xl font-bold text-gray-700">MVP</p>
            </div>
            
            <div className="flex flex-col items-center mb-6 sm:mb-0 relative z-10">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-3 border-4 border-white">
                <span className="text-white font-bold">5-6</span>
              </div>
              <p className="text-xl font-bold text-indigo-600">Test</p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-indigo-600 rotate-45"></div>
              </div>
            </div>
            
            <div className="flex flex-col items-center mb-6 sm:mb-0 relative z-10">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3 border-4 border-white">
                <span className="text-indigo-600 font-bold">7</span>
              </div>
              <p className="text-xl font-bold text-gray-700">Partners</p>
            </div>
            
            <div className="flex flex-col items-center relative z-10">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3 border-4 border-white">
                <span className="text-indigo-600 font-bold">8</span>
              </div>
              <p className="text-xl font-bold text-gray-700">Launch</p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-indigo-600">
          <FaRocket size={60} />
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-indigo-50 to-white",
  },
  
  // Slide 8: Team
  {
    title: "The Minds Behind It",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-5xl font-extrabold text-gray-900 mb-10">Our Team</h3>
        <div className="grid grid-cols-1 gap-6 w-full max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-6">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <FaUsers size={36} />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-800">Maku .P. Mazakpe</p>
              <p className="text-xl text-indigo-600">Founder, StartUp Software Engineer</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-6">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <FaRocket size={36} />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-800">Ceeka</p>
              <p className="text-xl text-indigo-600">Tech Lead</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-6">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <FaHandshake size={36} />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-800">[Team Member 2]</p>
              <p className="text-xl text-indigo-600">Partnerships</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-white",
  },
  
  // Slide 9: Financials & Funding Ask
  {
    title: "The Numbers",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-5xl font-extrabold text-indigo-600 mb-10">Funding</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1">
            <div className="text-2xl text-gray-700 flex flex-col space-y-6">
              <div className="flex justify-between items-center p-3 border-b border-gray-200">
                <span className="font-bold">MVP Development:</span>
                <span className="text-indigo-600 font-black text-3xl">$50K</span>
              </div>
              <div className="flex justify-between items-center p-3 border-b border-gray-200">
                <span className="font-bold">Operations:</span>
                <span className="text-indigo-600 font-black text-3xl">$100K</span>
              </div>
              <div className="flex justify-between items-center p-5 mt-2 bg-indigo-50 rounded-xl">
                <span className="font-bold text-gray-800 text-2xl">Total Ask:</span>
                <div className="text-right">
                  <span className="text-indigo-600 font-black text-4xl block">$150K</span>
                  <span className="text-indigo-600 font-bold">(10% equity)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 36 36" className="w-full h-full drop-shadow-xl">
              {/* Background circle */}
              <circle cx="18" cy="18" r="16" fill="#EBF4FF" />
              
              {/* First segment - 33% */}
              <path
                d="M18 2 A 16 16 0 0 1 33.8 21.2 L 18 18 Z"
                fill="#4F46E5"
              />
              
              {/* Second segment - 67% */}
              <path
                d="M18 2 A 16 16 0 0 0 33.8 21.2 L 18 18 Z"
                fill="#A5B4FC"
                transform="rotate(180 18 18)"
              />
              
              {/* Inner circle for donut effect */}
              <circle cx="18" cy="18" r="8" fill="white" />
              
              {/* Center text container */}
              <circle cx="18" cy="18" r="7.5" fill="white" stroke="#4F46E5" strokeWidth="0.5" />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
              <p className="text-indigo-600 font-black text-2xl">$150K</p>
              <p className="text-sm font-bold text-indigo-800">Investment</p>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg inline-block">
          <div className="flex items-center gap-4">
            <FaMoneyBillWave size={40} />
            <p className="text-2xl font-bold">Strategic seed round to scale impact</p>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-indigo-50 to-white",
  },
  
  // Slide 10: Closing
  {
    title: "Let's Build Change",
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-6xl font-black text-indigo-600 mb-8">Join Us</h3>
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto mb-8 border-8 border-indigo-50">
          <p className="text-3xl font-bold text-gray-700 mb-6">
            Real Help, Real Time, Real Trust
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl text-gray-600">
            <p className="font-medium flex items-center">
              <span className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></span>
              <span>[Your Email]</span>
            </p>
            <p className="font-medium flex items-center">
              <span className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></span>
              <span>@kusaidiaafrica</span>
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6">
            <div className="text-indigo-200">
              <FaHandshake size={50} />
            </div>
          </div>
          <div className="text-indigo-600 animate-pulse">
            <FaHandshake size={80} />
          </div>
          <div className="absolute -bottom-6 -right-6">
            <div className="text-indigo-200">
              <FaHandshake size={50} />
            </div>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-br from-white to-indigo-50",
  },
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Arrow key navigation
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

  // Toggle fullscreen
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`transition-all duration-300 ease-in-out ${
      isFullScreen ? "fixed inset-0 z-50 bg-gray-900 flex items-center justify-center" : "py-16 bg-gray-50"
    }`}>
      <div className={`relative mx-auto px-4 sm:px-6 transition-all duration-300 ${
        isFullScreen ? "w-full h-full max-w-none p-8" : "max-w-4xl lg:px-8"
      }`}>
        {/* Header with title and fullscreen toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className={`font-extrabold text-indigo-600 ${
            isFullScreen ? "text-4xl" : "text-3xl"
          }`}>
            KUSAIDIA Pitch Deck
          </h2>
          <button
            onClick={toggleFullScreen}
            className="p-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors"
            aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullScreen ? <FaCompressAlt size={20} /> : <FaExpandAlt size={20} />}
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-200 rounded-full mb-6">
          <div 
            className="h-1 bg-indigo-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        <div className="relative">
          {/* Current slide number */}
          {/* <div className="absolute -top-8 right-0 text-sm text-gray-500 font-medium">
            {currentSlide + 1} / {slides.length}
          </div> */}

          {/* Slide Content */}
          <div
            className={`rounded-xl shadow-xl overflow-hidden transition-all duration-500 flex flex-col ${
              isFullScreen ? "h-[calc(100vh-200px)]" : "h-[500px]"
            } ${slides[currentSlide].bgColor}`}
          >
            <div className="p-6 md:p-10 flex-grow overflow-auto">
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between pointer-events-none px-4">
            <button
              onClick={() => currentSlide > 0 && setCurrentSlide((prev) => prev - 1)}
              className={`p-3 rounded-full shadow-lg pointer-events-auto transition-all ${
                currentSlide > 0 
                  ? "bg-white text-indigo-600 opacity-80 hover:opacity-100 hover:bg-indigo-50" 
                  : "opacity-0 cursor-default"
              }`}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={() => currentSlide < slides.length - 1 && setCurrentSlide((prev) => prev + 1)}
              className={`p-3 rounded-full shadow-lg pointer-events-auto transition-all ${
                currentSlide < slides.length - 1 
                  ? "bg-white text-indigo-600 opacity-80 hover:opacity-100 hover:bg-indigo-50" 
                  : "opacity-0 cursor-default"
              }`}
              disabled={currentSlide === slides.length - 1}
              aria-label="Next slide"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
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
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        </div>

        {/* Slide title */}
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">{slides[currentSlide].title}</h3>
        </div>

        {/* Fullscreen instructions */}
        {isFullScreen && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
            Press <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-700">Esc</kbd> to exit fullscreen
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
            <AccordionTrigger
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-t-xl p-6 transition-all duration-300"
            >
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
                    <h4 className="text-lg font-semibold text-indigo-700">1. Initial Review</h4>
                    <p className="text-gray-700 mt-2">When a project enters "pending_review" status, carefully examine:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Project description and goals for clarity and feasibility</li>
                      <li>Organization credentials and history</li>
                      <li>Location and beneficiary information for accuracy</li>
                      <li>Contact information for completeness</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">2. Success Metrics Validation</h4>
                    <p className="text-gray-700 mt-2">Strong success metrics should be:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Specific and measurable (e.g., "500 students will have access to clean water")</li>
                      <li>Relevant to the project goals</li>
                      <li>Achievable within the project scope and timeline</li>
                      <li>Time-bound with clear deadlines</li>
                    </ul>
                    <p className="mt-3 text-amber-700 font-medium italic">Edit vague metrics to be concrete before approval.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">3. Impact Assessment Review</h4>
                    <p className="text-gray-700 mt-2">Effective impact assessment methods should describe:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Data collection techniques (surveys, interviews, observations)</li>
                      <li>Frequency of measurement (e.g., baseline, midpoint, completion)</li>
                      <li>Who will be conducting the assessment</li>
                      <li>How results will be reported and verified</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">4. Milestone Evaluation</h4>
                    <p className="text-gray-700 mt-2">Check that each milestone:</p>
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
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Setting Fees</h3>
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">Vetting Fee Guidelines</h4>
                    <p className="text-gray-700 mt-2">When setting vetting fees, consider:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Project complexity (more complex = more vetting)</li>
                      <li>Typical range: 1-3% of total project budget</li>
                      <li>Higher risk projects may warrant higher fees</li>
                      <li>First-time organizations may need deeper checks</li>
                    </ul>
                    <p className="mt-3 text-blue-700 font-medium italic">Higher fees may extend fundraising timelines.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">Insurance Fee Guidelines</h4>
                    <p className="text-gray-700 mt-2">Apply insurance fees when:</p>
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
                    <h4 className="text-lg font-semibold text-amber-800">Important Note on Fee Changes</h4>
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
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Blockchain Management</h3>
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">Registration Process</h4>
                    <p className="text-gray-700 mt-2">Post-approval, projects auto-register on the blockchain:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li><code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">register_project_on_blockchain</code> creates the record</li>
                      <li><code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">blockchain_tx_hash</code> is populated on success</li>
                      <li><code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">contract_address</code> follows after confirmation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">Troubleshooting Registration Issues</h4>
                    <p className="text-gray-700 mt-2">If registration fails:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Verify organization’s <code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">wallet_address</code></li>
                      <li>Check blockchain network connectivity</li>
                      <li>Ensure contract registry is deployed</li>
                      <li>Inspect transaction status on the explorer</li>
                    </ul>
                    <p className="mt-3 text-blue-700 font-medium italic">Manually trigger via "Register on Blockchain" button.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-indigo-700">Milestone Registration</h4>
                    <p className="text-gray-700 mt-2">Milestones register post-project setup:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                      <li>Vendors need valid wallet addresses</li>
                      <li><code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">register_project_milestones</code> handles this</li>
                      <li>Purchase orders are generated</li>
                      <li><code className="text-indigo-700 bg-indigo-50 rounded-md px-1 py-0.5">blockchain_tx_hash</code> populates on success</li>
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

  useEffect(() => {
    if (!loaded) {
      const count = trackVisitor("about");
      setVisitorCount(count);
      setLoaded(true);
    }
  }, [loaded]);

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
