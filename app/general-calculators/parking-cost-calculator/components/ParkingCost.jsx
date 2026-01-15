"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const  ParkingCost = () => {
  const [states, setStates] = useState({
    hoursParked: "",
    ratePerHour: "",
    discountPercent: "",
    vehicleType: "Car",
  });

  const [err, setErr] = useState({});
  const [result, setResult] = useState(null);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { hoursParked, ratePerHour, discountPercent } = states;

    // Validation
    if (!Number(hoursParked))
      return setErr((prev) => ({ ...prev, hoursParked: "Please enter hours parked." }));
    if (!Number(ratePerHour))
      return setErr((prev) => ({ ...prev, ratePerHour: "Please enter rate per hour." }));
    if (discountPercent && isNaN(Number(discountPercent)))
      return setErr((prev) => ({ ...prev, discountPercent: "Discount must be a number." }));

    // Calculation
    let total = Number(hoursParked) * Number(ratePerHour);
    if (discountPercent) total -= total * (Number(discountPercent) / 100);

    setResult({
      ...states,
      totalCost: total.toFixed(2),
    });
  };

  const inputFields = [
    { title: "Enter hours parked", name: "hoursParked", placeholder: "e.g. 5", type: "number" },
    { title: "Enter rate per hour ($)", name: "ratePerHour", placeholder: "e.g. 10", type: "number" },
    { title: "Enter discount (%) if any", name: "discountPercent", placeholder: "e.g. 15", type: "number" },
  ];

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {inputFields.map((field, index) => (
          <div key={index}>
            <InputField
              label={field.title}
              placeholder={field.placeholder}
              name={field.name}
              type={field.type}
              value={states[field.name]}
              handleChanges={handleChanges}
            />
            {err[field.name] && <ErrorComponent error={err[field.name]} />}
          </div>
        ))}

        <SelectOptionsInputField
          label="Select vehicle type"
          name="vehicleType"
          value={states.vehicleType}
          handleChanges={handleChanges}
          options={["Car", "Motorbike", "Truck", "Bus"]}
        />

        <BlueBtn btnText="Calculate Parking Cost" type="submit" classes="self-start mt-2" />
      </form>

      {result && (
        <div className="result mt-4">
          <h3 className="result_heading">Parking Cost Result</h3>
          <div className="result_item">
            <span>Hours Parked:</span> <span>{result.hoursParked} h</span>
          </div>
          <div className="result_item">
            <span>Rate per Hour:</span> <span>${result.ratePerHour}</span>
          </div>
          {result.discountPercent && (
            <div className="result_item">
              <span>Discount:</span> <span>{result.discountPercent}%</span>
            </div>
          )}
          <div className="result_item">
            <span>Vehicle Type:</span> <span>{result.vehicleType}</span>
          </div>
          <div className="result_item font-bold text-lg">
            <span>Total Parking Cost:</span> <span>${result.totalCost}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default  ParkingCost;
