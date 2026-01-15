"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const LoveUi = () => {
  const [states, setStates] = useState({
    name: "",
    dob: "",
    partner: "",
    partnerDob: "",
  });
  const [err, setErr] = useState({
    name: "",
    partner: "",
  });
  const [result, setResult] = useState({
    sentence: "",
    percentage: "",
    calculationSteps: "",
  });

  // Common Twin Flame sentences
  const twinFlameSentences = [
    `✨ Your connection with ${states.partner} is more than coincidence - it's a soul recognition. Twin flames mirror each other's souls, and your numerology reveals a powerful spiritual bond that transcends time and space.`,
    `🔥 ${states.name} and ${states.partner}, your souls are two halves of one whole. The numbers don't lie - this is a divine connection that challenges, heals, and elevates both of you to higher consciousness.`,
    `💫 The universe has orchestrated your meeting with ${states.partner}. Twin flame relationships are intense and transformative, and your numerology shows a journey of mutual growth and spiritual awakening.`,
    `🌌 ${states.name}, your connection with ${states.partner} is written in the stars. Twin flames experience a magnetic pull that's both beautiful and challenging, leading to profound personal and spiritual evolution.`,
    `⚡ When twin flames ${states.name} and ${states.partner} meet, the energy is electric. Your numerology reveals a connection that goes beyond physical attraction - it's a soul contract for mutual growth and enlightenment.`,
    `🌈 ${states.name} and ${states.partner}, your souls recognize each other from beyond this lifetime. Twin flame relationships are rare and intense, designed to trigger deep healing and spiritual awakening in both partners.`,
    `🌀 The connection between ${states.name} and ${states.partner} is a divine dance of energies. As twin flames, you challenge each other to grow, heal, and ascend to higher levels of consciousness together.`,
    `🌠 Your meeting with ${states.partner} was destined. Twin flames often experience synchronicities and a deep knowing that they've met their mirror soul. Your numerology confirms this sacred connection.`,
    `💞 ${states.name} and ${states.partner}, twin flame love is unconditional and transformative. It's not always easy, but it's always purposeful - pushing both souls toward their highest potential and spiritual growth.`,
    `✨ The twin flame journey with ${states.partner} is about spiritual ascension. Your numerology reveals a connection that serves as a catalyst for deep healing, self-discovery, and unconditional love.`,
  ];

  // Numerology calculation function
  const calculateNumerology = (str) => {
    if (!str) return 0;
    
    // Remove spaces and convert to uppercase
    const cleanedStr = str.toUpperCase().replace(/\s+/g, '');
    let total = 0;
    let steps = [];
    
    // Convert letters to numbers (A=1, B=2, ..., Z=26)
    for (let char of cleanedStr) {
      if (char >= 'A' && char <= 'Z') {
        const value = char.charCodeAt(0) - 64; // A=1, B=2, etc.
        total += value;
        steps.push(`${char}=${value}`);
      }
    }
    
    // Reduce to single digit (1-9) by adding digits
    const reduceToSingleDigit = (num) => {
      while (num > 9) {
        const digits = num.toString().split('');
        num = digits.reduce((sum, digit) => sum + parseInt(digit), 0);
      }
      return num;
    };
    
    const finalNumber = reduceToSingleDigit(total);
    
    return {
      value: finalNumber,
      steps: steps.join(' + '),
      initialSum: total
    };
  };

  // Calculate DOB numerology (optional)
  const calculateDOBNumerology = (dob) => {
    if (!dob) return null;
    
    // Remove dashes and slashes, keep only numbers
    const numbers = dob.replace(/[^\d]/g, '');
    let sum = 0;
    
    // Add all digits
    for (let digit of numbers) {
      sum += parseInt(digit);
    }
    
    // Reduce to single digit
    while (sum > 9) {
      const digits = sum.toString().split('');
      sum = digits.reduce((total, digit) => total + parseInt(digit), 0);
    }
    
    return sum;
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErr({ name: "", partner: "" });
    
    // Validation
    if (!states.name.trim()) {
      return setErr((prev) => ({ ...prev, name: "Please enter your name" }));
    }
    if (!states.partner.trim()) {
      return setErr((prev) => ({ ...prev, partner: "Please enter your twin flame's name" }));
    }
    
    // Calculate numerology for both names
    const name1Result = calculateNumerology(states.name);
    const name2Result = calculateNumerology(states.partner);
    
    // Calculate DOB numerology if provided
    const dob1Result = states.dob ? calculateDOBNumerology(states.dob) : null;
    const dob2Result = states.partnerDob ? calculateDOBNumerology(states.partnerDob) : null;
    
    // Calculate compatibility percentage based on numerology
    // Standard formula: Compare the two numbers and calculate percentage
    const num1 = name1Result.value;
    const num2 = name2Result.value;
    
    // Calculate base compatibility (0-100%)
    let compatibility;
    
    if (num1 === num2) {
      // Same numbers = high compatibility
      compatibility = 95;
    } else {
      // Calculate difference and convert to percentage
      const diff = Math.abs(num1 - num2);
      // The smaller the difference, the higher the percentage
      compatibility = Math.max(30, 100 - (diff * 10));
    }
    
    // Adjust based on DOB if provided
    if (dob1Result && dob2Result) {
      const dobDiff = Math.abs(dob1Result - dob2Result);
      const dobAdjustment = (9 - dobDiff) * 2; // Up to +/- 18%
      compatibility = Math.min(100, Math.max(0, compatibility + dobAdjustment));
    }
    
    // Round to nearest whole number
    const finalPercentage = Math.round(compatibility);
    
    // Select a random twin flame sentence
    const randomIndex = Math.floor(Math.random() * twinFlameSentences.length);
    
    // Prepare calculation steps for display
    let calculationSteps = `✨ ${states.name.toUpperCase()}: ${name1Result.steps} = ${name1Result.initialSum}`;
    calculationSteps += ` → Reduced to: ${num1}`;
    calculationSteps += `\n✨ ${states.partner.toUpperCase()}: ${name2Result.steps} = ${name2Result.initialSum}`;
    calculationSteps += ` → Reduced to: ${num2}`;
    
    if (dob1Result && dob2Result) {
      calculationSteps += `\n📅 Your DOB Numerology: ${dob1Result}`;
      calculationSteps += `\n📅 ${states.partner}'s DOB Numerology: ${dob2Result}`;
    }
    
    calculationSteps += `\n💫 Twin Flame Compatibility: ${finalPercentage}%`;
    
    setResult({
      sentence: twinFlameSentences[randomIndex],
      percentage: finalPercentage,
      calculationSteps: calculationSteps,
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <InputField
            label="Enter your name"
            name="name"
            placeholder="e.g. Alex"
            value={states.name}
            handleChanges={handleChanges}
            autoFocus={true}
          />
          {err.name && <ErrorComponent error={err.name} />}
        </div>
        
        <div>
          <InputField
            label="Enter your date of birth (optional)"
            name="dob"
            placeholder="MM/DD/YYYY"
            value={states.dob}
            handleChanges={handleChanges}
          />
        </div>
        
        <div>
          <InputField
            label="Enter your twin flame's name"
            name="partner"
            placeholder="e.g. Taylor"
            value={states.partner}
            handleChanges={handleChanges}
          />
          {err.partner && <ErrorComponent error={err.partner} />}
        </div>
        
        <div>
          <InputField
            label="Enter twin flame's date of birth (optional)"
            name="partnerDob"
            placeholder="MM/DD/YYYY"
            value={states.partnerDob}
            handleChanges={handleChanges}
          />
        </div>
        
        <BlueBtn
          btnText="Calculate Twin Flame Connection"
          classes="self-start mt-2"
          type="submit"
        />
      </form>
      
      {result.sentence && (
        <div
          className="bg-[#ffe6f0] text-[#d63384] w-full overflow-x-auto rounded-md p-5
       text-lg font-semibold mt-3"
        >
          <p className="mb-4">{result.sentence}</p>
          
          <div className="bg-white p-4 rounded-md mb-4">
            <p className="font-mono text-sm text-gray-700 whitespace-pre-line">
              {result.calculationSteps}
            </p>
          </div>
          
          <div className="flex justify-between mt-5 border-t pt-3">
            <p>Twin Flame Compatibility:</p>
            <span className="font-bold text-xl">{result.percentage}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveUi;