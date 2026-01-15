"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, {useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const PayPalUi = () => {
  const [amount, setAmount] = useState("");
  const [calculateReceive, setCalculateReceive] = useState(false);
  const [chargedResult, setChargedResult] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [transactionType, setTransactionType] = useState("International - from Canada, USA, Europe II, rest of world");
  const [err, setErr] = useState("");
  const Calculate = () => {
    let userAmount = parseInt(amount)
    if (!userAmount || userAmount <= 0) return setErr("Please enter transaction amount.");
    let fee;
    if(transactionType == "International - from Canada, USA, Europe II, rest of world"){
      fee = userAmount * 0.044 + 0.30;
      setChargedResult(fee.toFixed(2));
    }else if (transactionType == "International - from Europe I, Northern Europe"){
      fee = userAmount * 0.034 + 0.3;
      setChargedResult(fee.toFixed(2))
    }else if(transactionType == "Domestic"){
      fee = userAmount * 0.029 + 0.30;
      setChargedResult(fee.toFixed(2));
    }else if(transactionType == "Charity"){
      fee = userAmount * 0.00199 + 0.49;
      setChargedResult(fee.toFixed(2));
    }else if(transactionType == "Micropayment"){
      fee = userAmount * 0.05 + 0.05;
      setChargedResult(fee.toFixed(2))
    }
    


    if (calculateReceive) {
      let AmountToReceive = userAmount - fee;
      setReceiveAmount(AmountToReceive.toFixed(2));
    } else {
      setReceiveAmount("");
    }
  };

  return (
    <div className="calculatorContainer">
      <InputField
        value={amount}
        label="Enter your transaction amount"
        name="amount"
        handleChanges={(e) => {
          setAmount(e.target.value);
          setErr("");
        }}
        type="number"
        placeholder="e.g. 50000"
      />
      {err && <ErrorComponent error={err} />}
      <label htmlFor="transactionType" className="font-semibold mt-3 block">
        Select transaction type
      </label>
      <select
        value={transactionType}
        name="transactionType"
        className="mb-2 w-full outline-0 border border-gray-300 rounded-md  py-1 px-2"
        onChange={(e) => setTransactionType(e.target.value)}
      >
        {[
          "International - from Canada, USA, Europe II, rest of world",
          "International - from Europe I, Northern Europe",
          "Domestic",
          "Charity", 
          "Micropayment"
        ].map((elem, index)=>(
          <option key={index} value={elem}>{elem}</option>
        ))}
      </select>

      <div className="flex gap-3   mt-5">
        <input
          type="checkbox"
          name="radio1"
          className="w-4 h-4"
          checked={true}
          readOnly
        />
        <label htmlFor="radio1" className="text-sm sm:text-md">
          Calculate the fee I`ll be charged
        </label>
      </div>
      <div className="flex gap-3 mt-2">
        <input
          type="checkbox"
          name="radio2"
          className="w-4 h-4"
          checked={calculateReceive}
          onChange={() => setCalculateReceive((prev) => !prev)}
        />
        <label htmlFor="radio2" className="text-sm sm:text-md">
          Calculate the amount to receive
        </label>
      </div>
      <BlueBtn
        btnText={`Calculate PayPal Commission`}
        onClickFunction={Calculate}
        classes="mt-5 self-start"
      />
      {chargedResult && (
        <div className="result">
          <h3 className="result_heading">PayPal Commission Result</h3>
          <div className="result_item">
            <span className="font-semibold ">Charging Fee:</span>{" "}
            <span className="font-semibold flex items-center">
              <FiDollarSign className="mt-0.5" />
              {chargedResult}
            </span>
          </div>
          {receiveAmount && (
            <div className="result_item">
              <span className="font-semibold">Receiving Fee:</span>
              <span className="font-semibold flex items-center">
                <FiDollarSign className="mt-0.5" />
                {receiveAmount}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PayPalUi;
