
import React from 'react';
import { JetIcon, SetupIcon, SimulationIcon, ResultsIcon } from './icons';
import type { WorkflowStage } from '../App';

interface WorkflowSidebarProps {
    currentStage: WorkflowStage;
    setStage: (stage: WorkflowStage) => void;
}

const WorkflowButton: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-full h-20 space-y-1 focus:outline-none transition-colors duration-200 ${
            isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
        }`}
        aria-current={isActive ? 'page' : undefined}
    >
        {icon}
        <span className="text-xs font-bold tracking-wider uppercase">{label}</span>
    </button>
);

const WorkflowSidebar: React.FC<WorkflowSidebarProps> = ({ currentStage, setStage }) => {
    return (
        <div className="w-20 bg-[#202326] flex-shrink-0 flex flex-col items-center border-r border-gray-700">
            <div className="h-[53px] flex items-center justify-center border-b border-gray-700 w-full">
                <JetIcon className="w-8 h-8 text-gray-400" />
            </div>
            <nav className="w-full">
                <WorkflowButton
                    icon={<SetupIcon className="w-6 h-6" />}
                    label="Setup"
                    isActive={currentStage === 'setup'}
                    onClick={() => setStage('setup')}
                />
                <WorkflowButton
                    icon={<SimulationIcon className="w-6 h-6" />}
                    label="Simulate"
                    isActive={currentStage === 'simulation'}
                    onClick={() => setStage('simulation')}
                />
                <WorkflowButton
                    icon={<ResultsIcon className="w-6 h-6" />}
                    label="Results"
                    isActive={currentStage === 'results'}
                    onClick={() => setStage('results')}
                />
            </nav>
        </div>
    );
};

export default WorkflowSidebar;
