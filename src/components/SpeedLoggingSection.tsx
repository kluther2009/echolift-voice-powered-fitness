import { motion } from "framer-motion";
import { Ghost, Globe, Zap, Clock } from "lucide-react";

const SpeedLoggingSection = () => {
  return (
    <section id="speed" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-elevated/50 to-transparent" />
      
      <div className="container relative px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-subtle mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Speed Logging</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The <span className="text-primary">"Ghost"</span> System
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Input fields pre-fill with your heaviest historical weights and reps. 
              Log entire sets with a single tap—or just confirm what you've always been lifting.
            </p>
            
            <div className="space-y-4">
              <FeatureItem
                icon={Ghost}
                title="Ghost Pre-fill"
                description="Your best performance, ready to beat."
              />
              <FeatureItem
                icon={Clock}
                title="One-Tap Logging"
                description="Confirm or adjust. No typing required."
              />
              <FeatureItem
                icon={Globe}
                title="Locale-Aware"
                description="Full support for period and comma decimal separators."
              />
            </div>
          </motion.div>
          
          {/* Right: Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="glass-card p-8 w-full max-w-sm">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Ghost className="w-4 h-4" />
                  <span>Ghost values from last session</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <GhostInputField 
                  label="Exercise" 
                  value="Deadlift" 
                  ghost={false}
                />
                <GhostInputField 
                  label="Sets" 
                  value="5" 
                  ghostValue="5"
                />
                <GhostInputField 
                  label="Reps" 
                  value="5" 
                  ghostValue="5"
                />
                <GhostInputField 
                  label="Weight" 
                  value="315" 
                  ghostValue="315 lbs"
                  highlight
                />
              </div>
              
              <button className="w-full mt-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold glow-primary hover:scale-[1.02] active:scale-100 transition-transform">
                Log Set
              </button>
              
              <p className="text-center text-xs text-muted-foreground mt-4">
                Tap to confirm or swipe to adjust
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const GhostInputField = ({ 
  label, 
  value, 
  ghostValue,
  ghost = true,
  highlight = false
}: { 
  label: string; 
  value: string; 
  ghostValue?: string;
  ghost?: boolean;
  highlight?: boolean;
}) => (
  <div className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
    highlight 
      ? 'border-primary bg-primary/10' 
      : 'border-border bg-background-elevated'
  }`}>
    <span className="text-xs text-muted-foreground uppercase tracking-wide">{label}</span>
    <div className="text-right">
      <span className={`font-numeric font-medium ${highlight ? 'text-primary' : 'text-foreground'}`}>
        {value}
      </span>
      {ghost && ghostValue && (
        <div className="text-xs text-muted-foreground/60 font-mono mt-0.5">
          ← {ghostValue}
        </div>
      )}
    </div>
  </div>
);

export default SpeedLoggingSection;
