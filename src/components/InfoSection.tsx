'use client'

export default function InfoSection() {
  return (
    <section className="info-section">
      <div className="container">
        <div className="contact-info">
          <div className="d-lg-flex align-items-center justify-content-between w-100 gap-4">
            <div className="mb-4 mb-lg-0 aos" data-aos="fade-up">
              <h6 className="display-6 text-white">
                Working for Your Better Health.
              </h6>
            </div>
            <div
              className="d-sm-flex align-items-center justify-content-lg-end gap-4 aos"
              data-aos="fade-up"
            >
              <div className="con-info d-flex align-items-center mb-3 mb-sm-0">
                <span className="con-icon">
                  <i className="isax isax-headphone" />
                </span>
                <div className="ms-2">
                  <p className="text-white mb-1">Customer Support</p>
                  <p className="text-white fw-medium mb-0">
                    +1 56589 54598
                  </p>
                </div>
              </div>
              <div className="con-info d-flex align-items-center">
                <span className="con-icon">
                  <i className="isax isax-message-2" />
                </span>
                <div className="ms-2">
                  <p className="text-white mb-1">Drop Us an Email</p>
                  <p className="text-white fw-medium mb-0">
                    info1256@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
