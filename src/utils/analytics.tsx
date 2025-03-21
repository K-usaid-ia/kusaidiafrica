// src/utils/analytics.ts
import { logEvent } from 'firebase/analytics';
import { analytics, trackVisitor } from '@/lib/firebase';

/**
 * Track a specific user action
 * @param {string} eventName - The name of the event to track
 * @param {Object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  // Only track if analytics is initialized
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

/**
 * Track page view and visitor count
 * @param {string} pageName - The name of the page being viewed
 * @returns {Promise<number>} - The updated visitor count
 */
export const trackPageView = async (pageName: string): Promise<number> => {
  // Track the page view and get the updated count
  const count = await trackVisitor(pageName);
  return count;
};

/**
 * Track a button click
 * @param {string} buttonName - The name/identifier of the button
 * @param {string} location - Where the button is located (e.g., 'homepage', 'navbar')
 */
export const trackButtonClick = (buttonName: string, location: string): void => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location
  });
};

/**
 * Track a wallet connection attempt
 * @param {boolean} success - Whether the connection was successful
 * @param {string} walletType - The type of wallet (e.g., 'metamask', 'walletconnect')
 * @param {string} error - Error message if the connection failed
 */
export const trackWalletConnection = (success: boolean, walletType: string, error: string | null = null): void => {
  trackEvent('wallet_connection', {
    success,
    wallet_type: walletType,
    error: error
  });
};

/**
 * Track a project view
 * @param {string} projectId - The ID of the project being viewed
 * @param {string} projectName - The name of the project
 */
export const trackProjectView = (projectId: string, projectName: string): void => {
  trackEvent('project_view', {
    project_id: projectId,
    project_name: projectName
  });
};

/**
 * Track a donation
 * @param {string} projectId - The ID of the project receiving the donation
 * @param {number} amount - The amount donated
 * @param {string} currency - The currency of the donation
 */
export const trackDonation = (projectId: string, amount: number, currency: string = 'ETH'): void => {
  trackEvent('donation', {
    project_id: projectId,
    amount,
    currency
  });
};