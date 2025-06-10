// app/booking/page.tsx
'use client'
import React, { useState } from 'react'
// import Navbar from '../../components/Navbar'
import { BookingWizard } from '../../components/booking/BookingWizard'
import { StepSpecialty } from '../../components/booking/StepSpecialty'
import { StepAppointmentType } from '../../components/booking/StepAppointmentType'
import { StepDateTime } from '../../components/booking/StepDateTime'
import { StepBasicInfo } from '../../components/booking/StepBasicInfo'
import { StepPayment } from '../../components/booking/StepPayment'
import { StepConfirmation } from '../../components/booking/StepConfirmation'

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const next = () => {
    setStep((s) => Math.min(s + 1, 6))
  }
  
  const prev = () => {
    setStep((s) => Math.max(s - 1, 1))
  }
  
  const reset = () => {
    setStep(1)
    setFormData({})
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepSpecialty key="step1" onNext={next} />
      case 2:
        return <StepAppointmentType key="step2" onPrev={prev} onNext={next} />
      case 3:
        return <StepDateTime key="step3" onPrev={prev} onNext={next} />
      case 4:
        return <StepBasicInfo key="step4" onPrev={prev} onNext={next} />
      case 5:
        return <StepPayment key="step5" onPrev={prev} onNext={next} />
      case 6:
        return <StepConfirmation key="step6" onReset={reset} />
      default:
        return null
    }
  }

  return (
    <div className="main-wrapper">
      {/* <Navbar /> */}
      <div className="doctor-content">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <BookingWizard activeStep={step} />
              <div className="step-content">
                {renderStep()}
              </div>
              <div className="text-center pt-4">
                <p className="mb-0">Copyright © 2025. All Rights Reserved, Doccure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  )
}
