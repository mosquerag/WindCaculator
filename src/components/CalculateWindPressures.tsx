import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { Card } from "@/components/ui/card";
// import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import DivCompBWP from "@/components/divCompBWP";
import CardCompPBW01 from "@/components/CardCompPBW01";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const CalculateWindPressures = () => {
  const [formData, setFormData] = useState({
    groundElevationFactor: 1.001,
    exposureFactor: 0.850,
    velocityPressure : 24.49,
    allowate:14.69
    
  });

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
      <DivCompBWP>
        
        <h2 className="text-xl font-semibold mb-4">Calculate Wind Pressures</h2>
        <CardCompPBW01>
          <div>
            <Label text="Exposure Factor (kh)" htmlFor="exposureFactor">Exposure Factor (kh)</Label>
            
            <Input name="exposureFactor" value={formData.exposureFactor} onChange={handleChange} disabled />
          </div>

          <div>
            <Label text="Ground Elevation Factor (ke)" htmlFor="groundElevationFactor">Ground Elevation Factor (ke)</Label>
            <Input name="groundElevationFactor" value={formData.groundElevationFactor} onChange={handleChange} disabled />
          </div>

          <div>
            <Label text="qz, Velocity Pressure at Height (psf) Ultimate" htmlFor="velocityPressure">qz, Velocity Pressure at Height (psf) Ultimate</Label>
            <Input name="velocityPressure" value={formData.velocityPressure} onChange={handleChange} disabled />
          </div>

          
          <div>
            <Label text="Allowate (psf)" htmlFor="allowate">Allowate (psf)</Label>
            <Input name="allowate" value={formData.allowate} onChange={handleChange} disabled />
          </div>

          
        </CardCompPBW01>
      </DivCompBWP>
    // </div>
  );
};

export default CalculateWindPressures;