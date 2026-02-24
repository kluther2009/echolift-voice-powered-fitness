import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import appScreenshot from "@/assets/app-screenshot.png";

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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">Coming Soon • Voice-First • 100% Private</span>
              </motion.div>
              
              {/* Main headline - Extra bold, tighter tracking */}
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
                Log at the
                <br />
                <span className="text-gradient-primary">Speed of Sound.</span>
              </h1>
              
              {/* Subhead */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                The world's first voice-activated, local-first workout tracker.{" "}
                <span className="text-foreground font-medium">No accounts. No tracking. No limits.</span>
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" className="group text-base" asChild>
                  <a href="mailto:support@echolift.app?subject=Notify%20me%20when%20EchoLift%20launches&body=Hi%2C%20please%20let%20me%20know%20when%20EchoLift%20is%20available%20on%20the%20App%20Store!">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Notified
                  </a>
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
                
                {/* Pulsing rings around the phone */}
                <div className="absolute inset-0 flex items-center justify-center -z-5">
                  <div className="absolute w-80 h-[640px] rounded-[4rem] bg-primary/5 pulse-ring" />
                  <div className="absolute w-[340px] h-[680px] rounded-[4.5rem] bg-primary/3 pulse-ring" style={{ animationDelay: '0.5s' }} />
                </div>
                
                {/* iPhone Frame */}
                <div className="relative w-[280px] h-[605px] rounded-[3.2rem] bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] p-[4px] shadow-2xl overflow-hidden">
                  {/* Side buttons */}
                  <div className="absolute -left-[2px] top-28 w-[3px] h-8 bg-[#2a2a2e] rounded-l-sm" />
                  <div className="absolute -left-[2px] top-44 w-[3px] h-12 bg-[#2a2a2e] rounded-l-sm" />
                  <div className="absolute -left-[2px] top-60 w-[3px] h-12 bg-[#2a2a2e] rounded-l-sm" />
                  <div className="absolute -right-[2px] top-36 w-[3px] h-16 bg-[#2a2a2e] rounded-r-sm" />
                  
                  {/* Inner bezel */}
                  <div className="relative w-full h-full rounded-[2.9rem] bg-black overflow-hidden">
                    {/* Screen with proper clipping */}
                    <div className="absolute inset-[2px] rounded-[2.8rem] overflow-hidden">
                      <img 
                        src={appScreenshot} 
                        alt="EchoLift App Screenshot" 
                        className="w-full h-full object-contain"
                        style={{ imageRendering: 'auto', willChange: 'transform', transform: 'translateZ(0)' }}
                      />
                    </div>
                    
                    {/* Shine effect on top */}
                    {/* Removed shine overlay to keep screenshot crystal clear */}
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

export default Hero;
