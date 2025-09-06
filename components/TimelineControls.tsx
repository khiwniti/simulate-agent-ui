import React from 'react';
import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon, RewindIcon, FastForwardIcon } from './icons';

const TimelineControls: React.FC = () => {
  return (
    <div className="bg-[#202326] p-2 h-full flex flex-col justify-center">
      <div className="flex items-center space-x-4">
        <div className="text-xs font-bold text-gray-400">TIMELINE CONTROLS</div>
        <div className="flex items-center text-xs space-x-2 text-gray-400">
          <span>Timestep:</span>
          <span className="text-white font-mono">0</span>
          <span>|</span>
          <span>Time:</span>
          <span className="text-white font-mono">0.000s</span>
        </div>
        
        <div className="flex-1 flex items-center space-x-2">
            <div className="flex items-center space-x-2 text-gray-400">
                <button className="hover:text-white"><SkipBackIcon /></button>
                <button className="hover:text-white"><RewindIcon /></button>
                <button className="hover:text-white"><PlayIcon /></button>
                <button className="hover:text-white"><FastForwardIcon /></button>
                <button className="hover:text-white"><SkipForwardIcon /></button>
            </div>
            
            <div className="flex-1 flex items-center h-5">
                <div className="w-full h-1 bg-gray-600 rounded-full relative">
                    <div className="absolute top-0 left-0 h-1 bg-blue-500 rounded-full" style={{width: '0%'}}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 bg-white rounded-full" style={{left: '0%'}}></div>
                </div>
            </div>
        </div>

        <div className="flex items-center space-x-4 text-xs text-gray-400">
          <div>
            1.00x
          </div>
          <div>
            2 steps
          </div>
          <div>
            Duration: 1000.0s
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineControls;