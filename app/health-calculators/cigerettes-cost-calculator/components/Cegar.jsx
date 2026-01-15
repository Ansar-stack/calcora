"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const Cegar = () => {
  const [states, setStates] = useState({
    smokedPerDay: undefined,
    packPrice: undefined,
    perPackCegar: undefined,
  });
  const [err, setErr] = useState({
    smokedPerDay: "",
    packPrice: "",
    perPackCegar: "",
  });
  const [result, setResult] = useState({
    dayCost: undefined,
    monthlyCost: undefined,
    yearCost: undefined,
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr({ smokedPerDay: "", packPrice: "", perPackCegar: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let smoked = Number(states.smokedPerDay),
      packPrice = Number(states.packPrice),
      perPackCegar = Number(states.perPackCegar);

    if (!smoked)
      return setErr((prev) => ({
        ...prev,
        smokedPerDay: "Please enter cigarettes smoked per day.",
      }));
    if (!packPrice)
      return setErr((prev) => ({
        ...prev,
        packPrice: "Please enter price of one cigarette pack.",
      }));
    if (!perPackCegar)
      return setErr((prev) => ({
        ...prev,
        perPackCegar: "Please enter number of cigarettes per pack.",
      }));

    // Calculation
    let packPerDay = smoked / perPackCegar,
      dayPrice = packPerDay * packPrice,
      monthlyPrice = packPerDay * 30 * packPrice,
      yearlyPrice = packPerDay * 365 * packPrice;

    setResult({
      dayCost: dayPrice,
      monthlyCost: monthlyPrice,
      yearCost: yearlyPrice,
    });
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {[
          {
            title: "Enter cigarettes smoked per day",
            name: "smokedPerDay",
            value: states.smokedPerDay,
            placeholder: "e.g. 10",
          },
          {
            title: "Enter price of one cigarette pack",
            name: "packPrice",
            value: states.packPrice,
            placeholder: "e.g. 6",
          },
          {
            title: "Enter number of cigarettes per pack",
            name: "perPackCegar",
            value: states.perPackCegar,
            placeholder: "e.g. 20",
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
            {index == 0 && err.smokedPerDay && (
              <ErrorComponent error={err.smokedPerDay} />
            )}
            {index == 1 && err.packPrice && (
              <ErrorComponent error={err.packPrice} />
            )}
            {index == 2 && err.perPackCegar && (
              <ErrorComponent error={err.perPackCegar} />
            )}
          </div>
        ))}
        <BlueBtn
          btnText="Calculate Cigarettes Cost"
          type="submit"
          classes="self-start mt-3"
        />
      </form>
      {result.dayCost && (
        <div className="result">
          <h3 className="result_heading">Cigarette Cost Result</h3>
          <div className="result_item">
            <p>Cost of cegarette per day</p>
            <span>{result.dayCost}</span>
          </div>
          <div className="result_item">
            <p>Cost of cegarette per month</p>
            <span>{result.monthlyCost}</span>
          </div>
          <div className="result_item">
            <p>Cost of cegarette per year</p>
            <span>{result.yearCost}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cegar;
