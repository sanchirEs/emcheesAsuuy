// src/components/BookusSection.tsx
'use client';

import Script from 'next/script';

export default function BookusSection() {
  return (
    <>
      {/* Make sure Bootstrap’s JS is loaded */}
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

      <section className="bookus-section bg-dark">
        <div className="container">
          <div className="row align-items-center row-gap-4">
            {/* ------------ image collage ------------ */}
            <div className="col-lg-6">
              <div className="bookus-img">
                <div className="row g-3">
                  <div className="col-md-12 " data-="fade-up">
                    <img src="/assets/img/book-01.jpg" alt="Book collage" className="img-fluid" />
                  </div>
                  <div className="col-sm-6 " data-="fade-up">
                    <img src="/assets/img/book-02.jpg" alt="Book collage" className="img-fluid" />
                  </div>
                  <div className="col-sm-6 " data-="fade-up">
                    <img src="/assets/img/book-03.jpg" alt="Book collage" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            {/* ------------ text + accordion ------------ */}
            <div className="col-lg-6">
              <div className="section-header sec-header-one mb-2 " data-="fade-up">
                <span className="badge badge-primary">Why Book With Us</span>
                <h2 className="text-white mb-3">
                  We are committed to understanding your{' '}
                  <span className="text-primary-gradient">unique needs and delivering care.</span>
                </h2>
              </div>
              <p className="text-light mb-4">
                As a trusted healthcare provider in our community, we are passionate about promoting
                health and wellness beyond the clinic. We actively engage in community outreach
                programs, health fairs, and educational workshops.
              </p>

              {/* FAQ / Accordion */}
              <div className="faq-info " data-="fade-up">
                <div className="accordion" id="faq-details">
                  {/* item 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        01 . Our Vision
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <p>
                          We envision a community where everyone has access to high-quality
                          healthcare and the resources they need to lead healthy, fulfilling lives.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        02 . Our Mission
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <p>
                          Our mission is to empower every patient with personalized care,
                          compassion, and cutting-edge treatments that improve health outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------ four-step icons ------------ */}
          <div className="bookus-sec">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="book-item">
                  <div className="book-icon bg-primary">
                    <i className="isax isax-search-normal5" />
                  </div>
                  <div className="book-info">
                    <h6 className="text-white mb-2">Search For Doctors</h6>
                    <p className="fs-14 text-light">
                      Search for a doctor based on specialization, location, or availability for
                      your treatments.
                    </p>
                  </div>
                  <div className="way-icon">
                    <img src="/assets/img/icons/way-icon.svg" alt="way icon" />
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="book-item">
                  <div className="book-icon bg-orange">
                    <i className="isax isax-security-user5" />
                  </div>
                  <div className="book-info">
                    <h6 className="text-white mb-2">Check Doctor Profile</h6>
                    <p className="fs-14 text-light">
                      Explore detailed doctor profiles on our platform to make informed healthcare
                      decisions.
                    </p>
                  </div>
                  <div className="way-icon">
                    <img src="/assets/img/icons/way-icon.svg" alt="way icon" />
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="book-item">
                  <div className="book-icon bg-cyan">
                    <i className="isax isax-calendar5" />
                  </div>
                  <div className="book-info">
                    <h6 className="text-white mb-2">Schedule Appointment</h6>
                    <p className="fs-14 text-light">
                      After choosing your preferred doctor, select a convenient time slot, &amp;
                      confirm your appointment.
                    </p>
                  </div>
                  <div className="way-icon">
                    <img src="/assets/img/icons/way-icon.svg" alt="way icon" />
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="book-item">
                  <div className="book-icon bg-indigo">
                    <i className="isax isax-blend5" />
                  </div>
                  <div className="book-info">
                    <h6 className="text-white mb-2">Get Your Solution</h6>
                    <p className="fs-14 text-light">
                      Discuss your health concerns with the doctor and receive personalized
                      advice &amp; solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
