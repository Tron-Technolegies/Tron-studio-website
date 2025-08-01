import React, { useEffect } from 'react';
import NavbarinPage from '../components/UAE-page/Navbar-in-page/NavbarinPage';
import RecentProjects from '../components/UAE-page/RecentProjects/RecentProjects';
import WhatWeOffer from '../components/UAE-page/WhatweOffer/WhatWeOffer';
import Feedback from '../components/Feedback/Feedback';
import FAQ from '../components/FAQ/Faq';
import Footer from '../components/Footer/Footer';
import KeralaHero from '../components/KeralaPage/KeralaHero/KeralaHero';
import StatsAndLogos from '../components/UAE-page/statsandlogos/StatsandLogos';
import KeralaWhyChoose from '../components/KeralaPage/KeralaWhyChoose/KeralaWhyChoose';
import ServicesSection from '../components/KeralaPage/ServiceSection/ServiceSection';

export default function Kerala() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavbarinPage />
      <KeralaHero />
      <StatsAndLogos />
      <KeralaWhyChoose />
      <RecentProjects />
      <WhatWeOffer />
      <ServicesSection />
      <Feedback />
      <FAQ />
      <Footer />
     
      
    </div>
  );
}
