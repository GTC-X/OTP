import Image from "next/image";
import HeroBanner from './components/Home/HeroBanner';
import ServicesSection from './components/Home/ServicesSection';
import ConsultationSection from './components/Home/ConsultationSection';
import FAQSection from './components/Home/FAQSection'
import WhyChooseUsSection from './components/Home/WhyChooseUs'
import ContactForm from './components/Home/ContactForm'

export default function Home() {
  return (
    <>
    <HeroBanner />
    <ServicesSection />

    <WhyChooseUsSection />
    <FAQSection />
    <ConsultationSection />
    <ContactForm/>
    
    </>
  );
}
