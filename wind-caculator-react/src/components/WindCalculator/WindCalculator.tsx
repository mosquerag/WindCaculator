// src/components/WindCalculator.tsx
// import React from 'react';
import Header from '../Heard/heard';
import TabMenu from '../TabMenu/TabMenu';
import CalculateWindPressures from '../Calculate-Wind-Pressures/Calculate-Wind-Pressures';
// import BuildingInformation from '../building-information/building-information';
import ButtonCaculator from '../ButtonCaculator/ButtonCaculator';


const WindCalculator = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#212752] rounded-xl shadow-lg shadow-blue-500/10 p-4 max-w-[750px] mx-auto my-10 border border-gray-200 md:p-5 md:m-5">
        <Header />
        <TabMenu />
        <CalculateWindPressures/>
        <ButtonCaculator/>
      </div>
    </div>
  );
};

export default WindCalculator;
