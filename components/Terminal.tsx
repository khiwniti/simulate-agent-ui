import React from 'react';

const Terminal: React.FC = () => {
  const output = `SIMPLE solution for incompressible, turbulent flow

Time = 1

smoothSolver:  Solving for Ux, Initial residual = 1, Final residual = 0.0312, No. of iterations = 2
smoothSolver:  Solving for Uy, Initial residual = 1, Final residual = 0.0456, No. of iterations = 2
GAMG:  Solving for p, Initial residual = 1, Final residual = 0.0098, No. of iterations = 3
time step continuity errors : sum local = 1.5e-05, global = -2.1e-06, cumulative = -2.1e-06
smoothSolver:  Solving for epsilon, Initial residual = 0.2, Final residual = 0.001, No. of iterations = 1
smoothSolver:  Solving for k, Initial residual = 0.2, Final residual = 0.001, No. of iterations = 1
ExecutionTime = 0.82 s  ClockTime = 1 s

...

Time = 1000

smoothSolver:  Solving for Ux, Initial residual = 1.2e-05, Final residual = 2.1e-06, No. of iterations = 1
smoothSolver:  Solving for Uy, Initial residual = 9.8e-06, Final residual = 1.5e-06, No. of iterations = 1
GAMG:  Solving for p, Initial residual = 4.5e-05, Final residual = 3.2e-06, No. of iterations = 2
time step continuity errors : sum local = 1.1e-07, global = -2.4e-08, cumulative = -1.2e-06
ExecutionTime = 245.3 s  ClockTime = 248 s

End
`;
  return (
    <div className="bg-[#202326] p-4 font-mono text-xs text-gray-300 h-full overflow-y-auto" role="log" aria-live="polite">
        <div>
            <span className="text-green-400 mr-2">$</span>
            <span>mpirun -np 4 simpleFoam -parallel</span>
        </div>
        <pre className="whitespace-pre-wrap leading-relaxed mt-2">{output}</pre>
        <div className="flex mt-2">
            <span className="text-green-400 mr-2 flex-shrink-0">$</span>
            <div className="bg-gray-200 w-2 h-4 animate-pulse"></div>
        </div>
    </div>
  );
};

export default Terminal;