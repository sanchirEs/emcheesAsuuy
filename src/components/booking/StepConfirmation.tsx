// components/booking/StepConfirmation.tsx
'use client';
import React from 'react';
import Image from 'next/image';

interface StepProps {
  onReset: () => void;
}
export const StepConfirmation: React.FC<StepProps> = ({ onReset }) => (
  <div className="booking-widget multistep-form mb-5">
    <div className="card booking-card">
      <div className="card-body booking-body pb-1">
        <div className="row">
          <div className="col-lg-8 d-flex">
            <div className="flex-fill">
              <div className="card">
                <div className="card-header">
                  <h5 className="d-flex align-items-center flex-wrap rpw-gap-2">
                    <i className="isax isax-tick-circle5 text-success me-2"></i>
                    Booking Confirmed
                  </h5>
                </div>
                <div className="card-header d-flex align-items-center flex-wrap rpw-gap-2">
                  <span className="avatar avatar-lg avatar-rounded me-2 flex-shrink-0">
                    <Image
                      src="/assets/img/clients/client-16.jpg"
                      width={60}
                      height={60}
                      alt="client"
                    />
                  </span>
                  <p className="mb-0">
                    Your Booking has been Confirmed with{' '}
                    <span className="text-dark">Dr. Michael Brown </span> be on time before{' '}
                    <span className="text-dark">15 Mins </span> From the appointment Time
                  </p>
                </div>
                <div className="card-body pb-1">
                  {/* Booking info summary omitted for brevity */}
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-body d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                  <div>
                    <h6 className="mb-1">Need Our Assistance</h6>
                    <p className="mb-0">
                      Call us in case you face any Issue on Booking / Cancellation
                    </p>
                  </div>
                  <a href="#" className="btn btn-light rounded-pill">
                    <i className="isax isax-call5 me-1" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body d-flex flex-column justify-content-between text-center">
                <h6 className="fs-14 mb-2">Booking Number</h6>
                <span className="booking-id-badge mb-3">DCRA12565</span>
                <Image
                  src="/assets/img/icons/payment-qr.svg"
                  width={120}
                  height={120}
                  alt="qr"
                  className="mx-auto mb-3"
                />
                <p>Scan this QR Code to Download the details of Appointment</p>
                <div className="w-100">
                  <button className="btn w-100 mb-3 btn-md btn-dark rounded-pill">
                    Add To Calendar
                  </button>
                  <button
                    onClick={onReset}
                    className="btn w-100 btn-md btn-primary-gradient rounded-pill"
                  >
                    Start New Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <button onClick={onReset} className="btn btn-link">
        <i className="isax isax-arrow-left-2 me-1"></i>Back to Bookings
      </button>
    </div>
  </div>
);
