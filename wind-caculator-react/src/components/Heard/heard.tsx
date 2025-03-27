// src/components/ComponentHeader.tsx
// import React from 'react';

const Header = () => {
  return (
    <div className="w-full mb-4">
      <div className="bg-[#00093f] text-white flex items-center p-4">
        <div className="text-orange-500 text-2xl font-bold mr-5">Synergyn</div>
        <div className="flex-grow text-center">
          <div className="text-base mb-1">ASCE7 Wind - Components & Cladding</div>
          <div className="text-xs text-gray-400">
            Enclosed/Partially Enclosed Buildings with Mean Roof Height Less Than 60ft - Flat Roof -
            Gable Roof - Hip Roof
          </div>
        </div>
        <button className="bg-[#212752] p-2 rounded-md">☀️</button>
      </div>
    </div>
  );
};

export default Header;
