"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import Result from "@/app/components/Result";
import React, { useState } from "react";

const TipCalculatorUi = () => {
  const [userInputs, setUserInputs] = useState({
    billAmount: "",
    tipPercentage: "",
    numberOfPeople: "",
    discountPercentage: "",
  });
  const [errs, setErrs] = useState({});
  const [result, setResult] = useState({});

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrs((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrs({
      billAmount: "",
      tipPercentage: "",
      numberOfPeople: "",
      discountPercentage: "",
    });

    // Validation
    if (!Number(userInputs.billAmount) || Number(userInputs.billAmount) <= 0)
      return setErrs((prev) => ({
        ...prev,
        billAmount: "Please enter a valid bill amount.",
      }));

    if (
      !Number(userInputs.numberOfPeople) ||
      Number(userInputs.numberOfPeople) <= 0
    )
      return setErrs((prev) => ({
        ...prev,
        numberOfPeople: "Please enter a valid number of people.",
      }));

    // Convert inputs to numbers
    const billAmount = Number(userInputs.billAmount);
    const tipPercentage = Number(userInputs.tipPercentage) || 0; // Optional
    const numberOfPeople = Number(userInputs.numberOfPeople);
    const discountPercentage = Number(userInputs.discountPercentage) || 0; // Optional

    // Validate optional fields (if provided)
    if (
      userInputs.tipPercentage !== "" &&
      (tipPercentage < 0 || tipPercentage > 100)
    )
      return setErrs((prev) => ({
        ...prev,
        tipPercentage: "Tip percentage must be between 0 and 100.",
      }));

    if (
      userInputs.discountPercentage !== "" &&
      (discountPercentage < 0 || discountPercentage > 100)
    )
      return setErrs((prev) => ({
        ...prev,
        discountPercentage: "Discount percentage must be between 0 and 100.",
      }));

    // Calculations
    const originalBill = billAmount;
    const discountAmount = (billAmount * discountPercentage) / 100;
    const billAfterDiscount = billAmount - discountAmount;
    const tipAmount = (billAfterDiscount * tipPercentage) / 100;
    const totalBill = billAfterDiscount + tipAmount;
    const perPersonAmount = totalBill / numberOfPeople;

    setResult({
      originalBill: originalBill.toFixed(2),
      discountAmount: discountAmount.toFixed(2),
      billAfterDiscount: billAfterDiscount.toFixed(2),
      tipAmount: tipAmount.toFixed(2),
      totalBill: totalBill.toFixed(2),
      perPersonAmount: perPersonAmount.toFixed(2),
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {[
          {
            title: "Enter total bill amount",
            placeholder: "e.g. 1000",
            value: userInputs.billAmount,
            name: "billAmount",
            required: true,
          },
          {
            title: "Enter tip percentage (optional)",
            placeholder: "e.g. 10",
            value: userInputs.tipPercentage,
            name: "tipPercentage",
            required: false,
          },
          {
            title: "Enter number of people",
            placeholder: "e.g. 2",
            value: userInputs.numberOfPeople,
            name: "numberOfPeople",
            required: true,
          },
          {
            title: "Enter discount percentage (optional)",
            placeholder: "e.g. 5",
            value: userInputs.discountPercentage,
            name: "discountPercentage",
            required: false,
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              label={elem.title}
              placeholder={elem.placeholder}
              value={elem.value}
              name={elem.name}
              handleChanges={handleChanges}
              type="number"
            />
            {elem.name === "billAmount" && errs.billAmount && (
              <ErrorComponent error={errs.billAmount} />
            )}
            {elem.name === "tipPercentage" && errs.tipPercentage && (
              <ErrorComponent error={errs.tipPercentage} />
            )}
            {elem.name === "numberOfPeople" && errs.numberOfPeople && (
              <ErrorComponent error={errs.numberOfPeople} />
            )}
            {elem.name === "discountPercentage" && errs.discountPercentage && (
              <ErrorComponent error={errs.discountPercentage} />
            )}
          </div>
        ))}
        <BlueBtn
          type={`submit`}
          btnText={`Calculate Bill`}
          classes={`self-start`}
        />
      </form>

      {/* Result Section - Same Design */}
      {result.totalBill && (
        <Result
          heading={"Restaurant Bill Result"}
          arr={[
            { title: "Original Bill Amount:", result: result.originalBill },
            { title: "Discount Amount:", result: result.discountAmount },
            { title: "Bill After Discount:", result: result.billAfterDiscount },
            { title: "Tip Amount:", result: result.tipAmount },
            { title: "Total Bill:", result: result.totalBill },
            { title: "Per Person Amount:", result: result.perPersonAmount },
          ]}
        />
      )}
    </div>
  );
};

export default TipCalculatorUi;
