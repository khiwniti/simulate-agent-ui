import React, { useState } from 'react';
import MainViewport from './MainViewport';
import TimelineControls from './TimelineControls';
import Terminal from './Terminal';
import CodeView from './CodeView';
import Tooltip from './Tooltip';

const CenterPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'terminal' | 'code'>('timeline');

  const tabButtonClasses = "px-4 py-2 text-xs font-bold focus:outline-none transition-colors duration-150 border-r border-gray-700 h-full";
  const activeTabClasses = "bg-[#202326] text-gray-200";
  const inactiveTabClasses = "bg-[#292d30] text-gray-500 hover:bg-[#31363a] hover:text-gray-300";

  return (
    <div className="flex-1 flex flex-col bg-[#3a4045]">
        <MainViewport />
        
        {/* Bottom Panel with Tabs */}
        <div className="flex flex-col border-t border-gray-700">
            {/* Tab Bar */}
            <div className="flex items-stretch bg-[#292d30]">
                 <Tooltip text="View simulation timeline and controls">
                     <button 
                        onClick={() => setActiveTab('timeline')} 
                        className={`${tabButtonClasses} ${activeTab === 'timeline' ? activeTabClasses : inactiveTabClasses}`}
                        aria-pressed={activeTab === 'timeline'}
                     >
                        TIMELINE
                     </button>
                 </Tooltip>
                 <Tooltip text="View simulation logs and terminal output">
                     <button 
                        onClick={() => setActiveTab('terminal')} 
                        className={`${tabButtonClasses} ${activeTab === 'terminal' ? activeTabClasses : inactiveTabClasses}`}
                        aria-pressed={activeTab === 'terminal'}
                     >
                        TERMINAL
                     </button>
                 </Tooltip>
                 <Tooltip text="View and edit the simulation script">
                     <button 
                        onClick={() => setActiveTab('code')} 
                        className={`${tabButtonClasses} ${activeTab === 'code' ? activeTabClasses : inactiveTabClasses}`}
                        aria-pressed={activeTab === 'code'}
                     >
                        CODE
                     </button>
                 </Tooltip>
            </div>

            {/* Tab Content */}
            <div className="h-40"> {/* Fixed height container for tab content */}
                {activeTab === 'timeline' && <TimelineControls />}
                {activeTab === 'terminal' && <Terminal />}
                {activeTab === 'code' && <CodeView />}
            </div>
        </div>
    </div>
  );
};

export default CenterPanel;
