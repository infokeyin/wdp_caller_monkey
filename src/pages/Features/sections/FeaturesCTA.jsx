import React from 'react';
import CTASection from '@components/organisms/CTASection';

function FeaturesCTA() {
  return (
    <CTASection
      headline="Ready to see it running for your business?"
      sub="Pick one feature and see how it would work in your industry. We will show you a live walkthrough in 30 minutes."
      primaryText="Get a Free Demo"
      primaryTo="/get-started#demo-form"
      secondaryText="See Which Industries We Serve"
      secondaryTo="/industries"
      variant="green"
    />
  );
}

export default FeaturesCTA;
