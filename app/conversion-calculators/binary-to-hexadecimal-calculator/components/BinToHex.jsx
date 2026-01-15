'use client'
import BlueBtn from '@/app/components/blueBtn';
import ErrorComponent from '@/app/components/ErrorComponent';
import InputField from '@/app/components/InputField';
import React, { useState } from 'react'

const BinToHex = () => {
  const [binary, setBinary] = useState("");
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");

  const handleChanges = (e) => {
    setBinary(e.target.value);
    setErr("");
    setResult("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!binary) return setErr("Please enter binary number.");
    const pattern = /^[01]+$/;
    if (!pattern.test(binary)) return setErr("Please enter 0 and 1 only.");

    // normalize length to multiple of 4
    let normalized = binary;
    while (normalized.length % 4 !== 0) {
      normalized = "0" + normalized;
    }

    const mapping = {
      "0000": "0", "0001": "1", "0010": "2", "0011": "3",
      "0100": "4", "0101": "5", "0110": "6", "0111": "7",
      "1000": "8", "1001": "9", "1010": "A", "1011": "B",
      "1100": "C", "1101": "D", "1110": "E", "1111": "F"
    };

    let hex = "";
    for (let i = 0; i < normalized.length; i += 4) {
      const chunk = normalized.substr(i, 4);
      hex += mapping[chunk];
    }

    // remove leading zeros
    setResult(hex.replace(/^0+/, "") || "0");
  };

  return (
    <div className="calculatorContainer">
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <InputField
          label='Enter binary number'
          placeholder="e.g. 10101"
          value={binary}
          handleChanges={handleChanges}
          autoFocus={true}
        />
        {err && <ErrorComponent error={err} />}
        <BlueBtn btnText="Convert" type="submit" classes="self-start mt-3" />
      </form>

      {result && (
        <div className="result">
          <h3 className="result_heading">Binary to Hexadecimal Result</h3>
            <p>Hexadecimal Equivalent {result}</p>
        </div>
      )}
    </div>
  )
}

export default BinToHex;
