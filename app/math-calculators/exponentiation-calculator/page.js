import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import ExponentUi from "./components/ExponentUi";
import HowToUse from "@/app/components/HowToUse";
export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Exponentiation Calculator – Online Base and Exponent Solver`}
        para={`Need to calculate powers or exponents for math homework, engineering work, or scientific calculations? Our exponentiation calculator makes it simple. Just enter your base number (the number being multiplied) and the exponent (how many times to multiply it by itself), and get the result instantly. This base and exponent calculator handles everything from simple squares and cubes (like 5² or 3³) to complex exponential expressions, saving you time and eliminating calculation errors.`}
      />
      <ExponentUi />
      <HowToUse heading={`How to Use the Exponentiation Calculator Easily`}
      para={`Using the exponentiation calculator is simple and fast. First, identify your base number—this is the number that will be multiplied by itself. Next, determine your exponent (also called the power or index)—this tells how many times to multiply the base by itself. Enter both numbers into their respective fields. For example, to calculate 4³ (4 to the power of 3), you'd enter 4 as the base and 3 as the exponent. Click calculate, and our tool works like a powerful x to the power of y calculator and exponentiation solver, giving you instant results without confusion or manual multiplication. You can experiment with different numbers to see how the values change: try small exponents like 2 or 3 (squares and cubes), larger exponents, or even fractional exponents for roots. This makes it a handy base and exponent calculator for learning mathematical concepts, checking homework answers, or performing quick math tasks in academics, engineering, finance, or science.`}/>
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  );
};

export default page;