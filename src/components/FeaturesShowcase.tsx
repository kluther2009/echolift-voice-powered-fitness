import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Video, Brain, BarChart3, Sparkles, ClipboardList, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

import featureMuscleMap from "@/assets/feature-muscle-map.png";
import featureVideoLinks from "@/assets/feature-video-links.png";
import featureAiCoach from "@/assets/feature-ai-coach.png";
import featureProgress from "@/assets/feature-progress.png";
import featureAiPlan from "@/assets/feature-ai-plan.png";
import featureLogbook from "@/assets/feature-logbook.png";
import featureHistory from "@/assets/feature-history.png";

const features = [
  {
    id: "muscle-map",
    title: "Progress Map",
    subtitle: "Visual breakdown of your training",
    description: "See which muscles you've trained with color-coded hotspots. Track sessions, sets, and trends at a glance.",
    icon: Activity,
    image: featureMuscleMap,
    color: "from-success/20 to-primary/20",
    borderColor: "border-success/30",
    tagColor: "bg-success/10 text-success",
  },
  {
    id: "video-links",
    title: "Technique Videos",
    subtitle: "TikTok, Instagram, YouTube",
    description: "Save form videos from any platform directly to exercises. Never forget proper technique again.",
    icon: Video,
    image: featureVideoLinks,
    color: "from-pink-500/20 to-purple-500/20",
    borderColor: "border-pink-500/30",
    tagColor: "bg-pink-500/10 text-pink-400",
  },
  {
    id: "ai-coach",
    title: "AI Coach",
    subtitle: "Analyze, roast, and meme",
    description: "Get progress analysis, find weak points, create plans, or let AI roast your routine. Even generate workout memes.",
    icon: Brain,
    image: featureAiCoach,
    color: "from-ai-purple/20 to-primary/20",
    borderColor: "border-ai-purple/30",
    tagColor: "bg-ai-purple/10 text-ai-purple",
  },
  {
    id: "progress",
    title: "Strength Trends",
    subtitle: "Track PRs over time",
    description: "Visualize your progress with beautiful charts. See personal records and strength curves for every exercise.",
    icon: BarChart3,
    image: featureProgress,
    color: "from-primary/20 to-success/20",
    borderColor: "border-primary/30",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    id: "ai-plan",
    title: "AI Plan Designer",
    subtitle: "Generate workout plans",
    description: "Describe your goals and generate AI prompts. Import plans from ChatGPT with a single tap.",
    icon: Sparkles,
    image: featureAiPlan,
    color: "from-ai-purple/20 to-pink-500/20",
    borderColor: "border-ai-purple/30",
    tagColor: "bg-ai-purple/10 text-ai-purple",
  },
  {
    id: "logbook",
    title: "Workout Logbook",
    subtitle: "Simple history view",
    description: "Review all your workouts with exercise details, weights, reps, and personal notes in one clean list.",
    icon: ClipboardList,
    image: featureLogbook,
    color: "from-success/20 to-emerald-500/20",
    borderColor: "border-success/30",
    tagColor: "bg-success/10 text-success",
  },
  {
    id: "history",
    title: "Volume Analytics",
    subtitle: "Weekly & monthly stats",
    description: "Track total volume, movements per week, and top exercises. See your training consistency over time.",
    icon: Calendar,
    image: featureHistory,
    color: "from-orange-500/20 to-primary/20",
    borderColor: "border-orange-500/30",
    tagColor: "bg-orange-500/10 text-orange-400",
  },
];

const FeaturesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  const nextFeature = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section id="showcase" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-ai-purple/8 rounded-full blur-[180px]" />
      </div>
      
      <div className="container relative px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Feature Showcase</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Everything You Need.
            <br />
            <span className="text-gradient-primary">Nothing You Don't.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            From muscle maps to AI coaching, technique videos to progress charts.
            Built for serious lifters.
          </p>
        </motion.div>

        {/* Feature cards navigation - horizontal scroll on mobile */}
        <div className="mb-12 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 whitespace-nowrap ${
                  activeIndex === index
                    ? `${feature.tagColor} ${feature.borderColor} shadow-lg`
                    : "bg-background-elevated/50 border-border/50 text-muted-foreground hover:bg-background-elevated hover:border-border"
                }`}
              >
                <feature.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main showcase area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            {/* Navigation arrows */}
            <button
              onClick={prevFeature}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-card hover:bg-background-elevated transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextFeature}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-card hover:bg-background-elevated transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="relative">
              {/* Dynamic glow based on feature */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${activeFeature.color} blur-[100px] rounded-full scale-75 opacity-60`} />
              
              {/* iPhone Frame */}
              <div className="relative w-[260px] h-[562px] rounded-[3rem] bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] p-[3px] shadow-2xl overflow-hidden">
                {/* Side buttons */}
                <div className="absolute -left-[2px] top-24 w-[3px] h-7 bg-[#2a2a2e] rounded-l-sm" />
                <div className="absolute -left-[2px] top-36 w-[3px] h-10 bg-[#2a2a2e] rounded-l-sm" />
                <div className="absolute -left-[2px] top-50 w-[3px] h-10 bg-[#2a2a2e] rounded-l-sm" />
                <div className="absolute -right-[2px] top-32 w-[3px] h-14 bg-[#2a2a2e] rounded-r-sm" />
                
                {/* Inner bezel */}
                <div className="relative w-full h-full rounded-[2.8rem] bg-black overflow-hidden">
                  {/* Screen with animation */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-[2px] rounded-[2.7rem] overflow-hidden"
                    >
                      <img 
                        src={activeFeature.image} 
                        alt={activeFeature.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[2.8rem] pointer-events-none z-10" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature details */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${activeFeature.tagColor} border ${activeFeature.borderColor} mb-6`}>
                  <activeFeature.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{activeFeature.subtitle}</span>
                </div>
                
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  {activeFeature.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {activeFeature.description}
                </p>
                
                {/* Progress dots */}
                <div className="flex gap-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index 
                          ? "w-8 bg-primary" 
                          : "w-2 bg-border hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
