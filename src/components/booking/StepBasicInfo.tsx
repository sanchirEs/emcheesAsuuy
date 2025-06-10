// components/booking/StepBasicInfo.tsx
'use client';
import React from 'react';
import { DoctorHeader } from './DoctorHeader';

interface StepProps {
  onPrev: () => void;
  onNext: () => void;
}
export const StepBasicInfo: React.FC<StepProps> = ({ onPrev, onNext }) => (
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
        <div className="row gy-3">
          {[
            { id: 'firstName', label: 'First Name', type: 'text' },
            { id: 'lastName', label: 'Last Name', type: 'text' },
            { id: 'phone', label: 'Phone Number', type: 'text' },
            { id: 'email', label: 'Email Address', type: 'email' },
          ].map((field) => (
            <div className="col-lg-4 col-md-6" key={field.id}>
              <label className="form-label" htmlFor={field.id}>
                {field.label}
              </label>
              <input id={field.id} type={field.type} className="form-control" />
            </div>
          ))}
          <div className="col-lg-4 col-md-6">
            <label className="form-label">Select Patient</label>
            <select className="select">
              <option>Andrew Fletcher</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-6">
            <label className="form-label">Symptoms</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-lg-12">
            <label className="form-label">Attachment</label>
            <input type="file" className="form-control" />
          </div>
          <div className="col-lg-12">
            <label className="form-label">Reason for Visit</label>
            <textarea className="form-control" rows={3}></textarea>
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
            Select Payment <i className="isax isax-arrow-right-3 ms-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
