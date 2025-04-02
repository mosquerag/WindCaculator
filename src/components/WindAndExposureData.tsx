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

const WindAndExposureData = () => {
  const [formData, setFormData] = useState({
    basicFactoredWindSpeed: 115,
    exposureCategory: "B",
    groundElevation: 15,
    directionalityFactor: "0.85",
    topographicFactor: "FLAT TERRAIN",
  });

  useEffect(() => {
    console.log("Formulario actualizado:", formData);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "basicFactoredWindSpeed" || name === "groundElevation"
        ? Number(value) || 0 // Asegurar que los valores numéricos sean números
        : value,
    }));
  };

  return (
    <DivCompBWP>
      <CardCompPBW01>
        <div>
          <Label text="Basic/Factored Wind Speed (mph" htmlFor="basicFactoredWindSpeed">Basic/Factored Wind Speed (mph)</Label>
          <Input
            id="basicFactoredWindSpeed"
            type="number"
            name="basicFactoredWindSpeed"
            value={formData.basicFactoredWindSpeed}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label text="Exposure Category" htmlFor="exposureCategory">Exposure Category</Label>
          <Select
            name="exposureCategory"
            value={formData.exposureCategory}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, exposureCategory: value }))}
          >
            <SelectTrigger className="w-full" id="exposureCategory" />
            <SelectContent>
              {["B", "C", "D"].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label text="Ground Elevation (ft)" htmlFor="groundElevation">Ground Elevation (ft)</Label>
          <Input
            id="groundElevation"
            type="number"
            name="groundElevation"
            value={formData.groundElevation}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label text="Directionality Factor (kd)" htmlFor="directionalityFactor">Directionality Factor (kd)</Label>
          <Select
            name="directionalityFactor"
            value={formData.directionalityFactor}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, directionalityFactor: value }))}
          >
            <SelectTrigger className="w-full" id="directionalityFactor" />
            <SelectContent>
              {["0.85", "1.00"].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label text="Topographic Factor (kst)" htmlFor="topographicFactor">Topographic Factor (kst)</Label>
          <Select
            name="topographicFactor"
            value={formData.topographicFactor}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, topographicFactor: value }))}
          >
            <SelectTrigger className="w-full" id="topographicFactor" />
            <SelectContent>
              {["FLAT TERRAIN", "Other Terrain"].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardCompPBW01>
    </DivCompBWP>
  );
};

export default WindAndExposureData;
