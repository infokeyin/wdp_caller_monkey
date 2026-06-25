import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink } from 'lucide-react';

import appConfig from '@config/appConfig';
import cmLogo from '../../props/logos/logo-240px.png';

const PRODUCT_LINKS = [
  { label: 'AI Voice Calling', path: '/features#voice-calling' },
  { label: 'WhatsApp Automation', path: '/features#whatsapp-automation' },
  { label: 'CRM Integration', path: '/features#crm-integration' },
  { label: 'Lead Follow-Up Engine', path: '/features#lead-follow-up' },
  { label: 'Operations Automation', path: '/features#operations' },
  { label: 'Analytics & Reports', path: '/features#analytics' },
];

const INDUSTRY_LINKS = [
  { label: 'Real Estate', path: '/industries' },
  { label: 'Finance & Loans', path: '/industries' },
  { label: 'Healthcare', path: '/industries' },
  { label: 'Education', path: '/industries' },
  { label: 'Retail', path: '/industries' },
  { label: 'Manufacturing', path: '/industries' },
];

const COMPANY_LINKS = [
  { label: 'Why Us',     path: '/why-us' },
  { label: 'Get Started', path: '/get-started' },
  { label: 'Contact',    path: '/get-started#demo-form' },
];

function FooterCol({ title, children }) {
  return (
    <div>
      <h3
        className="font-display font-bold text-sm mb-4"
        style={{
          color: 'var(--color-grey-400)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function FooterLink({ to, children, external }) {
  const cls =
    'block text-sm text-grey-400 hover:text-brand-green transition-colors duration-150 py-0.5';
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

/** Newsletter — posts to Web3Forms */
function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(appConfig.forms.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: appConfig.forms.web3FormsAccessKey,
          subject: 'Newsletter signup — Caller Monkey',
          source: 'footer-newsletter',
          email,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      {status === 'done' ? (
        <p className="text-sm" style={{ color: 'var(--color-green-400)' }}>
          ✓ You&apos;re subscribed. Thanks!
        </p>
      ) : (
        <>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-3 py-2 rounded-md text-sm bg-white/10 border border-white/20 text-white placeholder:text-grey-500 focus:outline-none focus:border-brand-green transition-colors"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-3 py-2 rounded-md text-sm font-semibold bg-brand-green text-white hover:bg-brand-green-light transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? '…' : 'Subscribe'}
            </button>
          </div>
          {status === 'error' && (
            <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>
              Something went wrong. Try again.
            </p>
          )}
        </>
      )}
    </form>
  );
}

// function SocialIcon({ href, icon: Icon, label }) {
//   if (!href) return null;
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="p-2 rounded-md text-grey-500 hover:text-brand-green transition-colors custom-focus-ring"
//       aria-label={label}
//     >
//       <Icon size={18} strokeWidth={1.75} />
//     </a>
//   );
// }

/**
 * Footer
 * Dark background (#0B0B0B). 5-column grid (Product / Industries / Company / Contact+Social).
 * Bottom row: copyright left, Infokey attribution right.
 */
function Footer() {
  const {
    contactInfo,
    brand,
    developer,
    // social
  } = appConfig;

  return (
    <footer
      className="custom-section-dark"
      style={{ background: 'var(--color-bg-dark)', paddingBottom: 32 }}
      aria-label="Site footer"
    >
      <div className="custom-container">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand + newsletter (spans full row on mobile, 2 cols on lg) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <img
              src={cmLogo}
              alt="Caller Monkey"
              className="h-36 mb-7 flex items-center gap-2 shrink-0"
            />
            <p
              className="text-sm mb-4 max-w-xs"
              style={{ color: 'var(--color-grey-400)', lineHeight: 1.65 }}
            >
              {brand.tagline}
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2 mb-5">
              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-grey-400 hover:text-brand-green transition-colors"
                >
                  <Mail size={14} strokeWidth={2} />
                  {contactInfo.email}
                </a>
              )}
            </div>

            {/* Newsletter */}
            {appConfig.flags.showFooterNewsletter && (
              <div>
                <p
                  className="text-xs font-semibold mb-2"
                  style={{
                    color: 'var(--color-grey-400)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Stay updated
                </p>
                <NewsletterSignup />
              </div>
            )}
          </div>

          {/* Product */}
          <FooterCol title="Product">
            <ul className="space-y-1">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.path}>
                  <FooterLink to={l.path}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Industries */}
          <FooterCol title="Industries">
            <ul className="space-y-1">
              {INDUSTRY_LINKS.map((l) => (
                <li key={l.label}>
                  <FooterLink to={l.path}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Company */}
          <FooterCol title="Company">
            <ul className="space-y-1">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <FooterLink to={l.path}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left: copyright + social */}
          <div className="flex flex-col gap-2">
            <p className="text-xs" style={{ color: 'var(--color-grey-400)' }}>
              © 2026 Caller Monkey. All rights reserved. | Made in India.
            </p>
            {/* <div className="flex items-center gap-1 -ml-2">
              <SocialIcon href={social.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialIcon href={social.instagram} icon={Instagram} label="Instagram" />
              <SocialIcon href={social.youtube} icon={Youtube} label="YouTube" />
              {contactInfo.whatsapp && (
                <SocialIcon
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  icon={MessageCircle}
                  label="WhatsApp"
                />
              )}
            </div> */}
          </div>

          {/* Right: Infokey attribution */}
          <a
            href={developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs transition-colors hover:text-brand-green"
            style={{ color: 'var(--color-grey-400)' }}
          >
            Developed by {developer.name}
            <ExternalLink size={11} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
