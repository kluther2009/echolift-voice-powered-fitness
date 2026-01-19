import { motion } from "framer-motion";
import { Sparkles, Upload, FileText, Clipboard } from "lucide-react";

const AISection = () => {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      {/* AI Purple gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ai-purple/15 rounded-full blur-[150px]" />
      
      <div className="container relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-subtle mb-6">
            <Sparkles className="w-4 h-4 text-ai-purple" />
            <span className="text-sm text-muted-foreground">BYO-AI Integration</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Bring Your{" "}
            <span className="text-gradient-ai">Own AI.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Generate token-efficient performance summaries for ChatGPT, Claude, or Gemini.
            Import workout plans with a single tap.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Export Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 group hover:border-ai-purple/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ai-purple/20 to-ai-purple-light/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Upload className="w-7 h-7 text-ai-purple" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">AI Consulting</h3>
            <p className="text-muted-foreground mb-6">
              Export token-efficient summaries optimized for any LLM. Get personalized coaching without API keys.
            </p>
            
            {/* Example output */}
            <div className="glass-card-subtle rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                <FileText className="w-3 h-3" />
                <span className="font-mono">performance_summary.md</span>
              </div>
              <div className="font-mono text-xs text-muted-foreground leading-relaxed">
                <span className="text-ai-purple">## Weekly Summary</span><br/>
                <span className="text-foreground">Bench: 185×8 (+5lbs)</span><br/>
                <span className="text-foreground">Volume: 12,400 lbs</span><br/>
                <span className="text-success">PR: Squat 275×5</span>
              </div>
            </div>
          </motion.div>
          
          {/* Import Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 group hover:border-ai-purple/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ai-purple/20 to-ai-purple-light/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Clipboard className="w-7 h-7 text-ai-purple" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Markdown Scraper</h3>
            <p className="text-muted-foreground mb-6">
              Paste any AI-generated workout plan. EchoLift extracts structured JSON and imports it instantly.
            </p>
            
            {/* Example flow */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold">1</div>
                <span className="text-sm text-muted-foreground">Copy plan from ChatGPT</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold">2</div>
                <span className="text-sm text-muted-foreground">Tap "Import from Clipboard"</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center text-xs font-bold text-success">✓</div>
                <span className="text-sm text-success">Workout loaded & ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
