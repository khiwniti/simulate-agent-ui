import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon, FolderIcon, FileIcon } from './icons';
import type { WorkflowStage } from '../App';
import Tooltip from './Tooltip';


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

// FIX: Made `children` prop optional (`?`) to allow for collapsible items that are empty (e.g., an empty folder).
const CollapsibleTreeItem: React.FC<{ icon: React.ReactNode; label: string; level?: number; isBold?: boolean; children?: React.ReactNode; defaultOpen?: boolean }> = ({ icon, label, level = 0, isBold = false, children, defaultOpen=false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div>
            <div className="flex items-center space-x-2 py-1 cursor-pointer hover:bg-gray-700 rounded-sm" style={{ paddingLeft: `${level * 0.5}rem`}} onClick={() => setIsOpen(!isOpen)}>
                <Tooltip text={isOpen ? 'Collapse' : 'Expand'}>
                  {isOpen ? <ChevronDownIcon className="w-4 h-4 text-gray-500"/> : <ChevronRightIcon className="w-4 h-4 text-gray-500"/>}
                </Tooltip>
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
                    <Tooltip text={isOpen ? 'Collapse Panel' : 'Expand Panel'}>
                      {isOpen ? <ChevronDownIcon className="w-4 h-4 text-gray-400" /> : <ChevronRightIcon className="w-4 h-4 text-gray-400" />}
                    </Tooltip>
                </PanelHeader>
            </div>
            {isOpen && children}
        </div>
    );
};

// --- PANELS ---

const FileExplorerPanel: React.FC = () => {
  return (
    <CollapsiblePanel title="FILE EXPLORER" defaultOpen={true}>
      <div className="p-2 space-y-1">
        <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="jet-OF-case" isBold={true} defaultOpen={true}>
            <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-blue-400"/>} label="0" level={1} defaultOpen={true}>
                <TreeItem icon={<FileIcon className="w-4 h-4 text-gray-400"/>} label="p" level={2} />
                <TreeItem icon={<FileIcon className="w-4 h-4 text-gray-400"/>} label="U" level={2} />
            </CollapsibleTreeItem>
            <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-blue-400"/>} label="constant" level={1} defaultOpen={true}>
                 <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="polyMesh" level={2}>
                    {/* polyMesh files would be here */}
                 </CollapsibleTreeItem>
                 <TreeItem icon={<FileIcon className="w-4 h-4 text-gray-400"/>} label="transportProperties" level={2} />
                 <TreeItem icon={<FileIcon className="w-4 h-4 text-gray-400"/>} label="turbulenceProperties" level={2} />
            </CollapsibleTreeItem>
            <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-blue-400"/>} label="system" level={1} defaultOpen={true}>
                 <TreeItem icon={<FileIcon className="w-4 h-4 text-gray-400"/>} label="controlDict" level={2} />
                 <TreeItem icon={<FileIcon className="w-4 h-4 text-gray-400"/>} label="fvSchemes" level={2} />
                 <TreeItem icon={<FileIcon className="w-4 h-4 text-gray-400"/>} label="fvSolution" level={2} />
            </CollapsibleTreeItem>
            <TreeItem icon={<FileIcon className="w-4 h-4 text-green-400"/>} label="Allrun" level={1} />
            <TreeItem icon={<FileIcon className="w-4 h-4 text-red-400"/>} label="Allclean" level={1} />
        </CollapsibleTreeItem>
      </div>
    </CollapsiblePanel>
  );
};

const GeometryPanel: React.FC = () => {
  return (
    <CollapsiblePanel title="GEOMETRY" defaultOpen={true}>
      <div className="p-2 space-y-1">
        <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="Parts (1)" level={0} isBold={true} defaultOpen={true}>
            <TreeItem icon={<FileIcon className="w-4 h-4 text-green-400"/>} label="jet.obj" level={1} />
        </CollapsibleTreeItem>
        <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="Regions (3)" level={0} isBold={true} defaultOpen={true}>
            <TreeItem icon={<span className="text-blue-400 text-lg leading-none">&#9632;</span>} label="inlet" level={1} />
            <TreeItem icon={<span className="text-red-400 text-lg leading-none">&#9632;</span>} label="outlet" level={1} />
            <TreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9632;</span>} label="walls" level={1} />
        </CollapsibleTreeItem>
      </div>
    </CollapsiblePanel>
  );
};

const PhysicsPanel: React.FC = () => (
    <CollapsiblePanel title="PHYSICS MODELS" defaultOpen={true}>
        <div className="p-3 text-sm space-y-3">
             <div>
                <label className="text-xs text-gray-400 font-bold">Turbulence Model (RAS)</label>
                <select className="w-full bg-gray-800 border border-gray-600 rounded mt-1 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>kEpsilon</option>
                    <option>kOmegaSST</option>
                    <option>SpalartAllmaras</option>
                </select>
            </div>
            <div>
                <label className="text-xs text-gray-400 font-bold">Flow</label>
                <select className="w-full bg-gray-800 border border-gray-600 rounded mt-1 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>incompressible</option>
                    <option>compressible</option>
                </select>
            </div>
            <div>
                <label className="text-xs text-gray-400 font-bold">Time</label>
                <select className="w-full bg-gray-800 border border-gray-600 rounded mt-1 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>steady</option>
                    <option>transient</option>
                </select>
            </div>
        </div>
    </CollapsiblePanel>
);

const BoundaryConditionsPanel: React.FC = () => (
     <CollapsiblePanel title="BOUNDARY CONDITIONS" defaultOpen={true}>
       <div className="p-2 space-y-1">
            <TreeItem icon={<span className="text-blue-400 text-lg leading-none">&#9632;</span>} label="inlet" level={0} />
            <TreeItem icon={<span className="text-red-400 text-lg leading-none">&#9632;</span>} label="outlet" level={0} />
            <TreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9632;</span>} label="walls" level={0} />
       </div>
    </CollapsiblePanel>
);

const SolverPanel: React.FC = () => (
    <CollapsiblePanel title="SOLVER SETTINGS" defaultOpen={true}>
       <div className="p-3 text-sm space-y-3">
            <CollapsibleTreeItem label="Numerical Schemes" icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} isBold={true} defaultOpen={true} level={0}>
                <div className="pl-4 pt-2 space-y-2">
                    <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">gradSchemes</label>
                        <select defaultValue="Gauss linear" className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                            <option>Gauss linear</option>
                            <option>Gauss cubic</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">divSchemes</label>
                        <select defaultValue="Gauss upwind" className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                            <option>Gauss upwind</option>
                            <option>Gauss linearUpwind</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">laplacianSchemes</label>
                        <select defaultValue="Gauss linear corrected" className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                            <option>Gauss linear corrected</option>
                            <option>Gauss linear limited</option>
                        </select>
                    </div>
                </div>
            </CollapsibleTreeItem>
            <CollapsibleTreeItem label="Solvers" icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} isBold={true} defaultOpen={true} level={0}>
                <div className="pl-4 pt-2 space-y-2">
                    <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">p</label>
                        <select className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                            <option>GAMG</option>
                            <option>PCG</option>
                        </select>
                    </div>
                     <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">U</label>
                        <select className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                            <option>PBiCG</option>
                            <option>smoothSolver</option>
                        </select>
                    </div>
                </div>
            </CollapsibleTreeItem>
            <CollapsibleTreeItem label="Relaxation Factors" icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} isBold={true} level={0}>
                 <div className="pl-4 pt-2 space-y-2">
                    <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">p</label>
                        <input type="number" defaultValue="0.3" className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">U</label>
                        <input type="number" defaultValue="0.7" className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                </div>
            </CollapsibleTreeItem>
            <CollapsibleTreeItem label="Time Controls" icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} isBold={true} defaultOpen={true} level={0}>
                 <div className="pl-4 pt-2 space-y-2">
                    <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">deltaT</label>
                        <input type="number" defaultValue="1" className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">endTime</label>
                        <input type="number" defaultValue="1000" className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-2">
                        <label className="text-xs text-gray-400">writeInterval</label>
                        <input type="number" defaultValue="50" className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                </div>
            </CollapsibleTreeItem>
      </div>
    </CollapsiblePanel>
);

const ScenePanel: React.FC = () => {
  return (
    <CollapsiblePanel title="SCENE" defaultOpen={true}>
      <div className="p-2 space-y-1">
        <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-purple-400"/>} label="jet.foam" level={0} isBold={true} defaultOpen={true}>
             <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="Patches" level={1} defaultOpen={true}>
                <TreeItem icon={<span className="text-blue-400 text-lg leading-none">&#9632;</span>} label="inlet" level={2} />
                <TreeItem icon={<span className="text-red-400 text-lg leading-none">&#9632;</span>} label="outlet" level={2} />
                <TreeItem icon={<span className="text-gray-500 text-lg leading-none">&#9632;</span>} label="walls" level={2} />
            </CollapsibleTreeItem>
             <CollapsibleTreeItem icon={<FolderIcon className="w-4 h-4 text-gray-500"/>} label="Fields" level={1} defaultOpen={true}>
                <TreeItem icon={<span className="text-orange-400 text-lg leading-none">&#9679;</span>} label="p" level={2} />
                <TreeItem icon={<span className="text-cyan-400 text-lg leading-none">&#9679;</span>} label="U" level={2} />
            </CollapsibleTreeItem>
        </CollapsibleTreeItem>
      </div>
    </CollapsiblePanel>
  );
};

const PlotsPanel: React.FC = () => (
    <CollapsiblePanel title="PLOTS">
       <div className="p-4 text-sm text-gray-500">
        Plotting controls will be here.
      </div>
    </CollapsiblePanel>
);

const PropertiesPanel: React.FC = () => {
  return (
    <CollapsiblePanel title="PROPERTIES">
      <div className="p-4 text-sm text-gray-500">
        No properties to display.
      </div>
    </CollapsiblePanel>
  );
};

// --- MAIN COMPONENT ---

interface LeftSidebarProps {
    currentStage: WorkflowStage;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ currentStage }) => {
  return (
    <div className="w-64 bg-[#292d30] flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {currentStage === 'setup' && (
            <>
              <FileExplorerPanel />
              <GeometryPanel />
            </>
          )}
          {currentStage === 'simulation' && (
            <>
                <PhysicsPanel />
                <BoundaryConditionsPanel />
                <SolverPanel />
            </>
          )}
          {currentStage === 'results' && (
            <>
              <FileExplorerPanel />
              <ScenePanel />
              <PlotsPanel />
            </>
          )}
        </div>
        <PropertiesPanel />
    </div>
  );
};

export default LeftSidebar;