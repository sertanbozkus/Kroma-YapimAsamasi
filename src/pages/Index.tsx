const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body">
      {/* Elegant background with subtle paint animation */}
      <div className="absolute inset-0 bg-wall-base">
        {/* Animated paint layer - subtle */}
        <div className="absolute inset-y-0 left-0 paint-expand opacity-40" />
        
        {/* Subtle paint drips */}
        <div className="absolute top-0 left-[20%] paint-drip color-cycle opacity-30" style={{ animationDelay: '0s' }} />
        <div className="absolute top-0 left-[50%] paint-drip color-cycle opacity-25" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 left-[80%] paint-drip color-cycle opacity-30" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Main content */}
        <div className="max-w-3xl w-full text-center">
          {/* Logo */}
          <div className="mb-12 opacity-0 animate-fade-in-up">
            <div className="inline-flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-primary/60 flex items-center justify-center">
                <span className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-wider">K</span>
              </div>
              <div className="mt-3 text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground font-light">
                Kroma Mimarlık
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-10 opacity-0 animate-fade-in-up animation-delay-200">
            <div className="h-px w-16 md:w-24 bg-border" />
            <div className="w-2 h-2 rotate-45 border border-primary/50" />
            <div className="h-px w-16 md:w-24 bg-border" />
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6 opacity-0 animate-fade-in-up animation-delay-200 text-foreground tracking-wide">
            Yapım Aşamasında
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base mb-16 opacity-0 animate-fade-in-up animation-delay-600 text-muted-foreground max-w-lg mx-auto font-light leading-relaxed">
            Mükemmelliğe ulaşmak zaman alır. Sizin için özenle tasarlanan yeni deneyimimiz çok yakında sizlerle buluşacak.
          </p>

          {/* Elegant progress indicator */}
          <div className="w-full max-w-sm mx-auto mb-12 opacity-0 animate-fade-in-up animation-delay-600">
            <div className="h-0.5 bg-border overflow-hidden">
              <div className="h-full paint-expand opacity-70" />
            </div>
            <p className="text-xs text-muted-foreground mt-4 tracking-[0.2em] uppercase font-light">
              Yenileme devam ediyor
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 animate-fade-in-up animation-delay-600">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2025 Kroma Mimarlık. Tüm Hakları Saklıdır.
          </p>
        </div>

        {/* Subtle corner decorations */}
        <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-border/50 opacity-0 animate-fade-in-up" />
        <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-border/50 opacity-0 animate-fade-in-up" />
        <div className="absolute bottom-16 left-8 w-12 h-12 border-l border-b border-border/50 opacity-0 animate-fade-in-up" />
        <div className="absolute bottom-16 right-8 w-12 h-12 border-r border-b border-border/50 opacity-0 animate-fade-in-up" />
      </div>
    </div>
  );
};

export default Index;
