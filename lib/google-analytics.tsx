'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Google Analytics tracking ID
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-VV9C03QMLN';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom hook to track page views
export const useGoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      // Get search params safely without causing SSR issues
      const searchParams = typeof window !== 'undefined' ? window.location.search : '';
      const url = pathname + searchParams;
      pageview(url);
    }
  }, [pathname]);
};

// Google Analytics component
export function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Page view tracker component
export function GoogleAnalyticsPageTracker() {
  useGoogleAnalytics();
  return null;
}

// Common event tracking functions
export const trackButtonClick = (buttonName: string, location?: string) => {
  event({
    action: 'click',
    category: 'engagement',
    label: `${buttonName}${location ? ` - ${location}` : ''}`,
  });
};

export const trackFormSubmission = (formName: string) => {
  event({
    action: 'submit',
    category: 'form',
    label: formName,
  });
};

export const trackPageSection = (sectionName: string) => {
  event({
    action: 'view',
    category: 'page_section',
    label: sectionName,
  });
};

export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'file',
    label: fileName,
  });
};

// Utility function to check if Google Analytics is loaded
export const isGoogleAnalyticsLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Debug function to test Google Analytics
export const testGoogleAnalytics = () => {
  if (typeof window !== 'undefined') {
    console.log('Google Analytics Status:', {
      isLoaded: isGoogleAnalyticsLoaded(),
      trackingId: GA_TRACKING_ID,
      dataLayer: window.dataLayer || 'Not found',
    });

    if (isGoogleAnalyticsLoaded()) {
      event({
        action: 'test',
        category: 'debug',
        label: 'Google Analytics Test Event',
      });
      console.log('Test event sent to Google Analytics');
    }
  }
};

// Extend the Window interface to include gtag and dataLayer
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}
