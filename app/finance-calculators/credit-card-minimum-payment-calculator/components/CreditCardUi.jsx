"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import Result from "@/app/components/Result";
import React, { useState } from "react";

const CreditCardUi = () => {
  const [states, setStates] = useState({
    balance: "",
    interestRate: "",
    minimumPaymentPercentage: "",
    fixedMinumumPayment: "",
  });
  const [err, setErr] = useState({});
  const [result, setResult] = useState(null);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Number(states.balance)) {
      return setErr((prev) => ({
        ...prev,
        balance: "Please enter credit card balance",
      }));
    }
    if (!Number(states.interestRate)) {
      return setErr((prev) => ({
        ...prev,
        interestRate: "Please enter interest rate.",
      }));
    }

    // Calculation logic
    let balance = Number(states.balance);
    const interestRate = Number(states.interestRate) / 100 / 12; // monthly interest
    const minPaymentPercent = Number(states.minimumPaymentPercentage) / 100;
    const fixedMinPayment = Number(states.fixedMinumumPayment);

    let months = 0;
    let totalInterest = 0;

    while (balance > 0 && months < 1000) {
      let minPayment = Math.max(
        balance * minPaymentPercent,
        fixedMinPayment || 0
      );
      if (minPayment > balance) minPayment = balance;

      const interest = balance * interestRate;
      totalInterest += interest;
      balance = balance + interest - minPayment;

      months++;
      if (balance <= 0) break;
    }

    setResult({
      months,
      years: (months / 12).toFixed(1),
      totalInterest: totalInterest.toFixed(2),
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {[
          {
            title: "Enter credit card balance",
            name: "balance",
            value: states.balance,
            placeholder: "e.g. 30000",
          },
          {
            title: "Enter interest rate (% APR)",
            name: "interestRate",
            value: states.interestRate,
            placeholder: "e.g. 5",
          },
          {
            title: "Enter minimum payment percentage (%)",
            name: "minimumPaymentPercentage",
            value: states.minimumPaymentPercentage,
            placeholder: "e.g 5",
          },
          {
            title: "Enter fixed minimum payment",
            name: "fixedMinumumPayment",
            value: states.fixedMinumumPayment,
            placeholder: "e.g. 500",
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              label={elem.title}
              placeholder={elem.placeholder}
              value={elem.value}
              name={elem.name}
              type="number"
              handleChanges={handleChanges}
            />
            {index === 0 && err.balance && (
              <ErrorComponent error={err.balance} />
            )}
            {index === 1 && err.interestRate && (
              <ErrorComponent error={err.interestRate} />
            )}
          </div>
        ))}
        <BlueBtn btnText="Calculate" type="submit" classes="self-start mt-2" />
      </form>

      {result && (
          <Result
            heading={"Credit Card Minimum Payment Result"}
            arr={[
              { title: "Months to Payoff:", value: result.months},
              { title: "Years to Payoff:", value: result.years},
              { title:"Total Interest Paid:", value: `$${result.totalInterest}`},
            ]}
          />
      )}
    </div>
  );
};

export default CreditCardUi;
