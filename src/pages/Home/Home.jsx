import React from 'react';
import PageLayout from '@components/layout/PageLayout';
import { seoData } from '@data/seo';

import HomeHero            from './sections/HomeHero';
import HomeTrustBar        from './sections/HomeTrustBar';
import HomeProblem         from './sections/HomeProblem';
import HomeWhatItDoes      from './sections/HomeWhatItDoes';
import HomeEnterpriseMeasures from './sections/HomeEnterpriseMeasures';
import HomeResults         from './sections/HomeResults';
import HomeVelocity        from './sections/HomeVelocity';
import HomeCTA             from './sections/HomeCTA';

function Home() {
  const { title, description } = seoData.home;
  return (
    <PageLayout title={title} description={description}>
      <HomeHero />
      <HomeTrustBar />
      <HomeProblem />
      <HomeWhatItDoes />
      <HomeEnterpriseMeasures />
      <HomeResults />
      <HomeVelocity />
      <HomeCTA />
    </PageLayout>
  );
}

export default Home;
