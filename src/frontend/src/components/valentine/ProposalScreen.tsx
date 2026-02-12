import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface ProposalScreenProps {
  onAccept: () => void;
}

const declineLabels = [
  'NO',
  'Are you sure?',
  'Really?',
  'Think again...',
  'Please?',
  'One more chance?',
  'Pretty please?',
  'You sure about that?',
  'Reconsider?',
  'Last chance!',
  'Come on...',
  'Don\'t be shy!',
  'You know you want to!',
  'Just say yes!',
];

export function ProposalScreen({ onAccept }: ProposalScreenProps) {
  const [declineAttempts, setDeclineAttempts] = useState(0);
  const [declinePosition, setDeclinePosition] = useState({ x: 0, y: 0 });
  const [isEvading, setIsEvading] = useState(false);
  const declineButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveDeclineButton = () => {
    if (!containerRef.current || !declineButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = declineButtonRef.current.getBoundingClientRect();
    
    // Safe padding from edges and top header
    const padding = 20;
    const topPadding = 120; // Avoid EMAN header area
    const maxX = container.width - button.width - padding;
    const maxY = container.height - button.height - padding;
    
    // Generate random position within safe bounds
    const newX = Math.max(padding, Math.random() * maxX);
    const newY = Math.max(topPadding, Math.random() * maxY);
    
    setDeclinePosition({ x: newX, y: newY });
    setDeclineAttempts(prev => prev + 1);
    
    // Enable evasive mode (absolute positioning)
    if (!isEvading) {
      setIsEvading(true);
    }
  };

  const currentDeclineLabel = declineLabels[Math.min(declineAttempts, declineLabels.length - 1)];

  return (
    <div ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center p-8">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-romantic-accent/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* EMAN Header */}
      <div className="absolute top-8 left-0 right-0 z-20 text-center">
        <h2 className="eman-header">EMAN</h2>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <Heart className="w-24 h-24 mx-auto mb-6 text-romantic-accent animate-pulse-slow" fill="currentColor" />
          <h1 className="text-5xl md:text-7xl font-display font-bold text-romantic-text mb-6 leading-tight">
            Will you be my Valentine?
          </h1>
          <p className="text-xl md:text-2xl text-romantic-text/80 font-light">
            You make every day feel like a celebration of love
          </p>
        </div>

        {/* Buttons Container - Initially side by side, responsive */}
        {!isEvading ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* YES Button */}
            <Button
              onClick={onAccept}
              size="lg"
              className="text-2xl px-16 py-8 h-auto bg-romantic-accent hover:bg-romantic-accent-dark text-white font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse-gentle"
            >
              <Heart className="mr-3 w-8 h-8" fill="currentColor" />
              YES!
              <Heart className="ml-3 w-8 h-8" fill="currentColor" />
            </Button>

            {/* NO Button - Initially visible next to YES */}
            <button
              ref={declineButtonRef}
              onClick={moveDeclineButton}
              onMouseEnter={moveDeclineButton}
              onFocus={moveDeclineButton}
              className="px-8 py-4 text-lg bg-romantic-muted/50 hover:bg-romantic-muted/70 text-romantic-text/60 font-medium rounded-full border-2 border-romantic-text/20 transition-all duration-200 cursor-pointer"
            >
              {currentDeclineLabel}
            </button>
          </div>
        ) : (
          <>
            {/* YES Button - Fixed position when NO is evading */}
            <div className="mb-8">
              <Button
                onClick={onAccept}
                size="lg"
                className="text-2xl px-16 py-8 h-auto bg-romantic-accent hover:bg-romantic-accent-dark text-white font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse-gentle"
              >
                <Heart className="mr-3 w-8 h-8" fill="currentColor" />
                YES!
                <Heart className="ml-3 w-8 h-8" fill="currentColor" />
              </Button>
            </div>

            {/* NO Button - Absolute positioned to move around */}
            <button
              ref={declineButtonRef}
              onClick={moveDeclineButton}
              onMouseEnter={moveDeclineButton}
              onFocus={moveDeclineButton}
              className="absolute px-8 py-4 text-lg bg-romantic-muted/50 hover:bg-romantic-muted/70 text-romantic-text/60 font-medium rounded-full border-2 border-romantic-text/20 transition-all duration-200 cursor-pointer z-30"
              style={{
                left: `${declinePosition.x}px`,
                top: `${declinePosition.y}px`,
                transition: 'left 0.3s ease-out, top 0.3s ease-out',
              }}
            >
              {currentDeclineLabel}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
