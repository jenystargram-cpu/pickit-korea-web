import React from 'react';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full relative flex justify-center pointer-events-none">
      {/* 
        Home page purposely left transparent/empty.
        The SplineBackground component provides the visual.
        Navbar and Footer frame the viewport.
      */}
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce text-white/30 z-20">
        <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Home;