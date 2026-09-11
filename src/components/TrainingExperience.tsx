import { useState } from "react";
import { ArrowRight, Heart, Rotate3D, Check, Headphones } from "lucide-react";
import progress from "@/assets/feature-progress.png";

const questions = [
  ["Do I need the newest iPhone?", "Not for the core workout tracker. EchoLift supports iOS 17.6 and later. Siri logging depends on Siri availability and your device settings; it does not require Apple Intelligence. Heart-rate monitoring needs iOS 26, and on-device AI has additional requirements."],
  ["Do I need AirPods?", "No. You can log through Siri on your iPhone or use the manual controls. AirPods make the hands-free experience convenient. Heart-rate tracking requires compatible heart-rate hardware, such as AirPods Pro 3; ordinary AirPods do not measure heart rate."],
  ["What does the AI Coach require?", "On-device coaching requires an Apple Intelligence–compatible iPhone, supported software and language, and Apple Intelligence enabled. You can still log workouts and use exercise demonstrations without it. Optional sharing with an external AI service sends the information you choose to that service."],
  ["Does everything work offline?", "Your workout log is stored locally, and manual logging and bundled exercise animations work offline. Siri availability can depend on your device, language and connection. Optional iCloud backup and external AI services need a connection."],
  ["Can I use my own workout plan?", "Yes. Build your routine, track sets and weights, and return to your history to see how you are progressing. EchoLift fits around your training."],
];

export default function TrainingExperience() {
  const [view, setView] = useState("form");
  return <>
    <section id="experience" className="py-24 border-y border-border/60">
      <div className="container px-6 max-w-6xl">
        <p className="text-primary text-xs tracking-[.2em] uppercase font-semibold">More focus. Less phone.</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 max-w-2xl">Everything around the set.<br /><span className="text-muted-foreground">Taken care of.</span></h2>
        <div className="grid lg:grid-cols-2 gap-10 mt-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Explore EchoLift features">
              {[["form", "Exercise form"], ["progress", "Your progress"]].map(([id, label]) => <button key={id} onClick={() => setView(id)} aria-pressed={view === id} className={`rounded-full px-5 py-3 text-sm border transition-colors ${view === id ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}>{label}</button>)}
            </div>
            <div className="rounded-3xl bg-[#0b0e12] border border-border overflow-hidden h-[360px] sm:h-[430px] flex justify-center items-center">
              <img key={view} src={view === "form" ? "/previews/dumbbell-press.png" : progress} alt={view === "form" ? "EchoLift's 3D mannequin demonstrating the bottom position of a dumbbell press" : "EchoLift progress chart screen"} className="w-full h-full object-contain" loading="lazy" />
            </div>
            <p className="text-xs text-muted-foreground mt-3">{view === "form" ? "Rendered from EchoLift’s exercise rig. Rotate and zoom inside the app." : "Progress view from EchoLift. Your results reflect your own logged workouts."}</p>
          </div>
          <div className="space-y-8">
            <article><Rotate3D className="text-primary mb-3" /><h3 className="text-2xl font-display font-semibold">See the movement. Find your angle.</h3><p className="text-muted-foreground mt-3 leading-relaxed">Explore 3D exercise demonstrations with rotation and zoom. Check the setup and movement path before your next set, without searching through saved videos.</p></article>
            <article><Heart className="text-rose-400 mb-3" /><h3 className="text-2xl font-display font-semibold">Your heart rate, alongside your lifts.</h3><p className="text-muted-foreground mt-3 leading-relaxed">See live heart rate and a session chart with compatible hardware. Keep your workout log and heart-rate context together.</p><a href="#compatibility" className="inline-flex items-center gap-2 text-primary text-sm mt-3">Check device requirements <ArrowRight size={16} /></a></article>
            <article><Headphones className="text-primary mb-3" /><h3 className="text-2xl font-display font-semibold">Built for the space between sets.</h3><p className="text-muted-foreground mt-3 leading-relaxed">Log by voice, repeat a set, or undo a mistake. Use the screen when you want it—not for every entry.</p></article>
          </div>
        </div>
      </div>
    </section>
    <section id="compatibility" className="py-24 container px-6 max-w-5xl">
      <p className="text-primary text-xs tracking-[.2em] uppercase font-semibold">Know before you download</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-8">Works with your training.<br />What about your phone?</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">{[["Everyday training", "iOS 17.6+", "Logging, plans, history and 3D demonstrations."], ["Heart-rate tracking", "iOS 26 + sensor", "Compatible heart-rate hardware required."], ["On-device AI", "Apple Intelligence", "Compatible iPhone, language and settings required."]].map(([title, label, body]) => <div key={title} className="rounded-2xl border border-border p-6"><Check className="text-primary mb-4" size={20} /><h3 className="font-semibold">{title}</h3><p className="text-primary text-sm mt-2">{label}</p><p className="text-sm text-muted-foreground mt-3">{body}</p></div>)}</div>
      {questions.map(([q,a]) => <details key={q} className="border-b border-border py-5"><summary className="cursor-pointer font-medium text-lg pr-4">{q}</summary><p className="text-muted-foreground leading-relaxed pt-4 max-w-3xl">{a}</p></details>)}
    </section>
  </>;
}
