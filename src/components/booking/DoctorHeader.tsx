// Shared Doctor Header (to keep code DRY)
import React from 'react'
import Image from 'next/image'
export const DoctorHeader: React.FC = () => (
  <div className="d-flex align-items-center flex-wrap rpw-gap-2 row-gap-2">
    <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
      <Image src="/assets/img/clients/client-15.jpg" alt="Doctor" width={80} height={80} />
    </span>
    <div>
      <h4 className="mb-1">
        Dr. Michael Brown{' '}
        <span className="badge bg-orange fs-12">
          <i className="fa-solid fa-star me-1" />5.0
        </span>
      </h4>
      <p className="text-indigo mb-3 fw-medium">Psychologist</p>
      <p className="mb-0">
        <i className="isax isax-location me-2" />5th Street - 1011 W 5th St, Suite 120, Austin, TX 78703
      </p>
    </div>
  </div>
)
