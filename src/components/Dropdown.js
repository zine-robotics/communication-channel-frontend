import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import "./css/main.css";

function Dropdown({ getDomainOfInterest }) {
  const options = [
    { label: "Web Development", value: "web" },
    { label: "App Development", value: "app" },
    { label: "Cad Modelling", value: "cad" },
    { label: "Image Processing", value: "ip" },
    { label: "Machine Learning", value: "ml" },
    { label: "PCB Design", value: "pcb" },
    { label: "Algorithm", value: "algo" },
    { label: "Robotics Case Study", value: "casestudy" },
  ];

  const [selected, setSelected] = useState([]);
  getDomainOfInterest(selected);
  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        
      />
      
    </div>
    
  );
}
export default Dropdown;
