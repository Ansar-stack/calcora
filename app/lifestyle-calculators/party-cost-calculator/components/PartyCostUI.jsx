"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const ParayCostUi = () => {
  const [states, setStates] = useState({
    guest: "",
    costPerGuest: "",
    venue: "",
    entertainment: "",
    other: "",
  });
  const [err, setErr] = useState({
    guest: "",
    costPerGuest: "",
  });
  const [result, setResult] = useState({
    totalExpences: "",
    perGuest: "",
  });
  //   Input handle changes
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(states.guest) || Number(states.guest) < 0)
      return setErr((prev) => ({
        ...prev,
        guest: "Please enter number of guest.",
      }));
    if (!Number(states.costPerGuest))
      return setErr((prev) => ({
        ...prev,
        costPerGuest: "Please enter cost per guest.",
      }));
    let totalExpences = 0;
    let guestsExpences = Number(states.guest) * Number(states.costPerGuest);
    totalExpences += guestsExpences;
    totalExpences +=
      Number(states.venue) +
      Number(states.entertainment) +
      Number(states.other);
    let averageExencesPerGuest = totalExpences / Number(states.guest);
    setResult({
      totalExpences: totalExpences,
      perGuest: averageExencesPerGuest,
    });
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {[
          {
            label: "Enter number of guest",
            placeholder: "e.g. 50",
            name: "guest",
            value: states.guest,
          },
          {
            label: "Enter cost per guest (Food & Drink)",
            placeholder: "e.g. 50",
            name: "costPerGuest",
            value: states.costPerGuest,
          },
          {
            label: "Enter venue hire",
            placeholder: "e.g. 500",
            name: "venue",
            value: states.venue,
          },
          {
            label: "Enter cost of entertainment/DJ",
            placeholder: "e.g. 300",
            name: "entertainment",
            value: states.entertainment,
          },
          {
            label: "Enter any other expences",
            placeholder: "e.g. 200",
            name: "other",
            value: states.other,
          },
        ].map((field, index) => (
          <div key={index}>
            <InputField
              label={field.label}
              name={field.name}
              type="number"
              value={field.value}
              handleChanges={handleChanges}
              placeholder={field.placeholder}
            />
            {index == 0 && err.guest && <ErrorComponent error={err.guest} />}
            {index == 1 && err.costPerGuest && (
              <ErrorComponent error={err.costPerGuest} />
            )}
          </div>
        ))}
        <BlueBtn
          btnText="Calculate Party Cost"
          type="submit"
          classes="self-start mt-3"
        />
      </form>
      {result.totalExpences && (
        <div className="result">
          <div className="flex justify-between border-b mb-3">
            <p>Estimated Total Party Cost: </p>
            <span className="flex items-center">
              <FiDollarSign className="mt-0.5" />
              {result.totalExpences}
            </span>
          </div>

          <div className="flex justify-between border-b mb-3">
            <p>Average Cost per Guest: </p>
            <span className="flex items-center">
              <FiDollarSign className="mt-0.5" />
              {result.perGuest}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParayCostUi;
