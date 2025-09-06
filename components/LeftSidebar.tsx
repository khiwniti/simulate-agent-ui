
import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon, FolderIcon, FileIcon } from './icons';

const PanelHeader: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
  <div className="flex justify-between items-center px-3 py-2 text-xs font-bold text-gray-400 border-b border-gray-700 bg-[#31363a]">
    <span>{title}</span>
    <div>{children}</div>
  </div>
);

const TreeItem: React.FC<{ icon: React.ReactNode; label: string; level?: number; isBold?: boolean; }> = ({ icon, label, level = 0, isBold = false }) => (
  <div className="flex items-center space-x-2 py-1 cursor-pointer hover:bg-gray-700 rounded-sm" style={{ paddingLeft: `${level * 1.25}rem`}}>
    {icon}
    <span className={`text-sm ${isBold ? 'font-semibold text-gray-200' : 'text-gray-400'}`}>{label}</span>
  </div>
);

const CollapsibleTreeItem: React.FC<{ icon: React.ReactNode; label: string; level?: number; isBold?: boolean; children: React.ReactNode; defaultOpen?: boolean }> = ({ icon, label, level = 0, isBold = false, children, defaultOpen=false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div>
            <div className="flex items-center space-x-2 py-1 cursor-pointer hover:bg-gray-700 rounded-sm" style={{ paddingLeft: `${level * 0.5}rem`}} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ChevronDownIcon className="w-4 h-4 text-gray-500"/> : <ChevronRightIcon className="w-4 h-4 text-gray-500"/>}
                {icon}
                <span className={`text-sm ${isBold ? 'font-semibold text-gray-200' : 'text-gray-400'}`}>{label}</span>
            </div>
            {isOpen && <div className="pl-4">{children}</div>}
        </div>
    )
}

const CollapsiblePanel: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean; }> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-800">
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                 <PanelHeader title={title}>
                    {isOpen ? <ChevronDownIcon className="w-4 h-4 text-gray-400" /> : <ChevronRightIcon className="w-4 h-4 text-gray-400" />}
                </PanelHeader>
            </div>
            {isOpen && children}
        </div>
    );
};


const FileExplorerPanel: React.FC = () => {
  return (
    <CollapsiblePanel title="FILE EXPLORER" defaultOpen={true}>
      <div className="p-2 space-y-1">
        <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="jet-simulation" isBold={true} defaultOpen={true}>
            <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="data" level={1} defaultOpen={true}>
                <TreeItem icon={<FileIcon className="w-4 h-4 text-green-400"/>} label="jet.stl" level={2} />
                <TreeItem icon={<FileIcon className="w-4 h-4 text-blue-400"/>} label="flow_conditions.csv" level={2} />
                <TreeItem icon={<FileIcon className="w-4 h-4 text-orange-400"/>} label="simulation_data.json" level={2} />
            </CollapsibleTreeItem>
            <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="results" level={1}>
                 <TreeItem icon={<FileIcon className="w-4 h-4 text-purple-400"/>} label="pmean.vtu" level={2} />
                 <TreeItem icon={<FileIcon className="w-4 h-4 text-purple-400"/>} label="slices.vtp" level={2} />
            </CollapsibleTreeItem>
            <TreeItem icon={<FileIcon className="w-4 h-4 text-gray-400"/>} label="config.yaml" level={1} />
            <TreeItem icon={<FileIcon className="w-4 h-4 text-yellow-400"/>} label="run.py" level={1} />
        </CollapsibleTreeItem>
      </div>
    </CollapsiblePanel>
  );
};

const ScenePanel: React.FC = () => {
  return (
    <CollapsiblePanel title="SCENE" defaultOpen={true}>
      <div className="p-2 space-y-1">
        <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="Mesh (1)" level={0} isBold={true} defaultOpen={true}>
            <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="Results (1)" level={1} isBold={true} defaultOpen={true}>
                <CollapsibleTreeItem icon={<span className="text-yellow-400 text-lg leading-none">&#9679;</span>} label="Simulation (a5d87fa3-0f...)" level={2} defaultOpen={true}>
                     <CollapsibleTreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9679;</span>} label="Patches" level={3} defaultOpen={true}>
                        <TreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9679;</span>} label="xMin" level={4} />
                        <TreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9679;</span>} label="xMax" level={4} />
                        <TreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9679;</span>} label="yMin" level={4} />
                        <TreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9679;</span>} label="yMax" level={4} />
                        <TreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9679;</span>} label="zMin" level={4} />
                        <TreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9679;</span>} label="zMax" level={4} />
                    </CollapsibleTreeItem>
                    <TreeItem icon={<FileIcon className="w-4 h-4 text-green-400"/>} label="jet.stl" level={3} />
                </CollapsibleTreeItem>
            </CollapsibleTreeItem>
            <TreeItem icon={<FileIcon className="w-4 h-4 text-green-400"/>} label="jet.stl" level={1} />
        </CollapsibleTreeItem>
      </div>
    </CollapsiblePanel>
  );
};

const PropertiesPanel: React.FC = () => {
  return (
    <CollapsiblePanel title="PROPERTIES">
      <div className="p-4 text-sm text-gray-500">
        No properties to display.
      </div>
    </CollapsiblePanel>
  );
};


const LeftSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-[#292d30] flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <FileExplorerPanel />
          <ScenePanel />
        </div>
        <PropertiesPanel />
    </div>
  );
};

export default LeftSidebar;
