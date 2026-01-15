"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const DecToHex = () => {
  const [dec, setDec] = useState("");
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");
  const handleChanges = (e) => {
    setDec(e.target.value);
    setErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dec) return setErr("Please enter decimal number.");
    let decimal = dec;
    let mapping = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "A",
      11: "B",
      12: "C",
      13: "D",
      14: "E",
      15: "F",
    };
    let n = 0;
    let res = "";
    while (16 ** (n + 1) < decimal) {
      n++;
    }
    for (n; n >= 0; n--) {
      if (16 ** n <= decimal) {
        res += mapping[Math.floor(decimal / 16 ** n).toString()];
        decimal = decimal - Math.floor(decimal / 16 ** n) * 16 ** n;
      } else {
        res += "0";
      }
    }
    setResult(res);
  };
  return (
    <div className="calculatorContainer">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <InputField
          label="Enter decimal number"
          placeholder="Decimal number"
          type="number"
          autoFocus={true}
          value={dec}
          handleChanges={handleChanges}
        />
        {err && <ErrorComponent error={err} />}
        <BlueBtn
          type="submit"
          btnText="Convert"
          classes="self-start mt-3"
        />
      </form>
      {result && (
        <div className="result">
          <h3 className="result_heading">Decimal to Hexadecimal Result</h3>
          <p>The hexadecimal equivalent is: {result}.</p>
        </div>
      )}
    </div>
  );
};

export default DecToHex;
