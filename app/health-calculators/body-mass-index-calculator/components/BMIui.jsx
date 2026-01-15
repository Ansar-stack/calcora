"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import { unstable_rethrow } from "next/dist/client/components/unstable-rethrow.server";
import React, { useCallback, useState } from "react";
const BMIui = () => {
  const [user, setUser] = useState({
    height: "",
    weight: "",
  });
  const [BMI, setBMI] = useState("");
  const [status, setStatus] = useState("");
  const [err, setErr] = useState({
    height: "",
    weight: "",
  });

  const BMIcalculate = (e) => {
    e.preventDefault();
    if (!Number(user.height))
      return setErr((prev) => ({
        ...prev,
        height: "Please enter height (cm).",
      }));
    if (!Number(user.weight))
      return setErr((prev) => ({
        ...prev,
        weight: "Please enter weight (kg).",
      }));

    const heightInMeters = user.height / 100;
    const calculateBMI = (
      user.weight /
      (heightInMeters * heightInMeters)
    ).toFixed(2);
    setBMI(calculateBMI);
    if (calculateBMI < 18.5) {
      setStatus("Underweight");
    } else if (calculateBMI >= 18.5 && calculateBMI <= 24.9) {
      setStatus("Normal Weight");
    } else if (calculateBMI >= 25.0 && calculateBMI < 29.9) {
      setStatus("overHeight");
    } else {
      setStatus("Obesity");
    }
  };
  const handleChanges = useCallback((e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  }, []);
  return (
    <div className="calculatorContainer">
      <form className="w-full flex flex-col gap-2" onSubmit={BMIcalculate}>
        <div>
          <InputField
            label="Enter your height (cm)"
            placeholder="e.g. 170"
            name="height"
            value={user.height}
            handleChanges={handleChanges}
            type="number"
          />
          {err.height && <ErrorComponent error={err.height} />}
        </div>
        <div>
          <InputField
            name="weight"
            type="number"
            label="Enter your weight (kg)"
            value={user.weight}
            handleChanges={handleChanges}
            placeholder="e.g. 70"
          />
          {err.weight && <ErrorComponent error={err.weight} />}
        </div>
        <BlueBtn
          type="submit"
          btnText="Calculate BMI"
          classes="mt-2 self-start"
        />
      </form>
      {BMI && (
        <div className="result">
          <div className="w-full flex justify-between border-b border-gray-400">
            <p className="tracking-tight font-semibold text-lg">
              Your Body Mass Index (BMI) is:
            </p>
            <span className="font-semibold">{BMI}</span>
          </div>
          <div className="w-full flex justify-between border-b mt-4 border-gray-400">
            <p className="tracking-tight  font-semibold text-lg">Status:</p>
            <span className="font-semibold"> {status}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMIui;
