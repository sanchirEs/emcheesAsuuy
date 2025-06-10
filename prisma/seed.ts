// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   console.log('🌱 Starting seed...')

//   // Create subscription plans
//   const basicPlan = await prisma.subscriptionPlan.upsert({
//     where: { name: 'Basic' },
//     update: {},
//     create: {
//       name: 'Basic',
//       maxDoctors: 5,
//       maxAppointments: 500,
//       priceCents: 2900, // $29/month
//       features: {
//         appointments: true,
//         reminders: true,
//         basicReports: true
//       }
//     }
//   })

//   const proPlan = await prisma.subscriptionPlan.upsert({
//     where: { name: 'Pro' },
//     update: {},
//     create: {
//       name: 'Pro',
//       maxDoctors: 20,
//       maxAppointments: 2000,
//       priceCents: 9900, // $99/month
//       features: {
//         appointments: true,
//         reminders: true,
//         basicReports: true,
//         advancedReports: true,
//         multiLocation: true,
//         paymentProcessing: true
//       }
//     }
//   })

//   // Create sample clinic
//   const clinic = await prisma.clinic.upsert({
//     where: { slug: 'family-dental-clinic' },
//     update: {},
//     create: {
//       name: 'Family Dental Clinic',
//       slug: 'family-dental-clinic',
//       email: 'info@familydental.mn',
//       phone: '+976-11-123456',
//       address: '123 Peace Avenue',
//       city: 'Ulaanbaatar',
//       country: 'Mongolia',
//       subscriptionId: basicPlan.id,
//       maxDoctors: 5,
//       maxAppointments: 500
//     }
//   })

//   // Create clinic settings
//   await prisma.clinicSettings.upsert({
//     where: { clinicId: clinic.id },
//     update: {},
//     create: {
//       clinicId: clinic.id,
//       advanceBookingDays: 30,
//       minBookingNoticeHours: 2,
//       maxAppointmentsPerDay: 8,
//       cancellationHours: 24,
//       cancellationFeePercent: 0,
//       emailNotifications: true,
//       smsNotifications: false,
//       reminderHours: [24, 2],
//       primaryColor: '#007bff'
//     }
//   })

//   // Create specialties
//   const generalDentistry = await prisma.specialty.upsert({
//     where: { name: 'General Dentistry' },
//     update: {},
//     create: {
//       name: 'General Dentistry',
//       description: 'Comprehensive dental care for all ages'
//     }
//   })

//   const orthodontics = await prisma.specialty.upsert({
//     where: { name: 'Orthodontics' },
//     update: {},
//     create: {
//       name: 'Orthodontics',
//       description: 'Teeth straightening and bite correction'
//     }
//   })

//   const pediatricDentistry = await prisma.specialty.upsert({
//     where: { name: 'Pediatric Dentistry' },
//     update: {},
//     create: {
//       name: 'Pediatric Dentistry',
//       description: 'Dental care specialized for children'
//     }
//   })

//   // Create sample doctor
//   const doctor = await prisma.doctor.create({
//     data: {
//       clinicId: clinic.id,
//       fullName: 'Dr. Batbayar Erdene',
//       email: 'dr.batbayar@familydental.mn',
//       phone: '+976-99-123456',
//       bio: 'Experienced general dentist with 10+ years of practice in Mongolia.',
//       licenseNumber: 'MD-12345',
//       yearsExperience: 12,
//       education: [
//         {
//           degree: 'Doctor of Dental Medicine',
//           institution: 'National University of Mongolia',
//           year: 2012
//         }
//       ],
//       languages: ['Mongolian', 'English'],
//       isActive: true,
//       isVerified: true,
//       verifiedAt: new Date()
//     }
//   })

//   // Assign specialties to doctor
//   await prisma.doctorSpecialty.create({
//     data: {
//       doctorId: doctor.id,
//       specialtyId: generalDentistry.id,
//       isPrimary: true,
//       certifiedAt: new Date('2012-06-01')
//     }
//   })

//   await prisma.doctorSpecialty.create({
//     data: {
//       doctorId: doctor.id,
//       specialtyId: pediatricDentistry.id,
//       isPrimary: false,
//       certifiedAt: new Date('2015-03-01')
//     }
//   })

//   // Create services
//   const consultation = await prisma.service.create({
//     data: {
//       doctorId: doctor.id,
//       title: 'General Consultation',
//       description: 'Comprehensive dental examination and consultation',
//       category: 'CONSULTATION',
//       durationMin: 30,
//       bufferMin: 15,
//       priceCents: 5000, // 50,000 MNT
//       depositPercent: 0,
//       isActive: true
//     }
//   })

//   const cleaning = await prisma.service.create({
//     data: {
//       doctorId: doctor.id,
//       title: 'Dental Cleaning',
//       description: 'Professional teeth cleaning and polishing',
//       category: 'PROCEDURE',
//       durationMin: 60,
//       bufferMin: 15,
//       priceCents: 8000, // 80,000 MNT
//       depositPercent: 25,
//       isActive: true,
//       requiresDeposit: true
//     }
//   })

//   // Create doctor availability (Monday to Friday, 9 AM to 5 PM)
//   const weekdays = [1, 2, 3, 4, 5] // Monday to Friday
  
//   for (const weekday of weekdays) {
//     await prisma.availability.create({
//       data: {
//         doctorId: doctor.id,
//         weekday,
//         startTime: '09:00',
//         endTime: '17:00',
//         capacity: 1,
//         slotDuration: 30,
//         breaks: [
//           { start: '12:00', end: '13:00' } // Lunch break
//         ],
//         isActive: true
//       }
//     })
//   }

//   // Create payment method
//   await prisma.paymentMethod.create({
//     data: {
//       clinicId: clinic.id,
//       type: 'CASH',
//       name: 'Cash Payment',
//       isActive: true,
//       config: {}
//     }
//   })

//   // Create sample patient
//   const patient = await prisma.patient.create({
//     data: {
//       fullName: 'Oyunerdene Munkh',
//       email: 'oyunerdene@email.com',
//       phone: '+976-88-123456',
//       dateOfBirth: new Date('1990-05-15'),
//       gender: 'FEMALE',
//       address: '456 Sukhbaatar Street',
//       city: 'Ulaanbaatar',
//       preferredLanguage: 'Mongolian',
//       isActive: true
//     }
//   })

//   console.log('✅ Seed completed successfully!')
//   console.log('📊 Created:')
//   console.log(`  - ${2} subscription plans`)
//   console.log(`  - ${1} clinic with settings`)
//   console.log(`  - ${3} medical specialties`)
//   console.log(`  - ${1} doctor with ${2} specialties`)
//   console.log(`  - ${2} services`)
//   console.log(`  - ${5} availability slots`)
//   console.log(`  - ${1} payment method`)
//   console.log(`  - ${1} sample patient`)
//   console.log('')
//   console.log('🎯 Next steps:')
//   console.log('  - Run `npx prisma studio` to view your data')
//   console.log('  - Start building your Next.js pages')
//   console.log('  - Test appointment booking flow')
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error('❌ Seed failed:', e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })