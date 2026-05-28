/**
 * whatsappMessages.js
 * Prefilled message text for each page's WhatsApp CTA.
 * Keyed by pathname. WhatsAppBubble uses useLocation() to pick the right one.
 * All messages are friendly and conversational.
 */
export const whatsappMessages = {
  '/': "Hi! I'd like to learn more about Caller Monkey and how it can help my business.",
  '/features':
    "Hi! I'd like to understand how Caller Monkey would work for my business. Can we set up a quick walkthrough?",
  '/integrations':
    "Hi! I'd like to see how Caller Monkey integrates with the tools I already use. Can we set up a demo?",
  '/industries':
    "Hi! I'd like to see how Caller Monkey works for my industry. Can we have a quick chat?",
  '/get-started':
    "Hi! I'd like to get started with Caller Monkey. Can someone from your team reach out?",
};

/** Fallback for any route not explicitly listed above. */
export const defaultWhatsappMessage =
  "Hi! I'd like to learn more about Caller Monkey and how it can help my business.";
