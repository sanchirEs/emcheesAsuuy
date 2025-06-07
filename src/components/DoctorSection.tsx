'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function DoctorSection() {
  useEffect(() => {
    // re-init AOS on client
    (window as any).AOS?.refresh?.();

    // init Owl Carousel
    const $ = (window as any).jQuery;
    if ($ && typeof $.fn.owlCarousel === 'function') {
      $('.doctors-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          1200: { items: 4 },
        },
      });
    }
  }, []);

  return (
    <section className="doctor-section">
      <div className="container">
        <div className="section-header sec-header-one text-center aos" data-aos="fade-up">
          <span className="badge badge-primary">Featured Doctors</span>
          <h2>Our Highlighted Doctors</h2>
        </div>

        <div className="doctors-slider owl-carousel aos" data-aos="fade-up">
          {/* Doctor 1 */}
          <div className="card">
            <div className="card-img card-img-hover">
              <a href="doctor-profile.html">
                <img src="/assets/img/doctor-grid/doctor-grid-01.jpg" alt="" />
              </a>
              <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                <span className="badge bg-orange">
                  <i className="fa-solid fa-star me-1"></i>5.0
                </span>
                <a href="javascript:void(0)" className="fav-icon">
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="d-flex active-bar align-items-center justify-content-between p-3">
                <a href="#" className="text-indigo fw-medium fs-14">
                  Psychologist
                </a>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1"></i>
                  Available
                </span>
              </div>
              <div className="p-3 pt-0">
                <div className="doctor-info-detail mb-3 pb-3">
                  <h3 className="mb-1">
                    <a href="doctor-profile.html">Dr. Michael Brown</a>
                  </h3>
                  <div className="d-flex align-items-center">
                    <p className="d-flex align-items-center mb-0 fs-14">
                      <i className="isax isax-location me-2"></i>Minneapolis, MN
                    </p>
                    <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
                    <span className="fs-14 fw-medium">30 Min</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="mb-1">Consultation Fees</p>
                    <h3 className="text-orange">$650</h3>
                  </div>
                  <a
                    href="booking.html"
                    className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2"></i>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="card">
            <div className="card-img card-img-hover">
              <a href="doctor-profile.html">
                <img src="/assets/img/doctor-grid/doctor-grid-02.jpg" alt="" />
              </a>
              <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                <span className="badge bg-orange">
                  <i className="fa-solid fa-star me-1"></i>4.6
                </span>
                <a href="javascript:void(0)" className="fav-icon">
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="d-flex active-bar active-bar-pink align-items-center justify-content-between p-3">
                <a href="booking-1.html" className="text-pink fw-medium fs-14">
                  Pediatrician
                </a>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1"></i>
                  Available
                </span>
              </div>
              <div className="p-3 pt-0">
                <div className="doctor-info-detail mb-3 pb-3">
                  <h3 className="mb-1">
                    <a href="doctor-profile.html">Dr. Nicholas Tello</a>
                  </h3>
                  <div className="d-flex align-items-center">
                    <p className="d-flex align-items-center mb-0 fs-14">
                      <i className="isax isax-location me-2"></i>Ogden, IA
                    </p>
                    <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
                    <span className="fs-14 fw-medium">60 Min</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="mb-1">Consultation Fees</p>
                    <h3 className="text-orange">$400</h3>
                  </div>
                  <a
                    href="booking.html"
                    className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2"></i>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="card">
            <div className="card-img card-img-hover">
              <a href="doctor-profile.html">
                <img src="/assets/img/doctor-grid/doctor-grid-03.jpg" alt="" />
              </a>
              <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                <span className="badge bg-orange">
                  <i className="fa-solid fa-star me-1"></i>4.8
                </span>
                <a href="javascript:void(0)" className="fav-icon">
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="d-flex active-bar active-bar-teal align-items-center justify-content-between p-3">
                <a href="#" className="text-teal fw-medium fs-14">
                  Neurologist
                </a>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1"></i>
                  Available
                </span>
              </div>
              <div className="p-3 pt-0">
                <div className="doctor-info-detail mb-3 pb-3">
                  <h3 className="mb-1">
                    <a href="doctor-profile.html">Dr. Harold Bryant</a>
                  </h3>
                  <div className="d-flex align-items-center">
                    <p className="d-flex align-items-center mb-0 fs-14">
                      <i className="isax isax-location me-2"></i>Winona, MS
                    </p>
                    <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
                    <span className="fs-14 fw-medium">30 Min</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="mb-1">Consultation Fees</p>
                    <h3 className="text-orange">$500</h3>
                  </div>
                  <a
                    href="booking.html"
                    className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2"></i>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor 4 */}
          <div className="card">
            <div className="card-img card-img-hover">
              <a href="doctor-profile.html">
                <img src="/assets/img/doctor-grid/doctor-grid-04.jpg" alt="" />
              </a>
              <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                <span className="badge bg-orange">
                  <i className="fa-solid fa-star me-1"></i>4.8
                </span>
                <a href="javascript:void(0)" className="fav-icon">
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="d-flex active-bar active-bar-info align-items-center justify-content-between p-3">
                <a href="#" className="text-info fw-medium fs-14">
                  Cardiologist
                </a>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1"></i>
                  Available
                </span>
              </div>
              <div className="p-3 pt-0">
                <div className="doctor-info-detail mb-3 pb-3">
                  <h3 className="mb-1">
                    <a href="doctor-profile.html">Dr. Sandra Jones</a>
                  </h3>
                  <div className="d-flex align-items-center">
                    <p className="d-flex align-items-center mb-0 fs-14">
                      <i className="isax isax-location me-2"></i>Beckley, WV
                    </p>
                    <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
                    <span className="fs-14 fw-medium">30 Min</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="mb-1">Consultation Fees</p>
                    <h3 className="text-orange">$550</h3>
                  </div>
                  <a
                    href="booking.html"
                    className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2"></i>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor 5 */}
          <div className="card">
            <div className="card-img card-img-hover">
              <a href="doctor-profile.html">
                <img src="/assets/img/doctor-grid/doctor-grid-05.jpg" alt="" />
              </a>
              <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                <span className="badge bg-orange">
                  <i className="fa-solid fa-star me-1"></i>4.2
                </span>
                <a href="javascript:void(0)" className="fav-icon">
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="d-flex active-bar active-bar-teal align-items-center justify-content-between p-3">
                <a href="#" className="text-teal fw-medium fs-14">
                  Neurologist
                </a>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1"></i>
                  Available
                </span>
              </div>
              <div className="p-3 pt-0">
                <div className="doctor-info-detail mb-3 pb-3">
                  <h3 className="mb-1">
                    <a href="doctor-profile.html">Dr. Charles Scott</a>
                  </h3>
                  <div className="d-flex align-items-center">
                    <p className="d-flex align-items-center mb-0 fs-14">
                      <i className="isax isax-location me-2"></i>Hamshire, TX
                    </p>
                    <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
                    <span className="fs-14 fw-medium">30 Min</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="mb-1">Consultation Fees</p>
                    <h3 className="text-orange">$600</h3>
                  </div>
                  <a
                    href="booking.html"
                    className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2"></i>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="doctor-nav nav-bottom owl-nav"></div>
      </div>
    </section>
  );
}
