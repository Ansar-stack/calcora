'use client'
import BlueBtn from '@/app/components/blueBtn';
import ErrorComponent from '@/app/components/ErrorComponent';
import InputField from '@/app/components/InputField';
import React, { useState } from 'react'

const ExponentUi = () => {
  const [states, setStates] = useState({
    base: "",
    exponent: ""
  });
  const [result, setResult] = useState("");
  const [err, setErr] = useState({
    base: "",
    exponent: ""
  })
  const handleChanges = (e)=>{
    const {name, value} = e.target;
    setStates(prev =>({...prev, [name]:value}));
    setErr(prev =>({...prev, [name]: ""}));
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!states.base)return setErr(prev =>({...prev, base: "Please enter base number."}));
    if(!states.exponent)return setErr(prev =>({...prev, exponent: "Please enter exponent number."}));
    let res = Math.pow(states.base, states.exponent);
    setResult(res);
  }
  return (
    <div className='calculatorContainer'>
      <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2">
        <div>
        <InputField 
        label="Enter base"
        placeholder="e.g. 2"
        type="number"
        value={states.base}
        handleChanges={handleChanges}
        name="base"
        />
        {err.base && <ErrorComponent error={err.base} />}
         </div>
         <div>
        <InputField 
        label="Enter exponent"
        placeholder="e.g. 4"
        type="number"
        value={states.exponent}
        handleChanges={handleChanges}
        name="exponent"
        />
        {err.exponent && <ErrorComponent error={err.exponent} />}
        </div>

        <BlueBtn btnText="Calculate Exponent" type="submit" classes="self-start mt-2" />
      </form>
      {result && <div className='result'>
        <h3 className="heading_result">Exponent Result</h3>
        <p>{states.base} raised to the power of {states.exponent} equals {result}.</p>
        </div>}
    </div>
  )
}

export default ExponentUi
