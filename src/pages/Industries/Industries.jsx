import PageLayout from '@components/layout/PageLayout';
import { seoData } from '@data/seo';

import IndustriesHero from './sections/IndustriesHero';
import IndustriesGrid from './sections/IndustriesGrid';
import IndustriesUseCases from './sections/IndustriesUseCases';
import IndustriesFAQ from './sections/IndustriesFAQ';
import IndustriesCTA from './sections/IndustriesCTA';

function Industries() {
  const { title, description } = seoData.industries;
  return (
    <PageLayout title={title} description={description}>
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesUseCases />
      <IndustriesFAQ />
      <IndustriesCTA />
    </PageLayout>
  );
}

export default Industries;
