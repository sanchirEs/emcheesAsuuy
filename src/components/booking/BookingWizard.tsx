// components/booking/BookingWizard.tsx
'use client'
import React from 'react'

const stepLabels = [
  'Specialty',
  'Appointment Type',
  'Date & Time',
  'Basic Information',
  'Payment',
  'Confirmation',
]

interface BookingWizardProps {
  activeStep: number
}

export const BookingWizard: React.FC<BookingWizardProps> = ({ activeStep }) => (
  <div className="booking-wizard">
    <ul className="form-wizard-steps d-sm-flex align-items-center justify-content-center" id="progressbar2">
      {stepLabels.map((label, idx) => (
        <li key={label} className={activeStep === idx + 1 ? 'progress-active' : ''}>
          <div className="profile-step">
            <span className="multi-steps">{idx + 1}</span>
            <div className="step-section">
              <h6>{label}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)