/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PropertyTypesSection } from './components/PropertyTypesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialServiceForModal, setInitialServiceForModal] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    setInitialServiceForModal(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setInitialServiceForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* 3-Zone Top Bar Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. Property Types & High-Conversion Showcase (Inspired by Flex Painters reference) */}
        <PropertyTypesSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. Services Section: 6 Technical Services */}
        <ServicesSection onSelectServiceForEstimate={(serviceTitle) => handleOpenQuoteModal(serviceTitle)} />

        {/* 4. About the Company: Professional care, NR-35, Belém climate focus, 4-step workflow */}
        <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. Real Gallery & Before/After Interactive Comparison */}
        <GallerySection />

        {/* 6. Honest Testimonials & Syndic Quality Space */}
        <TestimonialsSection />

        {/* 7. Contact Section: Phones, WhatsApps, Email, Address, Direct Form */}
        <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating WhatsApp Trigger */}
      <FloatingWhatsApp />

      {/* Interactive Quote Calculator / Estimator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={initialServiceForModal}
      />
    </div>
  );
}
