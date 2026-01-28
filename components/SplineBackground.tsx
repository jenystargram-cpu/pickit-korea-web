import React from 'react';
import { useLocation } from 'react-router-dom';

const SplineBackground: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-black">
      {/* 
        Mobile Optimization:
        Width set to 180% on mobile to increase horizontal FOV and prevent cropping.
        Centered using left-1/2 and -translate-x-1/2.
        Reset to 100% on desktop.
      */}
      <div className="absolute top-0 h-full w-[180%] left-1/2 -translate-x-1/2 md:w-full md:left-0 md:translate-x-0 transition-all duration-300">
        <iframe 
          src='https://my.spline.design/claritystream-KuyiSO4CUQ0prcCFrWZKLoWT/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="3D Background"
        />
      </div>
      
      {/* 
        Overlay: 
        pointer-events-none is applied here to ensure clicks pass through to the iframe on the Home page.
        On other pages, the dark background helps readability.
      */}
      <div 
        className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
          isHome 
            ? 'bg-transparent' 
            : 'bg-black/90 backdrop-blur-sm'
        }`}
      />
    </div>
  );
};

export default SplineBackground;