'use client'
import BlueBtn from '@/app/components/blueBtn';
import ErrorComponent from '@/app/components/ErrorComponent';
import InputField from '@/app/components/InputField'
import { setRequestMeta } from 'next/dist/server/request-meta';
import React, { useState } from 'react'

const RuleOf72Ui = () => {
    const [interest, setInterest] = useState("");
    const [result , setResult] = useState("");
    const [err, setErr] = useState("");
    const calculate = ()=>{
        let r = parseInt(interest)
        if(!r)return setErr("Please enter interest rate.");
        if(r > 100)return setErr("Please enter interest rate between 1% to 100%.")
        let res = 72 / r;
        setResult(res.toFixed(1));
    }
  return (
    <div className='calculatorContainer'>
        <InputField 
        type="number"
        label="Enter interest Rate (%)"
        handleChanges={(e)=>{
            setInterest(e.target.value);
            setErr("")
        }}
        value={interest}
        placeholder="e.g. 10"
        autoFocus={true}
        />
        {err && <ErrorComponent error={err} />}
        <BlueBtn btnText="Calculate Years" classes="mt-3" onClickFunction={calculate}/>
        {result && <div className='result'>
           It will take approximately {result} years to double your investment.
            </div>}
    </div>
  )
}

export default RuleOf72Ui