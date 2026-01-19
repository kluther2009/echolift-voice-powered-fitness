import { motion } from "framer-motion";
import { Mic, Volume2, CheckCircle2, Zap } from "lucide-react";

const VoiceLogicSection = () => {
  const phonetics = [
    { spoken: '"hero"', parsed: "0", explanation: "Noisy gym-proof" },
    { spoken: '"sticks"', parsed: "6", explanation: "Clear disambiguation" },
    { spoken: '"hate"', parsed: "8", explanation: "Rhyme recognition" },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: State Machine Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card p-8">
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Guided Input State Machine</h4>
              
              <div className="space-y-4">
                <StateStep
                  step={1}
                  prompt="What exercise?"
                  response="Bench Press"
                  active={false}
                  complete
                />
                <StateStep
                  step={2}
                  prompt="How many sets?"
                  response="4"
                  active={false}
                  complete
                />
                <StateStep
                  step={3}
                  prompt="How many reps?"
                  response="..."
                  active
                />
                <StateStep
                  step={4}
                  prompt="Weight used?"
                  response=""
                  active={false}
                />
              </div>
              
              {/* Audio wave visualization */}
              <div className="mt-8 flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1 flex items-center gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-primary rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 20 + 8}px`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm text-primary font-medium">Listening...</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-subtle mb-6">
              <Mic className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Guided Voice Logic</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Field-by-Field{" "}
              <span className="text-primary">Voice Guidance</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              No complex sentences required. The app asks, you answer. Our state-machine logic 
              guides you through each field with natural prompts.
            </p>
            
            {/* Phonetic Intelligence */}
            <div className="glass-card-subtle p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Gym-Speak Parser</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Phonetic intelligence that understands you in noisy environments:
              </p>
              
              <div className="grid grid-cols-3 gap-3">
                {phonetics.map((item) => (
                  <div key={item.spoken} className="text-center p-3 rounded-lg bg-background-elevated">
                    <div className="font-mono text-sm text-muted-foreground mb-1">{item.spoken}</div>
                    <div className="text-2xl font-bold font-numeric text-primary">{item.parsed}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.explanation}</div>
                  </div>
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
  active, 
  complete = false 
}: { 
  step: number; 
  prompt: string; 
  response: string; 
  active: boolean;
  complete?: boolean;
}) => (
  <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
    active 
      ? 'border-primary bg-primary/5' 
      : complete 
        ? 'border-success/20 bg-success/5' 
        : 'border-border bg-background-elevated'
  }`}>
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
      active 
        ? 'bg-primary text-primary-foreground' 
        : complete 
          ? 'bg-success/20 text-success' 
          : 'bg-muted text-muted-foreground'
    }`}>
      {complete ? <CheckCircle2 className="w-4 h-4" /> : step}
    </div>
    <div className="flex-1">
      <div className="text-sm text-muted-foreground">{prompt}</div>
      <div className={`font-medium ${active ? 'text-primary' : complete ? 'text-success' : 'text-muted-foreground'}`}>
        {response || '—'}
      </div>
    </div>
    {active && (
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
    )}
  </div>
);

export default VoiceLogicSection;
