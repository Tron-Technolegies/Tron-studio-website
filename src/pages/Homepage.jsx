import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/HeroSection/Hero'
import WhoWeAre from '../components/whoweare/WhoWeAre'
import VideoProjects from '../components/VideoProjects/VideoProjects'
import CraftingMagic from '../components/Craftingmagicsection/CraftingMagic'
import OurTeam from '../components/Ourteam/OurTeam'
import ReadySection from '../components/Readysection/ReadySection'
import Portfolio from '../components/portfoliosection/Portfolio'
import HowItWorks from '../components/howitworks/HowItWorks'
import OurClients from '../components/Ourclients/OurClients'
import Feedback from '../components/Feedback/Feedback'
import FAQ from '../components/FAQ/Faq'
import HomeInsights from '../components/Homeinsights/HomeInsights'
import ContactUs from '../components/Contactus/ContactUs'
import Footer from '../components/Footer/Footer'

export default function Homepage() {
  useEffect (() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>   
      <Navbar />

      <section id="hero"><Hero /></section>
      <section id="who-we-are"><WhoWeAre /></section>
      <section id="video-projects"><VideoProjects /></section>
      <section id="crafting-magic"><CraftingMagic /></section>
      <section id="team"><OurTeam /></section>
      <section id="ready"><ReadySection /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="clients"><OurClients /></section>
      <section id="feedback"><Feedback /></section>
      <section id="faq"><FAQ /></section>
      <section id="insights"><HomeInsights /></section>
      <section id="contact"><ContactUs /></section>

      <Footer />
    </div>
  )
}
