import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './icons';
import Tooltip from './Tooltip';

const sampleCode = `#!/bin/sh
cd \${0%/*} || exit 1    # Run from this directory

# Source OpenFOAM environment if not already sourced
[ -z "$WM_PROJECT_DIR" ] && . /opt/openfoam9/etc/bashrc

# Clean case
./Allclean

# 1. Create background mesh
echo "Running blockMesh..."
blockMesh > log.blockMesh

# 2. Extract features from STL
echo "Running surfaceFeatureExtract..."
surfaceFeatureExtract > log.surfaceFeatureExtract

# 3. Generate mesh with snappyHexMesh
echo "Running snappyHexMesh..."
snappyHexMesh -overwrite > log.snappyHexMesh

# 4. Decompose for parallel run (e.g., 4 cores)
echo "Decomposing domain..."
decomposePar > log.decomposePar

# 5. Run the incompressible steady-state solver
echo "Running simpleFoam in parallel..."
mpirun -np 4 simpleFoam -parallel > log.simpleFoam

# 6. Reconstruct the case
echo "Reconstructing domain..."
reconstructPar > log.reconstructPar

echo "Simulation finished."
`;

const highlight = (line: string) => {
    return line
        .replace(/(#.*)/g, '<span class="text-gray-500">$1</span>') // comments
        .replace(/(\b(blockMesh|surfaceFeatureExtract|snappyHexMesh|checkMesh|decomposePar|simpleFoam|reconstructPar|mpirun|echo|cd|exit)\b)/g, '<span class="text-purple-400">$1</span>') // commands
        .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$1</span>') // strings
        .replace(/(\$\{[^}]+\}|\$\w+)/g, '<span class="text-cyan-400">$1</span>') // variables
        .replace(/(\s-[a-zA-Z0-9]+)/g, '<span class="text-orange-400">$1</span>') // flags
        .replace(/(\b\d+\.?\d*\b)/g, '<span class="text-blue-400">$1</span>'); // numbers
};

const CodeView: React.FC = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(sampleCode.trim());
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const codeLines = sampleCode.trim().split('\n');

    return (
        <div className="bg-[#202326] h-full flex flex-col font-mono">
            <div className="flex justify-between items-center px-4 py-1 bg-[#31363a] border-b border-gray-700">
                <span className="text-xs font-bold text-gray-400">Allrun</span>
                <Tooltip text={isCopied ? "Copied!" : "Copy code"}>
                    <button onClick={handleCopy} className="text-gray-400 hover:text-white transition-colors p-1 rounded">
                        {isCopied ? <CheckIcon className="text-green-400" /> : <CopyIcon />}
                    </button>
                </Tooltip>
            </div>
            <div className="flex-1 overflow-auto p-2">
                 <pre className="text-sm">
                    {codeLines.map((line, i) => (
                        <div key={i} className="flex">
                            <span className="w-8 text-right pr-4 text-gray-500 select-none">{i + 1}</span>
                            <code className="flex-1" dangerouslySetInnerHTML={{ __html: highlight(line) || '&nbsp;' }} />
                        </div>
                    ))}
                </pre>
            </div>
        </div>
    );
};

export default CodeView;
