"use client";
import { useState } from "react";
import { BellIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useAuth } from "@/features/auth/AuthContext";
import NotificationBell from '@/components/common/NotificationBell';

interface HeaderProps {
  onOpenSidebar: () => void;
}

const Header = ({ onOpenSidebar }: HeaderProps) => {
  const { isAuthenticated, user, wallet, connectWallet, disconnectWallet } = useAuth();

  // Format wallet address for display
  const formatWalletAddress = (address: string | null) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Left section with menu button and title */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden -ml-0.5 -mt-0.5 h-10 w-10 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={onOpenSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            
            {/* Page Title */}
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 ml-2 lg:ml-0">Dashboard</h1>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Notification Bell - Only show when authenticated */}
            {isAuthenticated && <NotificationBell />}

            {/* Wallet Connection */}
            {!isAuthenticated ? (
              <button
                type="button"
                onClick={connectWallet}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="hidden sm:inline-block text-sm font-medium text-gray-700">
                  {formatWalletAddress(wallet.address)}
                </span>
                <span className="sm:hidden text-sm font-medium text-gray-700">
                  {wallet.address ? `${wallet.address.slice(0, 4)}...` : ""}
                </span>
                <button
                  type="button"
                  onClick={disconnectWallet}
                  className="text-xs sm:text-sm text-red-600 hover:text-red-800"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="mt-1 sm:mt-2">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-1 sm:mx-2">/</span>
                <a href="#" className="hover:text-gray-700">
                  Dashboard
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;