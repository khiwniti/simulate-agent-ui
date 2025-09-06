
import React from 'react';

const OrientationCube: React.FC = () => (
    <div className="absolute top-4 right-4 w-16 h-16">
        <div className="relative w-full h-full transform-style-3d [transform:rotateX(-20deg)_rotateY(-30deg)]">
            <div className="absolute w-full h-full bg-gray-600/50 border border-gray-400 flex items-center justify-center text-white [transform:rotateY(0deg)_translateZ(32px)]">F</div>
            <div className="absolute w-full h-full bg-gray-600/50 border border-gray-400 flex items-center justify-center text-white [transform:rotateY(90deg)_translateZ(32px)]">R</div>
            <div className="absolute w-full h-full bg-gray-600/50 border border-gray-400 flex items-center justify-center text-white [transform:rotateY(180deg)_translateZ(32px)]">B</div>
            <div className="absolute w-full h-full bg-gray-600/50 border border-gray-400 flex items-center justify-center text-white [transform:rotateY(-90deg)_translateZ(32px)]">L</div>
            <div className="absolute w-full h-full bg-gray-600/50 border border-gray-400 flex items-center justify-center text-white [transform:rotateX(90deg)_translateZ(32px)]">T</div>
            <div className="absolute w-full h-full bg-gray-600/50 border border-gray-400 flex items-center justify-center text-white [transform:rotateX(-90deg)_translateZ(32px)]">B</div>
        </div>
        <style>{`
            .transform-style-3d { transform-style: preserve-3d; }
        `}</style>
    </div>
);

const ViewportToolbar: React.FC = () => (
    <div className="absolute top-24 right-4 flex flex-col space-y-1 bg-gray-800/50 p-1 rounded-md">
        <button className="w-8 h-8 flex items-center justify-center text-gray-300 hover:bg-gray-700 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.52 2.34 1.08 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-300 hover:bg-gray-700 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-300 hover:bg-gray-700 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        </button>
    </div>
);

const ColorLegend: React.FC = () => (
    <div className="absolute bottom-4 right-1/2 translate-x-1/2 flex flex-col items-center space-y-1">
        <span className="text-xs font-mono">jet.stl - pmean</span>
        <div className="w-64 h-2 bg-gradient-to-r from-purple-500 via-green-400 to-yellow-400 rounded-full"></div>
        <div className="flex justify-between w-72 text-xs font-mono">
            <span>-8.23e+2</span>
            <span>-4.9e+2</span>
            <span>-1.5e+2</span>
            <span>1.8e+2</span>
            <span>5.13e+2</span>
        </div>
    </div>
);


const MainViewport: React.FC = () => {
  return (
    <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Placeholder for 3D model */}
        <div className="w-1/3">
            <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="jetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#34d399', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#22c55e', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#a3e635', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <path transform="scale(0.4) translate(150, 50)" fill="url(#jetGradient)" d="M471.1 213.2c-12.53-29.68-35.3-55.33-63.15-73.23L297.8 77.99c-23.77-15.01-52.41-19.46-78.7-12.78-26.28 6.68-49.28 23.35-64.84 46.23l-8.623 12.63-63.41 32.19c-19.9 10.11-28.71 34.03-18.61 53.93s34.03 28.71 53.93 18.61l61.6-31.28L236.8 335.5c-4.8 13.5-3.8 28.7 2.9 41.5 6.7 12.8 17.9 22.8 31.4 27.6l23.5 8.4c3.1 1.1 6.3 1.7 9.5 1.7 10.4 0 20.2-5.4 25.6-14.3l129-209.6c6.2-10.1 8.5-22 6.5-33.8z"/>
            </svg>
        </div>
        
        <OrientationCube />
        <ViewportToolbar />
        <ColorLegend />
    </div>
  );
};

export default MainViewport;
