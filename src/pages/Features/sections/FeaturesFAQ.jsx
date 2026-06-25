import FAQSection from '@components/organisms/FAQSection';

const FAQS = [
  {
    question: 'Does AI calling sound robotic?',
    answer:
      'No. Caller Monkey uses advanced voice AI trained on natural conversation patterns. Callers consistently describe it as clear, professional, and easy to understand — not robotic. We can also customise the voice style, pace, and tone to match your brand.',
  },
  {
    question: 'Which languages does it support?',
    answer:
      'Caller Monkey communicates in 70+ languages including Hindi, Hinglish, Punjabi, Marathi, Tamil, Telugu, Kannada, Bengali, Gujarati, Malayalam, Odia, and many more. Language can be selected per customer or per campaign.',
  },
  {
    question: 'How does it integrate with my CRM?',
    answer:
      'We handle all CRM integration as part of your setup. Caller Monkey connects with Salesforce, Zoho CRM, Freshsales, HubSpot, Leadsquared, and custom CRMs via API. Every call, outcome, and follow-up is logged automatically without any manual entry.',
  },
  {
    question: 'Can it handle inbound calls as well as outbound?',
    answer:
      'Yes. Caller Monkey handles both inbound and outbound calls. For inbound, it can answer, qualify, route, take messages, or book appointments — automatically. Your existing business phone number continues to work.',
  },
  {
    question: 'What happens when a customer wants to speak to a human?',
    answer:
      "Caller Monkey detects intent and transfers to a human agent instantly. The agent receives a live summary of the conversation so they don't need to ask the customer to repeat anything.",
  },
  {
    question: 'How does pricing work?',
    answer:
      'AI voice calling is very economical — no monthly retainers, no lock-in contracts. You pay for what you use. Setup is a one-time fee. WhatsApp, email automation, and CRM integration are bundled based on your selected plan.',
  },
  {
    question: 'Do I need a technical team to set this up?',
    answer:
      'No. We handle everything: number porting or new number provisioning, CRM integration, WhatsApp Business API setup, script writing, and training. You approve the scripts and we go live. Most businesses are live within 15 working days.',
  },
  {
    question: 'Can I customise what the AI says?',
    answer:
      'Yes. You supply your scripts, FAQs, objection responses, and communication style. Our team trains the AI to sound like your best salesperson. Scripts can be updated any time.',
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
