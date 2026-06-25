/**
 * navigation.js
 * Top-level nav links. Home is not listed — the logo links there.
 * Labels follow CLAUDE.md section 4: plain English, no jargon.
 */
export const navigation = [
  { label: 'Features',     path: '/features' },
  { label: 'Integrations', path: '/integrations' },
  { label: 'Industries',   path: '/industries' },
  {
    label: 'About Us',
    path: '/about',          // fallback path (not rendered as a page — just used for active-state matching)
    children: [
      { label: 'Why Us',     path: '/why-us' },
      { label: 'Get Started', path: '/get-started' },
    ],
  },
];
