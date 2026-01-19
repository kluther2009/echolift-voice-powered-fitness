import { motion } from "framer-motion";
import { Shield, Smartphone, Download, Lock } from "lucide-react";

const PrivacySection = () => {
  const features = [
    {
      icon: Lock,
      title: "No Login Required",
      description: "Start logging workouts instantly. No email, no password, no friction."
    },
    {
      icon: Smartphone,
      title: "100% On-Device",
      description: "Every rep, set, and PR stays on your iPhone. Zero cloud dependencies."
    },
    {
      icon: Download,
      title: "Full Export Control",
      description: "Export your complete history as CSV anytime. Your data, your format."
    }
  ];

  return (
    <section id="privacy" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-elevated/50 to-transparent" />
      
      <div className="container relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-subtle mb-6">
            <Shield className="w-4 h-4 text-success" />
            <span className="text-sm text-muted-foreground">Data Sovereignty</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your Data Stays in{" "}
            <span className="text-success">Your Pocket.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Workout history is stored in transparent, locally accessible <span className="font-mono text-sm bg-background-surface px-2 py-0.5 rounded">.jsonl</span> format 
            on your iPhone—not on a cloud server.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:border-success/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-success/20 transition-colors">
                <feature.icon className="w-7 h-7 text-success" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* JSON Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="glass-card-subtle rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">workout_history.jsonl</span>
            </div>
            <pre className="p-4 text-sm font-mono text-muted-foreground overflow-x-auto">
{`{"date":"2024-01-15","exercise":"Bench Press","sets":4,"reps":8,"weight":185}
{"date":"2024-01-15","exercise":"Incline DB Press","sets":3,"reps":10,"weight":65}
{"date":"2024-01-15","exercise":"Cable Flyes","sets":3,"reps":12,"weight":30}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;
