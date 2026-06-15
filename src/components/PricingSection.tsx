import { motion } from "framer-motion";
import { Check, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const coreFeatures = [
    "Unlimited Voice Logging",
    "100% Offline & Private",
    "Last 30 Days Logbook",
    "Standard Exercise Library",
  ];

  const proFeatures = [
    "Smart AI Coach Insights",
    "Trophy Case & PR Celebrations",
    "Unlimited Logbook & Progress Charts",
    "Independent Developer Support",
  ];

  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
            <Shield className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Transparent Pricing</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Fair Pricing.{" "}
            <span className="text-gradient-primary">No Data Selling.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* ECHO CORE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold mb-1">Echo Core</h3>
              <p className="text-sm text-muted-foreground">Free Forever</p>
            </div>

            <div className="mb-8">
              <span className="font-display text-5xl font-bold">$0</span>
              <span className="text-muted-foreground ml-1">.00</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {coreFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="glass" size="lg" className="w-full">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download Free
            </Button>
          </motion.div>

          {/* ECHO PRO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 flex flex-col relative border-primary/30"
            style={{
              boxShadow: "0 0 40px hsl(217 100% 60% / 0.15), 0 0 80px hsl(217 100% 60% / 0.05)",
            }}
          >
            {/* Best deal badge */}
            <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              <Zap className="w-3 h-3" />
              Best Deal
            </div>

            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold mb-1">Echo Pro</h3>
              <p className="text-sm text-primary font-medium">Launch Special</p>
            </div>

            <div className="mb-2">
              <span className="font-display text-5xl font-bold text-gradient-primary">$4.99</span>
              <span className="text-muted-foreground ml-2 text-sm">Lifetime</span>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              One-time purchase. No subscriptions.
            </p>

            <ul className="space-y-4 mb-10 flex-1">
              {proFeatures.map((feature, i) => (
                <li key={feature} className="flex items-start gap-3">
                  {i === 0 ? (
                    <Sparkles className="w-5 h-5 text-ai-purple mt-0.5 shrink-0" />
                  ) : (
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    {feature}
                    {i === 0 && (
                      <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider text-ai-purple bg-ai-purple/10 px-2 py-0.5 rounded-full">
                        Viral
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="w-full">
              Get Pro Access
            </Button>
          </motion.div>
        </div>

        {/* Trust signal */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground font-medium tracking-wide"
        >
          No Accounts Required. No Tracking. Just Gains.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
