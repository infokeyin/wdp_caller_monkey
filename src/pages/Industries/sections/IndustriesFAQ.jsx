import React from 'react';
import FAQSection from '@components/organisms/FAQSection';

const FAQS = [
  {
    question: 'Can Caller Monkey be trained specifically for my industry?',
    answer: 'Yes. Every deployment is trained on your specific business: your products, your pricing, your scripts, your objection responses, and your communication style. The AI does not use a generic script.',
  },
  {
    question: 'Does it work for businesses with seasonal demand spikes?',
    answer: 'Yes. Caller Monkey scales instantly with your call volume — there are no capacity limits. During peak periods such as festive sales, tax season, or academic admissions, the system handles 10× normal volume without any additional setup.',
  },
  {
    question: 'Can it manage multiple branches or locations?',
    answer: 'Yes. Caller Monkey supports multi-location businesses. Calls can be routed based on the customer\'s city or region, and each location\'s performance is tracked separately in the dashboard.',
  },
  {
    question: 'We have a very specific follow-up sequence. Can Caller Monkey follow it?',
    answer: 'Yes. You define the follow-up cadence: number of attempts, time gaps, escalation rules, and what happens if there is no response. The system follows your sequence exactly.',
  },
  {
    question: 'Our customers speak multiple languages across regions. Can it handle that?',
    answer: 'Yes. Caller Monkey supports 15+ Indian languages. Language can be set per customer, per region, or per campaign. Hinglish, Hindi, Tamil, Telugu, Marathi, Gujarati, Bengali, Punjabi, and more are all supported.',
  },
  {
    question: 'We are a small business with fewer than 10 people. Is it right for us?',
    answer: 'Yes. Caller Monkey is especially effective for small businesses because it multiplies the output of a small team without adding headcount. Many of our customers are solo founders or teams of 2–5 people.',
  },
];

function IndustriesFAQ() {
  return (
    <FAQSection
      headline="Questions About Your Industry"
      intro="Common questions from businesses across different sectors."
      faqs={FAQS}
      variant="alt"
    />
  );
}

export default IndustriesFAQ;
