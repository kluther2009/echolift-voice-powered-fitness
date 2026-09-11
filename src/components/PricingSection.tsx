import { ArrowUpRight, Check } from "lucide-react";
const appStore = "https://apps.apple.com/app/id6757499671";
export default function PricingSection() {
  return <section id="pricing" className="py-24 border-t border-border"><div className="container px-6 max-w-5xl">
    <p className="text-primary text-xs uppercase tracking-[.2em] font-semibold">A simpler commitment</p>
    <div className="grid md:grid-cols-2 gap-10 mt-4 items-center"><div><h2 className="font-display text-4xl sm:text-5xl font-bold">Make it part<br />of your next workout.</h2><p className="text-muted-foreground mt-6 text-lg leading-relaxed">Download EchoLift, log your first set and see how it fits your routine. No EchoLift account to create.</p></div>
      <div className="rounded-3xl border border-primary/30 p-8 bg-primary/5"><p className="text-primary text-sm font-semibold">ECHO PRO</p><h3 className="font-display text-3xl font-semibold mt-3">One purchase.<br />No recurring subscription.</h3><ul className="space-y-3 my-6">{["Lifetime Pro upgrade available in the app", "Keep your training history in your control", "Support an independent fitness app"].map(t=><li key={t} className="flex gap-3 text-sm"><Check size={18} className="text-primary shrink-0" />{t}</li>)}</ul><a href={appStore} className="flex items-center justify-center gap-3 rounded-xl p-4 bg-primary text-primary-foreground font-semibold hover:brightness-110">Get EchoLift on the App Store <ArrowUpRight size={18} /></a><p className="text-xs text-muted-foreground mt-4">See the app for current local pricing, trial details and included features. Hardware-dependent features require compatible devices.</p></div>
    </div>
  </div></section>;
}
