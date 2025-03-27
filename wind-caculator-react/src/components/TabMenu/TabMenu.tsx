// src/components/TabMenu.tsx
import { useState } from "react";
import BuildingInformation from "../Building-Information/building-information";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("building-information");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Barra de navegación de las pestañas */}
      <div className="bg-[#00093F] p-4 rounded shadow-lg flex mb-3">
        <ul className="flex w-full">
          <li className="flex-1 mr-1">
            <a
              onClick={() => handleTabClick("building-information")}
              className={`nav-link block h-full text-white py-2 text-center rounded hover:bg-gray-500 ${
                activeTab === "building-information" ? "active" : ""
              }`}
              href="#building-information"
            >
              Building Info
            </a>
          </li>
          <li className="flex-1 mr-1">
            <a
              onClick={() => handleTabClick("wind-and-exposure-data")}
              className={`nav-link block h-full text-white py-2 text-center rounded hover:bg-gray-500 ${
                activeTab === "wind-and-exposure-data" ? "active" : ""
              }`}
              href="#wind-and-exposure-data"
            >
              Wind Parameters
            </a>
          </li>
          <li className="flex-1">
            <a
              onClick={() => handleTabClick("component-cladding-area")}
              className={`nav-link block h-full text-white py-2 text-center rounded hover:bg-gray-500 ${
                activeTab === "component-cladding-area" ? "active" : ""
              }`}
              href="#component-cladding-area"
            >
              Pressure Coefficients
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content mt-4 mb-4">
        {activeTab === "building-information" && (
          <div className="tab-pane p-4 rounded-lg shadow-md max-w-3xl mx-auto bg-[#00093F] border-[#00093F] border">
            <BuildingInformation />
          </div>
        )}
        {activeTab === "wind-and-exposure-data" && (
          <div className="tab-pane p-4 rounded-lg shadow-md max-w-3xl mx-auto bg-[#00093F] border-[#00093F] border">
            <p>Wind Parameters Content</p>
          </div>
        )}
        {activeTab === "component-cladding-area" && (
          <div className="tab-pane p-4 rounded-lg shadow-md max-w-3xl mx-auto bg-[#00093F] border-[#00093F] border">
            <p>Pressure Coefficients Content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;
