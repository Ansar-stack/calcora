"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import Result from "@/app/components/Result";
import React, { useState } from "react";

const BricksUi = () => {
  const [states, setStates] = useState({});
  const [err, setErr] = useState("");
  const [result, setResult] = useState({});
  // Handle Changes
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr("");
  };
  // Handling the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(states.wallLength))
      return setErr("Please enter length of wall.");
    if (!Number(states.wallHeight))
      return setErr("Please enter height of wall.");
    if (!Number(states.bricklength) )
      return setErr("Please enter length of brick.");
    if (!Number(states.brickHeight ))
      return setErr("Please enter height of brick.");
    let wallArea = states.wallLength * states.wallHeight;
    let openArea =
      states.NumOfStandardDoors || 0 * 1.9 +
      states.NumOfSmallWindows || 0 * 1 +
      states.NumOfLargeWindow || 0 * 1.5;
    let netWallArea = wallArea - openArea;
    let bricklengthM = (states.bricklength + states.morterthickness) / 100;
    let brickHeightM = (states.brickHeight + states.morterthickness) / 100;
    let brickArea = brickHeightM * brickHeightM;
    let basicBricks = netWallArea / brickArea;
    let totalBrick = Math.ceil(basicBricks * (1 + states.wastage || 1 / 100));
    setResult({
      totalArea: wallArea,
      totalOpening: openArea,
      netWallArea: netWallArea,
      totalBricks: totalBrick,
    });
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {[
          {
            label: "Enter length of wall (meters)",
            placeholder: "e.g. 5",
            value: states.wallLength,
            name: "wallLength",
          },
          {
            label: "Enter height of wall (meters)",
            placeholder: "e.g. 2.5",
            value: states.wallHeight,
            name: "wallHeight",
          },
          {
            label: "Enter length of one brick (cm)",
            placeholder: "e.g. 20",
            value: states.bricklength,
            name: "bricklength",
          },
          {
            label: "Enter height of one brick (cm)",
            placeholder: "e.g. 10",
            value: states.brickHeight,
            name: "brickHeight",
          },
          {
            label: "Enter mortar thicknes (cm)",
            placeholder: "e.g. 1",
            value: states.morterthickness,
            name: "morterthickness",
          },
          {
            label: "Enter number of doors (1.9 m2)",
            placeholder: "e.g. 1",
            value: states.NumOfStandardDoors,
            name: "NumOfStandardDoors",
          },
          {
            label: "Enter number small windows (1.9 m2)",
            placeholder: "e.g. 2",
            value: states.NumOfSmallWindows,
            name: "NumOfSmallWindows",
          },
          {
            label: "Enter number large windows (1.9 m2)",
            placeholder: "e.g. 1",
            value: states.NumOfLargeWindow,
            name: "NumOfLargeWindow",
          },
          {
            label: "Enter wastage and breakage (%)",
            placeholder: "e.g. 10",
            value: states.wastage,
            name: "wastage",
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              type="number"
              label={elem.label}
              placeholder={elem.placeholder}
              value={elem.value}
              name={elem.name}
              handleChanges={handleChanges}
            />
            
          </div>
        ))}
        {err && <ErrorComponent error={err}/>}
        <BlueBtn
          type="submit"
          btnText="Calculate Bricks"
          classes="self-start mt-2"
        />
      </form>
      {/* Result */}
      {result.totalArea && <Result heading={'Brick Wall Result'} arr={[
          { title: "Total wall area:", value: result.totalArea },
          { title: "Total Openings area", value: result.totalOpening + "m2" },
          { title: "Net wall area:", value: result.netWallArea + "m2" },
          { title: "You need approx:", value: result.totalBricks + " Bricks" },
        ]}/>}
    </div>
  );
};

export default BricksUi;
