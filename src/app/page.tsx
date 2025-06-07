// app/page.tsx
import Banner from '../components/Banner';
import Speciality from '../components/Speciality';
import ListSection from '../components/ListSection';
import DoctorSection from '../components/DoctorSection';
import ServiceSection from '../components/ServiceSection';
import ReasonsSection from '../components/ReasonsSection';
import BookusSection from '../components/BookusSection';
import TestimonialSection from '../components/TestimonialSection';
import CompanySection from '../components/CompanySection';
import FaqSection from '../components/FaqSection';
import AppSection from '../components/AppSection';
import ArticleSection from '../components/ArticSection';

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
