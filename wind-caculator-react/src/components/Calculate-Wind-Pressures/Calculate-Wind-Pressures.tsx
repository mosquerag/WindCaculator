// src/components/CalculateWindPressures.tsx
// import { useState } from "react";

const CalculateWindPressures = () => {
 

  return (
    <div className="p-4 rounded-lg shadow-md max-w-3xl mx-auto bg-[#00093F] border-[#00093F] border mb-4">
                <h5 className="text-2xl text-white font-semibold mb-2">Calculated Factors</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                        <label className="block mb-1 text-white">Exposure Factor (kh)</label>
                        <input 
                            className="w-full h-8 p-2 bg-white border border-gray-300 text-gray-800 rounded" value="0.850" />
                    </div>
                    <div>
                        <label className="block mb-1 text-white">Directionality Factor (kd)</label>
                        <input 
                            className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded" value="0.85"/>
                    </div>
                    <div>
                        <label className="block mb-1 text-white">Ground Elevation Factor (ke)</label>
                        <input 
                            className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded" value="1.001"/>
                    </div>
                    <div>
                        <label className="block mb-1 text-white">Topographic Factor (kst)</label>
                        <input 
                            className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded" value="1.00"/>
                    </div>
                    <div>
                        <label className="block mb-1 text-white">qz, Velocity Pressure at Height (psf) Ultimate</label>
                        <input 
                            className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded" value="24.49"/>
                    </div>
                    <div>
                        <label className="block mb-1 text-white">Allowate (psf)</label>
                        <input 
                            className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded" value="14.69"/>
                    </div>
                </div>
            </div>
  );
};

export default CalculateWindPressures;
