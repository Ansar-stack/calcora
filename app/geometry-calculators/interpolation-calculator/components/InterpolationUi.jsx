"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const InterpolationUi = () => {
  const [states, setStates] = useState({
    X1: "",
    Y1: "",
    X2: "",
    Y2: "",
    Xtarget: "",
  });
  const [result, setResult] = useState("");
  const [err, setErr] = useState({
    X1: "",
    Y1: "",
    Xtarget: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr({
      X1: "",
      Y1: "",
      Xtarget: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Input Field Validation

    let x1 = Number(states.X1);
    let x2 = Number(states.X2);
    let y1 = Number(states.Y1);
    let y2 = Number(states.Y2);
    let xtarget = Number(states.Xtarget);
    if (!x1 && !x2)
      return setErr((prev) => ({ ...prev, X1: "Please enter X1 and X2." }));
    if (!y1 && !y2)
      return setErr((prev) => ({ ...prev, Y1: "Please enter Y1 and Y2." }));
    if (!xtarget)
      return setErr((prev) => ({
        ...prev,
        Xtarget: "Please enter X (target).",
      }));
    let slope = (y2 - y1) / (x2 - x1);
    if (isNaN(slope)) slope = 0;
    let y = y1 + slope * (xtarget - x1);

    setResult(y);
    setErr({
      X1: "",
      Y1: "",
      Xtarget:""
    });
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        {/* Input field array */}
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
          {
            title: "Enter the X(target)",
            value: states.Xtarget,
            name: "Xtarget",
            placeholder: "X (target)",
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

            {index == 4 && err.Xtarget && (
              <ErrorComponent error={err.Xtarget} />
            )}
          </div>
        ))}
        {err.X1 && <ErrorComponent error={err.X1} />}
        {err.Y1 && <ErrorComponent error={err.Y1} />}
        <BlueBtn
          type="submit"
          btnText="Calculate Interpolated Value"
          classes="self-start mt-3"
        />
      </form>
      {result && <div className="result">Interpolated Y: {result}</div>}.
    </div>
  );
};

export default InterpolationUi;
