"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { startTransition, useState } from "react";

const WeddingUi = () => {
  const [states, setStates] = useState({
    budget: "",
    venue: "",
    catering: "",
    cake: "",
    attire: "",
    hairAndMakeup: "",
    flowersAndDecoration: "",
    entertainment: "",
    photographyAndVideography: "",
    invitationsAndStationery: "",
    transportation: "",
    rings: "",
    accommodations: "",
    giftsAndFavors: "",
    other: "",
  });
  const [err, setErr] = useState("");
  const [result, setResult] = useState({
    totalExpences: "",
    remainingBudget: "",
    status: "",
  });
  //   Input handle changes
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr("");
  };
  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(states.budget) || Number(states.budget) <0) return setErr("Please enter your total budget.");
    let totalExpences = 0;
    let remainingBudget;
    let status = "";  
    let values = Object.values(states);
    values.map((values, index) => {
      if (index !== 0) totalExpences += Number(values);
    });
    remainingBudget = states.budget - totalExpences;
    if (remainingBudget > 0) {
      status = `You are under budget by ${remainingBudget}.`;
    } else if (remainingBudget < 0) {
      status = `You are over budget by ${Math.abs(remainingBudget)}.`;
    } else {
      status = `Perfect! You used you full budget.`;
    }
    setResult({
      totalExpences: totalExpences,
      remainingBudget: remainingBudget,
      status: status,
    });
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
        <InputField
          label="Enter your total wedding budget"
          type="number"
          placeholder="e.g. 150000"
          handleChanges={handleChanges}
          name="budget"
          value={states.budget}
        />
        </div>
        {/* Loop the inputs Field */}
        {[
          {
            label: "Enter venue cost",
            placeholder: "e.g. 50000",
            name: "venue",
            value: states.venue,
          },
          {
            label: "Enter catering cost",
            placeholder: "e.g. 3000",
            name: "catering",
            value: states.catering,
          },
          {
            label: "Enter cake cost",
            placeholder: "e.g. 300",
            name: "cake",
            value: states.cake,
          },
          {
            label: "Enter wedding attire cost",
            placeholder: "e.g. 1000",
            name: "attire",
            value: states.attire,
          },
          {
            label: "Enter hair and makup cost",
            placeholder: "e.g. 250",
            name: "hairAndMakeup",
            value: states.hairAndMakeup,
          },
          {
            label: "Enter flowers and decoration cost",
            placeholder: "e.g. 1200",
            name: "flowersAndDecoration",
            value: states.flowersAndDecoration,
          },
          {
            label: "Enter entertaiment cost",
            placeholder: "e.g. 800",
            name: "entertainment",
            value: states.entertainment,
          },
          {
            label: "Enter photography/Videography cost",
            placeholder: "e.g. 2000",
            name: "photographyAndVideography",
            value: states.photographyAndVideography,
          },
          {
            label: "Enter invitations & Stationery cost",
            placeholder: "e.g. 400",
            name: "invitationsAndStationery",
            value: states.invitationsAndStationery,
          },
          {
            label: "Enter transportation cost",
            placeholder: "e.g. 300",
            name: "transportation",
            value: states.transportation,
          },
          {
            label: "Enter rings cost",
            placeholder: "e.g. 1000",
            name: "rings",
            value: states.rings,
          },
          {
            label: "Enter accomodation cost",
            placeholder: "e.g. 600",
            name: "accommodations",
            value: states.accommodations,
          },
          {
            label: "Enter gifts and favors cost",
            placeholder: "e.g. 200",
            name: "giftsAndFavors",
            value: states.giftsAndFavors,
          },
          {
            label: "Enter other expences",
            placeholder: "e.g. 1000",
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
          </div>
        ))}
        {err && <ErrorComponent error={err} />}
        <BlueBtn
          btnText="Calculate Wedding Budget"
          type="submit"
          classes="self-start mt-3"
        />
      </form>
    {result.status && <div className="result">
    {[
        { title: "Total Budget", value: states.budget },
        { title: "Total Expenses", value: result.totalExpences },
        { title: "Remaining budget", value: result.remainingBudget },
        { title: "Status", value: result.status },
    ].map((elem, index) => (
        <div key={index} className="flex border-b h-10 items-center justify-between">
        <p>{elem.title}</p> <span>{elem.value}</span>
        </div>
    ))}
    </div>}
    </div>
  );
};

export default WeddingUi;
