"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const CreditCardPayOff = () => {
  const [states, setStates] = useState({
    balance: "",
    interest: "",
    payment: "",
    minimumPayment:""
  });
  const [err, setErr] = useState({});
  const [result, setResult] = useState("");
// Input handle Changes
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
// Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let balance = parseInt(states.balance);
    let interest = parseInt(states.interest);
    let payment = parseInt(states.payment);
    let minimumPayment = parseInt(states.minimumPayment);

    // Input validation
    if (!balance)
      return setErr((prev) => ({ ...prev, balance: "Please enter balance." }));
    if (!interest)
      return setErr((prev) => ({
        ...prev,
        interest: "Please enter interest rate.",
      }));
    if (!payment)
      return setErr((prev) => ({ ...prev, payment: "Please enter payment." }));
    if(minimumPayment > 100 || minimumPayment <0){
      return setErr(prev =>({...prev, minimumPayment:"Minimum Payment percentage should be between 0 and 100."}))
    }

    let r = interest / 12 / 100;
    let B = balance;
    let I = 0;
    let n = 0;
    let minPayment = (minimumPayment > 0?(B * minimumPayment / 100):0);
    let P = Math.max(payment, minPayment);

    if(P <= B * r){
      return setResult("Monthly Payment is too low to ever pay off balance.");
    }
    while(B > 0){
      let interest = B * r;
      I += interest;
      B -= P
      if(B <0)B = 0;
      n++;
    }
    let totallPaid = balance + I;
    setResult(`It will take ${n.toFixed(2)} months to pay off your credit card. 
    Total interest paid will be ${I.toFixed(2)}. Total amount paid will be ${totallPaid.toFixed(2)}`)
    setErr({});
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Input Field Array  */}
        {[
          {
            title: "Enter your balance",
            value: states.balance,
            name: "balance",
            placeholder: "e.g. 50000",
          },
          {
            title: "Enter interest rate (%)",
            value: states.interest,
            name: "interest",
            placeholder: "e.g. 17",
          },
          {
            title: "Enter monthly payment",
            value: states.payment,
            name: "payment",
            placeholder: "e.g. 2000",
          },
          {
            title: "Enter minimum payment (%)",
            value: states.minimumPayment,
            name: "minimumPayment",
            placeholder: "e.g. 10",
          },
        ].map((elment, index) => (
          <div key={index}>
            <InputField
              label={elment.title}
              placeholder={elment.placeholder}
              value={elment.value}
              handleChanges={handleChanges}
              name={elment.name}
              type="number"
            />
            {index == 0 && err.balance && <ErrorComponent error={err.balance} />}
            {index == 1 && err.interest && <ErrorComponent error={err.interest} />}
            {index == 2 && err.payment && <ErrorComponent error={err.payment} />}
            {index == 3 && err.minimumPayment && <ErrorComponent error={err.minimumPayment} />}
          </div>
        ))}
        <BlueBtn
          btnText="Calculate Payoff"
          type="submit"
          classes="self-start mt-2"
        />
      </form>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default CreditCardPayOff;
