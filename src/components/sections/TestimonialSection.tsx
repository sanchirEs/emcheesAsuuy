'use client';

import { useEffect } from 'react';
import Script from 'next/script';

type Testimonial = {
  title: string;
  text: string;
  img: string;
  author: string;
  location: string;
};

type CounterItem = {
  label: string;
  value: number;
  suffix?: string;
  colorClass?: string;
};

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      title: 'Nice Treatment',
      text: 'I had a wonderful experience—the staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.',
      img: '/assets/img/patients/patient22.jpg',
      author: 'Deny Hendrawan',
      location: 'United States',
    },
    {
      title: 'Good Hospitability',
      text: 'Genuinely cares about his patients. He helped me understand my condition and worked with me to create a plan.',
      img: '/assets/img/patients/patient21.jpg',
      author: 'Johnson DWayne',
      location: 'United States',
    },
    {
      title: 'Professional Care',
      text: 'I had a great experience with Dr. Chen. She was not only professional but also made me feel comfortable discussing.',
      img: '/assets/img/patients/patient.jpg',
      author: 'Rayan Smith',
      location: 'United States',
    },
    {
      title: 'Excellent Service',
      text: 'The staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.',
      img: '/assets/img/patients/patient23.jpg',
      author: 'Sofia Doe',
      location: 'United States',
    },
  ];

  const counters: CounterItem[] = [
    { label: 'Doctors Available', value: 500, suffix: '+', colorClass: '' },
    { label: 'Specialities', value: 18, suffix: '+', colorClass: 'secondary-count' },
    { label: 'Bookings Done', value: 30, suffix: 'K', colorClass: 'purple-count' },
    { label: 'Hospitals & Clinic', value: 97, suffix: '+', colorClass: 'pink-count' },
    { label: 'Lab Tests Available', value: 317, suffix: '+', colorClass: 'warning-count' },
  ];

  useEffect(() => {
    // Re-init AOS
    (window as any).AOS?.refresh?.();

    const $ = (window as any).jQuery;
    if ($?.fn.owlCarousel) {
      $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } },
      });
    }

    if ($?.fn.counterUp) {
      $('.count-digit').counterUp({ delay: 16, time: 1000 });
    }
  }, []);

  return (
    <>
      <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />

      <section className="testimonial-section-one">
        <div className="container">
          <div className="section-header sec-header-one text-center " data-="fade-up">
            <span className="badge badge-primary">Testimonials</span>
            <h2>15k Users Trust Doccure Worldwide</h2>
          </div>

          <div className="owl-carousel testimonials-slider " data-="fade-up">
            {testimonials.map((t, idx) => (
              <div key={idx} className="card shadow-none mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rating d-flex">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star filled me-1"></i>
                      ))}
                    </div>
                    <span>
                      <img src="/assets/img/icons/quote-icon.svg" alt="" />
                    </span>
                  </div>
                  <h6 className="fs-16 fw-medium mb-2">{t.title}</h6>
                  <p>{t.text}</p>
                  <div className="d-flex align-items-center">
                    <button type="button" className="avatar avatar-lg p-0 bg-transparent border-0">
                      <img src={t.img} className="rounded-circle" alt={t.author} />
                    </button>
                    <div className="ms-2">
                      <h6 className="mb-1">
                        <span>{t.author}</span>
                      </h6>
                      <p className="fs-14 mb-0">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-counter">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-gap-4">
              {counters.map((c, idx) => (
                <div key={idx} className={`counter-item text-center  ${c.colorClass}`} data-="fade-up">
                  <h6 className="display-6">
                    <span className="count-digit">{c.value}</span>
                    {c.suffix || ''}
                  </h6>
                  <p>{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
