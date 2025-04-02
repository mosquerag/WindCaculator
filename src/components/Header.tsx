import React from 'react';  
import Logo from "../../src/assets/SYNERGYN_Logo.png";  
import ThemeToggle from '@/components/theme-toggle'; 

const Header: React.FC = () => {  
  return (  
    <div className="w-full mb-4">  
      <div className="bg-[#00093f] text-white flex items-center p-4">  
        <div className="mr-5">  
          <img  
            className="h-auto max-w-full sm:w-40 sm:h-20"  
            src={Logo}  
            alt="Logo"  
          />  
        </div>  

        <div className="flex-grow text-center">  
          <div className="mb-1 text-base">  
            ASCE7 Wind - Components & Cladding  
          </div>  
          <div className="text-xs text-gray-400">  
            Enclosed/Partially Enclosed Buildings with Mean Roof Height Less Than 60ft - Flat Roof - Gable Roof - Hip Roof  
          </div>  
        </div>  
        <ThemeToggle /> 
      </div>  
    </div>  
  );  
};  

export default Header;  