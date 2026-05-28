import React from 'react';
import PageLayout from '@components/layout/PageLayout';
import { seoData } from '@data/seo';

import GetStartedHero    from './sections/GetStartedHero';
import GetStartedPlans   from './sections/GetStartedPlans';
import GetStartedHowLive from './sections/GetStartedHowLive';
import GetStartedForm    from './sections/GetStartedForm';
import GetStartedFAQ     from './sections/GetStartedFAQ';
import GetStartedWhatsApp from './sections/GetStartedWhatsApp';

function GetStarted() {
  const { title, description } = seoData.getStarted;
  return (
    <PageLayout title={title} description={description}>
      <GetStartedHero />
      <GetStartedPlans />
      <GetStartedHowLive />
      <GetStartedForm />
      <GetStartedFAQ />
      <GetStartedWhatsApp />
    </PageLayout>
  );
}

export default GetStarted;
