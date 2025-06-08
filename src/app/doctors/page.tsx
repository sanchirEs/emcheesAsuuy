import { DoctorSection, TestimonialSection } from '@/components/sections';

export const metadata = {
  title: 'Our Doctors | Emchees Asuuy',
  description: 'Meet our experienced healthcare professionals.',
};

export default function DoctorsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <DoctorSection />
      <TestimonialSection />
    </main>
  );
} 