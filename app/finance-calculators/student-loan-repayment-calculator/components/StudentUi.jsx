"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState, useCallback } from "react";

const StudentLoanUi = () => {
  const [states, setStates] = useState({
    loanAmount: "",
    interestRate: "",
    LoanTerm: "",
    RepaymentFreq: "Monthly",
    extraPayment: "",
  });
  const [result, setResult] = useState({});
  const [err, setErr] = useState({
    loanAmount: "",
    interestRate: "",
    LoanTerm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!Number(states.loanAmount))
      return setErr((prev) => ({ ...prev, loanAmount: "Please enter loan amount." }));
    if (!Number(states.interestRate))
      return setErr((prev) => ({ ...prev, interestRate: "Please enter interest rate (%)." }));
    if (!Number(states.LoanTerm))
      return setErr((prev) => ({ ...prev, LoanTerm: "Please enter loan term (years)" }));

    // Variables
    const principal = Number(states.loanAmount);
    const annualRate = Number(states.interestRate) / 100;
    const years = Number(states.LoanTerm);
    const extra = Number(states.extraPayment) || 0;

    // Convert to monthly
    let monthlyRate = annualRate / 12;
    let months = years * 12;

    // Adjust repayment frequency
    let multiplier = 1;
    if (states.RepaymentFreq === "Biweekly") multiplier = 26 / 12;
    if (states.RepaymentFreq === "Weekly") multiplier = 52 / 12;

    const effectiveRate = monthlyRate * multiplier;
    const effectivePayments = months * multiplier;

    // EMI Formula
    let emi =
      principal *
        (effectiveRate * Math.pow(1 + effectiveRate, effectivePayments)) /
        (Math.pow(1 + effectiveRate, effectivePayments) - 1) || 0;

    // Add extra payment per installment
    let totalPerInstallment = emi + extra;
    let totalPayment = totalPerInstallment * effectivePayments;
    let totalInterest = totalPayment - principal;

    // Loan payoff time (approx with extra payments)
    let payoffMonths = Math.ceil(principal / totalPerInstallment);
    let payoffYears = Math.floor(payoffMonths / 12);
    let payoffRemMonths = payoffMonths % 12;

    // Save results
    setResult({
      perInstallment: totalPerInstallment.toFixed(2),
      numberOfPayments: payoffMonths,
      totalPaid: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      payoffTime: `${payoffYears} years ${payoffRemMonths} months`,
    });

    // Clear errors
    setErr({ loanAmount: "", interestRate: "", LoanTerm: "" });
  };

  const handleChanges = useCallback((e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  }, []);

  return (
    <div className="calculatorContainer flex flex-col">
      <form onSubmit={handleSubmit} className="w-full flex flex-col pb-4 gap-2">
        {[
          { title: "Enter loan amount", value: states.loanAmount, name: "loanAmount", placeholder: "e.g. 30000" },
          { title: "Enter interest rate (in %)", value: states.interestRate, name: "interestRate", placeholder: "e.g. 5" },
          { title: "Enter loan term (years)", value: states.LoanTerm, name: "LoanTerm", placeholder: "e.g. 10" },
          { title: "Extra payment per installment (optional)", value: states.extraPayment, name: "extraPayment", placeholder: "e.g. 50" },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              type="number"
              label={elem.title}
              placeholder={elem.placeholder}
              name={elem.name}
              value={elem.value}
              handleChanges={handleChanges}
            />
            {elem.name === "loanAmount" && err.loanAmount && <ErrorComponent error={err.loanAmount} />}
            {elem.name === "interestRate" && err.interestRate && <ErrorComponent error={err.interestRate} />}
            {elem.name === "LoanTerm" && err.LoanTerm && <ErrorComponent error={err.LoanTerm} />}
          </div>
        ))}

        <SelectOptionsInputField
          label="Select repayment frequency"
          value={states.RepaymentFreq}
          name="RepaymentFreq"
          handleChanges={handleChanges}
          options={["Monthly", "Biweekly", "Weekly"]}
        />

        <BlueBtn btnText="Calculate Student Loan" type="submit" classes="mt-4 self-start" />
      </form>

      {/* Results */}
      {result.perInstallment && (
        <div className="result mt-4">
          {[
            { title: "Payment per Installment:", value: result.perInstallment },
            { title: "Number of Payments:", value: result.numberOfPayments },
            { title: "Total Amount Paid:", value: result.totalPaid },
            { title: "Total Interest Paid:", value: result.totalInterest },
            { title: "Loan Payoff Time:", value: result.payoffTime },
          ].map((elem, index) => (
            <div key={index} className="flex justify-between mt-2">
              <p className="font-semibold">{elem.title}</p>
              <span>{elem.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentLoanUi;
