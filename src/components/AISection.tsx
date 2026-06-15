import { motion } from "framer-motion";
import { Sparkles, Brain, Clipboard, ArrowRight, Check, Lock, Flame, Target, TrendingUp, Calendar } from "lucide-react";

const coachModes = [
  { icon: TrendingUp, label: "Analyze Progress", desc: "What's working, what's stalling" },
  { icon: Target, label: "Weak Points", desc: "Find the muscle groups you're skipping" },
  { icon: Flame, label: "Plateau Breaker", desc: "A plan to get a stuck lift moving" },
  { icon: Calendar, label: "Monthly Recap", desc: "Your month in one shareable card" },
];

const AISection = () => {
  return (
    <section id="ai" className="py-32 relative overflow-hidden">
      {/* AI gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai-purple/10 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ai-purple/50 to-transparent" />

      <div className="container relative px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-purple/10 border border-ai-purple/20 mb-8">
            <Sparkles className="w-4 h-4 text-ai-purple" />
            <span className="text-sm font-medium text-ai-purple">AI Coach — Private & On-Device</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            A Coach in Your Pocket.
            <br />
            <span className="text-gradient-ai">Built for Results.</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Get customized feedback, plateau-breaking tips, and weak point tracking. 
            Our on-device coaching analyzes your training history privately and works 100% offline.
          </p>
        </motion.div>

        {/* On-device coach modes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-8"
        >
          <div className="glass-card p-8 lg:p-10 border-glow-hover">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ai-purple/20 to-primary/20 border border-ai-purple/20 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-ai-purple" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold">Smart Coaching Insights</h3>
                  <p className="text-sm text-muted-foreground">Actionable advice to keep your lifts moving</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/30 text-success text-xs font-medium">
                <Lock className="w-3 h-3" />
                100% private
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {coachModes.map((mode, i) => (
                <motion.div
                  key={mode.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background-elevated/50 border border-border/50 hover-lift"
                >
                  <div className="w-11 h-11 rounded-xl bg-ai-purple/10 border border-ai-purple/20 flex items-center justify-center shrink-0">
                    <mode.icon className="w-5 h-5 text-ai-purple" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm">{mode.label}</h4>
                    <p className="text-xs text-muted-foreground">{mode.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secondary: bring your own AI */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Export Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="h-full glass-card p-8 lg:p-10 hover-lift border-glow-hover">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ai-purple/20 to-primary/20 border border-ai-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-ai-purple" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-ai-purple/10 text-ai-purple border border-ai-purple/20">Deep Link</span>
              </div>

              <h3 className="font-display text-2xl font-semibold mb-4">Consult the Cloud</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Connect directly with ChatGPT or Gemini. EchoLift formats your stats and deep-links
                straight into the chat—giving you instant feedback with no account-linking.
              </p>

              {/* Example output - Modern UI block */}
              <div className="glass-card-subtle rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 bg-background-elevated/30">
                  <Sparkles className="w-4 h-4 text-ai-purple" />
                  <span className="text-xs font-semibold text-foreground">Coach's Briefing</span>
                </div>
                <div className="p-5 text-sm space-y-2">
                  <div className="text-muted-foreground">Weekly Volume: <span className="text-success font-medium">+12% today</span></div>
                  <div className="text-muted-foreground">Strongest Lift: <span className="text-foreground font-medium">Bench Press (185 kg PR)</span></div>
                  <div className="text-muted-foreground flex items-center gap-1.5 text-xs bg-yellow-500/10 border border-yellow-500/20 p-2 rounded-lg mt-1 text-yellow-500">
                    <span>⚠️ Leg day has not been logged in 6 days.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Import Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="h-full glass-card p-8 lg:p-10 hover-lift border-glow-hover">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-ai-purple/20 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clipboard className="w-8 h-8 text-primary" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Import</span>
              </div>

              <h3 className="font-display text-2xl font-semibold mb-4">Plan Import</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Got a plan from ChatGPT or your coach? Paste it and EchoLift turns it
                into a ready-to-run workout — sets, reps, weights and all.
              </p>

              {/* Import flow - Modern steps */}
              <div className="space-y-4">
                <ImportStep number={1} text="Copy plan from ChatGPT" />
                <ImportStep number={2} text='Tap "Import from Clipboard"' />
                <ImportStep number={3} text="Workout loaded & ready" success />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ImportStep = ({ number, text, success = false }: { number: number; text: string; success?: boolean }) => (
  <div className="flex items-center gap-4">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-display font-bold ${
      success
        ? 'bg-success/20 text-success'
        : 'bg-background-elevated border border-border'
    }`}>
      {success ? <Check className="w-5 h-5" /> : number}
    </div>
    <span className={`text-sm ${success ? 'text-success font-medium' : 'text-muted-foreground'}`}>{text}</span>
    {!success && <ArrowRight className="w-4 h-4 text-muted-foreground/30 ml-auto" />}
  </div>
);

export default AISection;
