// src/components/FormSection.tsx
// import React from 'react';

const WindAndExposureData = () => {
  return (
    <div
      className="tab-pane block p-4 rounded-lg shadow-md max-w-3xl mx-auto bg-[#00093F] border-[#00093F] border"
      id="wind-and-exposure-data"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block mb-1 text-white">
            Basic/Factored Wind Speed (mph)
          </label>
          <input
            type="number"
            className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded"
            value="115"
          />
        </div>
        <div>
          <label className="block mb-1 text-white">Exposure Category</label>
          <select className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded">
            <option selected>B</option>
            <option value="1">Another option</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-white">Ground Elevation (ft)</label>
          <input
            type="number"
            className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded"
            value="15"
          />
        </div>
      </div>
    </div>
  );
};

export default WindAndExposureData;
