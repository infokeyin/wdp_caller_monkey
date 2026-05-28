import React from 'react';
import { MessageCircle } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import appConfig from '@config/appConfig';

const WHATSAPP_URL = `https://wa.me/${appConfig.contactInfo.whatsapp}?text=${encodeURIComponent("Hi! I'd like to learn more about Caller Monkey and book a walkthrough.")}`;

function GetStartedWhatsApp() {
  return (
    <section
      className="custom-section"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <Container variant="narrow">
        <FadeIn>
          <div className="flex flex-col items-center text-center gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: '#25D36615' }}
            >
              <MessageCircle size={28} strokeWidth={1.75} style={{ color: '#25D366' }} aria-hidden="true" />
            </div>
            <div>
              <h2 className="custom-h3 mb-2">Prefer to just chat?</h2>
              <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>
                Message us on WhatsApp. Someone from our team will respond within a few hours.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn custom-btn-whatsapp custom-btn-lg"
            >
              Chat on WhatsApp →
            </a>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              Available Monday to Saturday, 9am to 7pm IST.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default GetStartedWhatsApp;
