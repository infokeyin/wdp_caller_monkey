/**
 * analytics.js
 * Thin wrapper around window.gtag. All tracking calls go through here.
 * No-op when GA is not loaded or flags.enableAnalytics is false.
 *
 * Usage:
 *   import { track } from '@utils/analytics';
 *   track('demo_form_submit', { industry: 'healthcare', company_size: '11-50' });
 */
export const track = (event, props = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, props);
  }
};
