// src/app/layout.tsx
import './globals.css';
import { ReactNode, Suspense } from 'react';
import Script from 'next/script';
import { Header, Footer, Topbar } from '@/components/layout';
import { InfoSection } from '@/components/sections';
// import { RuntimeEffects } from '@/components/ui';
import { Loading } from '@/components/shared';

export const metadata = {
  metadataBase: new URL('https://emchees-asuuy.com'),
  title: 'Emchees Asuuy',
  description:
    'Your trusted healthcare platform for scheduling appointments with top doctors, clinics, and hospitals.',
  keywords:
    'healthcare, doctor appointment, medical services, online booking, medical consultation',
  authors: [{ name: 'Emchees Asuuy' }],
  openGraph: {
    url: 'https://emchees-asuuy.com',
    type: 'website',
    title: 'Emchees Asuuy | Your Healthcare Platform',
    description:
      'Your trusted healthcare platform for scheduling appointments with top doctors, clinics, and hospitals.',
    images: [{ url: '/assets/img/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emchees Asuuy | Your Healthcare Platform',
    description:
      'Your trusted healthcare platform for scheduling appointments with top doctors, clinics, and hospitals.',
    images: [{ url: '/assets/img/og-image.jpg' }],
  },
  icons: {
    icon: '/assets/img/favicon.png',
    apple: '/assets/img/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="light-mode">
      <head>
        <Script src="/assets/js/theme-script.js" strategy="beforeInteractive" />

        {/* favicon */}
        <link rel="icon" href="/assets/img/favicon.png" />

        {/* core CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/plugins/fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/plugins/fontawesome/css/all.min.css" />

        {/* plugin/theme CSS */}
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/iconsax.css" />
        <link rel="stylesheet" href="/assets/css/feather.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        {/* <link rel="stylesheet" href="/assets/css/.css" /> */}
        <link rel="stylesheet" href="/assets/css/bootstrap-datetimepicker.min.css" />

        {/* template bundle + overrides */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
      </head>

      <body>
        <div className="main-wrapper">
          <Topbar />
          <Header />
          <main>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <InfoSection />
          {/* <RuntimeEffects /> */}
          <Footer />

          {/* core JS */}
          <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />

          {/* plugin JS */}
          <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/slick.js" strategy="beforeInteractive" />
          <Script src="/assets/js/moment.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/bootstrap-datetimepicker.min.js" strategy="beforeInteractive" />

          {/* template JS */}
          <Script src="/assets/js/script.js" strategy="afterInteractive" />

          {/* one-time initialisers */}
          <Script id="init-vendor" strategy="afterInteractive">{`
            window.AOS && AOS.init({ once: true });
            if (window.jQuery && typeof jQuery.fn.owlCarousel === 'function') {
              jQuery('.owl-carousel').each(function () {
                if (!jQuery(this).hasClass('owl-loaded')) {
                  jQuery(this).owlCarousel({
                    loop: true,
                    margin: 24,
                    nav: true,
                    dots: false,
                    responsive: {0:{items:1},576:{items:2},768:{items:3},1200:{items:4}}
                  });
                }
              });
            }
          `}</Script>
        </div>
      </body>
    </html>
  );
}
