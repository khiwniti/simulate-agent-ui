import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div className="bg-[#202326] p-4 font-mono text-sm text-gray-300 h-full overflow-y-auto" role="log" aria-live="polite">
      <div className="flex">
        <span className="text-green-400 mr-2 flex-shrink-0">$</span>
        <span className="break-all">./run simulation --config config.yaml</span>
      </div>
      <div>
        <span className="text-gray-500">[INFO]</span> Reading configuration from config.yaml...
      </div>
      <div>
        <span className="text-gray-500">[INFO]</span> Loading mesh file: data/jet.stl
      </div>
       <div>
        <span className="text-gray-500">[INFO]</span> Mesh loaded successfully. Vertices: 2456, Faces: 4912
      </div>
      <div>
        <span className="text-gray-500">[INFO]</span> Initializing simulation...
      </div>
      <div>
        <span className="text-blue-400">[RUNNING]</span> Timestep 0, Time: 0.000s
      </div>
       <div className="flex mt-2">
        <span className="text-green-400 mr-2">$</span>
        <span className="bg-gray-200 w-2 h-4 animate-pulse"></span>
      </div>
    </div>
  );
};

export default Terminal;
