import { motion } from "framer-motion";
import { Ghost, Globe, Zap, Clock, ArrowUpRight, TrendingUp, Video } from "lucide-react";
import ghostScreenshot from "@/assets/ghost-screenshot.png";

const SpeedLoggingSection = () => {
  const features = [
    {
      icon: Ghost,
      title: "Ghost Pre-fill",
      description: "Your best performance, ready to beat."
    },
    {
      icon: Clock,
      title: "One-Tap Logging",
      description: "Confirm or adjust. Zero typing required."
    },
    {
      icon: Globe,
      title: "Locale-Aware",
      description: "Period & comma decimal separators supported."
    },
    {
      icon: TrendingUp,
      title: "Instant Performance Review",
      description: "Tap any exercise to see PRs, trends & history."
    },
    {
      icon: Video,
      title: "Saved Exercise Videos",
      description: "Instantly pull up saved TikTok, Insta & YouTube guides."
    }
  ];

  return (
    <section id="speed" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Speed Logging</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              The <span className="text-gradient-primary">"Ghost"</span>
              <br />
              System
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Input fields pre-fill with your heaviest historical weights and reps. 
              Log entire sets with a single tap—or just confirm what you've always been lifting.
            </p>
            
            {/* Feature list - Modern horizontal cards */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-background-elevated/50 transition-all cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-semibold mb-0.5">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right: Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75" />
              
              <div className="relative glass-card p-8 lg:p-10 w-full max-w-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Ghost className="w-4 h-4" />
                    <span>Ghost values from last session</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <GhostInputField label="Exercise" value="Deadlift" />
                  <GhostInputField label="Sets" value="5" ghostValue="5" />
                  <GhostInputField label="Reps" value="5" ghostValue="5" />
                  <GhostInputField label="Weight" value="315" ghostValue="315 lbs" highlight />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-10 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-display font-semibold glow-primary transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Log Set
                </motion.button>
                
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Tap to confirm or swipe to adjust
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GhostInputField = ({ 
  label, 
  value, 
  ghostValue,
  highlight = false
}: { 
  label: string; 
  value: string; 
  ghostValue?: string;
  highlight?: boolean;
}) => (
  <div className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-all ${
    highlight 
      ? 'border-primary/50 bg-primary/5' 
      : 'border-border bg-background-elevated/50'
  }`}>
    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</span>
    <div className="text-right">
      <span className={`font-display font-semibold ${highlight ? 'text-primary' : 'text-foreground'}`}>
        {value}
      </span>
      {ghostValue && (
        <div className="text-xs text-muted-foreground/50 font-mono mt-0.5 flex items-center justify-end gap-1">
          <Ghost className="w-3 h-3" />
          {ghostValue}
        </div>
      )}
    </div>
  </div>
);

export default SpeedLoggingSection;
