import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import BuildingInformation from "@/components/BuildingInformation";
import WindAndExposureData from "@/components/WindAndExposureData";
import PressureCoefficients from "@/components/PressureCoefficients";

const tabs = [
  { id: "building-information", label: "Building Info", component: <BuildingInformation /> },
  { id: "wind-and-exposure-data", label: "Wind Parameters", component: <WindAndExposureData /> },
  { id: "component-cladding-area", label: "Pressure Coefficients", component: <PressureCoefficients /> },
];

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root data-slot="tabs" className={cn("flex flex-col gap-4", className)} {...props} />
  );
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("bg-[#00093F] p-4 rounded shadow-lg flex", className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "text-white rounded px-4 py-2 transition-all",
        "data-[state=active]:bg-[#234d9380] hover:bg-gray-500",
        // "data-[state=active]:bg-[#234d9380] hover:bg-gray-500",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("p-4  ", className)}
      {...props}
    />
  );
}

export function TabMenu() {
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
        </TabsContent>
      ))}
    </Tabs>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
