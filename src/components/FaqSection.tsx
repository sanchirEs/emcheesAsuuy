// _components/FaqSection.tsx
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function FaqSection() {
  // ensure Bootstrap accordion JS available
  //   useEffect(() => {
  //     import('/public/assets/js/bootstrap.bundle.min.js').catch(() => {});
  //   }, []);

  return (
    <>
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

      <section className="faq-section-one">
        <div className="container">
          {/* header */}
          <div className="section-header sec-header-one text-center aos" data-aos="fade-up">
            <span className="badge badge-primary">FAQ’S</span>
            <h2>Your Questions are Answered</h2>
          </div>

          {/* accordion */}
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="faq-info aos" data-aos="fade-up">
                <div className="accordion" id="faq-details">
                  {/* item 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <a
                        href="javascript:void(0);"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How do I book an appointment with a doctor?
                      </a>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Yes, simply visit our website and log in or create an account. Search
                            for a doctor based on specialization, location, or availability &amp;
                            confirm your booking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <a
                        href="javascript:void(0);"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-controls="collapseTwo"
                      >
                        Can I request a specific doctor when booking my appointment?
                      </a>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Yes, you can usually request a specific doctor when booking your
                            appointment, though availability may vary based on their schedule.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* item 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <a
                        href="javascript:void(0);"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-controls="collapseThree"
                      >
                        What should I do if I need to cancel or reschedule my appointment?
                      </a>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            If you need to cancel or reschedule your appointment, contact the doctor
                            as soon as possible to inform them and to reschedule for another
                            available time slot.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* item 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <a
                        href="javascript:void(0);"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-controls="collapseFour"
                      >
                        what if imasdkljfhsjd
                      </a>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            If you know you will be late, it's courteous to call the doctor's office
                            and inform them. Depending on their policy and schedule, they may be
                            able to accommodate you or reschedule your appointment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* item 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <a
                        href="javascript:void(0);"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-controls="collapseFive"
                      >
                        Can I book appointments for family members or dependents?
                      </a>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Yes, in many cases, you can book appointments for family members or
                            dependents. However, you may need to provide their personal information
                            and consent to do so.
                          </p>
                        </div>
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
