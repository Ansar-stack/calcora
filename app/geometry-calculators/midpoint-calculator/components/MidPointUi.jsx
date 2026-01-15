"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const MidPointUi = () => {
  const [states, setStates] = useState({
    X1: "",
    Y1: "",
    X2: "",
    Y2: "",
  });

  const [midX, setMidX] = useState("");
  const [midY, setMidY] = useState("");
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let X1 = states.X1?parseInt(states.X1):0;
    let X2 = states.X2?parseInt(states.X2):0;
    let Y1 = states.Y1?parseInt(states.Y1):0;
    let Y2 = states.Y2?parseInt(states.Y2):0;

    let X = (X1 + X2) / 2;
    let Y = (Y1 + Y2) / 2;
    setMidX(X);
    setMidY(Y);
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        {/* Input Field Array */}
        {[
          {
            title: "Enter the X1",
            value: states.X1,
            name: "X1",
            placeholder: "X1",
          },
          {
            title: "Enter the Y1",
            value: states.Y1,
            name: "Y1",
            placeholder: "Y1",
          },
          {
            title: "Enter the X2",
            value: states.X2,
            name: "X2",
            placeholder: "X2",
          },
          {
            title: "Enter the Y2",
            value: states.Y2,
            name: "Y2",
            placeholder: "Y2",
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
          
          </div>
        ))}
        <BlueBtn
          type="submit"
          btnText="Calculate Midpoint"
          classes="self-start mt-3"
        />
      </form>
      {midX >= "0" && (
        <div className="result">
          <h3 className="result_heading">Midpoint Result</h3>
          <p>The Midponit between the two points is (${midX}, ${midY})</p>
        </div>
      )}
    </div>
  );
};

export default MidPointUi;
