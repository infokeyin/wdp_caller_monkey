import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@components/layout/PageLayout';

function NotFound() {
  return (
    <PageLayout title="Page Not Found">
      <section className="custom-section custom-container text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p className="custom-eyebrow mb-4">404 error</p>
        <h1 className="custom-h1 mb-4">We dropped that call.</h1>
        <p className="custom-lead mb-8" style={{ maxWidth: 480 }}>
          But our voice bots are still picking up. Try one of these:
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/"             className="custom-btn custom-btn-secondary">Home</Link>
          <Link to="/features"     className="custom-btn custom-btn-secondary">Features</Link>
          <Link to="/get-started"  className="custom-btn custom-btn-primary">Get Started</Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default NotFound;
