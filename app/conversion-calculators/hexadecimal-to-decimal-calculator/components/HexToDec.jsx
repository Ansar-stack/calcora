"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const HexToDec = () => {
  const [hex, setHex] = useState("");
  const [err, setErr] = useState("");
  const [result, setResult] = useState("");
  const handleChanges = (e) => {
    setHex(e.target.value);
    setErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let pattern = /^[0-9A-Fa-f]+$/;
    if (!hex) return setErr("Please enter hexadecimal number.");
    if (!pattern.test(hex)) {
      return setErr("Enter valid hexadicmal number to proceed.");
    }
    let res = parseInt(`0x${hex}`);
    setResult(res);
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <InputField
          label="Enter hexadecimal number"
          placeholder="Hexadecimal number"
          value={hex}
          handleChanges={handleChanges}
        />
        {err && <ErrorComponent error={err} />}
        <BlueBtn btnText="Convert" classes="self-start mt-3" type="submit" />
      </form>
      {result && (
        <div className="result">
          <h3 className="result_heading">Hexadecimal to Decimal Result</h3>
          <p className="">The decimal equivalent is: {result}</p>
        </div>
      )}
    </div>
  );
};

export default HexToDec;
