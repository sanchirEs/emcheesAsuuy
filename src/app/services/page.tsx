import { ServiceSection, ReasonsSection } from '@/components/sections';

export const metadata = {
  title: 'Our Services | Emchees Asuuy',
  description: 'Explore our comprehensive healthcare services.',
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ServiceSection />
      <ReasonsSection />
    </main>
  );
} 