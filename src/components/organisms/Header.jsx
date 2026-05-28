import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '@data/navigation';
import { useScrollDirection } from '@hooks/useScrollDirection';
import { useLockBodyScroll } from '@hooks/useLockBodyScroll';
import { cn } from '@utils/classNames';

import cmLogo from '../../props/logos/logo-240px.png';

/**
 * Header
 * Sticky top header with:
 * - Logo (text fallback until logo image is dropped in)
 * - Desktop nav (centered)
 * - "Get a Free Demo" CTA (right)
 * - Compresses on scroll past 80px (CSS transition, no Framer)
 * - Mobile hamburger → full-screen slide-in panel (Framer AnimatePresence)
 */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScrollDirection();
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  // Close mobile menu on route change
  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      setMobileOpen(false);
      prevPath.current = location.pathname;
    }
  }, [location.pathname]);

  // Close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useLockBodyScroll(mobileOpen);

  const compressed = scrollY > 80;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full',
          'transition-all duration-300',
          compressed
            ? 'bg-white/95 backdrop-blur-md border-b border-grey-200 shadow-sm py-2'
            : 'bg-white py-4'
        )}
        style={{ willChange: 'padding, box-shadow' }}
      >
        {/* Logo */}
        <div className="custom-container flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Caller Monkey — go to homepage"
          >
            <img
              src={cmLogo}
              alt="Caller Monkey"
              className="h-20 flex items-center gap-2 shrink-0"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150',
                    isActive
                      ? 'text-brand-green bg-brand-green-50'
                      : 'text-grey-600 hover:text-grey-900 hover:bg-grey-100'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              to="/get-started#demo-form"
              className="custom-btn custom-btn-primary custom-btn-sm"
            >
              Get a Free Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-grey-700 hover:bg-grey-100 transition-colors custom-focus-ring"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Spacer so page content doesn't sit under the fixed header */}
      <div
        className={cn('transition-all duration-300', compressed ? 'h-14' : 'h-16')}
        aria-hidden="true"
      />

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-grey-950/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu"
              key="panel"
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white flex flex-col md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-grey-200">
                <Link
                  to="/"
                  className="font-display font-black text-grey-950"
                  style={{ fontSize: '1.2rem', letterSpacing: '-0.03em' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Caller <span style={{ color: 'var(--color-green-500)' }}>Monkey</span>
                </Link>
                <button
                  className="p-2 rounded-md text-grey-600 hover:bg-grey-100 transition-colors custom-focus-ring"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        'px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-150',
                        isActive
                          ? 'text-brand-green bg-brand-green-50'
                          : 'text-grey-700 hover:text-grey-900 hover:bg-grey-100'
                      )
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="px-4 pb-8">
                <Link
                  to="/get-started#demo-form"
                  className="custom-btn custom-btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
