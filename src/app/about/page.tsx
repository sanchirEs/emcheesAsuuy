import { CompanySection, InfoSection } from '@/components/sections';

export const metadata = {
  title: 'About Us | Emchees Asuuy',
  description: 'Learn more about Emchees Asuuy and our mission.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CompanySection />
      <InfoSection />
    </main>
  );
} 