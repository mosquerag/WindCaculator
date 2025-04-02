import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BuildingInformation from "@/components/BuildingInformation";
import WindAndExposureData from "@/components/WindAndExposureData";
import PressureCoefficients from "@/components/PressureCoefficients";
import CalculateWindPressures from "@/components/CalculateWindPressures";


const tabs = [
  { id: "building-information", label: "Building Info", component: <BuildingInformation /> },
  { id: "wind-and-exposure-data", label: "Wind Parameters", component: <WindAndExposureData /> },
  { id: "component-cladding-area", label: "Pressure Coefficients", component: <PressureCoefficients /> },
];

const TabMenu = () => {
  return (
    <Tabs defaultValue={tabs[0].id} className="w-full max-w-3xl mx-auto">
      <TabsList className="w-full flex justify-between">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          {tab.component}
          <CalculateWindPressures></CalculateWindPressures>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabMenu;
