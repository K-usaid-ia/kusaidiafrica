import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent, Analytics } from 'firebase/analytics';
import { getDatabase, ref, get, set, Database } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics (client-side only)
let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

// Initialize Realtime Database
const database: Database = getDatabase(app);

// Track a page visit and update counter
export const trackVisitor = async (pageName: string): Promise<number> => {
  try {
    // Log page view to Analytics
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path: window.location.pathname,
        page_title: pageName,
      });
    }

    // Update visitor count in Realtime Database
    const countRef = ref(database, 'visitorCount');
    const snapshot = await get(countRef);
    const currentCount = snapshot.val() || 0;
    const newCount = currentCount + 1;
    await set(countRef, newCount);
    return newCount;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return 0;
  }
};

// Get the current visitor count without incrementing
export const getVisitorCount = async (): Promise<number> => {
  try {
    const countRef = ref(database, 'visitorCount');
    const snapshot = await get(countRef);
    return snapshot.val() || 0;
  } catch (error) {
    console.error('Error getting visitor count:', error);
    return 0;
  }
};

export { analytics, database };