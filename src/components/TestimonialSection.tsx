// _components/TestimonialSection.tsx
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function TestimonialSection() {
  //   // ensure OwlCarousel & (optionally) counter-up JS are present
  //   useEffect(() => {
  //     import('/public/assets/js/owl.carousel.min.js').catch(() => {});
  //     import('/public/assets/js/jquery.counterup.min.js').catch(() => {});
  //   }, []);

  return (
    <>
      {/* JS helpers */}
      <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />

      <section className="testimonial-section-one">
        <div className="container">
          {/* header */}
          <div className="section-header sec-header-one text-center aos" data-aos="fade-up">
            <span className="badge badge-primary">Testimonials</span>
            <h2>15k Users Trust Doccure Worldwide</h2>
          </div>

          {/* slider */}
          <div className="owl-carousel testimonials-slider aos" data-aos="fade-up">
            {/* card 1 */}
            <div className="card shadow-none mb-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <div className="rating d-flex">
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled"></i>
                  </div>
                  <span>
                    <img src="/assets/img/icons/quote-icon.svg" alt="img" />
                  </span>
                </div>
                <h6 className="fs-16 fw-medium mb-2">Nice Treatment</h6>
                <p>
                  I had a wonderful experience the staff was friendly and attentive, and Dr. Smith
                  took the time to explain everything clearly.
                </p>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-lg">
                    <img
                      src="/assets/img/patients/patient22.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </a>
                  <div className="ms-2">
                    <h6 className="mb-1">
                      <a href="javascript:void(0);">Deny Hendrawan</a>
                    </h6>
                    <p className="fs-14 mb-0">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="card shadow-none mb-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <div className="rating d-flex">
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled"></i>
                  </div>
                  <span>
                    <img src="/assets/img/icons/quote-icon.svg" alt="img" />
                  </span>
                </div>
                <h6 className="fs-16 fw-medium mb-2">Good Hospitability</h6>
                <p>
                  Genuinely cares about his patients. He helped me understand my condition and
                  worked with me to create a plan.
                </p>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-lg">
                    <img
                      src="/assets/img/patients/patient21.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </a>
                  <div className="ms-2">
                    <h6 className="mb-1">
                      <a href="javascript:void(0);">Johnson DWayne</a>
                    </h6>
                    <p className="fs-14 mb-0">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="card shadow-none mb-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <div className="rating d-flex">
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled"></i>
                  </div>
                  <span>
                    <img src="/assets/img/icons/quote-icon.svg" alt="img" />
                  </span>
                </div>
                <h6 className="fs-16 fw-medium mb-2">Nice Treatment</h6>
                <p>
                  I had a great experience with Dr. Chen. She was not only professional but also
                  made me feel comfortable discussing.
                </p>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-lg">
                    <img
                      src="/assets/img/patients/patient.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </a>
                  <div className="ms-2">
                    <h6 className="mb-1">
                      <a href="javascript:void(0);">Rayan Smith</a>
                    </h6>
                    <p className="fs-14 mb-0">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className="card shadow-none mb-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <div className="rating d-flex">
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled me-1"></i>
                    <i className="fa-solid fa-star filled"></i>
                  </div>
                  <span>
                    <img src="/assets/img/icons/quote-icon.svg" alt="img" />
                  </span>
                </div>
                <h6 className="fs-16 fw-medium mb-2">Excellent Service</h6>
                <p>
                  I had a wonderful experience the staff was friendly and attentive, and Dr. Smith
                  took the time to explain everything clearly.
                </p>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);" className="avatar avatar-lg">
                    <img
                      src="/assets/img/patients/patient23.jpg"
                      className="rounded-circle"
                      alt="img"
                    />
                  </a>
                  <div className="ms-2">
                    <h6 className="mb-1">
                      <a href="javascript:void(0);">Sofia Doe</a>
                    </h6>
                    <p className="fs-14 mb-0">United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* counter */}
          <div className="testimonial-counter">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-gap-4">
              <div className="counter-item text-center aos" data-aos="fade-up">
                <h6 className="display-6">
                  <span className="count-digit">500</span>+
                </h6>
                <p>Doctors Available</p>
              </div>

              <div className="counter-item text-center aos" data-aos="fade-up">
                <h6 className="display-6 secondary-count">
                  <span className="count-digit">18</span>+
                </h6>
                <p>Specialities</p>
              </div>

              <div className="counter-item text-center aos" data-aos="fade-up">
                <h6 className="display-6 purple-count">
                  <span className="count-digit">30</span>K
                </h6>
                <p>Bookings Done</p>
              </div>

              <div className="counter-item text-center aos" data-aos="fade-up">
                <h6 className="display-6 pink-count">
                  <span className="count-digit">97</span>+
                </h6>
                <p>Hospitals &amp; Clinic</p>
              </div>

              <div className="counter-item text-center aos" data-aos="fade-up">
                <h6 className="display-6 warning-count">
                  <span className="count-digit">317</span>+
                </h6>
                <p>Lab Tests Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
