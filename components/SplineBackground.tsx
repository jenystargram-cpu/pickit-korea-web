import React from 'react';
import { useLocation } from 'react-router-dom';

const SplineBackground: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-black">
      {/* 
        Mobile Optimization Update:
        Reverted the width hack (170%) to w-full. 
        Since the Spline scene now contains text ("BE SPECIAL..."), 
        we must match the viewport width exactly so the text scales correctly 
        and fits within the screen without being cropped by the container.
      */}
      <div className="absolute top-0 w-full h-full left-0 transition-all duration-300">
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