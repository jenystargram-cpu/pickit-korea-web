import React from 'react';
import { useLocation } from 'react-router-dom';

const SplineBackground: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-black">
      {/* 
        Mobile Optimization:
        In portrait mode (mobile), Spline scenes often crop the sides or zoom in too much.
        By setting the width to 170% and centering it, we simulate a wider aspect ratio.
        This forces the 3D camera to render a wider FOV, keeping the central subject visible 
        without aggressive side cropping, while the excess width is hidden by the container overflow.
      */}
      <div className="absolute top-0 h-full w-[170%] left-1/2 -translate-x-1/2 md:w-full md:left-0 md:translate-x-0 transition-all duration-300">
        <iframe 
          src='https://my.spline.design/claritystream-KuyiSO4CUQ0prcCFrWZKLoWT/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="3D Background"
        />
      </div>
      
      {/* Overlay: Transparent on Home, Dark on other pages for text readability */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ${
          isHome 
            ? 'bg-transparent' 
            : 'bg-black/90 backdrop-blur-sm'
        }`}
      />
    </div>
  );
};

export default SplineBackground;