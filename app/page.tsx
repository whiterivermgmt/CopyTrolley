import ContactSection from '@/components/ui/ContactSection';
import Container from '@/components/ui/Container';
import HeroSlideshow from '@/components/ui/HeroSlideshow';
import HomeGallery from '@/components/ui/HomeGallery';
import OurServices from '@/components/ui/OurServices';
import PremiumSection from '@/components/ui/PremiumSection';
import QuickEstimate from '@/components/ui/QuickEstimate';
import TestimonialsCarousel from '@/components/ui/Reviews';
import WhyGerkin from '@/components/ui/WhyGerkin';
import Script from 'next/script';
import React from 'react';

const Home = () => {
  return (
    <>
      <HeroSlideshow />
        <div>
          <ContactSection />
        </div> 
          <OurServices />
          <PremiumSection />
          <WhyGerkin />
          <HomeGallery />
          <TestimonialsCarousel />

  {/* Owens Corning Roof Visualizer */}
  <section className="bg-gray-50 py-20">
    <Container>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Try Our Roof Visualizer</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Visualize your new roof with Owens Corning’s Design EyeQ tool. Enter your ZIP code to get started!
        </p>
      </div>

      {/* Widget Container */}
      <div id="visualizer" data-zip="47421" className="rounded-xl shadow-lg overflow-hidden"></div>
    </Container>
  </section>

  {/* Load Owens Corning widget script */}
  <Script
    src="https://apis.owenscorning.com/client/widget.js"
    strategy="afterInteractive"
    async
  />
            <QuickEstimate />
    </>
    
  );
};

export default Home;
