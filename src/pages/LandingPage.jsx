import React from 'react';
import PageHero from '../layout/PageHero';
import HeroBanner from '../assets/HeroBanner.jpg';
import Navbar from '../layout/Navbar';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <PageHero media={HeroBanner} />
    </div>
  );
}
