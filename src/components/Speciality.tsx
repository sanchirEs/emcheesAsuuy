/* -----------------------------------------------
   components/SpecialitySection.tsx
   -------------------------------------------- */
import React from "react";
import Link from "next/link";

export default function SpecialitySection() {
  return (
    /* ---------- Speciality Section ---------- */
    <section className="speciality-section">
      <div className="container">
        {/* section header */}
        <div
          className="section-header sec-header-one text-center aos"
          data-aos="fade-up"
        >
          <span className="badge badge-primary">Top Specialties</span>
          <h2>Highlighting the Care &amp; Support</h2>
        </div>

        {/* owl carousel slider */}
        <div
          className="owl-carousel spciality-slider aos"
          data-aos="fade-up"
        >
          {/* ---- Cardiology ---- */}
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img
                src="/assets/img/specialities/speciality-01.jpg"
                alt="img"
              />
              <span className="spaciality-icon">
                <img
                  src="/assets/img/specialities/speciality-icon-01.svg"
                  alt="img"
                />
              </span>
            </div>
            <h6>
              <Link href="doctor-grid.html">Cardiology</Link>
            </h6>
            <p className="mb-0">254 Doctors</p>
          </div>

          {/* ---- Orthopedics ---- */}
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img
                src="/assets/img/specialities/speciality-02.jpg"
                alt="img"
              />
              <span className="spaciality-icon">
                <img
                  src="/assets/img/specialities/speciality-icon-02.svg"
                  alt="img"
                />
              </span>
            </div>
            <h6>
              <Link href="doctor-grid.html">Orthopedics</Link>
            </h6>
            <p className="mb-0">151 Doctors</p>
          </div>

          {/* ---- Neurology (1) ---- */}
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img
                src="/assets/img/specialities/speciality-03.jpg"
                alt="img"
              />
              <span className="spaciality-icon">
                <img
                  src="/assets/img/specialities/speciality-icon-03.svg"
                  alt="img"
                />
              </span>
            </div>
            <h6>
              <Link href="doctor-grid.html">Neurology</Link>
            </h6>
            <p className="mb-0">176 Doctors</p>
          </div>

          {/* ---- Pediatrics ---- */}
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img
                src="/assets/img/specialities/speciality-04.jpg"
                alt="img"
              />
              <span className="spaciality-icon">
                <img
                  src="/assets/img/specialities/speciality-icon-04.svg"
                  alt="img"
                />
              </span>
            </div>
            <h6>
              <Link href="doctor-grid.html">Pediatrics</Link>
            </h6>
            <p className="mb-0">124 Doctors</p>
          </div>

          {/* ---- Psychiatry ---- */}
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img
                src="/assets/img/specialities/speciality-05.jpg"
                alt="img"
              />
              <span className="spaciality-icon">
                <img
                  src="/assets/img/specialities/speciality-icon-05.svg"
                  alt="img"
                />
              </span>
            </div>
            <h6>
              <Link href="doctor-grid.html">Psychiatry</Link>
            </h6>
            <p className="mb-0">112 Doctors</p>
          </div>

          {/* ---- Endocrinology ---- */}
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img
                src="/assets/img/specialities/speciality-06.jpg"
                alt="img"
              />
              <span className="spaciality-icon">
                <img
                  src="/assets/img/specialities/speciality-icon-06.svg"
                  alt="img"
                />
              </span>
            </div>
            <h6>
              <Link href="doctor-grid.html">Endocrinology</Link>
            </h6>
            <p className="mb-0">104 Doctors</p>
          </div>

          {/* ---- Pulmonology ---- */}
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img
                src="/assets/img/specialities/speciality-07.jpg"
                alt="img"
              />
              <span className="spaciality-icon">
                <img
                  src="/assets/img/specialities/speciality-icon-07.svg"
                  alt="img"
                />
              </span>
            </div>
            <h6>
              <Link href="doctor-grid.html">Pulmonology</Link>
            </h6>
            <p className="mb-0">41 Doctors</p>
          </div>

          {/* ---- Urology ---- */}
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img
                src="/assets/img/specialities/speciality-08.jpg"
                alt="img"
              />
              <span className="spaciality-icon">
                <img
                  src="/assets/img/specialities/speciality-icon-08.svg"
                  alt="img"
                />
              </span>
            </div>
            <h6>
              <Link href="doctor-grid.html">Urology</Link>
            </h6>
            <p className="mb-0">39 Doctors</p>
          </div>

          {/* ---- Neurology (2) ---- */}
          <div className="spaciality-item">
            <div className="spaciality-img">
              <img
                src="/assets/img/specialities/speciality-03.jpg"
                alt="img"
              />
              <span className="spaciality-icon">
                <img
                  src="/assets/img/specialities/speciality-icon-03.svg"
                  alt="img"
                />
              </span>
            </div>
            <h6>
              <Link href="doctor-grid.html">Neurology</Link>
            </h6>
            <p className="mb-0">176 Doctors</p>
          </div>
        </div>

        {/* nav dots / arrows rendered by Owl */}
        <div className="spciality-nav nav-bottom owl-nav" />
      </div>
    </section>
  );
}
