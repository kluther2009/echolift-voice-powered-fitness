import { motion } from "framer-motion";
import { Sparkles, Upload, FileText, Clipboard, ArrowRight, Check } from "lucide-react";

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
            <span className="text-sm font-medium text-ai-purple">BYO-AI Integration</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Bring Your
            <br />
            <span className="text-gradient-ai">Own AI.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Generate token-efficient performance summaries for ChatGPT, Claude, or Gemini.
            Import workout plans with a single tap.
          </p>
        </motion.div>
        
        {/* Feature cards - Modern asymmetric layout */}
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
                  <Upload className="w-8 h-8 text-ai-purple" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-ai-purple/10 text-ai-purple border border-ai-purple/20">Export</span>
              </div>
              
              <h3 className="font-display text-2xl font-semibold mb-4">AI Consulting</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Export token-efficient summaries optimized for any LLM. Get personalized coaching without API keys.
              </p>
              
              {/* Example output - Modern code block */}
              <div className="glass-card-subtle rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-background-elevated/30">
                  <FileText className="w-4 h-4 text-ai-purple" />
                  <span className="font-mono text-xs text-muted-foreground">performance_summary.md</span>
                </div>
                <div className="p-5 font-mono text-sm space-y-1.5">
                  <div><span className="text-ai-purple">## </span><span className="text-foreground">Weekly Summary</span></div>
                  <div className="text-muted-foreground">Bench: <span className="text-foreground">185×8</span> <span className="text-success">(+5lbs)</span></div>
                  <div className="text-muted-foreground">Volume: <span className="text-foreground">12,400 lbs</span></div>
                  <div><span className="text-success">✓ PR:</span> <span className="text-foreground">Squat 275×5</span></div>
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
              
              <h3 className="font-display text-2xl font-semibold mb-4">Markdown Scraper</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Paste any AI-generated workout plan. EchoLift extracts structured JSON and imports it instantly.
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
