"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const PerformanceUi = () => {
  // States
  const [states, setStates] = useState({
    score: "",
    difficulty: "",
    combo: "",
    modifier: "1.06",
  });
  const [err, setErr] = useState({
    score: "",
    difficulty: "",
  });
  const [result, setResult] = useState("");

  // Functions
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!Number(states.score))
      return setErr((prev) => ({
        ...prev,
        score: "Please enter score or accuracy (%).",
      }));
    if (!Number(states.difficulty))
      return setErr((prev) => ({
        ...prev,
        difficulty: "Please enter difficulty rate.",
      }));

    let combo = 1;
    if (states.combo) combo = states.combo;

    // Calculate PP
    const accuracy = parseFloat(states.score) / 100; // Convert to decimal
    const basePP =
      Math.pow(
        parseFloat(states.difficulty) * accuracy * combo * states.modifier,
        1.1
      ) || 0;

    setResult(basePP.toFixed(2));
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Input Fields */}
        {[
          {
            title: "Enter your score or accuracy (%)",
            value: states.score,
            name: "score",
            placeholder: "e.g. 97.4",
          },
          {
            title: "Enter difficulty rating",
            value: states.difficulty,
            name: "difficulty",
            placeholder: "e.g. 5.2",
          },
          {
            title: "Enter combo multiplier (if any)",
            value: states.combo,
            name: "combo",
            placeholder: "e.g. 1.25",
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              label={elem.title}
              placeholder={elem.placeholder}
              name={elem.name}
              value={elem.value}
              handleChanges={handleChanges}
              type="number"
            />
            {index === 0 && err.score && <ErrorComponent error={err.score} />}
            {index === 1 && err.difficulty && (
              <ErrorComponent error={err.difficulty} />
            )}
          </div>
        ))}

        {/* Select Input Field for Mods */}
        <div>
          <label htmlFor="modifier" className="font-semibold block">
            Select any active mods
          </label>
          <select
            name="modifier"
            onChange={handleChanges}
            className="outline-0 px-2 w-full py-1 border border-gray-300 rounded-md"
          >
            {[
              { name: "Hidden (HD)", value: 1.06 },
              { name: "Hard Rock (HR)", value: 1.12 },
              { name: "Double Time (DT)", value: 1.1 },
              { name: "Flashlight (FL)", value: 1.05 },
            ].map((elem, index) => (
              <option key={index} value={elem.value}>
                {elem.name}
              </option>
            ))}
          </select>
        </div>

        <BlueBtn btnText="Calculate Performance Points" type="submit" classes="self-start mt-2" />
      </form>

      {result && (
        <div className="result">
          <h3 className="result_heading">Osu Performance Point Result</h3>
          <p>Your calculated Performance Points (PP): {result}</p>
        </div>
      )}
    </div>
  );
};

export default PerformanceUi;
