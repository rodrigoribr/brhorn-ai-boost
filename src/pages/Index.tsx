import { useState } from "react";
import Hero from "@/components/Hero";
import SectorBenefits from "@/components/SectorBenefits";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Hero />
      <SectorBenefits />
      <Technology />
      
      <CTASection onOpenContact={() => setIsContactModalOpen(true)} />
      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
