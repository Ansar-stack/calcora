"use client";

import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const SRIFUi = () => {
  const [states, setStates] = useState({
    saving: "",
    withdrawal: "",
  });
  const [err, setErr] = useState({ saving: "", withdrawal: "" });
  const [result, setResult] = useState("");

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => (prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!parseInt(states.saving))
      return setErr((prev) => ({
        ...prev,
        saving: "Please enter total retirement savings.",
      }));
    if (!parseInt(states.withdrawal))
      return setErr((prev) => ({
        ...prev,
        withdrawal: "Please enter annual widthdrawal rete.",
      }));
    let payout = (states.saving * states.withdrawal) / 100;
    setResult(payout.toFixed(2));
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Input Field Array */}
        {[
          {
            title: "Enter your total retirement savings",
            value: states.saving,
            name: "saving",
            placeholder: "e.g. 50000",
          },
          {
            title: "Enter your annual withdrawal rate (%)",
            value: states.withdrawal,
            name: "withdrawal",
            placeholder: "e.g. 5",
          },
        ].map((element, index) => (
          <div key={index}>
            <InputField
              label={element.title}
              placeholder={element.placeholder}
              value={element.value}
              handleChanges={handleChanges}
              name={element.name}
              type="number"
            />
            {index == 0 && err.saving && <ErrorComponent error={err.saving} />}
            {index == 1 && err.withdrawal && <ErrorComponent error={err.withdrawal} />}
          </div>
        ))}

        <BlueBtn
          btnText="Calculate Payout"
          type="submit"
          classes="self-start mt-2"
        />
      </form>
      {result && <div className="result">
        <h3 className="result_heading">Retirement Saving Withdrawal Result</h3>
        <p>Based on your inputs, you can withdraw approximately ${result} per year.</p>
        </div>}
    </div>
  );
};

export default SRIFUi;
