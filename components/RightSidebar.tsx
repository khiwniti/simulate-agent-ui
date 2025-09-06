import React, { useState } from 'react';
import { PlusIcon, CheckCircleIcon, XIcon, ChevronDownIcon, ChevronRightIcon } from './icons';
import Tooltip from './Tooltip';

const AssistantHeader: React.FC<{ isOpen: boolean; onToggle: () => void }> = ({ isOpen, onToggle }) => (
  <div onClick={onToggle} className="flex justify-between items-center px-3 py-2 text-xs font-bold text-gray-400 border-b border-gray-700 bg-[#31363a] cursor-pointer">
    <span>ASSISTANT</span>
    <div className="flex items-center space-x-2">
        <Tooltip text="Assistant Status: Active">
            <button className="w-4 h-4 bg-green-500 rounded-full" onClick={(e) => e.stopPropagation()}></button>
        </Tooltip>
        <Tooltip text="Stop Generation">
            <button className="w-4 h-4 bg-red-500 rounded-full" onClick={(e) => e.stopPropagation()}></button>
        </Tooltip>
        <Tooltip text={isOpen ? 'Collapse Panel' : 'Expand Panel'}>
            {isOpen ? <ChevronDownIcon className="w-4 h-4 text-gray-400" /> : <ChevronRightIcon className="w-4 h-4 text-gray-400" />}
        </Tooltip>
    </div>
  </div>
);

const UserPrompt: React.FC = () => (
    <div className="bg-blue-900/50 border border-blue-700 rounded-md p-3 my-2">
        <p className="text-sm font-mono text-blue-200">Set the inlet velocity to 25 m/s in the x-direction for the <span className="bg-blue-800/70 px-1 rounded">@inlet</span> boundary.</p>
    </div>
);

const ToolCall: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center space-x-2 bg-[#353a3e] border border-gray-600 rounded-md p-2 text-sm my-1">
        <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
        <span className="flex-1 text-gray-300">{text}</span>
        <Tooltip text="View Details">
            <span className="text-xs text-gray-500 cursor-pointer hover:text-white">&gt;</span>
        </Tooltip>
    </div>
);

const GeneratingStatus: React.FC = () => (
    <div className="flex items-center space-x-2 text-sm text-gray-500 my-1 p-2">
        <div className="w-4 h-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
        <span>Generating...</span>
    </div>
);

const ChatInput: React.FC = () => (
    <div className="p-3 border-t border-gray-700 bg-[#292d30]">
        <div className="flex justify-end space-x-4 text-xs mb-2">
            <Tooltip text="Discard all pending changes">
                <button className="text-gray-400 hover:text-white">Reject All</button>
            </Tooltip>
            <Tooltip text="Apply all pending changes">
                <button className="text-green-400 hover:text-green-300">Accept All</button>
            </Tooltip>
        </div>
        <div className="bg-[#3a4045] border border-gray-600 rounded-md p-2">
            <div className="flex items-center space-x-2 mb-2 flex-wrap gap-y-1">
                <span className="bg-blue-500/30 text-blue-300 text-xs px-2 py-0.5 rounded-md flex items-center">
                    OpenFOAM
                    <Tooltip text="Remove Context">
                        <button className="ml-1 text-blue-300/70 hover:text-white"><XIcon/></button>
                    </Tooltip>
                </span>
                <span className="bg-green-500/30 text-green-300 text-xs px-2 py-0.5 rounded-md flex items-center">
                    @0/U
                     <Tooltip text="Remove Context">
                        <button className="ml-1 text-green-300/70 hover:text-white"><XIcon/></button>
                    </Tooltip>
                </span>
                 <span className="bg-green-500/30 text-green-300 text-xs px-2 py-0.5 rounded-md flex items-center">
                    @0/p
                     <Tooltip text="Remove Context">
                        <button className="ml-1 text-green-300/70 hover:text-white"><XIcon/></button>
                    </Tooltip>
                </span>
            </div>
            <textarea
                rows={2}
                placeholder="Ask about your simulation..."
                className="w-full bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none resize-none"
            ></textarea>
        </div>
         <div className="flex items-center justify-between mt-2 text-xs">
             <div className="flex items-center space-x-2">
                <span className="text-gray-400">Agent:</span>
                <button className="bg-gray-600 px-2 py-0.5 rounded text-white">gpt-5</button>
             </div>
             <Tooltip text="Start a new conversation">
                 <button className="flex items-center space-x-1 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded-md">
                    <PlusIcon className="w-4 h-4" />
                    <span>New Chat</span>
                 </button>
             </Tooltip>
         </div>
    </div>
);


const RightSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-80 bg-[#292d30] flex flex-col">
        <AssistantHeader isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        {isOpen && (
            <>
                <div className="flex-1 p-3 overflow-y-auto min-h-0">
                    <UserPrompt />
                    <ToolCall text="Modifying file @0/U" />
                    <ToolCall text="Modifying file @0/p" />
                    <GeneratingStatus />
                </div>
                <ChatInput />
            </>
        )}
    </div>
  );
};

export default RightSidebar;