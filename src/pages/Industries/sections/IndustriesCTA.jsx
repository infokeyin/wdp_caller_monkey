import React from 'react';
import CTASection from '@components/organisms/CTASection';

function IndustriesCTA() {
  return (
    <CTASection
      headline="Your industry has unique challenges. Let us show you how we handle them."
      sub="A 30-minute walkthrough customised to your business. No generic demos. No jargon. Just a clear picture of what changes for you."
      primaryText="Book a Free Walkthrough"
      primaryTo="/get-started#demo-form"
      whatsappCta
      variant="green"
    />
  );
}

export default IndustriesCTA;
