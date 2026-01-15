"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const BinaryToDecimalUi = () => {
  const [binaryNumber, setBinaryNumber] = useState("");
  const [err, setErr] = useState("");
  const [result, setResult] = useState("");

  const handleChanges = (e) => {
    let value = e.target.value;
    setBinaryNumber(value);
    setErr("")
  };
  const convertToDecimal = () => {
    if (!binaryNumber) return setErr("Please enter binary number.");
    let pattern = /^[01]+$/;
    if(!pattern.test(binaryNumber))return setErr("Please enter only 0 and 1")
    let decimal = parseInt(binaryNumber, 2);
    setResult(decimal)
  };
  return (
    <div className="calculatorContainer">
      <InputField
        label="Enter Binary Number"
        placeholder="e.g. 101010"
        handleChanges={handleChanges}
        value={binaryNumber}
        type="number"
        classes={`mt-1`}
      />
      {err && <ErrorComponent error={err} />}
      <BlueBtn
        btnText={`Convert`}
        classes={`mt-2`}
        onClickFunction={convertToDecimal}
      />

      {result && (
        <div className="result">
          <h3 className="result_heading">Binary to Decimal Result</h3>
          <p>The decimal equivalent is: {result}</p>
        </div>
      )}
    </div>
  );
};

export default BinaryToDecimalUi;
