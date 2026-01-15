"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const RetirementUi = () => {
  const [states, setStates] = useState({
    currentAge: "",
    retirementAge: "",
    currentSalary: "",
    salaryIncrease: "",
    currentBalance: "",
    contributionPercent: "",
    employerMatchPercent: "",
    employerMatchLimit: "",
    expectedReturn: "",
    expectedInflation: "",
  });
  const [result, setResult] = useState({
    result: false,
});
  const [err, setErr] = useState({});
  // Handle Input Changes
  const handleChanges = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setStates((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  // Hanlde Form Submition
  const handleSubmit = (e) => {
    e.preventDefault();
    let currentAge = Number(states.currentAge),
      retirementAge = Number(states.retirementAge),
      currentSalary = Number(states.currentSalary),
      salaryIncrease = Number(states.salaryIncrease) / 100 || 0,
      currentBalance = Number(states.currentBalance),
      contributionPercent = Number(states.contributionPercent),
      employerMatchPercent = Number(states.employerMatchPercent) / 100 || 0,
      employerMatchLimit = Number(states.employerMatchLimit) / 100 || 0,
      expectedReturn = Number(states.expectedReturn) / 100 || 0,
      expectedInflation = Number(states.expectedInflation) / 100 || 0;

    // Input Validation
    if (!currentAge)
      return setErr((prev) => ({
        ...prev,
        currentAge: "Please enter your current age.",
      }));
    if (!retirementAge)
      return setErr((prev) => ({
        ...prev,
        retirementAge: "Please enter retirement age.",
      }));
    if (retirementAge <= currentAge)
      return setErr((prev) => ({
        ...prev,
        retirementAge: "Retirement age must be greater than current age.",
      }));
    if (!currentBalance)
      return setErr((prev) => ({
        ...prev,
        currentBalance: "Please enter current 401(k) balance.",
      }));
    if (!contributionPercent)
      return setErr((prev) => ({
        ...prev,
        contributionPercent: "Please enter monthly contribution.",
      }));
    if (!expectedReturn)
      return setErr((prev) => ({
        ...prev,
        expectedReturn: "Please enter expected annual return rate (%).",
      }));

    const yearsToInvest = retirementAge - currentAge;
    const monthsToInvest = yearsToInvest * 12;

    const monthlyInterestRate = Math.pow(1 + expectedReturn, 1 / 12) - 1;

    let employerMatchAmount = Math.min(
      contributionPercent + employerMatchPercent,
      contributionPercent * employerMatchLimit
    );

    let totalSaving = currentBalance;
    let totalUserContributions = 0;
    let totalEmployerContributions = 0;
    for (let month = 0; month < monthsToInvest; month++) {
      totalSaving += contributionPercent + employerMatchAmount;
      totalUserContributions += contributionPercent;
      totalEmployerContributions += employerMatchAmount;

      if ((month + 1) % 12 === 0) {
        contributionPercent *= 1 + salaryIncrease;
        employerMatchAmount = Math.min(
          contributionPercent * employerMatchAmount,
          contributionPercent * employerMatchLimit
        );
      }
    }
    const totalContributions =
      totalUserContributions + totalEmployerContributions;
    const interestEarned = totalSaving - totalContributions - currentBalance;
    const adjustedSavings =
      totalSaving / Math.pow(1 + expectedInflation, yearsToInvest);
    setResult({
      result: true,
      retirementAge: retirementAge.toFixed(2),
      totalSvaings: totalSaving.toFixed(2),
      totalContribution: totalContributions.toFixed(2),
      interestEarned: interestEarned.toFixed(2),
      adjustedSavings: adjustedSavings.toFixed(2),
      yearsToInvest: yearsToInvest.toFixed(2),
    });
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Input Field Array */}
        {[
          {
            title: "Enter your current age",
            name: "currentAge",
            value: states.currentAge,
            placeholder: "e.g. 30",
          },
          {
            title: "Enter your expected retirement age",
            name: "retirementAge",
            value: states.retirementAge,
            placeholder: "e.g. 65",
          },
          {
            title: "Enter your life expectancy age",
            name: "lifeExpectancy",
            value: states.lifeExpectancy,
            placeholder: "e.g. 85",
          },
          {
            title: "Enter your current annual salary",
            name: "currentSalary",
            value: states.currentSalary,
            placeholder: "e.g. 50000",
          },
          {
            title: "Expected annual slary increase (%)",
            name: "salaryIncrease",
            value: states.salaryIncrease,
            placeholder: "e.g.  2.3",
          },
          {
            title: "Current 401(k) balance",
            name: "currentBalance",
            value: states.currentBalance,
            placeholder: "e.g. 6",
          },
          {
            title: "Monthly Contribution",
            name: "contributionPercent",
            value: states.contributionPercent,
            placeholder: "e.g. 6",
          },
          {
            title: "Employer match (% of salary)",
            name: "employerMatchPercent",
            value: states.employerMatchPercent,
            placeholder: "e.g. 3",
          },
          {
            title: "Employer match limit (% of your contribution)",
            name: "employerMatchLimit",
            value: states.employerMatchLimit,
            placeholder: "e.g. 100",
          },
          {
            title: "Expected annual return rate (%)",
            name: "expectedReturn",
            value: states.expectedReturn,
            placeholder: "e.g. 6",
          },
          {
            title: "Expected annual inflation rate (%)",
            name: "expectedInflation",
            value: states.expectedInflation,
            placeholder: "e.g. 2",
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              label={elem.title}
              type="number"
              handleChanges={handleChanges}
              placeholder={elem.placeholder}
              name={elem.name}
              value={elem.value}
            />
          </div>
        ))}
        <div className="mt-3">
          {err.currentAge && <ErrorComponent error={err.currentAge} />}
          {err.retirementAge && <ErrorComponent error={err.retirementAge} />}
          {err.currentBalance && <ErrorComponent error={err.currentBalance} />}
          {err.contributionPercent && (
            <ErrorComponent error={err.contributionPercent} />
          )}
          {err.expectedReturn && <ErrorComponent error={err.expectedReturn} />}
        </div>
        <BlueBtn
          btnText="Calculate Retirement Savings"
          classes="self-start mt-4"
          type="submit"
        />
      </form>
      {/* Result */}
      {result.result && (
        <div className="result">
          <h3 className="result_heading">
            Projected Retirement Savings Result
          </h3>
          <div className="font-light">
            <p>
              At age {result.retirementAge}, your 401(k) savings will be
              aproximately: {result.totalSvaings}. This includes total
              contributions of {result.totalContribution} (your contributions
              plus employer match). Interest earned over this period will be
              approximately: {result.interestEarned}
              Adjusted for inflation, your savings would be worth about:{" "}
              {result.adjustedSavings} in today's money. You have{" "}
              {result.yearsToInvest} years left until retirement.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetirementUi;
