"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const HexToBinary = () => {
  const [hex, setHex] = useState("");
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");

  const handleChanges = (e) => {
    setHex(e.target.value);
    setErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hex) return setErr("Please enter hexadecimal number.");
    let pattern = /^[0-9A-Fa-f]+$/;
    if (!pattern.test(hex)) {
      return setErr("Enter a valid hexadecimal number to proceed.");
    }
    let decimalNumber = parseInt(`0x${hex}`);
    let n = 0;
    let result = "";
    while(2 ** (n +1) < decimalNumber){
      n++;
    }
    for(n; n>=0; n--){
      if( 2 ** n <= decimalNumber){
        result += "1";
        decimalNumber = decimalNumber%2 ** n;
      }else{
        result += "0"
      }
    }
    setResult(result)
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
        <BlueBtn
          btnText={`Convert`}
          type="submit"
          classes="self-start mt-3"
        />
      </form>
      {result && (
        <div className="result">
        <h3 className="result_heading">Hexadecimal to Binary Result</h3>
         <p>The Binary equivalent is: {result}.</p>
        </div>
      )}
    </div>
  );
};

export default HexToBinary;
