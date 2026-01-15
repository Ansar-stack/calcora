"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const Concrete = () => {
  const [states, setStates] = useState({});
  const [err, setErr] = useState({});
  const [result, setResult] = useState("");
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {len, width, height, wastage} = states || {};
    if (!len)
      return setErr((prev) => ({
        ...prev,
        len: "Please enter length (m)",
      }));
    if (!width)
      return setErr((prev) => ({
        ...prev,
        width: "Please enter width (m)",
      }));
    if (!height)
      return setErr((prev) => ({
        ...prev,
        perPackCegar: "Please height or depth (m).",
      }));

    // Calculation
    let vol = 0;
    if(wastage <= 0){
      vol = len * width * height;
    }else{
      vol = (len * width * height) * (1 + wastage / 100);
    }
    
    setResult(`The estimated concrete volume is ${vol}.`);
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {[
          {
            title: "Enter length (m)",
            name: "len",
            value: states.len,
            placeholder: "e.g. 12",
          },
          {
            title: "Enter width (m)",
            name: "width",
            value: states.width,
            placeholder: "e.g. 6",
          },
          {
            title: "Enter height or depth (m)",
            name: "height",
            value: states.height,
            placeholder: "e.g. 1",
          },
           {
            title: "Enter wastage factor (%)",
            name: "wastage",
            value: states.wastage,
            placeholder: "e.g. 3",
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              placeholder={elem.placeholder}
              label={elem.title}
              handleChanges={handleChanges}
              value={elem.value}
              name={elem.name}
              type="number"
            />
            {index == 0 && err.len && (
              <ErrorComponent error={err.len} />
            )}
            {index == 1 && err.width && (
              <ErrorComponent error={err.width} />
            )}
            {index == 2 && err.height && (
              <ErrorComponent error={err.height} />
            )}
          </div>
        ))}
        <BlueBtn
          btnText="Calculte Concrete Volume"
          type="submit"
          classes="self-start mt-3"
        />
      </form>
      {result && (
        <div className="result">
          <h3 className="result_heading">Concret Volume Result</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Concrete;
