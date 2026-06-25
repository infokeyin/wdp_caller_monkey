import FAQSection from '@components/organisms/FAQSection';

const FAQS = [
  {
    question: 'Does the Voice Agent sound robotic?',
    answer:
      'No. Caller Monkey uses advanced voice AI trained on natural conversation patterns. Callers consistently describe it as clear, professional and easy to understand. We customise the voice style, pace and tone to match your brand.',
  },
  {
    question: 'How does Meta and Google leads tracking work?',
    answer:
      'When a lead submits a Facebook, Instagram or Google Ads form, Caller Monkey captures it in real time and triggers an AI call within 2 minutes — before your competitors even see the notification. All outcomes sync to your CRM automatically.',
  },
  {
    question: 'Which languages does it support?',
    answer:
      'Caller Monkey communicates in 70+ languages including Hindi, Hinglish, Punjabi, Marathi, Tamil, Telugu, Kannada, Bengali, Gujarati, Malayalam, Odia, and many more. Language is selected per customer or per campaign.',
  },
  {
    question: 'How does CRM integration work?',
    answer:
      'We handle all CRM integration as part of setup. Caller Monkey connects with Salesforce, Zoho CRM, Freshsales, HubSpot, Leadsquared and custom CRMs via API. Every call, outcome and follow-up is logged automatically.',
  },
  {
    question: 'How does the Calendar Schedule feature work?',
    answer:
      'During a call the AI offers available slots and books an appointment directly into your connected calendar — Google Calendar, Calendly or your CRM calendar. A confirmation is sent to the customer instantly.',
  },
  {
    question: 'What is the Autocall function?',
    answer:
      "Autocall means the moment a new lead arrives — from any source — the system automatically dials them without any manual trigger. This ensures every lead is contacted in under 2 minutes, 24 hours a day, 7 days a week.",
  },
  {
    question: 'How does the Quotation and Payment Gateway work?',
    answer:
      'After a qualifying call, Caller Monkey auto-generates a quotation and sends it with a payment link via WhatsApp or email. The customer can pay immediately — no back-and-forth, no waiting for your team to follow up.',
  },
  {
    question: 'How does Pay as you Go pricing work?',
    answer:
      'There are no monthly retainers and no lock-in contracts. You pay based on actual usage — calls made, messages sent, leads processed. Scale up during peak seasons and scale down any time. Setup is a one-time fee.',
  },
];

function FeaturesFAQ() {
  return (
    <FAQSection
      headline="Questions About How It Works"
      intro="Answers to the most common questions from businesses evaluating Caller Monkey."
      faqs={FAQS}
      variant="default"
    />
  );
}

export default FeaturesFAQ;
