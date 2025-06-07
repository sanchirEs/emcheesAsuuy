// src/components/ServicesSection.tsx
'use client';

export default function ServicesSection() {
  const services = [
    'Multi Speciality Treatments & Doctors',
    'Lab Testing Services',
    'Medecines & Supplies',
    'Hospitals & Clinics',
    'Health Care Services',
    'Talk to Doctors',
    'Home Care Services',
  ];

  return (
    <section className="services-section " data-="fade-up">
      <div className="horizontal-slide d-flex" data-direction="right" data-speed="slow">
        <div className="slide-list d-flex gap-4">
          {services.map((label, idx) => (
            <div key={idx} className="services-slide">
              <h6>
                <button
                  type="button"
                  className="bg-transparent border-0 p-0 text-decoration-none text-inherit"
                >
                  {label}
                </button>
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
