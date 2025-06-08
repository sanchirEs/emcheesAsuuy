import { BookusSection } from '@/components/sections';

export const metadata = {
  title: 'Contact Us | Emchees Asuuy',
  description: 'Get in touch with us for appointments and inquiries.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BookusSection />
    </main>
  );
} 