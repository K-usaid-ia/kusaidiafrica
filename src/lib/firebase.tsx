// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import { Database, getDatabase, ref, onValue, set } from 'firebase/database';
import { DataSnapshot } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics with a check for browser support
let analytics: Analytics | null = null;
let database: Database | null = null;

// Initialize services if we're in the browser
if (typeof window !== 'undefined') {
  // Initialize Analytics
  isSupported().then(yes => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
  
  // Initialize Realtime Database
  // database = getDatabase(app);
}

// Track a page visit and update counter
export const trackVisitor = async (pageName: string): Promise<number> => {
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
    const getCountPromise = new Promise<number>((resolve) => {
      onValue(countRef, (snapshot: DataSnapshot) => {
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
export const getVisitorCount = async (): Promise<number> => {
  if (!database) return 0;
  
  const countRef = ref(database, 'visitorCount');
  
  try {
    // Create a promise to get the current value
    const getCountPromise = new Promise<number>((resolve) => {
      onValue(countRef, (snapshot: DataSnapshot) => {
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