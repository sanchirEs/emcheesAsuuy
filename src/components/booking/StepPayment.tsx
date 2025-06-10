// components/booking/StepPayment.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { DoctorHeader } from './DoctorHeader';

interface StepProps {
  onPrev: () => void;
  onNext: () => void;
}
export const StepPayment: React.FC<StepProps> = ({ onPrev, onNext }) => (
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
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div className="card flex-fill mb-3 mb-lg-0">
              <div className="card-body">
                <h6 className="mb-3">Payment Gateway</h6>
                {/* Tabs removed for brevity; keep markup identical if needed */}
                <Image
                  src="/assets/img/icons/payment-icon-05.svg"
                  width={24}
                  height={24}
                  alt="credit"
                />
                <p className="mt-3">Payment form goes here.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="card flex-fill mb-0">
              <div className="card-body">
                <h6 className="mb-3">Booking Info</h6>
                <div className="mb-3">
                  <label className="form-label">Date & Time</label>
                  <div className="form-plain-text">10:00 - 11:00 AM, 15 Oct 2025</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Appointment type</label>
                  <div className="form-plain-text">Clinic (Wellness Path)</div>
                </div>
                {/* Payment breakdown */}
                <div className="pt-3 border-top booking-more-info">
                  {[
                    { label: 'Echocardiograms', price: '$200' },
                    { label: 'Booking Fees', price: '$20' },
                    { label: 'Tax', price: '$18' },
                    { label: 'Discount', price: '-$15', danger: true },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between mb-2"
                    >
                      <p className="mb-0">{item.label}</p>
                      <span className={`fw-medium d-block ${item.danger ? 'text-danger' : ''}`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-primary d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between p-3 rounded mt-3">
                  <h6 className="text-white">Total</h6>
                  <h6 className="text-white">$320</h6>
                </div>
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
            Confirm & Pay <i className="isax isax-arrow-right-3 ms-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
