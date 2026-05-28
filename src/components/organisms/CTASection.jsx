import React from 'react';
import { Link } from 'react-router-dom';
import Section from '@components/layout/Section';
import Container from '@components/layout/Container';
import Button from '@components/atoms/Button';
import { cn } from '@utils/classNames';
import appConfig from '@config/appConfig';

/**
 * CTASection
 * Reusable bottom-of-page CTA strip. Used on every page.
 * Three visual variants.
 *
 * Props:
 *   headline     Main CTA headline
 *   sub          Optional sub-text
 *   primaryText  Primary button label
 *   primaryTo    Primary button link (default /get-started#demo-form)
 *   secondaryText Secondary button label (optional)
 *   secondaryTo   Secondary button link
 *   whatsappCta  Show a WhatsApp button instead of secondary (boolean)
 *   variant      'light' | 'dark' | 'green'
 *   containerVariant 'default' | 'narrow'
 */
function CTASection({
  headline,
  sub,
  primaryText  = 'Get a Free Demo',
  primaryTo    = '/get-started#demo-form',
  secondaryText,
  secondaryTo,
  whatsappCta  = false,
  variant      = 'light',
  containerVariant = 'default',
}) {
  const isDark  = variant === 'dark';
  const isGreen = variant === 'green';

  // Background styles
  const sectionStyle = isGreen
    ? { background: 'var(--color-green-500)', color: '#fff' }
    : isDark
    ? { background: 'var(--color-bg-dark)', color: 'var(--color-text-on-dark)' }
    : {};

  // Heading colour
  const headingColor = (isDark || isGreen) ? '#fff' : 'var(--color-grey-950)';
  const subColor     = (isDark || isGreen)
    ? 'rgba(255,255,255,0.75)'
    : 'var(--color-text-muted)';

  // Primary button variant
  const primaryVariant = isGreen ? 'secondary' : 'primary';

  // Secondary button variant
  const secondaryVariant = (isDark || isGreen) ? 'ghost' : 'secondary';

  // WhatsApp link
  const waLink = `https://wa.me/${appConfig.contactInfo.whatsapp}?text=${encodeURIComponent("Hi! I'd like to learn more about Caller Monkey.")}`;

  return (
    <section
      className="custom-section"
      style={sectionStyle}
      aria-label="Call to action"
    >
      <Container variant={containerVariant}>
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">

          <div className="flex flex-col gap-3">
            <h2
              className="custom-h2"
              style={{ color: headingColor }}
            >
              {headline}
            </h2>
            {sub && (
              <p
                className="custom-lead"
                style={{ color: subColor }}
              >
                {sub}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Primary CTA */}
            <Button
              as={Link}
              to={primaryTo}
              variant={primaryVariant}
              size="lg"
            >
              {primaryText}
            </Button>

            {/* Optional secondary CTA */}
            {secondaryText && secondaryTo && (
              <Button
                as={Link}
                to={secondaryTo}
                variant={secondaryVariant}
                size="lg"
                style={(isDark || isGreen) ? { color: '#fff', borderColor: 'rgba(255,255,255,0.4)' } : {}}
              >
                {secondaryText}
              </Button>
            )}

            {/* WhatsApp CTA */}
            {whatsappCta && (
              <Button
                as="a"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                Chat on WhatsApp
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;
