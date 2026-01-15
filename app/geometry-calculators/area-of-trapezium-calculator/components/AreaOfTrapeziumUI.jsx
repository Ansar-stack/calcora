"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const AreaOfTrapeziumUI = () => {
  const [states, setStates] = useState({
    sideA: "",
    sideB: "",
    height: "",
  });
  const [result, setResult] = useState("");
  const [err, setErr] = useState({});
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
    setErr((prev) => ({ ...prev, both: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!states.sideA)
      return setErr((prev) => ({
        ...prev,
        sideA: "Please enter length of side A.",
      }));
    if (!states.sideB)
      return setErr((prev) => ({
        ...prev,
        sideB: "Please enter length of side B.",
      }));
    if (!states.height || states.height == "0")
      return setErr((prev) => ({ ...prev, height: "Please enter height." }));
    if (states.sideA == "0" && states.sideB == "0") {
      return setErr((prev) => ({
        ...prev,
        both: "Please enter side A and side B.",
      }));
    }
    let area = ((states.sideA + states.sideB) / 2) * states.height;
    setResult(area);
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Input Field Array */}
        {[
          {
            title: "Enter length of side A",
            value: states.sideA,
            placeholder: "e.g 100",
            name: "sideA",
          },
          {
            title: "Enter length of side B",
            value: states.sideB,
            placeholder: "e.g 50",
            name: "sideB",
          },
          {
            title: "Enter the height",
            value: states.height,
            placeholder: "e.g 70",
            name: "height",
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
            {index == 0 && err.sideA && <ErrorComponent error={err.sideA} />}
            {index == 1 && err.sideB && <ErrorComponent error={err.sideB} />}
            {index == 2 && err.height && <ErrorComponent error={err.height} />}
          </div>
        ))}
        {err.both && <ErrorComponent error={err.both} />}

        <BlueBtn
          btnText="Calculate Area"
          type="submit"
          classes="self-start mt-2"
        />
      </form>
      {result && <div className="result">
        <h3 className="heading_result">Area of Trapezium Result</h3>
        <p>The area of the trapezoid is ${result} square units.</p>
        </div>}
    </div>
  );
};

export default AreaOfTrapeziumUI;
