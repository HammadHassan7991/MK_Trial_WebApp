import React from 'react';
import PageHero from '../layout/PageHero';
import HeroBanner from '../assets/HeroBanner.jpg';

export default function LandingPage() {
  return (
    <div>
      <PageHero media={HeroBanner} />
    </div>
  );
}
