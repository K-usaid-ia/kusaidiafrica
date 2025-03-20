// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import { getDatabase, ref, onValue, increment, set } from 'firebase/database';

// Your Firebase configuration
// Replace with your actual Firebase project config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics with a check for browser support
let analytics = null;
let database = null;

// Initialize services if we're in the browser
if (typeof window !== 'undefined') {
  // Initialize Analytics
  isSupported().then(yes => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
  
  // Initialize Realtime Database
  database = getDatabase(app);
}

// Track a page visit and update counter
export const trackVisitor = async (pageName) => {
  if (!database) return 0;
  
  // Log the page view to Analytics
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_path: window.location.pathname,
      page_title: pageName
    });
  }
  
  // Update visitor count in the Realtime Database
  const countRef = ref(database, 'visitorCount');
  
  // First get the current count
  let currentCount = 0;
  
  try {
    // Create a promise to get the current value
    const getCountPromise = new Promise((resolve) => {
      onValue(countRef, (snapshot) => {
        const data = snapshot.val();
        resolve(data || 0);
      }, { onlyOnce: true });
    });
    
    // Wait for the count
    currentCount = await getCountPromise;
    
    // Increment the count
    const newCount = Number(currentCount) + 1;
    await set(countRef, newCount);
    
    return newCount;
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return currentCount;
  }
};

// Get the current visitor count without incrementing
export const getVisitorCount = async () => {
  if (!database) return 0;
  
  const countRef = ref(database, 'visitorCount');
  
  try {
    // Create a promise to get the current value
    const getCountPromise = new Promise((resolve) => {
      onValue(countRef, (snapshot) => {
        const data = snapshot.val();
        resolve(data || 0);
      }, { onlyOnce: true });
    });
    
    // Wait for the count and return it
    return await getCountPromise;
  } catch (error) {
    console.error("Error getting visitor count:", error);
    return 0;
  }
};

export { analytics, database };