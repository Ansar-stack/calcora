"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import Result from "@/app/components/Result";
import React, { useCallback, useState } from "react";

const HomeMortageCalculator = () => {
  const [userData, setUserData] = useState({});
  const [loanAmount, setLoanAmount] = useState("0");
  const [result, setResult] = useState({});
  const [err, setErr] = useState({});
  // Calculating the emi function
  const CalculateEmi = (e) => {
    e.preventDefault();
    // Validation of the input field
    if (!Number(userData.homeValue))
      return setErr((prev) => ({
        ...prev,
        homeValue: "Please enter house value.",
      }));
    if (!Number(userData.interestRate))
      return setErr((prev) => ({
        ...prev,
        interestRate: "Please enter interest rate (%).",
      }));
    if (!Number(userData.years) || Number(userData.years) <= 0)
      return setErr((prev) => ({
        ...prev,
        years: "Please enter loan duration (years).",
      }));

    // Calculating the home mortgage
    const percentageToDecimal = (percent) => {
      return percent / 12 / 100;
    };
    const yearToMonths = (year) => {
      return year * 12;
    };
    let monthlyPayment =
      percentageToDecimal(userData.interestRate * loanAmount) /
      (1 -
        Math.pow(
          1 + percentageToDecimal(userData.interestRate),
          -yearToMonths(userData.years)
        ));
    let totalAmount = monthlyPayment * yearToMonths(userData.years);
    let totalInterest = totalAmount - userData.homeValue;

    setResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      homeValue: userData.homeValue,
      totalInterest: totalInterest.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    });
  };

  // Function for calculating the loan amount
  const CalculateLoanAmount = () => {
    setLoanAmount(userData.homeValue - userData.downPayment);
    return;
  };
  // Handle Changes for all input field
  const handleChanges = useCallback((e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  }, []);
  return (
    <div className="calculatorContainer">
      <form onSubmit={CalculateEmi} className="w-full flex flex-col gap-2">
        {/* Input Fields */}
        {[
          {
            title: "Enter the value of house",
            placeholder: "e.g. 50000",
            value: userData.homeValue,
            name: "homeValue",
          },
          {
            title: "Enter Down Payment",
            placeholder: "e.g. 1000",
            value: userData.downPayment,
            name: "downPayment",
          },
          {
            title: "Loan Amount",
            placeholder: "",
            value: loanAmount,
            name: "loanAmount",
          },
          {
            title: "Enter your interest rate (%)",
            placeholder: "e.g. 5",
            value: userData.interestRate,
            name: "interestRate",
          },
          {
            title: "Enter loan duration (years)",
            placeholder: "e.g. 2",
            value: userData.years,
            name: "years",
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              label={elem.title}
              placeholder={elem.placeholder}
              name={elem.name}
              type="number"
              value={elem.value}
              handleChanges={handleChanges}
              onKeyup={
                index == 0
                  ? CalculateLoanAmount
                  : index == 1
                  ? CalculateLoanAmount
                  : undefined
              }
              readOnly={index == 2 && true}
            />
            {index == 0 && err.homeValue && (
              <ErrorComponent error={err.homeValue} />
            )}
            {index == 3 && err.interestRate && (
              <ErrorComponent error={err.interestRate} />
            )}
            {index == 4 && err.years && <ErrorComponent error={err.years} />}
          </div>
        ))}

        <BlueBtn
          btnText={`Calculate Housing EMI`}
          classes="mt-2 px-10 self-start"
          type="submit"
        />
      </form>
      {result.monthlyPayment && (
          <Result heading={'Housing Loan EMI Calculator'} arr={[
            { title: "Monthly Payment", result: `$${result.monthlyPayment}` },
            { title: "House Value", result: `$${result.homeValue}`},
            { title: "Total Interest", result: `$${result.totalInterest}`},
            {title: "Total Amount", result: `$${result.totalAmount}`}
          ]}/>
        
      )}
      </div>
  );
};

export default HomeMortageCalculator;
