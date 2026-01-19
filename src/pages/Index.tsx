import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VoiceLogicSection from "@/components/VoiceLogicSection";
import PrivacySection from "@/components/PrivacySection";
import AISection from "@/components/AISection";
import SpeedLoggingSection from "@/components/SpeedLoggingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <VoiceLogicSection />
      <PrivacySection />
      <AISection />
      <SpeedLoggingSection />
      <Footer />
    </div>
  );
};

export default Index;
