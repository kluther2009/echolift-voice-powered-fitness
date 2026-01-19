import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background-elevated to-transparent" />
      
      <div className="container relative px-6">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Lift{" "}
            <span className="text-primary">Smarter?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join thousands of lifters who've ditched the friction. 
            Your first workout is just a download away.
          </p>
          
          <Button variant="hero" size="xl" className="group">
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for iOS
          </Button>
        </motion.div>
        
        {/* About & Contact */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card-subtle p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-4">About EchoLift</h3>
            <p className="text-muted-foreground mb-4">
              Built entirely in Swift Playgrounds by lifters who believe tracking should be a 
              silent partner—not another app fighting for your attention.
            </p>
            <p className="text-sm text-muted-foreground">
              We prioritize efficiency and privacy above all. No telemetry, no analytics, 
              no compromise.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card-subtle p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <a 
                href="mailto:support@echolift.app" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>support@echolift.app</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-ai-purple/10 flex items-center justify-center group-hover:bg-ai-purple/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-ai-purple" />
                </div>
                <span>Join the Community</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="font-semibold">EchoLift</span>
            </div>
            
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-destructive fill-destructive" /> for lifters
            </p>
            
            <p className="text-sm text-muted-foreground">
              © 2024 EchoLift. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
