import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import WhatsAppBubble from '@components/floating/WhatsAppBubble';
import ScrollToTopFab from '@components/floating/ScrollToTopFab';
import appConfig from '@config/appConfig';

/**
 * PageLayout
 * The outermost shell for every page. Provides:
 *   - <Helmet> for per-page SEO meta (title, description, OG, Twitter)
 *   - <Header> sticky nav
 *   - <main> content area
 *   - <Footer>
 *   - <WhatsAppBubble> (when flag is on)
 *   - <ScrollToTopFab> (when flag is on)
 *   - Scroll-to-top on route change
 *
 * Props:
 *   title       - Page <title> (falls back to brand default)
 *   description - Meta description
 *   ogImage     - OG image URL (defaults to appConfig.seoDefaults.ogImage)
 *   canonical   - Canonical URL (optional)
 */
function PageLayout({ title, description, ogImage, canonical, children }) {
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { brand, seoDefaults } = appConfig;
  const resolvedTitle = title
    ? `${title} | ${brand.name}`
    : `${brand.name} | AI Voice & Communication Platform for Indian Businesses`;
  const resolvedOg = ogImage ?? seoDefaults.ogImage;
  const resolvedUrl = canonical ?? `${brand.url}${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>{resolvedTitle}</title>
        {description && <meta name="description" content={description} />}

        {/* Canonical */}
        <link rel="canonical" href={resolvedUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={resolvedUrl} />
        <meta property="og:title" content={resolvedTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:image" content={resolvedOg} />
        <meta property="og:site_name" content={brand.name} />
        <meta property="og:locale" content={seoDefaults.locale} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={resolvedTitle} />
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={resolvedOg} />
        {seoDefaults.twitterHandle && (
          <meta name="twitter:site" content={`@${seoDefaults.twitterHandle}`} />
        )}
      </Helmet>

      {/* Site header — sticky, compresses on scroll */}
      <Header />

      {/* Page content */}
      <main id="main-content">{children}</main>

      {/* Site footer */}
      <Footer />

      {/* Floating UI */}
      {appConfig.flags.showWhatsAppBubble && <WhatsAppBubble />}
      {appConfig.flags.showScrollToTopFab && <ScrollToTopFab />}
    </>
  );
}

export default PageLayout;
