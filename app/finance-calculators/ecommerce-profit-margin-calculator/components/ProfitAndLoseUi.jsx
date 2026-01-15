"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import Result from "@/app/components/Result";
import { setRequestMeta } from "next/dist/server/request-meta";
import React, { useState } from "react";

const ProfitAndLoseUi = () => {
  const [states, setStates] = useState({});
  const [profitAndLose, setProfitAndLose] = useState({});

  const [err, setErr] = useState("");
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(states.CP)) return setErr("Please enter product cost");
    if (!Number(states.SP)) return setErr("Please enter selling price");

    let totalCPAmount, totalSPAmount;
    let profitAmount, profitAmountPercentage, loseAmount, LoseAmountPercentage;

    // Base cost
    if (states.quantity >= 1) {
      totalCPAmount = states.CP * states.quantity;
      totalSPAmount = states.SP * states.quantity;
    } else {
      totalCPAmount = Number(states.CP);
      totalSPAmount = Number(states.SP);
    }

    // Adjustments
    if (states.shipingCharges) totalCPAmount += Number(states.shipingCharges);
    if (states.discount) {
      let discount = totalCPAmount * (states.discount / 100);
      totalCPAmount -= discount; 
    }
    if (states.sellingPlatformFee) {
      let sellingFee = totalSPAmount * (states.sellingPlatformFee / 100);
      totalCPAmount += sellingFee;
    }
    if (states.marketCommision) {
      let commision = totalSPAmount * (states.marketCommision / 100);
      totalCPAmount += commision;
    }
    if (states.packagingCost) totalCPAmount += Number(states.packagingCost);
    if (states.fixedCost) totalCPAmount += Number(states.fixedCost);

    // Profit / Loss logic
    if (totalSPAmount > totalCPAmount) {
      profitAmount = totalSPAmount - totalCPAmount;
      profitAmountPercentage = (profitAmount / totalCPAmount) * 100;
    } else if (totalCPAmount > totalSPAmount) {
      loseAmount = totalCPAmount - totalSPAmount;
      LoseAmountPercentage = (loseAmount / totalCPAmount) * 100;
    }

    setProfitAndLose({
      profit: profitAmount ? profitAmount.toFixed(2) : "",
      profitPercentage: profitAmountPercentage
        ? profitAmountPercentage.toFixed(2)
        : "",
      totalCP: totalCPAmount.toFixed(2),
      totalSP: totalSPAmount.toFixed(2),
      lose: loseAmount ? loseAmount.toFixed(2) : "",
      losePercentage: LoseAmountPercentage
        ? LoseAmountPercentage.toFixed(2)
        : "",
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Input Fields Array */}
        {[
          {
            title: "Enter product cost",
            placeholder: "e.g. 500",
            value: states.CP,
            name: "CP",
          },
          {
            title: "Enter selling price",
            placeholder: "e.g. 400",
            value: states.SP,
            name: "SP",
          },
          {
            title: "Enter Quantity (if any)",
            placeholder: "e.g. 10",
            value: states.quantity,
            name: "quantity",
          },
          {
            title: "Enter Shipping Charges (if any)",
            placeholder: "e.g. 30",
            value: states.shipingCharges,
            name: "shipingCharges",
          },
          {
            title: "Enter packaging cost (if any)",
            placeholder: "e.g.10",
            value: states.packagingCost,
            name: "packagingCost",
          },
          {
            title: "Enter discount % (if any)",
            placeholder: "e.g. 5",
            value: states.discount,
            name: "discount",
          },
          {
            title: "Enter market place commission % (if any)",
            placeholder: "e.g. 5",
            value: states.marketCommision,
            name: "marketCommision",
          },
          {
            title: "Enter selling platform fee % (if any)",
            placeholder: "e.g. 2",
            value: states.sellingPlatformFee,
            name: "sellingPlatformFee",
          },
          {
            title: "Enter other fixed costs (if any)",
            placeholder: "e.g. 2",
            value: states.fixedCost,
            name: "fixedCost",
          },
        ].map((element, index) => (
          <div key={index}>
            <InputField
              label={element.title}
              placeholder={element.placeholder}
              value={element.value}
              name={element.name}
              handleChanges={handleChanges}
              type="number"
            />
          </div>
        ))}
        {err && <ErrorComponent classes={`mt-2`} error={err} />}
        <BlueBtn
          btnText="Calculate E-commerce Profit Margin"
          classes="self-start mt-3"
          type="submit"
        />
      </form>
      {/* Result if thre is Profit */}
      {profitAndLose.profit && (
          <Result heading={'E-commerce Profit Margin Result'} arr={[
            { name: "Total Cost:", value: `$${profitAndLose.totalCP}` },
            { name: "Total Sell:", value: `$${profitAndLose.totalSP}` },
            { name: "Profit:", value: `$${profitAndLose.profit}` },
            {
              name: "Profit Margin Percentage:",
              value: `${profitAndLose.profitPercentage}%`,
            },
          ]}/>
      )}
      {/* Result if there is Loss */}
      {profitAndLose.lose && (
          <Result heading={'Profit and Lose'} arr={[
            { name: "Total Cost:", value: `$${profitAndLose.totalCP}` },
            { name: "Total Sell:", value: `$${profitAndLose.totalSP}` },
            { name: "Lose:", value: `$${profitAndLose.lose}` },
            {
              name: "Lose Percentage:",
              value: `${profitAndLose.losePercentage}%`,
            },
          ]}/>
        
      )}
    </div>
  );
};
export default ProfitAndLoseUi;
