import { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DivCompBWP from "@/components/divCompBWP";
import CardCompPBW01 from "@/components/CardCompPBW01";

const BuildingInformation = () => {
  const [formData, setFormData] = useState({
    version: "ASCE7-16",
    roofType: "Gable",
    roofPitch: 12,
    slope: 47,
    meanRoofHeight: 150,
    enclosureClassification: "Enclosed",
    buildingDimensionB: 100,
    buildingDimensionOther: 65,
  });

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <DivCompBWP>
      <CardCompPBW01>
        <div className="mb-4">
          <Label text="Version" htmlFor="version" />
          <Select
            name="version"
            value={formData.version}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, version: value }))
            }
          >
            <SelectTrigger id="version" className="w-full" />
            <SelectContent position="popper" sideOffset={4}>
              {["ASCE7-16", "ASCE7-22"].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <Label text="Roof Type" htmlFor="roofType" />
          <Select
            name="roofType"
            value={formData.roofType}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, roofType: value }))
            }
          >
            <SelectTrigger id="roofType" className="w-full" />
            <SelectContent position="popper" sideOffset={4}>
              {["Gable", "Hip", "Flat"].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <Label text="Roof Pitch (Over 12)" htmlFor="roofPitch" />
          <Input
            id="roofPitch"
            name="roofPitch"
            value={formData.roofPitch}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <Label text="Slope (*)" htmlFor="slope" />
          <Input
            id="slope"
            name="slope"
            value={formData.slope}
            onChange={handleChange}
            disabled
          />
        </div>
        
        <div className="mb-4">
          <Label text="Mean Roof Height (ft)" htmlFor="meanRoofHeight" />
          <Input
            id="meanRoofHeight"
            name="meanRoofHeight"
            value={formData.meanRoofHeight}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <Label text="Enclosure Classification" htmlFor="enclosureClassification" />
          <Select
            name="enclosureClassification"
            value={formData.enclosureClassification}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                enclosureClassification: value,
              }))
            }
          >
            <SelectTrigger id="enclosureClassification" className="w-full" />
            <SelectContent position="popper" sideOffset={4}>
              {["Enclosed", "1"].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <Label text="Building Dimension B (ft)" htmlFor="buildingDimensionB" />
          <Input
            id="buildingDimensionB"
            name="buildingDimensionB"
            value={formData.buildingDimensionB}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <Label text="Building Dimension Other (ft)" htmlFor="buildingDimensionOther" />
          <Input
            id="buildingDimensionOther"
            name="buildingDimensionOther"
            value={formData.buildingDimensionOther}
            onChange={handleChange}
          />
        </div>
      </CardCompPBW01>
    </DivCompBWP>
  );
};

export default BuildingInformation;