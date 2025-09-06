
import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  trigger: (isOpen: boolean) => React.ReactNode;
  children: React.ReactNode;
  menuClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, children, menuClassName = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger(isOpen)}
      </div>
      {isOpen && (
        <div className={`absolute top-full mt-2 w-48 bg-[#202326] border border-gray-700 rounded-md shadow-lg z-10 ${menuClassName}`}>
          <ul className="py-1">
            {React.Children.map(children, child => 
              React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { close: () => setIsOpen(false) }) : child
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export const DropdownItem: React.FC<{ children: React.ReactNode; onClick?: () => void; close?: () => void }> = ({ children, onClick, close }) => (
  <li>
    <button 
      onClick={() => {
        if (onClick) onClick();
        if (close) close();
      }} 
      className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
    >
      {children}
    </button>
  </li>
);


export default Dropdown;
