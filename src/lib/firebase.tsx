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
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
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
let database: Database | null = null;
if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL) {
  database = getDatabase(app);
}

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
    if (database) {
      const countRef = ref(database, 'visitorCount');
      const snapshot = await get(countRef);
      const currentCount = snapshot.val() || 0;
      const newCount = currentCount + 1;
      await set(countRef, newCount);
      return newCount;
    }
    return 0;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return 0;
  }
};

// Track page view without incrementing visitor count
export const trackPageView = async (pageName: string): Promise<number> => {
  try {
    // Log page view to Analytics
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path: window.location.pathname,
        page_title: pageName,
      });
    }
    
    // Track page views in database
    if (database) {
      const pageViewsRef = ref(database, 'pageViews');
      const snapshot = await get(pageViewsRef);
      const currentViews = snapshot.val() || 0;
      const newViews = currentViews + 1;
      await set(pageViewsRef, newViews);
      return newViews;
    }
    return 0;
  } catch (error) {
    console.error('Error tracking page view:', error);
    return 0;
  }
};

export const getVisitorCount = async (): Promise<number> => {
  try {
    if (database) {
      const countRef = ref(database, 'visitorCount');
      const snapshot = await get(countRef);
      return snapshot.val() || 0;
    }
    return 0;
  } catch (error) {
    console.error('Error getting visitor count:', error);
    return 0;
  }
};

export const getPageViewsCount = async (): Promise<number> => {
  try {
    if (database) {
      const pageViewsRef = ref(database, 'pageViews');
      const snapshot = await get(pageViewsRef);
      return snapshot.val() || 0;
    }
    return 0;
  } catch (error) {
    console.error('Error getting page views count:', error);
    return 0;
  }
};

export { analytics, database };