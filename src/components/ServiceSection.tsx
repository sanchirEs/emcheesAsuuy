// _components/ServicesSection.tsx
export default function ServicesSection() {
  return (
    <section className="services-section aos" data-aos="fade-up">
      <div
        className="horizontal-slide d-flex"
        data-direction="right"
        data-speed="slow"
      >
        <div className="slide-list d-flex gap-4">
          <div className="services-slide">
            <h6>
              <a href="javascript:void(0);">
                Multi Speciality Treatments &amp; Doctors
              </a>
            </h6>
          </div>
          <div className="services-slide">
            <h6>
              <a href="javascript:void(0);">Lab Testing Services</a>
            </h6>
          </div>
          <div className="services-slide">
            <h6>
              <a href="javascript:void(0);">Medecines &amp; Supplies</a>
            </h6>
          </div>
          <div className="services-slide">
            <h6>
              <a href="javascript:void(0);">Hospitals &amp; Clinics</a>
            </h6>
          </div>
          <div className="services-slide">
            <h6>
              <a href="javascript:void(0);">Health Care Services</a>
            </h6>
          </div>
          <div className="services-slide">
            <h6>
              <a href="javascript:void(0);">Talk to Doctors</a>
            </h6>
          </div>
          <div className="services-slide">
            <h6>
              <a href="javascript:void(0);">Home Care Services</a>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
