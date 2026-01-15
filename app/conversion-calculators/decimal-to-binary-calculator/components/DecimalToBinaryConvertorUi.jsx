"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useCallback, useState } from "react";

const DecimalToBinaryConvertorUi = () => {
  const [decimal, setDecimal] = useState("");
  const [err, setErr] = useState("");
  const [result, setResult] = useState("");

  const handleChanges = (e) => {
    let value = e.target.value;
    setDecimal(value);
    setErr("")
  };
  const converToBinary = () => {
    if(!decimal)return setErr("Please enter decimal number.");
    let decimalNumber = decimal;

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
      <InputField
        label="Enter Decimal Number"
        placeholder="e.g. 43570"
        value={decimal}
        type="number"
        handleChanges={handleChanges}
      />
      {err && <ErrorComponent error={err}/>}
      <BlueBtn btnText={`Convert`} onClickFunction={converToBinary} classes="mt-3" />

      {result && <div className="result">
          <h3 className="result_heading">Decimal to Binary Result</h3>
          <p>The binary equivalent is: {result}</p>
        </div>}
    </div>
  );
};

export default DecimalToBinaryConvertorUi;
