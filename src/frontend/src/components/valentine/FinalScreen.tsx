import { Heart } from 'lucide-react';

export function FinalScreen() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center animate-fade-in">
        {/* Photo */}
        <div className="mb-12 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-romantic-accent/30 to-romantic-light/30 rounded-3xl blur-2xl" />
          <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border-4 border-white/20">
            <img
              src="/assets/generated/valentine-cute-photo.dim_1200x800.png"
              alt="Romantic couple"
              className="w-full h-auto rounded-2xl object-cover max-h-[500px]"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <Heart className="w-12 h-12 text-romantic-accent animate-pulse-slow" fill="currentColor" />
            <h1 className="text-5xl md:text-7xl font-display font-bold text-romantic-text">
              Much love.
            </h1>
            <Heart className="w-12 h-12 text-romantic-accent animate-pulse-slow" fill="currentColor" />
          </div>
          
          <p className="text-xl md:text-2xl text-romantic-text/80 font-light max-w-2xl mx-auto">
            Thank you for making every moment special
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-romantic-text/60 text-sm">
          © {currentYear} · Built with{' '}
          <Heart className="inline w-4 h-4 text-romantic-accent" fill="currentColor" />{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-romantic-accent transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
