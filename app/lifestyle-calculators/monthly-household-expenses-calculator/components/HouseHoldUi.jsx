"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const HouseHoldUi = () => {
  const [states, setStates] = useState({
    rent: undefined,
    Electricity: undefined,
    Water: undefined,
    Gas: undefined,
    Internet: undefined,
    Groceries: undefined,
    Transportation: undefined,
    Phone: undefined,
    Insurance: undefined,
    Entertainment: undefined,
    Miscellaneous: undefined,
  });
  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let ObjectValue = Object.values(states);
    let totalExpences = 0;
    ObjectValue.forEach((elem) => {
      totalExpences += Number(elem) || 0;
    });
    console.log(totalExpences);
    if (!totalExpences) return setErr("Please enter values.");
    setResult(totalExpences.toFixed(2));
  };
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr("");
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        {[
          {
            placeholder: "e.g. 1000",
            title: "Enter your monthly rent or mortgage",
            value: states.rent,
            name: "rent",
          },
          {
            placeholder: "e.g. 50",
            title: "Enter monthly electricity cost",
            value: states.Electricity,
            name: "Electricity",
          },
          {
            placeholder: "e.g. 20",
            title: "Enter monthly wataer bill",
            value: states.Water,
            name: "Water",
          },
          {
            placeholder: "e.g. 33",
            title: "Enter monthly gas bill",
            value: states.Gas,
            name: "Gas",
          },
          {
            placeholder: "e.g. 10",
            title: "Enter monthly internet cost",
            value: states.Internet,
            name: "Internet",
          },
          {
            placeholder: "e.g. 60",
            title: "Enter monthly grocery expenses",
            value: states.Groceries,
            name: "Groceries",
          },
          {
            placeholder: "e.g. 100",
            title: "Enter monthly transport cost",
            value: states.Transportation,
            name: "Transportation",
          },
          {
            placeholder: "e.g. 5",
            title: "Enter monthly mobile cost",
            value: states.Phone,
            name: "Phone",
          },
          {
            placeholder: "e.g. 14",
            title: "Enter monthly insurance cost",
            value: states.Insurance,
            name: "Insurance",
          },
          {
            placeholder: "e.g. 40",
            title: "Enter monthly entertainment expenses",
            value: states.Entertainment,
            name: "Entertainment",
          },
          {
            placeholder: "e.g. 100",
            title: "Enter other monthly expenses",
            value: states.Miscellaneous,
            name: "Miscellaneous",
          },
        ].map((element, index) => (
          <div key={index}>
            <InputField
              type="number"
              label={element.title}
              handleChanges={handleChanges}
              placeholder={element.placeholder}
              value={element.value}
              name={element.name}
            />
          </div>
        ))}
        {err && <ErrorComponent error={err} />}
        <BlueBtn
          type="submit"
          btnText="Calculate Monthly House Hold Expences"
          classes="self-start mt-4"
        />
      </form>
      {result && (
        <div className="result flex flex-col">
          <div className="flex justify-between border-b  mb-3">
            <p className="font-bold">Monthly Household Expenses:</p>
            <span className="font-bold">${result}</span>
          </div>
          {Object.entries(states).map((elem, index) => (
            <div key={index} className="flex justify-between border-b mb-3">
              <p>{index == 0? `Rent / Mortgage` : elem[0]}:</p>
              <span>${elem[1] ? Number(elem[1]).toFixed(2) : "0.00"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HouseHoldUi;
