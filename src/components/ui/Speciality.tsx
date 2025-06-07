// components/Speciality.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Speciality() {
  useEffect(() => {
    // If you need to re-init AOS & OwlCarousel here, uncomment:
    // window.AOS?.refresh()
    // if (window.jQuery && typeof window.jQuery.fn.owlCarousel === 'function') {
    //   window.jQuery('.spciality-slider').owlCarousel({
    //     loop: true,
    //     margin: 24,
    //     nav: true,
    //     dots: false,
    //     responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } }
    //   })
    // }
  }, []);

  return (
    <section className="speciality-section">
      <div className="container">
        <div className="section-header sec-header-one text-center " data-="fade-up">
          <span className="badge badge-primary">Top Specialties</span>
          <h2>Highlighting the Care & Support</h2>
        </div>
        <div className="owl-carousel spciality-slider " data-="fade-up">
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img src="/assets/img/specialities/speciality-01.jpg" alt="img" />
              <span className="spaciality-icon">
                <img src="/assets/img/specialities/speciality-icon-01.svg" alt="img" />
              </span>
            </div>
            <h6>
              <Link href="/doctor-grid.html">Cardiology</Link>
            </h6>
            <p className="mb-0">254 Doctors</p>
          </div>
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img src="/assets/img/specialities/speciality-02.jpg" alt="img" />
              <span className="spaciality-icon">
                <img src="/assets/img/specialities/speciality-icon-02.svg" alt="img" />
              </span>
            </div>
            <h6>
              <Link href="/doctor-grid.html">Orthopedics</Link>
            </h6>
            <p className="mb-0">151 Doctors</p>
          </div>
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img src="/assets/img/specialities/speciality-03.jpg" alt="img" />
              <span className="spaciality-icon">
                <img src="/assets/img/specialities/speciality-icon-03.svg" alt="img" />
              </span>
            </div>
            <h6>
              <Link href="/doctor-grid.html">Neurology</Link>
            </h6>
            <p className="mb-0">176 Doctors</p>
          </div>
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img src="/assets/img/specialities/speciality-04.jpg" alt="img" />
              <span className="spaciality-icon">
                <img src="/assets/img/specialities/speciality-icon-04.svg" alt="img" />
              </span>
            </div>
            <h6>
              <Link href="/doctor-grid.html">Pediatrics</Link>
            </h6>
            <p className="mb-0">124 Doctors</p>
          </div>
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img src="/assets/img/specialities/speciality-05.jpg" alt="img" />
              <span className="spaciality-icon">
                <img src="/assets/img/specialities/speciality-icon-05.svg" alt="img" />
              </span>
            </div>
            <h6>
              <Link href="/doctor-grid.html">Psychiatry</Link>
            </h6>
            <p className="mb-0">112 Doctors</p>
          </div>
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img src="/assets/img/specialities/speciality-06.jpg" alt="img" />
              <span className="spaciality-icon">
                <img src="/assets/img/specialities/speciality-icon-06.svg" alt="img" />
              </span>
            </div>
            <h6>
              <Link href="/doctor-grid.html">Endocrinology</Link>
            </h6>
            <p className="mb-0">104 Doctors</p>
          </div>
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img src="/assets/img/specialities/speciality-07.jpg" alt="img" />
              <span className="spaciality-icon">
                <img src="/assets/img/specialities/speciality-icon-07.svg" alt="img" />
              </span>
            </div>
            <h6>
              <Link href="/doctor-grid.html">Pulmonology</Link>
            </h6>
            <p className="mb-0">41 Doctors</p>
          </div>
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img src="/assets/img/specialities/speciality-08.jpg" alt="img" />
              <span className="spaciality-icon">
                <img src="/assets/img/specialities/speciality-icon-08.svg" alt="img" />
              </span>
            </div>
            <h6>
              <Link href="/doctor-grid.html">Urology</Link>
            </h6>
            <p className="mb-0">39 Doctors</p>
          </div>
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img src="/assets/img/specialities/speciality-03.jpg" alt="img" />
              <span className="spaciality-icon">
                <img src="/assets/img/specialities/speciality-icon-03.svg" alt="img" />
              </span>
            </div>
            <h6>
              <Link href="/doctor-grid.html">Neurology</Link>
            </h6>
            <p className="mb-0">176 Doctors</p>
          </div>
        </div>
        <div className="spciality-nav nav-bottom owl-nav"></div>
      </div>
    </section>
  );
}
