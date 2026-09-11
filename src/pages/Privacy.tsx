import "./landing.css";
import echoliftLogo from "@/assets/echolift-logo.png";
const Privacy = () => <div className="el-site" style={{ minHeight: "100vh" }}><header className="el-header"><a className="el-brand" href="/"><img className="el-original-logo" src={echoliftLogo} alt="" />EchoLift.</a><a className="el-nav-cta" href="/">Back to home →</a></header><main className="el-wrap el-section" style={{ maxWidth: 820 }}><p className="el-eyebrow">YOUR TRAINING BELONGS TO YOU</p><h1 style={{ fontSize: 54, letterSpacing: -2 }}>Your privacy.</h1><p className="el-intro">EchoLift stores your workout history on your iPhone. No EchoLift account is required.</p>{[
["Your workout history", "Manual workout logging and bundled exercise demonstrations work offline. You can export your workout history as CSV and choose where to share that export."],
["Optional iCloud backup", "If you enable workout-log backup, a copy of your log is stored in your own iCloud. This feature requires your Apple account and a connection."],
["Voice and AI features", "Siri is provided by Apple and is subject to Apple's privacy settings and terms. On-device AI coaching requires compatible Apple Intelligence settings. If you choose to share your workout history with an external AI service, that service receives the information you share and its own privacy terms apply."],
["Heart-rate access", "Heart-rate features use Apple's health permissions and compatible hardware. You control health access in your device settings."],
["Voice diagnostics", "The app can keep local voice-log diagnostics, including recognized text and outcomes, to help investigate recognition problems. If you export or send diagnostics for support, review the information before sharing it."],
["Questions", "For privacy questions, contact support@echolift.app."],
].map(([title, text]) => <section key={title} style={{ marginTop: 36 }}><h2 style={{ fontSize: 24, letterSpacing: -.6 }}>{title}</h2><p style={{ color: "#686c73", marginTop: 12, lineHeight: 1.9 }}>{text}</p></section>)}</main></div>;
export default Privacy;
