
import React from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import CenterPanel from './components/CenterPanel';
import RightSidebar from './components/RightSidebar';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-[#2d3135] text-gray-300 font-sans">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <div className="flex-1 flex flex-col border-l border-r border-gray-700">
          <CenterPanel />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;
