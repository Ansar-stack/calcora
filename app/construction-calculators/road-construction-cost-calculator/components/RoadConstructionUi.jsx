"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import Result from "@/app/components/Result";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const RoadConstructionUi = () => {
  const [states, setStates] = useState({
    projectLength: "",
    projectWidth: "",
    metrialType: "Asphalt",
    soilType: "Clay",
    trafficVolume: "",
    locationType: "Urban",
    laborCost: "",
    laborWork: "",
    metrialCost: "",
    projectDuration: "",
  });

  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);

  // Input handler
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr("");
  };

  // Calculation
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      projectLength,
      projectWidth,
      laborCost,
      laborWork,
      metrialCost,
      projectDuration,
    } = states;
//  Validation
    if (!Number(projectLength)) return setErr("Please enter project length.");
    if (!Number(projectWidth)) return setErr("Please enter project width.");
    if (!Number(laborCost))
      return setErr("Please enter labor cost.");
    if (!Number(laborWork))
      return setErr("Please enter labor work hours.");
    if (!Number(metrialCost))
      return setErr("Please enter material cost.");
    const length = parseFloat(projectLength);
    const width = parseFloat(projectWidth);
    const laborRate = parseFloat(laborCost);
    const laborHours = parseFloat(laborWork);
    const materialRate = parseFloat(metrialCost);
    const duration = parseFloat(projectDuration) || 30; // default 30 days
    const thickness = 0.25; // 25cm road thickness assumed

    const area = length * width; // m²
    const volume = area * thickness; // m³
    const materialCostTotal = volume * materialRate;
    const laborCostTotal = laborRate * laborHours * duration;
    const totalCost = materialCostTotal + laborCostTotal;

    setResult({
      area,
      volume,
      materialCostTotal,
      laborCostTotal,
      totalCost,
      ...states,
      thickness,
      duration,
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <InputField
            label="Enter length in meters"
            name="projectLength"
            type="number"
            placeholder="e.g. 700"
            value={states.projectLength}
            handleChanges={handleChanges}
          />
        </div>

        <div>
          <InputField
            label="Enter width in meters"
            name="projectWidth"
            type="number"
            placeholder="e.g. 4"
            value={states.projectWidth}
            handleChanges={handleChanges}
          />
        </div>

        <SelectOptionsInputField
          label="Select material type"
          name="metrialType"
          value={states.metrialType}
          handleChanges={handleChanges}
          options={["Asphalt", "Concrete", "Gravel", "Dirt", "Other"]}
        />
        <SelectOptionsInputField
          label="Select soil type"
          name="soilType"
          value={states.soilType}
          handleChanges={handleChanges}
          options={["Clay", "Sand", "Gravel", "Rocky", "Other"]}
        />
        <SelectOptionsInputField
          label="Select location type"
          name="locationType"
          value={states.locationType}
          handleChanges={handleChanges}
          options={["Urban", "Suburban", "Rural", "Other"]}
        />

        <div>
          <InputField
            label="Enter labor cost per hour"
            name="laborCost"
            type="number"
            placeholder="e.g. 10"
            value={states.laborCost}
            handleChanges={handleChanges}
          />
        </div>

        <div>
          <InputField
            label="Enter labor hours per day"
            name="laborWork"
            type="number"
            placeholder="e.g. 8"
            value={states.laborWork}
            handleChanges={handleChanges}
          />
        </div>

        <div>
          <InputField
            label="Enter material cost per cubic meter"
            name="metrialCost"
            type="number"
            placeholder="e.g. 30"
            value={states.metrialCost}
            handleChanges={handleChanges}
          />
        </div>

        <div>
          <InputField
            label="Enter project duration (days)"
            name="projectDuration"
            type="number"
            placeholder="e.g. 60"
            value={states.projectDuration}
            handleChanges={handleChanges}
          />
        </div>
        {err && <ErrorComponent error={err} />}
        <BlueBtn
          btnText="Calculate Cost"
          classes="mt-2 self-start"
          type="submit"
        />
      </form>

      {result && (
        <Result heading={'Road Construction Cost Breakdown'} arr={[
            { title: "Project Area", value: `${result.area} m²` },
            { title: "Estimated Thickness", value: `${result.thickness} m` },
            { title: "Material Volume", value: `${result.volume.toFixed(2)} m³` },
            { title: "Material Cost", value: `$${result.materialCostTotal.toLocaleString()}` },
            { title: "Labor Cost", value: `$${result.laborCostTotal.toLocaleString()}` },
            { title: "Project Duration", value: `${result.duration} days` },
            { title: "Material Type", value: `${result.metrialType}` },
            { title: "Soil Type", value: `${result.soilType}` },
            { title: "Location Type", value: `${result.locationType}` },
            {title: "Total Cost", value: `$${result.totalCost.toLocaleString()}`}
          ]}/>
      )}
    </div>
  );
};

export default RoadConstructionUi;
