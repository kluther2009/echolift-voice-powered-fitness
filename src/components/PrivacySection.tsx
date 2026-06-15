import { motion } from "framer-motion";
import { Shield, Smartphone, Download, Lock, FileJson, Calendar, Trophy } from "lucide-react";

const PrivacySection = () => {
  const features = [
    {
      icon: Lock,
      title: "Zero Auth Required",
      description: "Jump straight into logging. No email, no password, no friction whatsoever.",
      gradient: "from-success/20 to-success/5"
    },
    {
      icon: Smartphone,
      title: "100% On-Device",
      description: "Every rep, set, and PR lives on your iPhone. Zero cloud dependencies.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Download,
      title: "Full Data Control",
      description: "Export your complete history as CSV anytime. Your data, your format, your rules.",
      gradient: "from-ai-purple/20 to-ai-purple/5"
    }
  ];

  return (
    <section id="privacy" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-success/50 to-transparent" />
      
      <div className="container relative px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-8">
            <Shield className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Data Sovereignty</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Your Data Stays in
            <br />
            <span className="text-success">Your Pocket.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Workout history is stored in transparent, locally accessible{" "}
            <code className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-background-surface border border-border font-mono text-sm">
              <FileJson className="w-3.5 h-3.5 text-success" />
              .jsonl
            </code>{" "}
            format on your iPhone—never on a cloud server.
          </p>
        </motion.div>
        
        {/* Feature cards - Bento grid style */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full glass-card p-8 hover-lift border-glow-hover">
                {/* Gradient background */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-success/20 to-success/5 border border-success/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-success" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Workout History Card Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card overflow-hidden border-glow-hover">
            {/* Card Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/30 bg-background-elevated/20">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-success" />
                <span className="font-display font-semibold text-foreground">Workout History</span>
              </div>
              <span className="text-xs text-muted-foreground font-medium">Monday, June 15</span>
            </div>
            
            {/* Card Content (Logs List) */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-background-elevated/40 border border-border/30">
                <div>
                  <h4 className="font-display font-semibold text-sm">Bench Press</h4>
                  <p className="text-xs text-muted-foreground mt-1">4 sets × 8 reps @ 85 kg</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-[10px] font-semibold uppercase tracking-wider">
                  <Trophy className="w-3 h-3" />
                  New PR
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-background-elevated/40 border border-border/30">
                <div>
                  <h4 className="font-display font-semibold text-sm">Incline Dumbbell Press</h4>
                  <p className="text-xs text-muted-foreground mt-1">3 sets × 10 reps @ 30 kg</p>
                </div>
                <span className="text-xs text-muted-foreground">Volume: 900 kg</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-background-elevated/40 border border-border/30">
                <div>
                  <h4 className="font-display font-semibold text-sm">Cable Flyes</h4>
                  <p className="text-xs text-muted-foreground mt-1">3 sets × 12 reps @ 14 kg</p>
                </div>
                <span className="text-xs text-muted-foreground">Volume: 504 kg</span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-4 bg-success/5 border-t border-border/30 flex items-center gap-3">
              <Lock className="w-4 h-4 text-success shrink-0" />
              <p className="text-xs text-muted-foreground leading-normal">
                Stored locally on your device. Secured by default. Automatically backed up to your personal iCloud Drive container.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;
