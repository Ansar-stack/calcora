"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const Discountui = () => {
  const [states, setStates] = useState({
    originalPrice: "",
    discountPercentage: "",
  });
  const [err, setErr] = useState({
    originalPrice: "",
    discountPercentage: "",
    percentageErr: "",
  });
  const [result, setResult] = useState({
    discount: "",
    finalPrice: "",
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
    if (name == "discountPercentage") {
      setErr((prev) => ({ ...prev, percentageErr: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(states.originalPrice))
      return setErr((prev) => ({
        ...prev,
        originalPrice: "Please enter original price.",
      }));
    if (!states.discountPercentage)
      return setErr((prev) => ({
        ...prev,
        discountPercentage: "Please enter discount percentage.",
      }));
    if (states.discountPercentage > 100)
      return setErr((prev) => ({
        ...prev,
        percentageErr: "Maximum discount percentage should be 100.",
      }));
    let discount = (states.originalPrice * states.discountPercentage) / 100;
    console.log(discount);
    let final = states.originalPrice - discount;
    if (discount == 0) {
      return setResult({
        discount: "00",
        finalPrice: final,
      });
    }
    setResult({
      discount: discount,
      finalPrice: final,
    });
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <InputField
          label="Enter the original price"
          placeholder="e.g. 1000"
          type="number"
          value={states.originalPrice}
          name="originalPrice"
          handleChanges={handleChanges}
        />
        {err.originalPrice && <ErrorComponent error={err.originalPrice} />}
        <InputField
          label="Enter the discount percentage"
          placeholder="e.g. 25"
          type="number"
          value={states.discountPercentage}
          name="discountPercentage"
          handleChanges={handleChanges}
        />
        {err.discountPercentage && (
          <ErrorComponent error={err.discountPercentage} />
        )}
        {err.percentageErr && <ErrorComponent error={err.percentageErr} />}
        <BlueBtn btnText="Calculate Discount" type="submit" classes="self-start mt-3" />
      </form>
      {result.discount && (
        <div className="result ">
          <div className="flex border-b  mb-3 justify-between">
            <p className="">Discount:</p>
            <span>{result.discount}</span>
          </div>
          <div className="flex border-b  mb-3 justify-between">
            <p className="">Final Price:</p>
            <span>{result.finalPrice}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discountui;
