// app/page.tsx
import { Banner, Speciality } from '@/components/ui';
import {
  ListSection,
  DoctorSection,
  ServiceSection,
  ReasonsSection,
  BookusSection,
  TestimonialSection,
  CompanySection,
  FaqSection,
  AppSection,
  ArticSection as ArticleSection,
} from '@/components/sections';

export const metadata = {
  title: 'Emchees Asuuy | Your Healthcare Platform',
  description: 'Welcome to Emchees Asuuy - Your trusted healthcare platform.',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Banner />
      <ListSection />
      <Speciality />
      <DoctorSection />
      <ServiceSection />
      <ReasonsSection />
      <BookusSection />
      <TestimonialSection />
      <CompanySection />
      <FaqSection />
      <AppSection />
      <ArticleSection />
    </main>
  );
}
