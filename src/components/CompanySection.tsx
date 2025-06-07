'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';

export default function CompanySection() {
  useEffect(() => {
    // initialize AOS
    (window as any).AOS?.refresh?.();

    // initialize Owl Carousel
    const $ = (window as any).jQuery;
    if ($ && typeof $.fn.owlCarousel === 'function') {
      $('.company-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false, // matches default from your HTML
        dots: true, // show dots
        responsive: {
          0: { items: 2 },
          576: { items: 3 },
          768: { items: 4 },
          1200: { items: 6 },
        },
      });
    }
  }, []);

  return (
    <section className="company-section bg-dark aos" data-aos="fade-up">
      <div className="container">
        <div className="section-header sec-header-one text-center">
          <h6 className="text-light">Trusted by 5+ million people at companies like</h6>
        </div>
        <div className="owl-carousel company-slider">
          <div>
            <img src="/assets/img/company/company-01.svg" alt="img" />
          </div>
          <div>
            <img src="/assets/img/company/company-02.svg" alt="img" />
          </div>
          <div>
            <img src="/assets/img/company/company-03.svg" alt="img" />
          </div>
          <div>
            <img src="/assets/img/company/company-04.svg" alt="img" />
          </div>
          <div>
            <img src="/assets/img/company/company-05.svg" alt="img" />
          </div>
          <div>
            <img src="/assets/img/company/company-06.svg" alt="img" />
          </div>
          <div>
            <img src="/assets/img/company/company-07.svg" alt="img" />
          </div>
          <div>
            <img src="/assets/img/company/company-08.svg" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
