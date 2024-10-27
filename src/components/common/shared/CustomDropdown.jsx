
"use client";

import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

const services = [
  { id: "service1", name: "Pedicure" },
  { id: "service2", name: "Artificial Nails" },
  { id: "service3", name: "Additional Services" },
  { id: "service4", name: "Manicure" },
  { id: "service5", name: "Waxing" },
  { id: "service6", name: "Design" },
];

export function CustomDropdown() {
  const [selectedService, setSelectedService] = useState("");

  const handleSelectChange = (value) => {
    setSelectedService(value);
    console.log("Selected Service:", value);
  };

  return (
    <div className="!w-full">
      <Select label="Select Service" onChange={(e) => handleSelectChange(e)}>
        {services.map((service) => (
          <Option
            key={service.id}
            value={service.name}
            className="!hover:bg-primary transition-colors"
          >
            {service.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}


