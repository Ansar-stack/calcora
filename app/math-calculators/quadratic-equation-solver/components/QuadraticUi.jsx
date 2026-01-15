"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const QuadraticUi = () => {
  const [states, setStates] = useState({
    a:"", 
    b:"", 
    c:""
  })
  const [err, setErr] = useState({
    a: "",
  });
  const [result, setResult]= useState({
    root1: "", 
    root2: ""
  })
  const handlChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = Number(states.a);
    let b = Number(states.b);
    let c = Number(states.c);
    if(!a)return setErr(prev =>({...prev, a:"Please enter a."}));
    const disc = Math.pow(b, 2) - 4 * a * c;
    console.log(disc);
    const root1 = (-b + Math.sqrt(disc)) / (2 * a);
    const root2 = (-b - Math.sqrt(disc)) / (2 * a);
    console.log(root1, root2);
    setResult({
      root1:root1.toFixed(2), 
      root2: root2.toFixed(2)
    })
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {[
          {
            title: "Enter a",
            name: "a",
            value: states.a,
            placeholder: "e.g. 1",
          },
          {
            title: "Enter b",
            name: "b",
            value: states.b,
            placeholder: "e.g. -3",
          },
          {
            title: "Enter c",
            name: "c",
            value: states.c,
            placeholder: "e.g. 2",
          },
        ].map((element, index)=>(
            <div key={index}>
                <InputField 
                label={element.title}
                placeholder={element.placeholder}
                value={element.value}
                type = 'number'
                name={element.name}
                handleChanges={handlChanges}
                />
                {index == 0 && err.a && <ErrorComponent error={err.a}/>}
            </div>
        ))}
        <BlueBtn btnText={`Calculate Quardatic`} type="submit" classes="self-start mt-3" />
      </form>
      {result.root1 && 
      <div className="result">
        <h3 className="result_heading">Quadratic Equation Solver Result</h3>
          <p>The solutions of the quadratic eqution are Root 1 = ${result.root1} and Root 2 = ${result.root2}.</p>
         
        </div>}
    </div>
  );
};

export default QuadraticUi;
