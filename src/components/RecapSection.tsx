import { motion } from "framer-motion";
import { Sparkles, Share2, Dumbbell, Lock } from "lucide-react";

const stats = [
  { label: "Days", value: "16" },
  { label: "Sets", value: "212" },
  { label: "Volume", value: "84.2K" },
  { label: "PRs", value: "5" },
];

const RecapSection = () => {
  return (
    <section id="recap" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-64 w-[500px] h-[500px] bg-ai-purple/10 rounded-full blur-[200px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ai-purple/50 to-transparent" />

      <div className="container relative px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-purple/10 border border-ai-purple/20 mb-8">
              <Share2 className="w-4 h-4 text-ai-purple" />
              <span className="text-sm font-medium text-ai-purple">Monthly Recap</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Your Month.
              <br />
              <span className="text-gradient-ai">One Card. Share It.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every month, the AI Coach turns your grind into a recap card — training days,
              total sets, volume moved, PRs broken. Written on your iPhone, ready for your
              group chat or story in one tap.
            </p>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-background-elevated/50 border border-border/50 max-w-md">
              <Lock className="w-4 h-4 text-success shrink-0" />
              <p className="text-sm text-muted-foreground">
                Generated entirely on-device. You choose what gets shared — nothing leaves
                your phone until you hit the button.
              </p>
            </div>
          </motion.div>

          {/* Right: CSS recap card mirroring the in-app share card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-ai-purple/25 blur-[90px] rounded-full scale-90" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[340px] rounded-3xl p-7 shadow-2xl shadow-ai-purple/30"
                style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 60%, #9333ea 100%)" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-display font-bold tracking-wide text-sm uppercase">May 2026</span>
                  <Sparkles className="w-4 h-4 text-white/80" />
                </div>

                {/* Stats row */}
                <div className="flex justify-between mb-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* AI summary */}
                <p className="text-sm text-white/90 leading-relaxed mb-6">
                  Sixteen sessions and five new PRs — bench finally cracked 100. Volume up
                  hard on push days; chest and triceps carried the month. Keep this pace
                  and June gets ugly for your old maxes.
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/15">
                  <div className="flex items-center gap-1.5">
                    <Dumbbell className="w-3.5 h-3.5 text-white/70" />
                    <span className="text-xs font-semibold text-white/70">EchoLift</span>
                  </div>
                  <span className="text-xs text-white/60">Top focus: Chest</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecapSection;
