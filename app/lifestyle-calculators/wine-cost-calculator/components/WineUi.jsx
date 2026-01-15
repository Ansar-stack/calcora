"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const WineUi = () => {
  const [states, setStates] = useState({
    bottleSize: "",
    wineCost: "",
    numberOfBottle: "",
    tax: "",
    shipping: "",
    discount: "",
  });

  const [err, setErr] = useState({
    wineCost: "",
    numberOfBottle: "",
  });

  const [result, setResult] = useState({
    totalCost: "",
    totalWithTax: "",
    finalPrice: "",
    costPerBottle: "",
    costPerMl: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Number(states.wineCost) || states.wineCost <= 0) {
      return setErr((prev) => ({
        ...prev,
        wineCost: "Please enter a valid wine cost.",
      }));
    }
    if (!Number(states.numberOfBottle) || states.numberOfBottle <= 0) {
      return setErr((prev) => ({
        ...prev,
        numberOfBottle: "Please enter number of bottles.",
      }));
    }

    const bottleSize = Number(states.bottleSize) || 750; // default 750ml
    const wineCost = Number(states.wineCost);
    const numberOfBottle = Number(states.numberOfBottle);
    const tax = Number(states.tax) || 0;
    const shipping = Number(states.shipping) || 0;
    const discount = Number(states.discount) || 0;

    // Base total
    let totalCost = wineCost * numberOfBottle;

    // Apply tax
    let totalWithTax = totalCost + (totalCost * tax) / 100;

    // Apply shipping
    totalWithTax += shipping;

    // Apply discount
    let finalPrice = totalWithTax - (totalWithTax * discount) / 100;

    // Cost per bottle & per ml
    let costPerBottle = finalPrice / numberOfBottle;
    let costPerMl = costPerBottle / bottleSize;

    setResult({
      totalCost: totalCost.toFixed(2),
      totalWithTax: totalWithTax.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
      costPerBottle: costPerBottle.toFixed(2),
      costPerMl: costPerMl.toFixed(4),
    });
  };

  return (
    <div className="calculatorContainer">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        {[
          {
            title: "Enter bottle size (ml)",
            placeholder: "e.g. 750",
            name: "bottleSize",
            value: states.bottleSize,
          },
          {
            title: "Enter cost of wine",
            placeholder: "e.g. 12.50",
            name: "wineCost",
            value: states.wineCost,
          },
          {
            title: "Enter number of bottles",
            placeholder: "e.g. 5",
            name: "numberOfBottle",
            value: states.numberOfBottle,
          },
          {
            title: "Enter tax percentage (if any)",
            placeholder: "e.g. 2",
            name: "tax",
            value: states.tax,
          },
          {
            title: "Enter shipping fee (if any)",
            placeholder: "e.g. 3",
            name: "shipping",
            value: states.shipping,
          },
          {
            title: "Enter discount (%)",
            placeholder: "e.g. 2",
            name: "discount",
            value: states.discount,
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              label={elem.title}
              name={elem.name}
              value={elem.value}
              placeholder={elem.placeholder}
              handleChanges={handleChanges}
              type="number"
            />
          </div>
        ))}
        {err.wineCost && <ErrorComponent error={err.wineCost} />}
        {err.numberOfBottle && <ErrorComponent error={err.numberOfBottle} />}
        <BlueBtn
          btnText="Calculate Wine Cost"
          type="submit"
          classes="self-start mt-4"
        />
      </form>

      {result.finalPrice && (
        <div className="result mt-4">
          <h3 className="result_heading">Wine Cost Result</h3>
          {[
            { name: "Total Cost (before tax):", value: result.totalCost },
            { name: "Total Cost (with tax + shipping):", value: result.totalWithTax },
            { name: "Final Price (after discount):", value: result.finalPrice },
            { name: "Cost Per Bottle:", value: result.costPerBottle },
            { name: "Cost Per ml:", value: result.costPerMl },
          ].map((elem, index) => (
            <div
              key={index}
              className={`result_item`}
            >
              {elem.name}{" "}
              <span className="flex items-center">
                <FiDollarSign className="mt-0.5" />
                {elem.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WineUi;
