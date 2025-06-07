// src/components/FaqSection.tsx
'use client';

import Script from 'next/script';

export default function FaqSection() {
  return (
    <>
      {/* Load Bootstrap’s JS for accordion functionality */}
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

      <section className="faq-section-one">
        <div className="container">
          {/* header */}
          <div className="section-header sec-header-one text-center " data-="fade-up">
            <span className="badge badge-primary">FAQ’S</span>
            <h2>Your Questions are Answered</h2>
          </div>

          {/* accordion */}
          <div className="row">
            <div className="col-md-10 mx-auto">
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
                        How do I book an appointment with a doctor?
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
                          Yes, simply visit our website and log in or create an account. Search
                          for a doctor based on specialization, location, or availability &amp;
                          confirm your booking.
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
                        Can I request a specific doctor when booking my appointment?
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
                          Yes, you can usually request a specific doctor when booking your
                          appointment, though availability may vary based on their schedule.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* item 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What should I do if I need to cancel or reschedule my appointment?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <p>
                          If you need to cancel or reschedule your appointment, contact the doctor
                          as soon as possible to inform them and to reschedule for another
                          available time slot.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* item 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What if I know I will be late for my appointment?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <p>
                          If you know you will be late, it's courteous to call the doctor's office
                          and inform them. Depending on their policy and schedule, they may be
                          able to accommodate you or reschedule your appointment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* item 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can I book appointments for family members or dependents?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, in many cases, you can book appointments for family members or
                          dependents. However, you may need to provide their personal information
                          and consent to do so.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ items end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
