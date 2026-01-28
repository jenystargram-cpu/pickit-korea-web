import React from 'react';
import { useLocation } from 'react-router-dom';

const SplineBackground: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-black">
      {/* 
        Mobile Optimization:
        Set width to 180% on mobile and center it using left-1/2 and -translate-x-1/2.
        This forces the 3D camera to render a wider horizontal Field of View (FOV),
        preventing the sides of the object from being cut off in portrait mode.
        On desktop (md:), we reset to 100% width.
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
      
      {/* Overlay: Transparent on Home, Dark on other pages for readability */}
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