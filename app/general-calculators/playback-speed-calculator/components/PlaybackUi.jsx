"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const PlybackUi = () => {
  // States
  const [states, setStates] = useState({
    hrs: "",
    min: "",
    sec: "",
    speed: ""
  });
  const [err, setErr] = useState({
    duration: "",
    speed:""
  });
  const [result, setResult] = useState({
      hrs: "",
      min: "",
      sec: "",
      result: false,
  });

  // Functions
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hrs = Number(states.hrs),
        min = Number(states.min),
        sec = Number(states.sec),
        speed = Number(states.speed);
    if(!hrs && !min && !sec)return setErr(prev =>({...prev, duration:"Please enter video duration."}));
    if(hrs < 0 || min < 0 || sec <0)return setErr(prev =>({...prev, duration:"Please enter valid duration."}));
    if(min >59)return setErr(prev =>({...prev, duration:"Minutes should be between 0 and 59."}));
    if(sec >59)return setErr(prev =>({...prev, duration:"Seconds should be between 0 and 59."}));
    if(!speed)return setErr(prev =>({...prev, speed:"Please enter playback speed."}));
    let totelSeconds = hrs * 3600 + min * 60 + sec;
    let newDuration = totelSeconds / speed;
    let newHours  = Math.floor(newDuration / 3600),
        newMinutes = Math.floor((newDuration % 3600)/60),
        newSeconds = Math.floor(newDuration % 60);
    setResult({
      hrs: newHours,
      min: newMinutes,
      sec: newSeconds,
      result: true,
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <label className="font-bold">Enter video duration</label>
          <div className="flex gap-3">
            <input
              type="number"
              value={states.hrs}
              onChange={handleChanges}
              name="hrs"
              placeholder="HH"
              className="smallInput"
              pattern="[0-9]*"
            />
            <input
              type="number"
              value={states.min}
              onChange={handleChanges}
              name="min"
              placeholder="MM"
              className="smallInput"
              pattern="[0-9]*"
            />
            <input
              type="number"
              value={states.sec}
              onChange={handleChanges}
              name="sec"
              placeholder="SS"
              className="smallInput"
              pattern="[0-9]*"
            />
          </div>
          {err.duration && <ErrorComponent error={err.duration}/>}
        </div>
        <div>
          <InputField 
          label="Enter playback speed"
          placeholder="e.g. 1.5"
          value={states.speed}
          name="speed"
          handleChanges={handleChanges}
          type="number"
          />
          {err.speed && <ErrorComponent error={err.speed}/>}
        </div>
        <BlueBtn
          btnText="Calculate Playback"
          type="submit"
          classes="self-start mt-2"
        />
      </form>

      {result.result && (
        <div className="result">
          <h3 className="result_heading">Playback Speed Result</h3>
          <p>
            New Duration: {result.hrs}h {result.min}m {result.sec}s
          </p>
        </div>
      )}
    </div>
  );
};

export default PlybackUi;
