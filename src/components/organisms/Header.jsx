import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation } from '@data/navigation';
import { useScrollDirection } from '@hooks/useScrollDirection';
import { useLockBodyScroll } from '@hooks/useLockBodyScroll';
import { cn } from '@utils/classNames';

import cmLogo from '../../props/logos/logo-240px.png';

/**
 * Header
 * Sticky top header with:
 * - Logo (links to home)
 * - Desktop nav (centered) — supports items with `children` (dropdown on hover)
 * - "Get a Free Demo" CTA (right)
 * - Compresses on scroll past 80px
 * - Mobile hamburger → full-screen slide-in panel (sub-items expand inline)
 */

/* ── Desktop dropdown for nav items that have children ── */
function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);
  const location = useLocation();

  // Is any child active?
  const isChildActive = item.children?.some((c) => location.pathname === c.path);

  const show = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };
  const hide = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        className={cn(
          'flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150 select-none',
          isChildActive
            ? 'text-brand-green bg-brand-green-50'
            : 'text-grey-600 hover:text-grey-900 hover:bg-grey-100'
        )}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={cn('transition-transform duration-200', open ? 'rotate-180' : '')}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg border border-grey-200 shadow-lg overflow-hidden z-50"
            onMouseEnter={show}
            onMouseLeave={hide}
          >
            {item.children.map((child) => (
              <NavLink
                key={child.path}
                to={child.path}
                className={({ isActive }) =>
                  cn(
                    'block px-4 py-2.5 text-sm font-semibold transition-colors duration-150',
                    isActive
                      ? 'text-brand-green bg-brand-green-50'
                      : 'text-grey-700 hover:text-grey-900 hover:bg-grey-50'
                  )
                }
                onClick={() => setOpen(false)}
              >
                {child.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Mobile expandable item for nav items that have children ── */
function MobileExpandable({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isChildActive = item.children?.some((c) => location.pathname === c.path);

  return (
    <div>
      <button
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-150',
          isChildActive
            ? 'text-brand-green bg-brand-green-50'
            : 'text-grey-700 hover:text-grey-900 hover:bg-grey-100'
        )}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className={cn('transition-transform duration-200', open ? 'rotate-180' : '')}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-sub"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-4"
          >
            {item.children.map((child) => (
              <NavLink
                key={child.path}
                to={child.path}
                className={({ isActive }) =>
                  cn(
                    'block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150',
                    isActive
                      ? 'text-brand-green bg-brand-green-50'
                      : 'text-grey-600 hover:text-grey-900 hover:bg-grey-100'
                  )
                }
                onClick={onNavigate}
              >
                {child.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
              className="h-28 flex items-center gap-2 shrink-0"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
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
              )
            )}
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
                {navigation.map((item) =>
                  item.children ? (
                    <MobileExpandable
                      key={item.label}
                      item={item}
                      onNavigate={() => setMobileOpen(false)}
                    />
                  ) : (
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
                  )
                )}
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
