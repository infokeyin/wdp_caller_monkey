import React from 'react';
import PageLayout from '@components/layout/PageLayout';
import { seoData } from '@data/seo';

import WorksWithHero          from './sections/WorksWithHero';
import WorksWithHub           from './sections/WorksWithHub';
import WorksWithList          from './sections/WorksWithList';
import WorksWithHowItConnects from './sections/WorksWithHowItConnects';
import WorksWithCTA           from './sections/WorksWithCTA';

function WorksWith() {
  const { title, description } = seoData.integrations;
  return (
    <PageLayout title={title} description={description}>
      <WorksWithHero />
      <WorksWithHub />
      <WorksWithList />
      <WorksWithHowItConnects />
      <WorksWithCTA />
    </PageLayout>
  );
}

export default WorksWith;
