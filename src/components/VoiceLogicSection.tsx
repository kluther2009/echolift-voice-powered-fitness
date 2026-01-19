import { motion } from "framer-motion";
import { Mic, Volume2, CheckCircle2, Zap, ArrowRight } from "lucide-react";

const VoiceLogicSection = () => {
  const phonetics = [
    { spoken: '"hero"', parsed: "0", color: "text-primary" },
    { spoken: '"sticks"', parsed: "6", color: "text-success" },
    { spoken: '"hate"', parsed: "8", color: "text-ai-purple" },
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px]" />
      
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left: Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card p-8 lg:p-10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Guided Input Machine</h4>
                <div className="flex items-center gap-2 text-xs text-success">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  Active
                </div>
              </div>
              
              <div className="space-y-3">
                <StateStep step={1} prompt="What exercise?" response="Bench Press" complete />
                <StateStep step={2} prompt="How many sets?" response="4" complete />
                <StateStep step={3} prompt="How many reps?" response="..." active />
                <StateStep step={4} prompt="Weight used?" response="" />
              </div>
              
              {/* Audio wave visualization */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shrink-0"
                >
                  <Volume2 className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <div className="flex-1 flex items-center gap-0.5 h-8">
                  {[...Array(32)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        height: [4, Math.random() * 24 + 8, 4],
                      }}
                      transition={{ 
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.02,
                        ease: "easeInOut"
                      }}
                      className="w-1 bg-primary rounded-full"
                    />
                  ))}
                </div>
                <span className="text-sm text-primary font-medium shrink-0">Listening...</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Mic className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Guided Voice Logic</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Field-by-Field
              <br />
              <span className="text-gradient-primary">Voice Guidance</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              No complex sentences required. The app asks, you answer. Our state-machine 
              logic guides you through each field with natural prompts.
            </p>
            
            {/* Phonetic Intelligence - Modern card */}
            <div className="glass-card-subtle p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ai-purple/20 to-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-ai-purple" />
                </div>
                <div>
                  <h4 className="font-display font-semibold">Gym-Speak Parser</h4>
                  <p className="text-xs text-muted-foreground">Phonetic intelligence for noisy environments</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {phonetics.map((item, i) => (
                  <motion.div
                    key={item.spoken}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="text-center p-5 rounded-2xl bg-background-elevated border border-border/50 hover-lift"
                  >
                    <div className="font-mono text-sm text-muted-foreground mb-2">{item.spoken}</div>
                    <ArrowRight className="w-4 h-4 mx-auto text-muted-foreground/50 mb-2" />
                    <div className={`font-display text-4xl font-bold ${item.color}`}>{item.parsed}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StateStep = ({ 
  step, 
  prompt, 
  response, 
  active = false, 
  complete = false 
}: { 
  step: number; 
  prompt: string; 
  response: string; 
  active?: boolean;
  complete?: boolean;
}) => (
  <motion.div
    initial={false}
    animate={{
      borderColor: active ? "hsl(var(--primary) / 0.5)" : complete ? "hsl(var(--success) / 0.3)" : "hsl(var(--border))",
      backgroundColor: active ? "hsl(var(--primary) / 0.05)" : complete ? "hsl(var(--success) / 0.03)" : "hsl(var(--background-elevated) / 0.5)",
    }}
    className="flex items-center gap-4 p-4 rounded-2xl border transition-all"
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-display font-bold transition-all ${
      active 
        ? 'bg-gradient-to-br from-primary to-primary-glow text-primary-foreground' 
        : complete 
          ? 'bg-success/20 text-success' 
          : 'bg-muted text-muted-foreground'
    }`}>
      {complete ? <CheckCircle2 className="w-5 h-5" /> : step}
    </div>
    <div className="flex-1">
      <div className="text-sm text-muted-foreground">{prompt}</div>
      <div className={`font-display font-medium ${active ? 'text-primary' : complete ? 'text-success' : 'text-muted-foreground/50'}`}>
        {response || '—'}
      </div>
    </div>
    {active && (
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-3 h-3 rounded-full bg-primary"
      />
    )}
  </motion.div>
);

export default VoiceLogicSection;
