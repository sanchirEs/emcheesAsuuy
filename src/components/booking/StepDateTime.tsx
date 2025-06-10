// components/booking/StepDateTime.tsx
'use client';
import React from 'react';
import { DoctorHeader } from './DoctorHeader';

interface StepProps {
  onPrev: () => void;
  onNext: () => void;
}
export const StepDateTime: React.FC<StepProps> = ({ onPrev, onNext }) => (
  <div className="booking-widget multistep-form mb-5">
    <div className="card booking-card mb-0">
      <div className="card-header">
        <div className="booking-header pb-0">
          <div className="card mb-0">
            <div className="card-body">
              <DoctorHeader />
              <h6 className="mb-2 mt-4">Booking Info</h6>
              <div className="row gx-2 gy-3">
                <div className="col-lg-3 col-sm-6">
                  <h6 className="fs-14 fw-medium mb-1">Service</h6>
                  <p className="mb-0">Cardiology (30 Mins)</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h6 className="fs-14 fw-medium mb-1">Service</h6>
                  <p className="mb-0">Echocardiograms</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h6 className="fs-14 fw-medium mb-1">Date & Time</h6>
                  <p className="mb-0">10:00 - 11:00 AM, 15 Oct</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h6 className="fs-14 fw-medium mb-1">Appointment type</h6>
                  <p className="mb-0">Clinic (Wellness Path)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body booking-body">
        <div className="row">
          <div className="col-lg-5">
            <div className="card">
              <div className="card-body p-2 pt-3">
                {/* Here you can integrate React DatePicker or keep placeholder div */}
                <div id="datetimepickershow" className="h-64 border rounded bg-light"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card booking-wizard-slots">
              <div className="card-body">
                {['Morning', 'Afternoon', 'Evening'].map((period) => (
                  <div key={period} className="mb-4">
                    <div className="book-title">
                      <h6 className="fs-14 mb-2">{period}</h6>
                    </div>
                    <div className="token-slot mt-2 mb-2 d-flex flex-wrap gap-1">
                      {[...Array(11)].map((_, i) => (
                        <label key={i} className="visit-btns">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="appointment"
                            defaultChecked={i === 0 && period === 'Morning'}
                          />
                          <span className="visit-rsn">{i % 3 === 1 ? '-' : '10:45'}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            Add Basic Information <i className="isax isax-arrow-right-3 ms-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
