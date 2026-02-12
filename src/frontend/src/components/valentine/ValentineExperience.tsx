import { useState } from 'react';
import { ProposalScreen } from './ProposalScreen';
import { FireworksScreen } from './FireworksScreen';
import { FinalScreen } from './FinalScreen';

type Phase = 'proposal' | 'fireworks' | 'final';

export function ValentineExperience() {
  const [phase, setPhase] = useState<Phase>('proposal');

  const handleAccept = () => {
    setPhase('fireworks');
  };

  const handleFireworksComplete = () => {
    setPhase('final');
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-romantic-light via-romantic-medium to-romantic-deep">
      {phase === 'proposal' && <ProposalScreen onAccept={handleAccept} />}
      {phase === 'fireworks' && <FireworksScreen onComplete={handleFireworksComplete} />}
      {phase === 'final' && <FinalScreen />}
    </div>
  );
}
