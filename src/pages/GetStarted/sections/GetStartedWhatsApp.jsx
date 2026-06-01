import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import appConfig from '@config/appConfig';

const WHATSAPP_URL = `https://wa.me/${appConfig.contactInfo.whatsapp}?text=${encodeURIComponent("Hi! I'd like to learn more about Caller Monkey and book a walkthrough.")}`;

function GetStartedWhatsApp() {
  return (
    <section style={{ borderTop: '1px solid var(--color-border)', paddingBlock: 'clamp(2rem, 4vw, 3rem)', background: 'var(--color-bg-alt)' }}>
      <Container variant="narrow">
        <FadeIn>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'center',
            gap: '2rem',
          }}>
            {/* Label */}
            <p style={{ fontWeight: 700, color: 'var(--color-grey-700)', fontSize: 'var(--text-base)', margin: 0 }}>
              Prefer to talk first?
            </p>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn custom-btn-whatsapp custom-btn-sm"
            >
              <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
              Chat on WhatsApp
            </a>

            {/* Phone */}
            <a
              href={`tel:${appConfig.contactInfo.phone}`}
              className="custom-btn custom-btn-secondary custom-btn-sm"
            >
              <Phone size={16} strokeWidth={2} aria-hidden="true" />
              {appConfig.contactInfo.phone}
            </a>

            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: 0 }}>
              Mon – Sat · 9am – 7pm IST
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default GetStartedWhatsApp;
