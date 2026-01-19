import { motion } from "framer-motion";
import { Shield, Smartphone, Download, Lock, FileJson } from "lucide-react";

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
        
        {/* Code preview - Modern terminal style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-background-elevated/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">workout_history.jsonl</span>
              </div>
              <div className="text-xs text-muted-foreground font-mono">~/Documents/EchoLift/</div>
            </div>
            
            {/* Code content */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="space-y-2">
                <code className="block text-muted-foreground">
                  <span className="text-success">{"{"}</span>
                  <span className="text-primary">"date"</span>:<span className="text-foreground">"2024-01-15"</span>,
                  <span className="text-primary">"exercise"</span>:<span className="text-foreground">"Bench Press"</span>,
                  <span className="text-primary">"sets"</span>:<span className="text-ai-purple">4</span>,
                  <span className="text-primary">"reps"</span>:<span className="text-ai-purple">8</span>,
                  <span className="text-primary">"weight"</span>:<span className="text-ai-purple">185</span>
                  <span className="text-success">{"}"}</span>
                </code>
                <code className="block text-muted-foreground">
                  <span className="text-success">{"{"}</span>
                  <span className="text-primary">"date"</span>:<span className="text-foreground">"2024-01-15"</span>,
                  <span className="text-primary">"exercise"</span>:<span className="text-foreground">"Incline DB Press"</span>,
                  <span className="text-primary">"sets"</span>:<span className="text-ai-purple">3</span>,
                  <span className="text-primary">"reps"</span>:<span className="text-ai-purple">10</span>,
                  <span className="text-primary">"weight"</span>:<span className="text-ai-purple">65</span>
                  <span className="text-success">{"}"}</span>
                </code>
                <code className="block text-muted-foreground">
                  <span className="text-success">{"{"}</span>
                  <span className="text-primary">"date"</span>:<span className="text-foreground">"2024-01-15"</span>,
                  <span className="text-primary">"exercise"</span>:<span className="text-foreground">"Cable Flyes"</span>,
                  <span className="text-primary">"sets"</span>:<span className="text-ai-purple">3</span>,
                  <span className="text-primary">"reps"</span>:<span className="text-ai-purple">12</span>,
                  <span className="text-primary">"weight"</span>:<span className="text-ai-purple">30</span>
                  <span className="text-success">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;
