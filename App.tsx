
import React, { useState } from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import CenterPanel from './components/CenterPanel';
import RightSidebar from './components/RightSidebar';
import WorkflowSidebar from './components/WorkflowSidebar';

export type WorkflowStage = 'setup' | 'simulation' | 'results';

const App: React.FC = () => {
  const [stage, setStage] = useState<WorkflowStage>('setup');

  return (
    <div className="flex h-screen bg-[#2d3135] text-gray-300 font-sans">
      <WorkflowSidebar currentStage={stage} setStage={setStage} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header currentStage={stage} />
        <div className="flex flex-1 overflow-hidden">
          <LeftSidebar currentStage={stage} />
          <div className="flex-1 flex flex-col border-l border-r border-gray-700">
            <CenterPanel />
          </div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
