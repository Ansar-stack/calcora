"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import { setRequestMeta } from "next/dist/server/request-meta";
import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";

const ProfitAndLoseUi = () => {
  const [states, setStates] = useState({
    CP: undefined,
    SP: undefined,
    quantity: undefined,
    tax: undefined,
    discount: undefined,
    shipingCharges: undefined,
    sellingPlatformFee: undefined,
  });
  const [profitAndLoss, setProfitAndLose] = useState({
    profit: "",
    profitPercentage: "",
    totalCP: "",
    totalSP: "",
    loss: "",
    lossPercentage: "",
  });

  const [err, setErr] = useState({
    CP: "",
    SP: "",
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(states.CP))
      return setErr((prev) => ({
        ...prev,
        CP: "Please enter cost price per item.",
      }));
    if (!Number(states.SP))
      return setErr((prev) => ({
        ...prev,
        SP: "Please enter selling price per item.",
      }));
    let totalCPAmount = 0,
        totalSPAmount = 0,
        profitAmount = 0,
        profitAmountPercenFtage = 0,
        loseAmount = 0,
        LoseAmountPercentage = 0;

    if (states.quantity >= 1) {
      totalCPAmount = states.CP * states.quantity;
      totalSPAmount = states.SP * states.quantity;
    } else {
      totalCPAmount = states.CP;
      totalSPAmount = states.SP;
    }

    if (states.shipingCharges) {
      totalCPAmount += Number(states.shipingCharges);
    }
    if (states.tax) {
      let tax = states.CP * states.quantity * (states.tax / 100);
      console.log("T", tax);
      totalCPAmount += Number(tax);
    }
    if (states.discount) {
      let discount = states.CP * states.quantity * (states.discount / 100);
      totalCPAmount += Number(discount);
    }
    if (states.sellingPlatformFee) {
      let sellingFee = totalCPAmount * (states.sellingPlatformFee / 100);
      totalCPAmount += Number(sellingFee);
    }
    if (Number(totalSPAmount) > Number(totalCPAmount)) {
      profitAmount = (totalSPAmount - totalCPAmount).toFixed(2);
      profitAmountPercenFtage = ((profitAmount / totalCPAmount) * 100).toFixed(
        2
      );
    } else if (Number(totalCPAmount) > Number(totalSPAmount)) {
      loseAmount = (totalCPAmount - totalSPAmount).toFixed(2);
      LoseAmountPercentage = ((loseAmount / totalCPAmount) * 100).toFixed(2);
    } else if (Number(totalCPAmount) == Number(totalSPAmount)) {
      profitAmount = "No Profit And Loss";
      profitAmountPercenFtage = 0;
    }

    setProfitAndLose({
      profit: profitAmount,
      profitPercentage: profitAmountPercenFtage,
      totalCP: totalCPAmount.toFixed(2),
      totalSP: totalSPAmount,
      loss: loseAmount,
      lossPercentage: LoseAmountPercentage,
    });
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Input Fields Array */}
        {[
          {
            title: "Enter cost price per item",
            placeholder: "e.g. 300",
            value: states.CP,
            name: "CP",
          },
          {
            title: "Enter selling price per item",
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
            title: "Enter tax rate % (if any)",
            placeholder: "e.g. 3",
            value: states.tax,
            name: "tax",
          },
          {
            title: "Enter discount % (if any)",
            placeholder: "e.g. 5",
            value: states.discount,
            name: "discount",
          },
          {
            title: "Enter Shipping Charges (if any)",
            placeholder: "e.g. 30",
            value: states.shipingCharges,
            name: "shipingCharges",
          },
          {
            title: "Enter selling platform fee % (if any)",
            placeholder: "e.g. 2",
            value: states.sellingPlatformFee,
            name: "sellingPlatformFee",
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
        {err.CP && <ErrorComponent classes="mt-3" error={err.CP} />}
        {err.SP && <ErrorComponent classes="mt-3" error={err.SP} />}
        <BlueBtn
          btnText="Calculate Profit and Loss"
          classes="self-start mt-2"
          type="submit"
        />
      </form>
      {/* Result if thre is Profit */}
      {profitAndLoss.profit > 0 && (
        <div className="result">
          <h5 className="mb-3 font-bold">Profit and Loss</h5>
          {[
            { name: "Total Cost:", value: `${profitAndLoss.totalCP}` },
            { name: "Total Sell:", value: `${profitAndLoss.totalSP}` },
            {
              name: "Profit:",
              value: profitAndLoss.profit,
            },
            {
              name: "Profit Percentage:",
              value: `${profitAndLoss.profitPercentage}%`,
            },
          ].map((elem, index) => (
            <div
              key={index}
              className={`border-b py-2 ${index == 0 && "bg-gray-300"} ${
                index == 1 && `bg-blue-300`
              } ${index == 2 && "bg-green-400"} ${index == 3 && `bg-green-200`} 
                items-center px-2 flex justify-between border-gray-600`}
            >
              {elem.name} <span className="flex items-center"><FiDollarSign className="mt-0.5"/>{elem.value}</span>
            </div>
          ))}
        </div>
      )}
      {/* Result if there is Loss */}
      {profitAndLoss.loss > 0  && (
        <div className="result">
          <h3 className="result_heading">Profit and Loss Result</h3>
          {[
            { name: "Total Cost:", value: `${profitAndLoss.totalCP}` },
            { name: "Total Sell:", value: `${profitAndLoss.totalSP}` },
            { name: "Loss:", value: `${profitAndLoss.loss}` },
            {
              name: "Loss Percentage:",
              value: `${profitAndLoss.lossPercentage}%`,
            },
          ].map((elem, index) => (
            <div
              key={index}
              className={`border-b px-2 py-2  ${
                index == 0 && "bg-gray-300"
              }   items-center ${index == 1 && `bg-blue-300`}  ${
                index == 2 && `bg-red-400`
              } ${index == 3 && `bg-red-300`} flex justify-between`}
            >
              {elem.name} <span className="flex items-center"><FiDollarSign className="mt-0.5" />{elem.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfitAndLoseUi;
