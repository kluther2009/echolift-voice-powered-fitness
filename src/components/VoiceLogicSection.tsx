import { motion } from "framer-motion";
import { Mic, Volume2, Zap, ArrowRight, Lock, RotateCcw } from "lucide-react";

const VoiceLogicSection = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left: Siri conversation demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card p-8 lg:p-10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Example Siri conversation</h4>
                <div className="flex items-center gap-2 text-xs text-success">
                  <Lock className="w-3 h-3" />
                  Screen locked
                </div>
              </div>

              <div className="space-y-3">
                <ChatLine user text="Hey Siri, log bench press in EchoLift" delay={0} />
                <ChatLine text="Sets, reps and weight?" delay={0.15} />
                <ChatLine user text="3 by 10 at 80" delay={0.3} />
                <ChatLine text="Logged. Bench press, 3×10 at 80." success delay={0.45} />
              </div>

              {/* Repeat set chip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex items-center gap-3 p-4 rounded-2xl bg-background-elevated/50 border border-border/50"
              >
                <RotateCcw className="w-4 h-4 text-primary shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Next set? Just say <span className="text-foreground font-medium">"log again in EchoLift"</span> to repeat the previous entry.
                </p>
              </motion.div>

              {/* Audio wave visualization */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75 }}
                className="mt-4 flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20"
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
              <span className="text-sm font-medium text-primary">Hands-Free with Siri</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Rack the Bar.
              <br />
              <span className="text-gradient-primary">Say the Set.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Speak your exercise, sets, reps and weight between sets. Listen to the
              confirmation, then get back to lifting. You can also log and edit
              directly in the app whenever you prefer.
            </p>

            {/* Hear what you logged - Modern card */}
            <div className="glass-card-subtle p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold">Hear what you logged</h4>
                  <p className="text-xs text-muted-foreground">Spoken confirmations help you check each entry</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between p-4 rounded-2xl bg-background-elevated border border-border/50">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Example command:</span>
                    <p className="text-sm font-mono text-foreground mt-1 font-semibold">"Log bench press, 3 sets of 10 at 50 kilograms"</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/30 hidden sm:block rotate-90 sm:rotate-0 self-center" />
                  <div className="flex-1 bg-success/5 border border-success/20 p-3 rounded-xl w-full">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-success">Entry to confirm:</span>
                    <p className="text-sm font-semibold text-foreground mt-1">Bench Press: 3 sets × 10 reps @ 50 kg</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ChatLine = ({
  text,
  user = false,
  success = false,
  delay = 0,
}: {
  text: string;
  user?: boolean;
  success?: boolean;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className={`flex ${user ? "justify-end" : "justify-start"}`}
  >
    <div
      className={`flex items-center gap-2 px-4 py-3 rounded-2xl max-w-[85%] ${
        user
          ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground"
          : success
            ? "bg-success/10 border border-success/30 text-success"
            : "bg-background-elevated border border-border/50 text-foreground"
      }`}
    >
      {user && <Mic className="w-3.5 h-3.5 shrink-0 opacity-80" />}
      <span className={`text-sm ${user ? "font-medium" : ""}`}>{user ? `"${text}"` : text}</span>
    </div>
  </motion.div>
);

export default VoiceLogicSection;
