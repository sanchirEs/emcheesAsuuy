// components/Topbar.tsx
'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function Topbar() {
  return (
    <>
      {/* If you still need “theme-script.js” */}
      <Script src="/assets/js/theme-script.js" strategy="beforeInteractive" />

      <div className="header-topbar">
        <div className="container">
          <div className="topbar-info">
            <div className="d-flex align-items-center gap-3 header-info">
              <p><i className="isax isax-message-text5 me-1" />info@example.com</p>
              <p><i className="isax isax-call5 me-1" />+1 66589 14556</p>
            </div>
            <ul>
              {/* Theme toggle */}
              <li className="header-theme">
                {/* <a id="dark-mode-toggle" className="theme-toggle" href="#"><i className="isax isax-sun-1" /></a> */}
                {/* <a id="light-mode-toggle" className="theme-toggle activate" href="#"><i className="isax isax-moon" /></a> */}
              </li>
              {/* Country & currency dropdowns */}
              <li className="d-inline-flex align-items-center drop-header">
                <div className="dropdown dropdown-country me-3">
                  <a className="d-inline-flex align-items-center" data-bs-toggle="dropdown" href="#">
                    <img src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                  </a>
                  <ul className="dropdown-menu p-2 mt-2">
                    <li>
                      <a className="dropdown-item rounded d-flex align-items-center" href="#">
                        <img src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                        ENG
                      </a>
                    </li>
                    {/* …other flags… */}
                  </ul>
                </div>
                <div className="dropdown dropdown-amt">
                  <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">USD</a>
                  <ul className="dropdown-menu p-2 mt-2">
                    <li><a className="dropdown-item rounded" href="#">USD</a></li>
                    {/* … */}
                  </ul>
                </div>
              </li>
              {/* Social icons */}
              <li className="social-header">
                <div className="social-icon">
                  <a href="#"><i className="fa-brands fa-facebook" /></a>
                  <a href="#"><i className="fa-brands fa-facebook" /></a>
                  <a href="#"><i className="fa-brands fa-facebook" /></a>
                  <a href="#"><i className="fa-brands fa-facebook" /></a>
                  
                  {/* … */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
