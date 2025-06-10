// components/booking/StepAppointmentType.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { DoctorHeader } from './DoctorHeader';

interface StepProps {
  onPrev: () => void;
  onNext: () => void;
}
export const StepAppointmentType: React.FC<StepProps> = ({ onPrev, onNext }) => (
  <div className="booking-widget multistep-form mb-5">
    
      <div className="card booking-card mb-0">
        <div className="card-header">
          <div className="booking-header pb-0">
            <div className="card mb-0">
              <div className="card-body">
                <DoctorHeader />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body booking-body">
          <h6 className="mb-3">Select Appointment Type</h6>
          <div className="row">
            {[
              { id: 7, icon: 'isax-hospital5', label: 'Clinic' },
              { id: 8, icon: 'isax-video5', label: 'Video Call' },
              { id: 9, icon: 'isax-call5', label: 'Audio Call' },
              { id: 10, icon: 'isax-messages-15', label: 'Chat' },
              { id: 11, icon: 'isax-messages-15', label: 'Home Visit' },
            ].map((opt, idx) => (
              <div className="col-xl col-md-3 col-sm-4 text-center" key={opt.id}>
                <div className="radio-select">
                  <input
                    className="form-check-input ms-0 mt-0"
                    type="radio"
                    name="appointmentType"
                    id={`service${opt.id}`}
                    defaultChecked={idx === 0}
                  />
                  <label className="form-check-label" htmlFor={`service${opt.id}`}>
                    <i className={opt.icon}></i>
                    <span className="service-title d-block">{opt.label}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="clinics-path mt-4">
            <h6 className="mb-3">Select Clinics</h6>
            <div>
              {[
                {
                  id: 12,
                  img: 'clinic-icon-01.svg',
                  name: 'AllCare Family Medicine',
                  address: '3343 Private Lane, Valdosta',
                  distance: '500 Meters',
                },
                {
                  id: 13,
                  img: 'clinic-icon-02.svg',
                  name: 'Vitalplus Clinic',
                  address: '4223 Pleasant Hill Road, Miami, FL 33169',
                  distance: '12 KM',
                },
                {
                  id: 14,
                  img: 'clinic-icon-03.svg',
                  name: 'Wellness Path Chiropractic',
                  address: '418 Patton Lane, Garner, NC 27529, FL 33169',
                  distance: '16 KM',
                },
              ].map((clin) => (
                <div className="service-item" key={clin.id}>
                  <input
                    className="form-check-input ms-0 mt-0"
                    type="checkbox"
                    id={`service${clin.id}`}
                    name="clinic"
                  />
                  <label className="form-check-label ms-2" htmlFor={`service${clin.id}`}>
                    <span className="d-flex align-items-center flex-wrap rpw-gap-2">
                      <span className="d-inline-block me-2">
                        <Image
                          src={`/assets/img/icons/${clin.img}`}
                          width={40}
                          height={40}
                          alt={clin.name}
                          className="rounded-circle"
                        />
                      </span>
                      <span>
                        <span className="service-title d-block mb-1">{clin.name}</span>
                        <span className="fs-14">{clin.address}</span>
                        <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
                        <span className="fs-14">{clin.distance}</span>
                      </span>
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <button
              onClick={onPrev}
              className="btn btn-md btn-dark inline-flex align-items-center rounded-pill"
            >
              <i className="isax isax-arrow-left-2 me-1" /> Back
            </button>
            <button
              onClick={onNext}
              className="btn btn-md btn-primary-gradient inline-flex align-items-center rounded-pill"
            >
              Select Date & Time <i className="isax isax-arrow-right-3 ms-1" />
            </button>
          </div>
        </div>
      </div>
    
  </div>
);
