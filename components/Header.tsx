
import React from 'react';
import { SearchIcon, JetIcon, ChevronDownIcon } from './icons';
import Dropdown, { DropdownItem } from './Dropdown';

const DropdownButton: React.FC<{ children: React.ReactNode, isOpen: boolean }> = ({ children, isOpen }) => (
    <button className={`flex items-center space-x-1 px-3 py-1 rounded text-sm ${isOpen ? 'bg-gray-700' : ''} hover:bg-gray-700`}>
        <span>{children}</span>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
    </button>
);

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-1.5 bg-[#202326] border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
            <JetIcon className="w-5 h-5 text-gray-400" />
            <span className="font-bold text-sm text-white">Jet</span>
        </div>
        <div className="flex items-center space-x-1 text-sm">
          <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>ANALYTICS</DropdownButton>}>
            <DropdownItem>Performance Metrics</DropdownItem>
            <DropdownItem>Flow Visualization</DropdownItem>
            <DropdownItem>Generate Report</DropdownItem>
          </Dropdown>
          <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>FILTERS</DropdownButton>}>
            <DropdownItem>Filter by Pressure</DropdownItem>
            <DropdownItem>Filter by Velocity</DropdownItem>
            <DropdownItem>Custom Filter...</DropdownItem>
          </Dropdown>
          <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>COLOR</DropdownButton>}>
            <DropdownItem>Rainbow</DropdownItem>
            <DropdownItem>Viridis</DropdownItem>
            <DropdownItem>Grayscale</DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="flex-1 flex justify-center text-sm">
        <div className="flex space-x-1 bg-gray-800 p-0.5 rounded-md">
          <button className="px-4 py-0.5 rounded-md text-gray-400 hover:bg-gray-700">CAD</button>
          <button className="px-4 py-0.5 rounded-md bg-gray-600 text-white">Setup</button>
          <button className="px-4 py-0.5 rounded-md text-gray-400 hover:bg-gray-700">Post-Processing</button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
            <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>DISPLAY</DropdownButton>}>
                <DropdownItem>Show Wireframe</DropdownItem>
                <DropdownItem>Show Surface</DropdownItem>
                <DropdownItem>Show Bounding Box</DropdownItem>
            </Dropdown>
            <Dropdown trigger={(isOpen) => <DropdownButton isOpen={isOpen}>RENDER</DropdownButton>}>
                <DropdownItem>High Quality</DropdownItem>
                <DropdownItem>Medium Quality</DropdownItem>
                <DropdownItem>Low Quality</DropdownItem>
            </Dropdown>
        </div>
        <div className="relative">
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input type="text" placeholder="Search" className="bg-gray-800 border border-gray-600 rounded-md pl-8 pr-2 py-1 text-sm w-40 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Header;
