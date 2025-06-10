// components/booking/StepSpecialty.tsx
'use client'
import React from 'react'
import { DoctorHeader } from './DoctorHeader'

interface StepProps { onNext: () => void }
export const StepSpecialty: React.FC<StepProps> = ({ onNext }) => (
  <div className="booking-widget multistep-form mb-5">
    <fieldset id="first">
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
          <div className="card mb-0">
            <div className="card-body pb-1">
              <div className="mb-4 pb-4 border-bottom">
                <label className="form-label">Select Speciality</label>
                <select className="select">
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Urology</option>
                </select>
              </div>
              <h6 className="mb-3">Services</h6>
              <div className="row">
                {[
                  { id: 1, name: 'Echocardiograms', price: '$310', active: true },
                  { id: 2, name: 'Stress tests', price: '$754' },
                  { id: 3, name: 'Stress tests', price: '$754' },
                  { id: 4, name: 'Heart Catheterization', price: '$150' },
                  { id: 5, name: 'Echocardiograms', price: '$200' },
                  { id: 6, name: 'Echocardiograms', price: '$200' },
                ].map((svc) => (
                  <div className="col-lg-4 col-md-6" key={svc.id}>
                    <div className={`service-item ${svc.active ? 'active' : ''}`}>
                      <input
                        className="form-check-input ms-0 mt-0"
                        type="checkbox"
                        id={`service${svc.id}`}
                        defaultChecked={svc.active}
                      />
                      <label className="form-check-label ms-2" htmlFor={`service${svc.id}`}>
                        <span className="service-title d-block mb-1">{svc.name}</span>
                        <span className="fs-14 d-block">{svc.price}</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
            <button disabled className="btn btn-md btn-dark inline-flex align-items-center rounded-pill opacity-50 cursor-not-allowed">
              <i className="isax isax-arrow-left-2 me-1" /> Back
            </button>
            <button onClick={onNext} className="btn btn-md btn-primary-gradient inline-flex align-items-center rounded-pill">
              Select Appointment Type <i className="isax isax-arrow-right-3 ms-1" />
            </button>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
)