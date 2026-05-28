import React from 'react';
import CTASection from '@components/organisms/CTASection';

function WorksWithCTA() {
  return (
    <CTASection
      headline="See all of this in a live walkthrough."
      sub="30 minutes. Your tools, your industry. We will show you exactly how Caller Monkey connects to the systems you already use."
      primaryText="Request a Live Walkthrough"
      primaryTo="/get-started#demo-form"
      secondaryText="See Which Industries We Serve"
      secondaryTo="/industries"
      variant="dark"
    />
  );
}

export default WorksWithCTA;
