import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-ai-purple/15 rounded-full blur-[180px]"
      />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Asymmetric layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Text Content - Takes 7 columns */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span className="text-sm font-medium text-success">Voice-First • 100% Private</span>
              </motion.div>
              
              {/* Main headline - Extra bold, tighter tracking */}
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
                Log at the
                <br />
                <span className="text-gradient-primary">Speed of Sound.</span>
              </h1>
              
              {/* Subhead */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                The world's first voice-guided, local-first workout tracker.{" "}
                <span className="text-foreground font-medium">No accounts. No tracking. No limits.</span>
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" className="group text-base">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download for iOS
                </Button>
                <Button variant="glass" size="xl" asChild className="text-base">
                  <a href="#features" className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    See Features
                  </a>
                </Button>
              </div>
              
              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
              >
                <div className="text-center lg:text-left">
                  <div className="font-display text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">On-Device</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-display text-3xl font-bold text-success">0ms</div>
                  <div className="text-sm text-muted-foreground">Cloud Latency</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-display text-3xl font-bold text-ai-purple">∞</div>
                  <div className="text-sm text-muted-foreground">Data Ownership</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right: Phone Mockup - Takes 5 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-5 relative flex justify-center perspective-1000"
            >
              <div className="relative float">
                {/* Glow behind phone */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/40 via-ai-purple/30 to-transparent blur-[80px] rounded-full scale-90" />
                
                {/* Phone Frame - Modern bezeless */}
                <div className="relative w-72 h-[600px] rounded-[3.5rem] bg-gradient-to-b from-background-surface to-background-elevated p-2 shadow-2xl border border-border/50">
                  {/* Screen */}
                  <div className="w-full h-full rounded-[3rem] bg-background overflow-hidden relative">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-foreground/90 rounded-full" />
                    
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-8 pt-14 pb-4">
                      <span className="text-sm font-semibold">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-1 h-2 rounded-sm bg-foreground/70" />
                          ))}
                        </div>
                        <div className="w-6 h-3 rounded-sm bg-success relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-success rounded-l-sm -mr-0.5" />
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="px-6 pt-2 space-y-5">
                      <div className="text-center">
                        <h2 className="font-display text-xl font-bold mb-1">Guided Input</h2>
                        <p className="text-xs text-muted-foreground">Speak your workout</p>
                      </div>
                      
                      {/* Pulsing Mic with enhanced animation */}
                      <div className="relative flex justify-center py-6">
                        <div className="absolute w-36 h-36 rounded-full bg-primary/10 pulse-ring" />
                        <div className="absolute w-28 h-28 rounded-full bg-primary/15 pulse-ring" style={{ animationDelay: '0.3s' }} />
                        <div className="absolute w-20 h-20 rounded-full bg-primary/20 pulse-ring" style={{ animationDelay: '0.6s' }} />
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center glow-primary"
                        >
                          <Mic className="w-7 h-7 text-primary-foreground" />
                        </motion.div>
                      </div>
                      
                      {/* Input Fields - Modern style */}
                      <div className="space-y-2.5">
                        <InputField label="Exercise" value="Bench Press" active />
                        <InputField label="Sets" value="4" />
                        <InputField label="Reps" value="8" />
                        <InputField label="Weight" value="185 lbs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#features" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const InputField = ({ label, value, active = false }: { label: string; value: string; active?: boolean }) => (
  <div className={`flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all ${
    active 
      ? 'border-primary/50 bg-primary/10' 
      : 'border-border bg-background-elevated/50'
  }`}>
    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</span>
    <span className={`font-display font-semibold ${active ? 'text-primary' : 'text-foreground'}`}>{value}</span>
  </div>
);

export default Hero;
