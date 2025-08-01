import React, { useEffect } from 'react';
import Faq from '../components/FAQ/Faq';
import Footer from '../components/Footer/Footer';
import UaeHero from '../components/UAE-page/UAE-Hero/UaeHero';
import StatsAndLogos from '../components/UAE-page/statsandlogos/StatsandLogos';
import WhyChoose from '../components/UAE-page/Whychoose/WhyChoose';
import RecentProjects from '../components/UAE-page/RecentProjects/RecentProjects';
import WhatWeOffer from '../components/UAE-page/WhatweOffer/WhatWeOffer';
import Feedback from '../components/Feedback/Feedback';
import NavbarinPage from '../components/UAE-page/Navbar-in-page/NavbarinPage';


export default function UAE() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavbarinPage />
      <UaeHero />
      <StatsAndLogos />
      <WhyChoose />
      <RecentProjects />
      <WhatWeOffer />
      <Feedback />
      <Faq />
      <Footer />
    </div>
  );
}
