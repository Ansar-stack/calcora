import React from "react";
import Descriptions from "./Descriptions";

const WhatWeOffer = () => {
  return (
    <div>
      <Descriptions
        heading={`What We Offer`}
        para={`Our website features a wide variety of calculators and tools categorized for easy access. Each category is designed with accuracy, usability, and speed in mind:`}
      />
      <ul className="list-disc ms-5">
        {[
          { list: "Finance Calculators:", para: ` Manage your money effortlessly with tools like EMI Calculator, Student
          Loan Repayment Calculator, PayPal Fee Calculator, Profit & Loss
          Calculator, Coffee Profit Margin Calculator, E-commerce Profit Margin
          Calculator, and many more. Perfect for personal budgeting, business
          calculations, and financial planning.` },
          { list: "Math Calculators:", para: ` Solve complex problems in seconds with Quadratic Equation Solver,
          Percentage Calculator, Algebra Calculator, Roots Finder, Discriminant
          Solver, and other math tools. Great for students, teachers, or anyone
          needing quick math solutions.`},
          { list: "Conversion Tools:", para: `Convert units, currencies, and data formats easily with our Unit
          Converter, Currency Converter, Data Format Converter, and specialized
          conversion tools. Save time and avoid errors when working with
          measurements or money from different sources.`},
          { list: "Construction Calculators:", para: `Calculate areas, volumes, tiles, concrete, and other
          construction-related measurements quickly and accurately. Our
          Scientific Calculation Tools help with formulas, chemical
          calculations, and other technical problems.` },
          { list: "Other Useful Tools:", para: `We also provide additional practical tools like Health Calculator,Life
          style Calculator, Geometry Calculator, and more, helping you handle
          daily tasks efficiently and reliably.`},
        ].map((elem, index)=>(
          <div key={index}>
          <li className="font-bold">{elem.list}</li>
          <p className="text-[#555555] tracking-tight max-w-3xl">{elem.para}</p>
          </div>
        ))}
        
         
    
      </ul>
    </div>
  );
};

export default WhatWeOffer;
