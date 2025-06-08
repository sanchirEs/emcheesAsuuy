// // _components/Footer.tsx
// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         <div className="container-fluid">
//           <div className="row">
//             {/* Footer Widget: About */}
//             <div className="col-lg-3 col-md-6">
//               <div className="footer-widget footer-about">
//                 <div className="footer-logo">
//                   <img src="/assets/img/footer-logo.png" alt="logo" />
//                 </div>
//                 <div className="footer-about-content">
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                     incididunt ut labore et dolore magna aliqua.
//                   </p>
//                   <div className="social-icon">
//                     <ul>
//                       <li>
//                         <a href="#" target="_blank" rel="noopener noreferrer">
//                           <i className="fab fa-facebook-f"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" target="_blank" rel="noopener noreferrer">
//                           <i className="fab fa-twitter"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" target="_blank" rel="noopener noreferrer">
//                           <i className="fab fa-linkedin-in"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" target="_blank" rel="noopener noreferrer">
//                           <i className="fab fa-instagram"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" target="_blank" rel="noopener noreferrer">
//                           <i className="fab fa-dribbble"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Footer Widget: For Patients */}
//             <div className="col-lg-3 col-md-6">
//               <div className="footer-widget footer-menu">
//                 <h2 className="footer-title">For Patients</h2>
//                 <ul>
//                   <li><a href="search.html"><i className="fas fa-angle-double-right"></i> Search for Doctors</a></li>
//                   <li><a href="login.html"><i className="fas fa-angle-double-right"></i> Login</a></li>
//                   <li><a href="register.html"><i className="fas fa-angle-double-right"></i> Register</a></li>
//                   <li><a href="booking.html"><i className="fas fa-angle-double-right"></i> Booking</a></li>
//                   <li><a href="patient-dashboard.html"><i className="fas fa-angle-double-right"></i> Patient Dashboard</a></li>
//                 </ul>
//               </div>
//             </div>
//             {/* Footer Widget: For Doctors */}
//             <div className="col-lg-3 col-md-6">
//               <div className="footer-widget footer-menu">
//                 <h2 className="footer-title">For Doctors</h2>
//                 <ul>
//                   <li><a href="appointments.html"><i className="fas fa-angle-double-right"></i> Appointments</a></li>
//                   <li><a href="chat.html"><i className="fas fa-angle-double-right"></i> Chat</a></li>
//                   <li><a href="login.html"><i className="fas fa-angle-double-right"></i> Login</a></li>
//                   <li><a href="doctor-register.html"><i className="fas fa-angle-double-right"></i> Register</a></li>
//                   <li><a href="doctor-dashboard.html"><i className="fas fa-angle-double-right"></i> Doctor Dashboard</a></li>
//                 </ul>
//               </div>
//             </div>
//             {/* Footer Widget: Contact Us */}
//             <div className="col-lg-3 col-md-6">
//               <div className="footer-widget footer-contact">
//                 <h2 className="footer-title">Contact Us</h2>
//                 <div className="footer-contact-info">
//                   <div className="footer-address">
//                     <span><i className="fas fa-map-marker-alt"></i></span>
//                     <p>
//                       3556 Beech Street, San Francisco,
//                       <br />California, CA 94108
//                     </p>
//                   </div>
//                   <p>
//                     <i className="fas fa-phone-alt"></i>
//                     +1 315 369 5943
//                   </p>
//                   <p className="mb-0">
//                     <i className="fas fa-envelope"></i>
//                     doccure@example.com
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <div className="container-fluid">
//           <div className="copyright">
//             <div className="row">
//               <div className="col-md-6 col-lg-6">
//                 <div className="copyright-text">
//                   <p className="mb-0">
//                     <a href="templateshub.net">Templates Hub</a>
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-6 col-lg-6">
//                 <div className="copyright-menu">
//                   <ul className="policy-menu">
//                     <li><a href="term-condition.html">Terms and Conditions</a></li>
//                     <li><a href="privacy-policy.html">Policy</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

export default function Footer() {
  return (
    <footer className="footer inner-footer footer-info">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Footer menus */}
            <div className="col-lg-8">
              <div className="row">
                {[
                  {
                    title: 'Company',
                    links: [
                      { label: 'About', href: '/about-us' },
                      { label: 'Features', href: '/search' },
                      { label: 'Works', href: '#' },
                      { label: 'Careers', href: '#' },
                      { label: 'Locations', href: '#' },
                    ],
                  },
                  {
                    title: 'Treatments',
                    links: [
                      { label: 'Dental', href: '/search' },
                      { label: 'Cardiac', href: '/search' },
                      { label: 'Spinal Cord', href: '/search' },
                      { label: 'Hair Growth', href: '/search' },
                      { label: 'Anemia & Disorder', href: '/search' },
                    ],
                  },
                  {
                    title: 'Specialities',
                    links: [
                      { label: 'Transplant', href: '/search' },
                      { label: 'Cardiologist', href: '/search' },
                      { label: 'Oncology', href: '/search' },
                      { label: 'Pediatrics', href: '/search' },
                      { label: 'Gynacology', href: '/search' },
                    ],
                  },
                  {
                    title: 'Utilities',
                    links: [
                      { label: 'Pricing', href: '/pricing' },
                      { label: 'Contact', href: '/contact-us' },
                      { label: 'Request A Quote', href: '/contact-us' },
                      { label: 'Premium Membership', href: '#' },
                      { label: 'Integrations', href: '#' },
                    ],
                  },
                ].map((menu, idx) => (
                  <div key={idx} className="col-lg-3 col-md-3">
                    <div className="footer-widget footer-menu">
                      <h6 className="footer-title">{menu.title}</h6>
                      <ul>
                        {menu.links.map((l, i) => (
                          <li key={i}>
                            <a href={l.href}>{l.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter & socials */}
            <div className="col-lg-4 col-md-7">
              <div className="footer-widget">
                <h6 className="footer-title">Newsletter</h6>
                <p className="mb-2">Subscribe &amp; Stay Updated from the Doccure</p>
                <div className="subscribe-input">
                  <form action="#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                    <button
                      type="submit"
                      className="btn btn-md btn-primary-gradient d-inline-flex align-items-center"
                    >
                      <i className="isax isax-send-25 me-1" />
                      Send
                    </button>
                  </form>
                </div>
                <div className="social-icon">
                  <h6 className="mb-3">Connect With Us</h6>
                  <ul>
                    {[
                      'fa-brands fa-facebook',
                      'fa-brands fa-x-twitter',
                      'fa-brands fa-instagram',
                      'fa-brands fa-linkedin',
                      'fa-brands fa-pinterest',
                    ].map((cls, i) => (
                      <li key={i}>
                        <a href="#">
                          <i className={cls}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* decorative footer backgrounds */}
        <div className="footer-bg">
          {[1, 2, 3, 4, 5].map((n) => (
            <img
              key={n}
              src={`/assets/img/bg/footer-bg-0${n}.png`}
              alt=""
              className={`footer-bg-0${n}`}
            />
          ))}
        </div>
      </div>

      {/* bottom copyright bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright d-flex flex-column flex-md-row align-items-center justify-content-between">
            <p className="mb-0">&copy; {new Date().getFullYear()} Doccure. All Rights Reserved</p>
            <ul className="policy-menu d-flex gap-3 mb-0">
              {['Legal Notice', 'Privacy Policy', 'Refund Policy'].map((p, i) => (
                <li key={i}>
                  <a href="#">{p}</a>
                </li>
              ))}
            </ul>
            <ul className="payment-method d-flex gap-2 mb-0">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <li key={n}>
                  <a href="#">
                    <img src={`/assets/img/icons/card-0${n}.svg`} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
