import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  RotateCcw,
  Trophy,
  Hand,
  Sparkles,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// The feature run-through: what makes EchoLift different, one card per
// capability. Everything here is SHIPPED behavior — no roadmap items.

const features = [
  {
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    title: "It knows your lifts",
    text: "Uses your exercise history to flag unlikely weights and help resolve exercise names. Spoken confirmations let you check what was logged.",
  },
  {
    icon: Zap,
    color: "text-success",
    bg: "bg-success/10 border-success/20",
    title: "Skip the weight",
    text: "When recent history is available, leave out the weight and EchoLift can reuse it, with the assumption spoken back to you.",
  },
  {
    icon: RotateCcw,
    color: "text-ai-purple",
    bg: "bg-ai-purple/10 border-ai-purple/20",
    title: "One breath to undo",
    text: "Wrong log? “Undo last set in EchoLift.” It's removed, and Siri reads back exactly what went. Mistakes cost a sentence, not a phone grab.",
  },
  {
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
    title: "PRs, announced",
    text: "Beat your all-time best and hear it the second it happens — “New PR! Up from 85.” Confetti waits on screen for when you look.",
  },
  {
    icon: Hand,
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    title: "Two-tap repeats",
    text: "Phone already in hand? Tap any set in today's workout and the form refills itself. Adjust the weight, save. No retyping exercise names, ever.",
  },
  {
    icon: Sparkles,
    color: "text-ai-purple",
    bg: "bg-ai-purple/10 border-ai-purple/20",
    title: "AI Coach, two ways",
    text: "On supported iPhones, Apple Intelligence analyzes your progress on device. You can also choose to share your history with an external AI service.",
  },
  {
    icon: ClipboardList,
    color: "text-success",
    bg: "bg-success/10 border-success/20",
    title: "Plans by voice",
    text: "“Start my plan.” “What's left?” “Finish my workout” — and hear your session summary: sets, volume, duration, PRs. The whole workout, no screen.",
  },
  {
    icon: BarChart3,
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
    title: "See your training",
    text: "Muscle heatmaps, strength trends, personal records, week streaks. Everything computed on your iPhone from your own log — no server, no account.",
  },
];

const FeatureRunthroughSection = () => {
  return (
    <section id="runthrough" className="py-32 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ai-purple/10 rounded-full blur-[200px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              The Run-Through
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-6">
              Not another tracker.
              <br />
              <span className="text-gradient-primary">A different interface.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every tracker logs sets. EchoLift is built for the moment you're
              gassed, chalked up, and the phone is the last thing you want to
              touch.
            </p>
          </motion.div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="glass-card p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
              >
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${feature.bg}`}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h3 className="font-display text-lg font-semibold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-14"
          >
            <Button variant="hero" size="xl" asChild className="text-base">
              <a
                href="https://apps.apple.com/nl/app/echolift/id6757499671?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try EchoLift
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureRunthroughSection;
