import React from 'react';
import { Header } from "./components/Header/header.jsx";
import { HeroSection } from './components/Hero/HeroSection.jsx';
import { ServicesSection } from "./components/Service/ServicesSection.jsx";
import { AboutSection } from "./components/About section/AboutSection.jsx";
import { AdvantagesSection } from "./components/Adv Section/AdvantagesSection.jsx";
import { DoctorsSection } from "./components/Doctors/DoctorsSection.jsx";
import { PricesSection } from "./components/Prices/PricesSection.jsx";
import { ReviewsSection } from "./components/Review/ReviewsSection.jsx";
import { Footer } from "./components/Footer/footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <AdvantagesSection />
        <DoctorsSection />
        <PricesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

