const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">Terms of Service (EULA)</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          EchoLift adheres to the Standard Apple Licensed Application End User License Agreement (EULA). By using this application, you agree to be bound by the terms and conditions set forth by Apple.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          You can view the full and most up-to-date terms of use at the following official Apple link:{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Apple Standard EULA
          </a>
        </p>
        <a href="/" className="inline-block mt-8 text-sm text-primary hover:underline">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Terms;
