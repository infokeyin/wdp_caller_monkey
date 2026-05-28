import React from 'react';
import PageLayout from '@components/layout/PageLayout';
import { seoData } from '@data/seo';

import HomeHero            from './sections/HomeHero';
import HomeTrustBar        from './sections/HomeTrustBar';
import HomeProblem         from './sections/HomeProblem';
import HomeWhatItDoes      from './sections/HomeWhatItDoes';
import HomeConnectsTeaser  from './sections/HomeConnectsTeaser';
import HomeResults         from './sections/HomeResults';
import HomeCTA             from './sections/HomeCTA';

function Home() {
  const { title, description } = seoData.home;
  return (
    <PageLayout title={title} description={description}>
      <HomeHero />
      <HomeTrustBar />
      <HomeProblem />
      <HomeWhatItDoes />
      <HomeConnectsTeaser />
      <HomeResults />
      <HomeCTA />
    </PageLayout>
  );
}

export default Home;
