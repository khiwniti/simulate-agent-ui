
import React from 'react';
import { SearchIcon, ChevronDownIcon } from './icons';
import Dropdown, { DropdownItem } from './Dropdown';
import type { WorkflowStage } from '../App';
import Tooltip from './Tooltip';

const DropdownButton: React.FC<{ children: React.ReactNode, isOpen: boolean }> = ({ children, isOpen }) => (
    <button className={`flex items-center space-x-1 px-3 py-1 rounded text-sm ${isOpen ? 'bg-gray-700' : ''} hover:bg-gray-700`}>
        <span>{children}</span>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
    </button>
);

interface HeaderProps {
    currentStage: WorkflowStage;
}

const Header: React.FC<HeaderProps> = ({ currentStage }) => {
  const renderStageControls = () => {
    switch (currentStage) {
      case 'setup':
        return (
          <div className="flex items-center space-x-1 text-sm">
            <Tooltip text="Create 2D sketches">
              <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>SKETCH</DropdownButton>}>
                <DropdownItem>Line</DropdownItem>
                <DropdownItem>Circle</DropdownItem>
                <DropdownItem>Rectangle</DropdownItem>
                <DropdownItem>Arc</DropdownItem>
              </Dropdown>
            </Tooltip>
            <Tooltip text="Create 3D features from sketches">
              <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>FEATURES</DropdownButton>}>
                <DropdownItem>Extrude</DropdownItem>
                <DropdownItem>Revolve</DropdownItem>
                <DropdownItem>Fillet</DropdownItem>
                <DropdownItem>Chamfer</DropdownItem>
              </Dropdown>
            </Tooltip>
            <Tooltip text="Measure and analyze geometry">
              <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>TOOLS</DropdownButton>}>
                <DropdownItem>Measure</DropdownItem>
                <DropdownItem>Section View</DropdownItem>
                <DropdownItem>Boolean</DropdownItem>
              </Dropdown>
            </Tooltip>
          </div>
        );
      case 'results':
        return (
          <div className="flex items-center space-x-1 text-sm">
            <Tooltip text="Analyze simulation performance">
              <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>ANALYTICS</DropdownButton>}>
                <DropdownItem>Performance Metrics</DropdownItem>
                <DropdownItem>Flow Visualization</DropdownItem>
                <DropdownItem>Generate Report</DropdownItem>
              </Dropdown>
            </Tooltip>
            <Tooltip text="Filter results data">
              <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>FILTERS</DropdownButton>}>
                <DropdownItem>Filter by Pressure</DropdownItem>
                <DropdownItem>Filter by Velocity</DropdownItem>
                <DropdownItem>Custom Filter...</DropdownItem>
              </Dropdown>
            </Tooltip>
            <Tooltip text="Change color maps">
              <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>COLOR</DropdownButton>}>
                <DropdownItem>Rainbow</DropdownItem>
                <DropdownItem>Viridis</DropdownItem>
                <DropdownItem>Grayscale</DropdownItem>
              </Dropdown>
            </Tooltip>
          </div>
        );
      default:
        // Placeholder to prevent layout shift when no controls are shown
        return <div className="w-[280px]" />;
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-1.5 bg-[#202326] border-b border-gray-700 h-[53px]">
      <div className="flex items-center space-x-4">
        {renderStageControls()}
      </div>

      <div className="flex-1 flex justify-center text-sm font-bold text-gray-400 uppercase tracking-wider">
        {currentStage}
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
            <Tooltip text="Control viewport display options">
                <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>DISPLAY</DropdownButton>}>
                    <DropdownItem>Show Wireframe</DropdownItem>
                    <DropdownItem>Show Surface</DropdownItem>
                    <DropdownItem>Show Bounding Box</DropdownItem>
                </Dropdown>
            </Tooltip>
            <Tooltip text="Adjust rendering quality">
                <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>RENDER</DropdownButton>}>
                    <DropdownItem>High Quality</DropdownItem>
                    <DropdownItem>Medium Quality</DropdownItem>
                    <DropdownItem>Low Quality</DropdownItem>
                </Dropdown>
            </Tooltip>
        </div>
        <Tooltip text="Search for files or features">
            <div className="relative">
              <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input type="text" placeholder="Search" className="bg-gray-800 border border-gray-600 rounded-md pl-8 pr-2 py-1 text-sm w-40 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
