import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import VoiceLogicSection from "@/components/VoiceLogicSection";
import PrivacySection from "@/components/PrivacySection";
import AISection from "@/components/AISection";
import RecapSection from "@/components/RecapSection";
import SpeedLoggingSection from "@/components/SpeedLoggingSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesShowcase />
      <VoiceLogicSection />
      <PrivacySection />
      <AISection />
      <RecapSection />
      <SpeedLoggingSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
