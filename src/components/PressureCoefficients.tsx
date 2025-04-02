import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PressureCoefficients = () => {
  const [formData, setFormData] = useState({
    zoneDimension: "",
    internalPressure: "",
  });

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Card className={cn("p-6 max-w-3xl mx-auto shadow-md rounded-lg bg-background border")}> 
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <Label text="Zone Dimension (ft)" htmlFor="zoneDimension">Zone Dimension (ft)</Label>
          <Input
            id="zoneDimension"
            name="zoneDimension"
            value={formData.zoneDimension}
            onChange={handleChange}
            placeholder="Enter zone dimension"
          />
        </div>

        <div>
          <Label text="Internal Pressure Coefficient (+/-GCpi)" htmlFor="internalPressure">Internal Pressure Coefficient (+/-GCpi)</Label>
          <Input
            id="internalPressure"
            name="internalPressure"
            value={formData.internalPressure}
            type="text"
            onChange={handleChange}
            placeholder="Enter internal pressure"
          />
        </div>
      </div>
    </Card>
  );
};

export default PressureCoefficients;
