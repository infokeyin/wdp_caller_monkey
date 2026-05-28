import React from 'react';
import CTASection from '@components/organisms/CTASection';

function HomeCTA() {
  return (
    <CTASection
      headline="Let's find where communication is costing your business money."
      sub="A 30-minute walkthrough. No commitment. No jargon. Just a clear picture of where you are losing leads, time, and revenue — and what you can do about it."
      primaryText="Start the Conversation →"
      primaryTo="/get-started#demo-form"
      whatsappCta
      variant="dark"
    />
  );
}

export default HomeCTA;
