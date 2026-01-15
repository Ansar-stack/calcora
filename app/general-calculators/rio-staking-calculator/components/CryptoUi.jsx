'use client'
import BlueBtn from '@/app/components/blueBtn'
import ErrorComponent from '@/app/components/ErrorComponent'
import InputField from '@/app/components/InputField'
import React, { useState } from 'react'

const CryptoUi = () => {
  const [states, setStates] = useState({
    amountStacked: "", 
    APR: "", 
    duration: "", 

  })
  const [err, setErr] = useState({
    amountStacked: "",
    APR: "",
    duration: ""
  })
  const [result , setResult] = useState("");

  const handleChanges = (e)=>{
    const {name, value} = e.target;
    setStates((prev) => ({
      ...prev, 
      [name]: value
    }))
    setErr({
      amountStacked: "",
      APR: "", 
      duration: ""
    })
  }
  const hanldeSubmit = (e)=>{
    e.preventDefault();
    if(!Number(states.amountStacked) )return setErr(prev =>({...prev, amountStacked: "Please enter amount."}));
    if(!Number(states.APR) )return setErr(prev =>({...prev, APR: "Please enter APR."}));
    if(!Number(states.duration))return setErr(prev =>({...prev, duration:"Please enter duration."}));

    let amount = states.amountStacked * (states.APR /100) * (states.duration /12);
    setResult(amount.toFixed(3));

    setErr({
      amountStacked: "",
      APR: "",
      duration: ""
    })
  }
  return (
    <div className='calculatorContainer'>
        <form 
        onSubmit={hanldeSubmit}
        className='w-full flex flex-col gap-2'>
          <div>
        <InputField 
        label="Enter amount stacked"
        name="amountStacked"
        placeholder="e.g. 5000"
        type="number"
        value={states.amountStacked}
        handleChanges={handleChanges}
        />
        {err.amountStacked && <ErrorComponent error={err.amountStacked} />}
        </div>
           <div>
        <InputField 
          label="Enter APR (%)"
          name="APR"
          placeholder="e.g. 5"
          type="number"
          value={states.APR}
          handleChanges={handleChanges}

        />
        {err.APR && <ErrorComponent error={err.APR}/>}
        </div>
        <div>
        <InputField 
        label="Enter duration (months)"
        name="duration"
        placeholder="e.g. 12"
        type="number"
        value={states.duration}
        handleChanges={handleChanges}
        />
       {err.duration && <ErrorComponent error={err.duration} />}
       </div>
        <BlueBtn btnText={`Calculate ROI`} type="submit" classes="self-start mt-3" />
        </form>
       {result && <div className='result'>
          Your estimated staking return is: {result}
        </div>}
    </div>
  )
}

export default CryptoUi