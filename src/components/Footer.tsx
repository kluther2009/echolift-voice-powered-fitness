import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import echoliftLogo from "@/assets/echolift-logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Final CTA Section */}
      <div className="py-32 relative">
        {/* Background */}
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container relative px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Start Lifting Smarter</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ready to Lift
              <br />
              <span className="text-gradient-primary">Smarter?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of lifters who've ditched the friction. 
              Your first workout is just a download away.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button variant="hero" size="xl" className="text-base px-8">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* About & Contact */}
      <div className="py-20 bg-background-elevated/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-subtle p-8 rounded-3xl group hover-lift"
            >
              <h3 className="font-display text-xl font-semibold mb-4">About EchoLift</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
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
              transition={{ delay: 0.1 }}
              className="glass-card-subtle p-8 rounded-3xl"
            >
              <h3 className="font-display text-xl font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:support@echolift.app" 
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-background-elevated/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-muted-foreground">support@echolift.app</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-background-elevated/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-ai-purple/10 border border-ai-purple/20 flex items-center justify-center group-hover:bg-ai-purple/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-ai-purple" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Join Community</div>
                    <div className="text-sm text-muted-foreground">Feature requests & feedback</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-ai-purple transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              {/* Logo */}
              <a href="#" className="flex items-center gap-3">
                <img src={echoliftLogo} alt="EchoLift" className="w-9 h-9 rounded-xl" />
                <span className="font-display font-semibold text-lg">EchoLift</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="https://www.tiktok.com/@echo.lift" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-foreground/5 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/></svg>
                </a>
                <a href="https://www.instagram.com/EchoLiftApp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-foreground/5 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground">
                © 2024 EchoLift. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
