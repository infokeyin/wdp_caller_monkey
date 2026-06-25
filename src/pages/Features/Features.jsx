import PageLayout from '@components/layout/PageLayout';
import { seoData } from '@data/seo';

import FeaturesHero from './sections/FeaturesHero';
import FeaturesGrid from './sections/FeaturesGrid';
import FeaturesDeepDive from './sections/FeaturesDeepDive';
import FeaturesComparison from './sections/FeaturesComparison';
import FeaturesFAQ from './sections/FeaturesFAQ';
import FeaturesCTA from './sections/FeaturesCTA';

function Features() {
  const { title, description } = seoData.features;
  return (
    <PageLayout title={title} description={description}>
      <FeaturesHero />
      <FeaturesGrid />
      <FeaturesDeepDive />
      <FeaturesComparison />
      <FeaturesFAQ />
      <FeaturesCTA />
    </PageLayout>
  );
}

export default Features;
