const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          EchoLift stores all data locally on your device. We do not collect or share personal data.
        </p>
        <a href="/" className="inline-block mt-8 text-sm text-primary hover:underline">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Privacy;
