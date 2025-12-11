import painterWorker from "@/assets/painter-worker.png";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Wall background with paint animation */}
      <div className="absolute inset-0 bg-wall-base">
        {/* Animated paint layer */}
        <div className="absolute inset-y-0 left-0 paint-expand opacity-90" />
        
        {/* Paint drips */}
        <div className="absolute top-0 left-[15%] paint-drip color-cycle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-0 left-[35%] paint-drip color-cycle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 left-[55%] paint-drip color-cycle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 left-[75%] paint-drip color-cycle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-0 left-[90%] paint-drip color-cycle" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Main content card */}
        <div className="max-w-2xl w-full text-center">
          {/* Construction icon */}
          <div className="mb-8 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-card shadow-lg border-4 border-primary">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 opacity-0 animate-fade-in-up animation-delay-200 text-foreground drop-shadow-sm">
            Yapım Aşamasında
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-semibold mb-8 opacity-0 animate-fade-in-up animation-delay-400 text-muted-foreground">
            Harika bir şeyler hazırlıyoruz!
          </p>

          {/* Description */}
          <p className="text-base md:text-lg mb-12 opacity-0 animate-fade-in-up animation-delay-600 text-muted-foreground max-w-md mx-auto">
            Sitemiz şu anda yenileniyor. Çok yakında sizlerle olacağız!
          </p>

          {/* Progress indicator */}
          <div className="w-full max-w-md mx-auto mb-12 opacity-0 animate-fade-in-up animation-delay-600">
            <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
              <div className="h-full paint-expand rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground mt-2 font-medium">
              Boyama devam ediyor...
            </p>
          </div>
        </div>

        {/* Painter character */}
        <div className="absolute bottom-0 right-4 md:right-12 lg:right-24">
          <div className="bounce-gentle">
            <img
              src={painterWorker}
              alt="Boyacı işçi"
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Paint bucket decoration */}
        <div className="absolute bottom-4 left-4 md:left-12 lg:left-24 opacity-80">
          <div className="relative">
            <div className="w-16 h-20 md:w-20 md:h-24 bg-muted rounded-lg rounded-t-sm shadow-lg border-2 border-border">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 md:w-14 h-3 color-cycle rounded-t-lg" />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 md:w-12 h-2 bg-muted-foreground/30 rounded-full" />
            </div>
            {/* Paint spill */}
            <div className="absolute -right-2 top-4 w-6 h-8 color-cycle rounded-full opacity-80" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Floating paint splatters */}
        <div className="absolute top-20 left-10 w-8 h-8 rounded-full color-cycle opacity-60 blur-sm" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 rounded-full color-cycle opacity-50 blur-sm" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 left-1/4 w-10 h-10 rounded-full color-cycle opacity-40 blur-sm" style={{ animationDelay: '2.5s' }} />
      </div>
    </div>
  );
};

export default Index;
