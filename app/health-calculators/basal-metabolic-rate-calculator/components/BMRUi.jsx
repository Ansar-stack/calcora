"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const BMRUi = () => {
  const [states, setStates] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "Male",
    bodyFat: "",
  });
  const [bmr, setBmr] = useState("");
  const [err, setErr] = useState({
    age: "",
    height: "",
    weight: "",
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(states.age))
      return setErr((prev) => ({ ...prev, age: "Please enter age." }));
    if (!Number(states.weight))
      return setErr((prev) => ({ ...prev, weight: "Please enter weight" }));
    if (!Number(states.height))
      return setErr((prev) => ({ ...prev, height: "Please enter height" }));

    if (states.gender == "Male" && !states.bodyFat) {
      let res = 10 * states.weight + 6.25 * states.height - 5 * states.age + 5;
      setBmr(res);
    } else if (states.gender == "Female" && !states.bodyFat) {
      let res =
        10 * states.weight + 6.25 * states.height - 5 * states.age - 161;
      setBmr(res);
    } else if (states.bodyFat) {
      let lbm = states.weight * (1 - states.bodyFat / 100);
      let res = 370 + 21.6 * lbm;
      setBmr(res);
    }
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Input field array */}
        {[
          {
            title: "Enter your age",
            name: "age",
            value: states.age,
            placeholder: "e.g. 25",
          },
          {
            title: "Enter your weight (kg)",
            name: "weight",
            value: states.weight,
            placeholder: "e.g. 70",
          },
          {
            title: "Enter your height (cm)",
            name: "height",
            value: states.height,
            placeholder: "e.g. 180",
          },
        ].map((element, index) => (
          <div key={index}>
            <InputField
              label={element.title}
              placeholder={element.placeholder}
              type="number"
              value={element.value}
              handleChanges={handleChanges}
              name={element.name}
            />
            {index == 0 && err.age && <ErrorComponent error={err.age} />}
            {index == 1 && err.weight && <ErrorComponent error={err.weight} />}
            {index == 2 && err.height && <ErrorComponent error={err.height} />}
          </div>
        ))}
        <div>
          <SelectOptionsInputField 
          label="Select your gender"
          name="gender"
          handleChanges={handleChanges}
          value={states.gender}
          options={["Male", "Female"]}
          />
       
        </div>
        <div>
        <InputField
          label="Enter your body fat % (optional)"
          placeholder="e.g. 15"
          name="bodyFat"
          value={states.bodyFat}
          handleChanges={handleChanges}
        />
        </div>
        <BlueBtn btnText="Calculate BMR" classes="self-start" type="submit" />
      </form>
      {bmr && (
        <div className="result">
          Your BMR is: {Math.floor(bmr)} calories/day
          <p className="text-lg">
            This is the amount of energy your body need at rest to maintain
            vital functions.
          </p>
        </div>
      )}
    </div>
  );
};

export default BMRUi;
