// src/components/FormSection.tsx
// import React from 'react';

const FormSection = () => {
  return (
    <div className="tab-pane block p-4 rounded-lg shadow-md max-w-3xl mx-auto bg-[#00093F] border-[#00093F] border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block mb-1 text-white">Version</label>
          <select className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded">
            <option selected>ASCE7-16</option>
            <option value="1">Another option</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-white">Version</label>
          <select className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded">
            <option selected>ASCE7-16</option>
            <option value="1">Another option</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-white">Roof Type</label>
          <select className="w-full h-8 p-1 bg-white border border-gray-300 text-gray-800 rounded">
            <option selected>Gable</option>
            <option value="1">Another option</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
