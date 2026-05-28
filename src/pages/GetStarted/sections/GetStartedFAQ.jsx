import React from 'react';
import FAQSection from '@components/organisms/FAQSection';

const FAQS = [
  {
    question: 'How long does it take to go live?',
    answer: '15 working days from the date you share your scripts, product details, and advance payment. Our team handles all setup, integration, testing, and training. You approve the scripts and we launch.',
  },
  {
    question: 'What do I need to provide to get started?',
    answer: 'Your call scripts or a description of how you talk to customers, your product or service details, common customer questions, and access credentials for your CRM and other tools you want to connect. We help you create the scripts if you do not have them.',
  },
  {
    question: 'What happens after the demo?',
    answer: 'We send a detailed proposal within 24 hours covering your recommended starting point, integration plan, script outline, timeline, and pricing. There is no obligation to proceed.',
  },
  {
    question: 'Is there a minimum commitment?',
    answer: 'No monthly contracts and no lock-in. AI calling is billed at ₹15 per minute — you pay only for what you use. The setup fee is a one-time cost. You can pause or stop at any time.',
  },
  {
    question: 'Can I start with just one feature?',
    answer: 'Yes. Many businesses start with just AI calling for lead follow-up and add CRM integration, WhatsApp automation, or attendance tracking as they grow. You are never required to use every feature.',
  },
  {
    question: 'Do I need to change my phone number?',
    answer: 'No. Caller Monkey works with your existing business phone number. No porting, no new SIM, no changes to how customers currently reach you.',
  },
];

function GetStartedFAQ() {
  return (
    <FAQSection
      headline="Before You Book"
      intro="Quick answers to questions most businesses ask before starting."
      faqs={FAQS}
      variant="default"
    />
  );
}

export default GetStartedFAQ;
