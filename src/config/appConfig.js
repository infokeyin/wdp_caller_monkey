/**
 * appConfig.js
 *
 * Single source of truth for everything that varies between environments
 * or that the client/team will update closer to launch.
 *
 * Anything in here updates the whole site from one place — contact details,
 * social links, brand info, the Web3Forms access key, routes.
 *
 * Do NOT hard-code these values anywhere else. Always import from here:
 *   import appConfig from '@config/appConfig';
 */

export const appConfig = {
  brand: {
    name: 'Caller Monkey',
    tagline: 'Scale Communication. Protect Revenue. Grow Without Limits.',
    domain: 'callermonkey.in',
    url: 'https://callermonkey.in',
  },

  contactInfo: {
    // Replace placeholders before launch.
    email: 'email@callermonkey.in',
    phone: '+91 99999 XXXXX',
    whatsapp: '9199999XXXXX', // digits-only, used for wa.me/{digits}
    address: {
      line1: '',
      line2: '',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '1100XX',
      country: 'India',
    },
  },

  social: {
    // Fill in the actual handles before launch. Empty string => link hidden in footer.
    linkedin: '',
    instagram: '',
    youtube: '',
    whatsapp: '', // public WhatsApp Business catalogue link (different from contactInfo.whatsapp which is the click-to-chat number)
    twitter: '',
  },

  forms: {
    // Replace with the real Web3Forms access key before going live.
    // Get one (free) at https://web3forms.com
    web3FormsAccessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY',
    // Web3Forms endpoint — leave as-is unless the service changes.
    endpoint: 'https://api.web3forms.com/submit',
    // Min seconds the form must be visible before submission is accepted (anti-bot).
    minTimeOnFormSeconds: 2,
  },

  routes: {
    home: '/',
    features: '/features',
    integrations: '/integrations',
    industries: '/industries',
    getStarted: '/get-started',
    // Demo form anchor lives on the Get Started page.
    demoForm: '/get-started#demo-form',
  },

  // SEO defaults — per-page overrides live in src/data/seo.js
  seoDefaults: {
    siteName: 'Caller Monkey',
    ogImage: '/og-image.png',
    twitterHandle: '', // add once active
    locale: 'en_IN',
  },

  // Feature flags — flip on/off without touching components.
  flags: {
    showWhatsAppBubble: true,
    showScrollToTopFab: true,
    showFooterNewsletter: true,
    enableAnalytics: false, // flip to true once GA/Plausible is wired
  },

  // Analytics IDs — wired in only when flags.enableAnalytics === true.
  analytics: {
    gaMeasurementId: '', // e.g. 'G-XXXXXXX'
    plausibleDomain: '', // e.g. 'callermonkey.in'
  },

  developer: {
    name: 'Infokey',
    url: 'https://infokey.in',
  },
};

export default appConfig;
