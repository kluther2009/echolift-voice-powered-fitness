import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VoiceLogicSection from "@/components/VoiceLogicSection";
import PrivacySection from "@/components/PrivacySection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <VoiceLogicSection />
      <PrivacySection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
