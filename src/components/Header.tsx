// components/Header.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  useEffect(() => {
    const mobileBtn = document.getElementById('mobile_btn')
    const menuClose = document.getElementById('menu_close')
    const headerMenu = document.querySelector('.header-menu')

    const openMenu = () => headerMenu?.classList.add('menu-open')
    const closeMenu = () => headerMenu?.classList.remove('menu-open')

    mobileBtn?.addEventListener('click', openMenu)
    menuClose?.addEventListener('click', closeMenu)

    return () => {
      mobileBtn?.removeEventListener('click', openMenu)
      menuClose?.removeEventListener('click', closeMenu)
    }
  }, [])

  return (
    <header className="header header-custom header-fixed inner-header relative">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="#">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link href="/" className="navbar-brand logo">
              <img src="/assets/img/logo.svg" className="img-fluid" alt="Logo" />
            </Link>
          </div>

          <div className="header-menu">
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link href="/" className="menu-logo">
                  <img src="/assets/img/logo.svg" className="img-fluid" alt="Logo" />
                </Link>
                <a id="menu_close" className="menu-close" href="#">
                  <i className="fas fa-times" />
                </a>
              </div>

              <ul className="main-nav">

                {/* Home mega-menu */}
                <li className="has-submenu megamenu active">
                  <a href="#">
                    Home <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu mega-submenu">
                    <li>
                      <div className="megamenu-wrapper">
                        <div className="row">
                          {[
                            { href: '/', label: 'General Home 1', img: 'home.jpg' },
                            { href: '/index-4', label: 'General Home 2', img: 'home-01.jpg' },
                            { href: '/index-2', label: 'General Home 3', img: 'home-02.jpg' },
                            { href: '/index-3', label: 'General Home 4', img: 'home-03.jpg' },
                            { href: '/index-5', label: 'Cardiology', img: 'home-04.jpg' },
                            { href: '/index-6', label: 'Eyecare', img: 'home-05.jpg' },
                            { href: '/index-7', label: 'Veterinary', img: 'home-06.jpg' },
                            { href: '/index-8', label: 'Pediatric', img: 'home-07.jpg' },
                            { href: '/index-9', label: 'Fertility', img: 'home-08.jpg' },
                            { href: '/index-10', label: 'ENT', img: 'home-09.jpg' },
                            { href: '/index-11', label: 'Cosmetics', img: 'home-10.jpg' },
                            { href: '/index-12', label: 'Lab Test', img: 'home-11.jpg' },
                            { href: '/pharmacy-index', label: 'Pharmacy', img: 'home-12.jpg' },
                            { href: '/index-13', label: 'Home Care', img: 'home-13.jpg' },
                            { href: '/index-14', label: 'Dentists', img: 'home-14.jpg' },
                          ].map((item, i) => (
                            <div key={i} className="col-lg-2">
                              <div className={`single-demo${i === 0 ? ' active' : ''}`}>
                                <div className="demo-img">
                                  <Link href={item.href} className="inner-demo-img">
                                    <img
                                      src={`/assets/img/home/${item.img}`}
                                      className="img-fluid"
                                      alt={item.label}
                                    />
                                  </Link>
                                </div>
                                <div className="demo-info">
                                  <Link href={item.href} className="inner-demo-img">
                                    {item.label}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                {/* Doctors */}
                <li className="has-submenu">
                  <a href="#">
                    Doctors <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    {[
                      { href: '/doctor-dashboard', label: 'Doctor Dashboard' },
                      { href: '/appointments', label: 'Appointments' },
                      { href: '/available-timings', label: 'Available Timing' },
                      { href: '/my-patients', label: 'Patients List' },
                      { href: '/patient-profile', label: 'Patients Profile' },
                      { href: '/chat-doctor', label: 'Chat' },
                      { href: '/invoices', label: 'Invoices' },
                      { href: '/doctor-profile-settings', label: 'Profile Settings' },
                      { href: '/reviews', label: 'Reviews' },
                      { href: '/doctor-register', label: 'Doctor Register' },
                    ].map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}

                    <li className="has-submenu">
                      <a href="#">Blog</a>
                      <ul className="submenu">
                        <li>
                          <Link href="/doctor-blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Blog view</Link>
                        </li>
                        <li>
                          <Link href="/doctor-add-blog">Add Blog</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Patients */}
                <li className="has-submenu">
                  <a href="#">
                    Patients <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link href="/patient-dashboard">Patient Dashboard</Link>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Doctors</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link href="/map-grid">Map Grid</Link>
                        </li>
                        <li>
                          <Link href="/map-list">Map List</Link>
                        </li>
                        <li>
                          <Link href="/map-list-availability">Map with Availability</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Search Doctor</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link href="/search">Search Doctor 1</Link>
                        </li>
                        <li>
                          <Link href="/search-2">Search Doctor 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Doctor Profile</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link href="/doctor-profile">Doctor Profile 1</Link>
                        </li>
                        <li>
                          <Link href="/doctor-profile-2">Doctor Profile 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Booking</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link href="/booking">Booking</Link>
                        </li>
                        <li>
                          <Link href="/booking-1">Booking 1</Link>
                        </li>
                        <li>
                          <Link href="/booking-2">Booking 2</Link>
                        </li>
                        <li>
                          <Link href="/booking-popup">Booking Popup</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link href="/booking-success">Booking Success</Link>
                    </li>
                    <li>
                      <Link href="/favourites">Favourites</Link>
                    </li>
                    <li>
                      <Link href="/chat">Chat</Link>
                    </li>
                    <li>
                      <Link href="/profile-settings">Profile Settings</Link>
                    </li>
                    <li>
                      <Link href="/change-password">Change Password</Link>
                    </li>
                  </ul>
                </li>

                {/* Pharmacy */}
                <li className="has-submenu">
                  <a href="#">
                    Pharmacy <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    {[
                      { href: '/pharmacy-index', label: 'Pharmacy' },
                      { href: '/pharmacy-details', label: 'Pharmacy Details' },
                      { href: '/pharmacy-search', label: 'Pharmacy Search' },
                      { href: '/product-all', label: 'Product' },
                      { href: '/product-description', label: 'Product Description' },
                      { href: '/cart', label: 'Cart' },
                      { href: '/product-checkout', label: 'Product Checkout' },
                      { href: '/payment-success', label: 'Payment Success' },
                      { href: '/pharmacy-register', label: 'Pharmacy Register' },
                    ].map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Pages */}
                <li className="has-submenu">
                  <a href="#">
                    Pages <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Other Pages</a>
                      <ul className="submenu inner-submenu">
                        {[
                          { href: '/blank-page', label: 'Starter Page' },
                          { href: '/pricing', label: 'Pricing Plan' },
                          { href: '/faq', label: 'FAQ' },
                          { href: '/maintenance', label: 'Maintenance' },
                          { href: '/coming-soon', label: 'Coming Soon' },
                          { href: '/terms-condition', label: 'Terms & Condition' },
                          { href: '/privacy-policy', label: 'Privacy Policy' },
                          { href: '/components', label: 'Components' },
                        ].map((item, i) => (
                          <li key={i}>
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Authentication</a>
                      <ul className="submenu inner-submenu">
                        {[
                          { href: '/login-email', label: 'Login Email' },
                          { href: '/login-phone', label: 'Login Phone' },
                          { href: '/doctor-signup', label: 'Doctor Signup' },
                          { href: '/patient-signup', label: 'Patient Signup' },
                          { href: '/forgot-password', label: 'Forgot Password 1' },
                          { href: '/forgot-password2', label: 'Forgot Password 2' },
                          { href: '/login-email-otp', label: 'Email OTP' },
                          { href: '/login-phone-otp', label: 'Phone OTP' },
                        ].map((item, i) => (
                          <li key={i}>
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Error Pages</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link href="/error-404">404 Error</Link>
                        </li>
                        <li>
                          <Link href="/error-500">500 Error</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/hospitals">Hospitals</Link>
                    </li>
                    <li>
                      <Link href="/speciality">Speciality</Link>
                    </li>
                    <li>
                      <Link href="/clinic">Clinic</Link>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Call</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link href="/voice-call">Voice Call</Link>
                        </li>
                        <li>
                          <Link href="/video-call">Video Call</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Invoices</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link href="/invoices">Invoices</Link>
                        </li>
                        <li>
                          <Link href="/invoice-view">Invoice View</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Blog */}
                <li className="has-submenu">
                  <a href="#">
                    Blog <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link href="/blog-list">Blog List</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Blog Grid</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>

                {/* Admin */}
                <li className="has-submenu">
                  <a href="#">
                    Admin <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="/admin/index.html" target="_blank">
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="/pharmacy/index.html" target="_blank">
                        Pharmacy Admin
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <ul className="nav header-navbar-rht">
              <li className="searchbar">
                <a href="#">
                  <i className="feather-search" />
                </a>
                <div className="togglesearch">
                  <form action="/search.html">
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <button type="submit" className="btn">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </li>
              <li>
                <Link
                  href="/login"
                  className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                >
                  <i className="isax isax-lock-1 me-1" /> Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                >
                  <i className="isax isax-user-tick me-1" /> Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
