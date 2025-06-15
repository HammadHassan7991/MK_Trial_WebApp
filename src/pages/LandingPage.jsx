import React from 'react';
import PageHero from '../layout/PageHero';
import HeroBanner from '../assets/HeroBanner.jpg';
import Navbar from '../layout/Navbar';
import Discover from '../components/landingPage/Discover';
import TestimonialSection from '../components/landingPage/Testimonials';
import Footer from '../layout/Footer';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <PageHero media={HeroBanner} />
      <Discover />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
