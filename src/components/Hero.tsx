import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ai-purple/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-subtle mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Voice-First Workout Tracking</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Log at the{" "}
              <span className="text-primary">Speed of Sound.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              The world's first voice-guided, local-first workout tracker. 
              <span className="text-foreground font-medium"> No accounts. No tracking. No limits.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </motion.div>
          
          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative float">
              {/* Phone Frame */}
              <div className="relative w-72 h-[580px] rounded-[3rem] bg-gradient-to-b from-background-surface to-background-elevated border border-border p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full rounded-[2.25rem] bg-background overflow-hidden relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-3">
                    <span className="text-xs font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 rounded-sm bg-foreground/60" />
                      <div className="w-4 h-2 rounded-sm bg-foreground/60" />
                      <div className="w-6 h-3 rounded-sm bg-success" />
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="px-5 pt-4 space-y-6">
                    <div className="text-center">
                      <h2 className="text-lg font-semibold mb-1">Guided Input</h2>
                      <p className="text-xs text-muted-foreground">Speak your workout</p>
                    </div>
                    
                    {/* Pulsing Mic */}
                    <div className="relative flex justify-center py-4">
                      <div className="absolute w-32 h-32 rounded-full bg-primary/10 pulse-ring" />
                      <div className="absolute w-24 h-24 rounded-full bg-primary/20 pulse-ring" style={{ animationDelay: '0.5s' }} />
                      <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-primary">
                        <Mic className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    
                    {/* Input Fields */}
                    <div className="space-y-3">
                      <InputField label="Exercise" value="Bench Press" active />
                      <InputField label="Sets" value="4" />
                      <InputField label="Reps" value="8" />
                      <InputField label="Weight" value="185 lbs" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow behind phone */}
              <div className="absolute inset-0 -z-10 bg-primary/30 blur-[60px] rounded-full scale-75" />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#features" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const InputField = ({ label, value, active = false }: { label: string; value: string; active?: boolean }) => (
  <div className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
    active 
      ? 'border-primary bg-primary/10' 
      : 'border-border bg-background-elevated'
  }`}>
    <span className="text-xs text-muted-foreground uppercase tracking-wide">{label}</span>
    <span className={`font-numeric font-medium ${active ? 'text-primary' : 'text-foreground'}`}>{value}</span>
  </div>
);

export default Hero;
