import React, { useState } from 'react';
import MainViewport from './MainViewport';
import TimelineControls from './TimelineControls';
import Terminal from './Terminal';

const CenterPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'terminal'>('timeline');

  const tabButtonClasses = "px-4 py-2 text-xs font-bold focus:outline-none transition-colors duration-150 border-r border-gray-700";
  const activeTabClasses = "bg-[#202326] text-gray-200";
  const inactiveTabClasses = "bg-[#292d30] text-gray-500 hover:bg-[#31363a] hover:text-gray-300";

  return (
    <div className="flex-1 flex flex-col bg-[#3a4045]">
        <MainViewport />
        
        {/* Bottom Panel with Tabs */}
        <div className="flex flex-col border-t border-gray-700">
            {/* Tab Bar */}
            <div className="flex items-stretch bg-[#292d30]">
                 <button 
                    onClick={() => setActiveTab('timeline')} 
                    className={`${tabButtonClasses} ${activeTab === 'timeline' ? activeTabClasses : inactiveTabClasses}`}
                    aria-pressed={activeTab === 'timeline'}
                 >
                    TIMELINE
                 </button>
                 <button 
                    onClick={() => setActiveTab('terminal')} 
                    className={`${tabButtonClasses} ${activeTab === 'terminal' ? activeTabClasses : inactiveTabClasses}`}
                    aria-pressed={activeTab === 'terminal'}
                 >
                    TERMINAL
                 </button>
            </div>

            {/* Tab Content */}
            <div className="h-40"> {/* Fixed height container for tab content */}
                {activeTab === 'timeline' && <TimelineControls />}
                {activeTab === 'terminal' && <Terminal />}
            </div>
        </div>
    </div>
  );
};

export default CenterPanel;