"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useCallback, useState } from "react";
const AgeCalcUi = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");
  const calculateAge = (e) => {
    e.preventDefault();
    if (dob.length < 10) {
      setError("Please enter your date of birth.");
      return;
    } else {
      setError("");
    }
    let birthDate = new Date(dob);
    let today = new Date();
    let yeardiff = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let daysdiff = today.getDay() - birthDate.getDay();
    // If the month or day is nagative adjust
    if (monthDiff < 0 || (monthDiff == 0 && daysdiff < 0)) {
      yeardiff--;
      monthDiff += 12;
    }
    if (daysdiff < 0) {
      monthDiff--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      daysdiff += prevMonth.getDate();
    }
    setAge({
      years: yeardiff,
      months: monthDiff,
      days: daysdiff,
    });
  };
  const handleChanges = useCallback((e) => {
    if (e.target.value.length <= 10) {
      setDob(e.target.value);
    }
  }, []);
  return (
    <div
      className="mt-10 my-20 w-[95%] sm:w-[50%] py-5 flex flex-col gap-5 px-5  border
    border-gray-200 shadow-sm shadow-indigo-100 bg-white rounded-md"
    >
      <form onSubmit={calculateAge} className="flex flex-col">
        <label htmlFor="dob" className="tracking-tight font-semibold">
          Date of Birth
        </label>
        <div>
          <InputField
            type="date"
            name="dob"
            value={dob}
            max="9999-12-31"
            min="0000-01-01"
            handleChanges={handleChanges}
          />
          {error && <ErrorComponent error={error} />}
        </div>
        <BlueBtn
          btnText="Calculate Age"
          type="submit"
          classes="mt-7 self-start"
        />
      </form>
      {age && (
        <div className="py-5 mt-4 font-bold shadow-sm shadow-indigo-100 text-center rounded-md">
          <p>
            You are {age.years} {age.years > 1 ? `years` : `year`}, {age.months}{" "}
            {age.months > 1 ? `months` : `month`} and {age.days}{" "}
            {age.days > 1 ? `days` : `day`} old
          </p>
        </div>
      )}
    </div>
  );
};

export default AgeCalcUi;
