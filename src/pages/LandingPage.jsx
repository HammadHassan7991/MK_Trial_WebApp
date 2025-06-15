import React, { lazy, Suspense } from 'react';
import PageHero from '../layout/PageHero';
import HeroBanner from '../assets/HeroBanner.jpg';
import Navbar from '../layout/Navbar';
import Discover from '../components/landingPage/Discover';
import Footer from '../layout/Footer';
import ShowGallery from '../components/landingPage/Gallery';
import Loader from '../components/common/loader';
const TestimonialSection = lazy(() =>
  import('../components/landingPage/Testimonials')
);

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <PageHero media={HeroBanner} />
      <Discover />
      <Suspense fallback={<Loader />}>
        <TestimonialSection />
      </Suspense>
      <ShowGallery />
      <Footer />
    </div>
  );
}
