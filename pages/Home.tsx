import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative">
      
      {/* 
        Section 1: Initial Viewport (Spacer)
        - Shows only the Spline 3D background.
        - Forces user to scroll down to see content.
      */}
      <div className="h-[90vh] md:h-screen w-full flex flex-col justify-end items-center pb-12 relative z-10 pointer-events-none">
        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 animate-bounce text-white/50">
          <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* 
        Section 2: Content Area
        - Appears after scrolling.
        - Contains the main typography and Call to Action.
      */}
      <div className="min-h-[80vh] w-full flex flex-col justify-center items-center px-6 relative z-10 bg-gradient-to-t from-black via-black/80 to-transparent pb-32">
        <div className="max-w-7xl w-full mx-auto text-center md:text-left">
          
          <div className="inline-flex items-center space-x-2 mb-8 opacity-0 animate-fade-in-up delay-100 justify-center md:justify-start">
            <span className="w-12 h-[1px] bg-white/60"></span>
            <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gray-300">Premium Solution Partner</span>
          </div>

          {/* Typography with Sophisticated Gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-10 opacity-0 animate-fade-in-up delay-200">
            <span className="block text-white">BEYOND</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-600 pb-2">
              LIMITS.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-in-up delay-300 mx-auto md:mx-0 text-center md:text-left">
            (주)PICKIT KOREA는 제조 혁신과 글로벌 유통망을 연결하여<br className="hidden md:block"/>
            고객의 비즈니스에 새로운 차원의 가치를 제공합니다.
          </p>

          <div className="flex justify-center md:justify-start space-x-4 opacity-0 animate-fade-in-up delay-500">
            <button 
              onClick={() => navigate('/business')}
              className="group flex items-center px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <span className="text-sm font-bold tracking-widest uppercase mr-2">Our Business</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => navigate('/partners')}
              className="group flex items-center px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all duration-300 rounded-sm"
            >
              <span className="text-sm font-bold tracking-widest uppercase">Contact Us</span>
            </button>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default Home;