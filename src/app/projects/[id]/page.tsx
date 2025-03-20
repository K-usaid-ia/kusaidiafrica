// src/app/projects/[id]/page.tsx
"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projectsApi } from '@/utils/api';
import { useAuth } from '@/features/auth/AuthContext';
import AppLayout from "@/components/layout/AppLayout";
import GasFeeInfo from '@/components/common/GasFeeInfo';
import { useClientSideFormatting } from '@/app/hooks/useClientSideFormatting';
import RoleActionButton from '@/components/RoleActionButton'; 

import Image from "next/image";
import {
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon,
  DocumentTextIcon,
  LinkIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

// Define the component interfaces
interface Milestone {
  id: number;
  title: string;
  description: string;
  amount: number;
  due_date: string;
  completed: boolean;
  completion_date?: string;
  vendor?: {
    id: number;
    name: string;
  };
}

interface Project {
  id: number;
  title: string;
  description: string;
  budget: number;
  location: string;
  status: string;
  timeline_start: string;
  timeline_end: string;
  contract_address: string | null;
  wallet_address: string | null;
  organization: {
    id: number;
    username: string;
  };
  beneficiary_community: string;
  beneficiary_count: number;
  current_funds: number;
  total_funding_goal: number;
  funding_percentage: number;
  success_metrics: string[];
  impact_assessment_method: string;
  milestones: Milestone[];
  featured_image?: string;
}

// DonationSuccess component to show successful donations
function DonationSuccess({ 
  amount, 
  projectTitle, 
  transactionHash 
}: { 
  amount: number; 
  projectTitle: string; 
  transactionHash?: string;
}) {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
      <div className="flex items-center">
        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
        <h3 className="text-green-800 font-medium text-lg">Thank you for your donation!</h3>
      </div>
      <p className="mt-2 text-green-700">
        Your contribution of ${amount.toFixed(2)} to {projectTitle} will help make a difference.
      </p>
      {transactionHash && (
        <div className="mt-2 text-xs">
          <span className="text-green-700 font-medium">Transaction ID: </span>
          <a 
            href={`https://explorer.celo.org/tx/${transactionHash}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-800 font-mono break-all underline"
          >
            {transactionHash}
          </a>
        </div>
      )}
    </div>
  );
}

// ProjectProgress component to show funding progress
function ProjectProgress({ 
  current, 
  total, 
  percentage 
}: { 
  current: number; 
  total: number; 
  percentage: number;
}) {
  const { formatCurrency, formatDate, isMounted } = useClientSideFormatting();
    // Convert all inputs to numbers to ensure proper handling
    const safePercentage = typeof percentage === 'string' ? parseFloat(percentage) : (percentage || 0);
    const safeCurrent = typeof current === 'string' ? parseFloat(current) : (current || 0);
    const safeTotal = typeof total === 'string' ? parseFloat(total) : (total || 0);
  

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 font-medium">Funding Progress</span>
          <span className="text-indigo-600 font-medium">
            {!isNaN(safePercentage) ? `${safePercentage.toFixed(1)}% Complete` : '0% Complete'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full" 
            style={{ width: `${Math.min(safePercentage, 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span className="text-gray-600">Raised: ${safeCurrent.toLocaleString()}</span>
          <span className="text-gray-600">Goal: {formatCurrency(safeTotal)}</span>
        </div>
      </div>
    );
  }
  
export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { isAuthenticated, connectWallet } = useAuth();
  
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [donationAmount, setDonationAmount] = useState<number>(10);
  const [donating, setDonating] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [coverServiceFee, setCoverServiceFee] = useState<boolean>(true);
  const [donationStatus, setDonationStatus] = useState<{
    success: boolean;
    amount: number;
    transactionHash?: string;
  } | null>(null);

  const SERVICE_FEE_PERCENTAGE = 0.02; // 2%

  // Helper functions for donation calculations
  const calculateServiceFee = (amount: number): number => {
    return parseFloat((amount * SERVICE_FEE_PERCENTAGE).toFixed(2));
  };

  const calculateTotalAmount = (): number => {
    const serviceFee = calculateServiceFee(donationAmount);
    return coverServiceFee ? donationAmount + serviceFee : donationAmount;
  };

  const calculateProjectAmount = (): number => {
    const serviceFee = calculateServiceFee(donationAmount);
    return coverServiceFee ? donationAmount : donationAmount - serviceFee;
  };

  // Format dates to be more readable
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format currency values
  const formatCurrency = (value: number): string => {
    return `$${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await projectsApi.getById(id as string);
        console.log("Project data received:", data); 
        setProject(data);
      } catch (error) {
        console.error('Failed to fetch project details:', error);
        toast.error('Could not load project details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  // Handle donation submission
  const handleDonate = async () => {
    if (!isAuthenticated) {
      connectWallet();
      return;
    }

    if (!project || donationAmount <= 0) return;

    setDonating(true);
    try {
      // Pass the additional fee information to the API
      const response = await projectsApi.donate(
        project.id.toString(), 
        donationAmount,
        {
          service_fee: calculateServiceFee(donationAmount),
          total_amount: calculateTotalAmount(),
          project_amount: calculateProjectAmount(),
          donor_covered_fee: coverServiceFee
        }
      );
      
      setDonationStatus({
        success: true,
        amount: donationAmount,
        transactionHash: response.transaction_hash
      });
      
      setDonationSuccess(true);
      
      // Reset after success
      setTimeout(() => {
        setDonationSuccess(false);
        setDonationAmount(10);
        setCoverServiceFee(true);
      }, 5000);

      // Refresh project data to show updated funding
      const updatedProject = await projectsApi.getById(id as string);
      setProject(updatedProject);
    } catch (error) {
      console.error('Donation failed:', error);
      toast.error('Donation failed. Please try again.');
      setDonationStatus({
        success: false,
        amount: donationAmount
      });
    } finally {
      setDonating(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <AppLayout>
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      </AppLayout>
    );
  }

  // Not found state
  if (!project) {
    return (
      <AppLayout>
        <div className="text-center p-8">
          <h2 className="text-xl font-medium text-gray-900">Project not found</h2>
          <p className="mt-2 text-gray-500">The project you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => router.push('/projects')}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            View All Projects
          </button>
        </div>
      </AppLayout>
    );
  }

  // Get status badge color
  const getStatusColor = (status: string) => {
    const colors = {
      draft: "bg-gray-200 text-gray-800",
      pending_review: "bg-yellow-100 text-yellow-800",
      approved: "bg-blue-100 text-blue-800",
      active: "bg-green-100 text-green-800",
      completed: "bg-indigo-100 text-indigo-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status as keyof typeof colors] || colors.draft;
  };

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          {project.featured_image && (
            <div className="h-64 w-full relative">
              <Image 
                src={project.featured_image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <div className="flex items-center mt-2">
                  <MapPinIcon className="h-5 w-5 mr-1" />
                  <p>{project.location}</p>
                </div>
              </div>
            </div>
          )}
          
          {!project.featured_image && (
            <div className="bg-gradient-to-r from-indigo-700 to-purple-600 p-6">
              <h1 className="text-3xl font-bold text-white">{project.title}</h1>
              <div className="flex items-center mt-2 text-white">
                <MapPinIcon className="h-5 w-5 mr-1" />
                <p>{project.location}</p>
              </div>
            </div>
          )}
          
          {/* Project Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200 bg-gray-50">
            <div className="p-4 border-r border-gray-200">
              <p className="text-sm text-gray-500">Status</p>
              <div className="mt-1">
                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(project.status)}`}>
                  {project.status.replace('_', ' ')}
                </span>
              </div>
            </div>
            <div className="p-4 border-r border-gray-200">
              <p className="text-sm text-gray-500">Timeline</p>
              <p className="text-gray-700 font-medium mt-1">
                {formatDate(project.timeline_start)} - {formatDate(project.timeline_end)}
              </p>
            </div>
            <div className="p-4 border-r border-gray-200">
              <p className="text-sm text-gray-500">Budget</p>
              <p className=" text-gray-700 font-medium mt-1">{formatCurrency(project.budget)}</p>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700">Beneficiaries</p>
              <p className="text-gray-700 font-medium mt-1">{project.beneficiary_count}</p>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Description */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Project</h2>
              <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
            </div>
            
            {/* Success Metrics & Impact Assessment */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Impact & Success Metrics</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-indigo-500 mr-2" />
                  Success Metrics
                </h3>
                <ul className="mt-2 pl-5 list-disc text-gray-700">
            
                  {project.success_metrics && Array.isArray(project.success_metrics) && project.success_metrics.length > 0 ? (
                    project.success_metrics.map((metric, index) => (
                      <li key={index} className="mt-1">{metric}</li>
                    ))
                  ) : (
                    <li>No success metrics defined for this project</li>
                  )}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 flex items-center">
                  <DocumentTextIcon className="h-5 w-5 text-indigo-500 mr-2" />
                  Impact Assessment Method
                </h3>
                <p className="mt-2 text-gray-700">{project.impact_assessment_method}</p>
              </div>
            </div>
            
            {/* Project Milestones */}
            {project.milestones && project.milestones.length > 0 && (
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Milestones</h2>
                
                <div className="border-l-2 border-indigo-200 pl-5 space-y-8 ml-2">
                  {project.milestones.map((milestone, index) => (
                    <div key={milestone.id} className="relative">
                      <div className={`absolute -left-7 mt-1.5 w-3 h-3 rounded-full border-2 border-indigo-600 ${
                        milestone.completed ? 'bg-indigo-600' : 'bg-white'
                      }`}></div>
                      
                      <div className={`p-4 rounded-lg border ${
                        milestone.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-900">{milestone.title}</h3>
                            <div className="text-sm text-gray-500 mt-1 flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              Due: {formatDate(milestone.due_date)}
                              {milestone.completion_date && (
                                <span className="ml-3 text-green-600 flex items-center">
                                  <CheckCircleIcon className="h-4 w-4 mr-1" />
                                  Completed: {formatDate(milestone.completion_date)}
                                </span>
                              )}
                            </div>
                            {milestone.vendor && (
                              <div className="text-sm text-gray-500 mt-1 flex items-center">
                                <UserGroupIcon className="h-4 w-4 mr-1" />
                                Vendor: {milestone.vendor.name}
                              </div>
                            )}
                            <p className="mt-2 text-gray-700">{milestone.description}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-medium text-gray-900">{formatCurrency(milestone.amount)}</span>
                            <span className={`mt-1 text-xs px-2 py-1 rounded-full ${
                              milestone.completed 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {milestone.completed ? 'Completed' : 'In Progress'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Blockchain Verification */}
            {project.contract_address && (
              <div className="bg-blue-50 shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 mr-2 text-blue-700" />
                  Blockchain Verification
                </h2>
                <p className="text-blue-700 mb-4">
                  This project is securely tracked on the blockchain, ensuring complete transparency and 
                  accountability for all funds and milestone completions.
                </p>
                
                <div className="bg-white rounded-md p-3 border border-blue-200">
                  <p className="text-sm text-gray-700 mb-1">Smart Contract Address:</p>
                  <a 
                    href={`https://explorer.celo.org/address/${project.contract_address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-blue-600 hover:underline break-all"
                  >
                    {project.contract_address}
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Donation and Info */}
          <div className="space-y-6">
            {/* Donation Success Message */}
            {donationStatus && donationStatus.success && (
              <DonationSuccess 
                amount={donationStatus.amount}
                projectTitle={project.title}
                transactionHash={donationStatus.transactionHash}
              />
            )}
            
            {/* Funding Progress */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <ProjectProgress 
                current={project.current_funds} 
                total={project.total_funding_goal} 
                percentage={project.funding_percentage} 
              />
              
              {/* Organization */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-500 text-sm">Organized by</p>
                <p className="font-medium text-gray-900 mt-1">{project.organization.username}</p>
              </div>
              
              {/* Donation Form */}
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Support This Project</h2>
              
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Donation Amount (USD)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    min="1"
                  />
                </div>
              </div>
              
              {/* Service Fee Option */}
              <div className="mb-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="coverFee"
                      name="coverFee"
                      type="checkbox"
                      checked={coverServiceFee}
                      onChange={(e) => setCoverServiceFee(e.target.checked)}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="coverFee" className="font-medium text-gray-700">
                      Cover the 2% platform fee
                    </label>
                    <p className="text-gray-500">Ensures 100% of your donation goes to the project</p>
                  </div>
                </div>
              </div>
              
              {/* Fee Breakdown */}
              <div className="mb-6 p-4 bg-gray-50 rounded-md text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Donation to project:</span>
                  <span className="font-medium">${coverServiceFee ? donationAmount.toFixed(2) : calculateProjectAmount().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-600">Platform fee (2%):</span>
                  <span className="font-medium">${calculateServiceFee(donationAmount).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="text-gray-700 flex justify-between font-medium">
                  <span>Total amount:</span>
                  <span>${calculateTotalAmount().toFixed(2)}</span>
                </div>
              </div>
              
              {/* Donate Button */}
              <RoleActionButton
                requiredRole="donor"
                actionDescription="donate to this project"
                onClick={handleDonate}
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
              >
                {donating 
                  ? 'Processing...' 
                  : `Donate $${calculateTotalAmount().toFixed(2)}`}
              </RoleActionButton>
              
              {/* Gas Fee Info */}
              <div className="mt-2">
                <GasFeeInfo isCompact={true} />
              </div>
            </div>
            
            {/* Project Details Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-500">Beneficiary Community</h3>
                  <p className="font-medium text-gray-800">{project.beneficiary_community}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-500">Timeline</h3>
                  <div className="flex items-center mt-1">
                    <CalendarIcon className="h-5 w-5 text-gray-400 mr-1" />
                    <p className="font-medium text-gray-800">
                      {formatDate(project.timeline_start)} - {formatDate(project.timeline_end)}
                    </p>
                  </div>
                </div>
                
                {project.wallet_address && (
                  <div>
                    <h3 className="text-sm text-gray-500">Project Wallet</h3>
                    <p className="font-mono text-xs text-gray-800 break-all mt-1">{project.wallet_address}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Transparency Notice */}
            <div className="bg-green-50 shadow-md rounded-lg p-6">
              <div className="flex items-start">
                <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-green-800">Transparency Guarantee</h3>
                  <p className="mt-1 text-sm text-green-700">
                    All donations are recorded on the blockchain and funds are only released when milestones are 
                    verified as complete, ensuring full transparency and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}