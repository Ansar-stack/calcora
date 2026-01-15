'use client'
import BlueBtn from '@/app/components/blueBtn';
import ErrorComponent from '@/app/components/ErrorComponent';
import InputField from '@/app/components/InputField'
import React, { useState } from 'react'

const FactorialUi = () => {
    const [number, setNumber] = useState("");
    const [err, setErr] = useState("");
    const [num, setNum] = useState("");
    const [result, setResult] = useState("");
    const handleChanges = (e)=>{
        setNumber(e.target.value)
    }
    const calculateFact = ()=>{
        if(!Number(number))return setErr("Please enter a number.");
        let res = 1;
        for(let i=2; i<=number; i++){
            res *= i
        };
        setResult(res);
        setNum(number)
    }
  return (
    <div className='calculatorContainer'>
        <InputField 
        type="number"
        name="number"
        label="Enter a number"
        placeholder="e.g. 10"
        value={number}
        handleChanges={handleChanges}
        />
        {err && <ErrorComponent error={err}/>}
        <BlueBtn btnText="Calculate Factorial" onClickFunction={calculateFact} classes="mt-3"/>
        {result && <div className='w-full p-5 bg-gray-100 mt-3 rounded-md font-semibold text-black text-2xl'>
            Factorial of {num} is {result}
        </div>}
    </div>
  )
}

export default FactorialUi