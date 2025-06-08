export const siteConfig = {
  name: 'Emchees Asuuy',
  description: 'Your healthcare platform',
  url: process.env.NEXT_PUBLIC_APP_URL,
  ogImage: 'https://your-domain.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/your-handle',
    github: 'https://github.com/your-handle',
  },
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Contact', href: '/contact' },
];

export type NavigationItem = (typeof NAVIGATION_ITEMS)[number]; 