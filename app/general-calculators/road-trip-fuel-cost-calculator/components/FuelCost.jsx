"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const FuelCost = () => {
  const [states, setStates] = useState({
    tripDistance: "",
    distanceUnit: "Kilo Meter",
    efficiency: "",
    efficiencyUnit: "L/100km",
    pricePerUnit: "",
    priceUnit: "Liter",
  });
  const [err, setErr] = useState({
    tripDistance: "",
    efficiency: "",
    pricePerUnit: "",
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  const [result, setResult] = useState({
    totalCost: "",
    fuelNeed: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Number(states.tripDistance))return setErr(prev =>({...prev, tripDistance:"Please enter trip distance."}));
    if(!Number(states.efficiency))return setErr(prev =>({...prev, efficiency:"Please enter vehicle fuel efficiency."}));
    if(!Number(states.pricePerUnit))return setErr(prev =>({...prev, pricePerUnit:"Please enter fuel price per unit."}));
    let fuelNeed;
    let fuelCost;
    if(states.efficiencyUnit === "L/100km"){
      fuelNeed = (states.tripDistance * states.efficiency) / 100;
    }else if(states.efficiencyUnit === "MPG"){
      fuelNeed = states.tripDistance / states.efficiency;
    }
    fuelCost = fuelNeed * states.pricePerUnit;
    setResult({
      fuelNeed: fuelNeed, 
      totalCost: fuelCost
    })
  };
  return <div className="calculatorContainer">
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
        <InputField 
        label="Enter trip distance"
        placeholder="e.g 200"
        name="tripDistance"
        value={states.tripDistance}
        handleChanges={handleChanges}
        type="number"
        />
        {err.tripDistance && <ErrorComponent error={err.tripDistance}/>}
        </div>
        <SelectOptionsInputField 
        label="Select distance unit"
        name="distanceUnit"
        value={states.distanceUnit}
        handleChanges={handleChanges}
        options={["Kilo meter", "Miles"]}
        />
        <div>
        <InputField 
        label="Enter vehicle fuel efficiency"
        placeholder="e.g 8"
        type="number"
        value={states.efficiency}
        handleChanges={handleChanges}
        name="efficiency"
        />
        {err.efficiency && <ErrorComponent error={err.efficiency}/>}
        </div>
        <SelectOptionsInputField 
        label="Select fuel efficiency unit"
        value={states.efficiencyUnit}
        name="efficiencyUnit"
        handleChanges={handleChanges}
        options={["L/100km", "MPG"]}
        />
        <div>
        <InputField 
        label="Enter fuel price per unit"
        placeholder="e.g. 1.20"
        value={states.pricePerUnit}
        name="pricePerUnit"
        handleChanges={handleChanges}
        type="number"
        />
        {err.pricePerUnit && <ErrorComponent error={err.pricePerUnit}/>}
        </div>
        <SelectOptionsInputField 
        label="Select fuel price unit"
        value={states.priceUnit}
        handleChanges={handleChanges}
        name="priceUnit"
        options={["Liter", "Gallon"]}
        />
        <BlueBtn btnText="Calculate Fuel Cost" classes="self-start mt-3" type="submit" />
    </form>
   {result.totalCost && <div className="result flex flex-col">
      <p className="border-b border-gray-400 mb-3 pb-0.5">{`You will need ${result.fuelNeed} ${states.priceUnit} of fuel.`}</p>
      <p className="border-b border-gray-400 mb-3 pb-0.5">{`Estimated cost for your trip: $${result.totalCost}`}</p>
    </div>}
  </div>;
};

export default FuelCost;
