import { useEffect, useRef } from 'react';
import { FireworksCanvas } from './fireworks/FireworksCanvas';

interface FireworksScreenProps {
  onComplete: () => void;
}

export function FireworksScreen({ onComplete }: FireworksScreenProps) {
  const hasCompleted = useRef(false);

  useEffect(() => {
    // Auto-transition after 5 seconds
    const timer = setTimeout(() => {
      if (!hasCompleted.current) {
        hasCompleted.current = true;
        onComplete();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <FireworksCanvas />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4 drop-shadow-2xl animate-bounce-gentle">
            YES! 🎉
          </h1>
          <p className="text-2xl md:text-4xl text-white/90 font-light drop-shadow-lg">
            You made my day!
          </p>
        </div>
      </div>
    </div>
  );
}
