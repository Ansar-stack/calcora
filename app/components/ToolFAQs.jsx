import React from "react";

const ToolFAQs = ({ FAQs, classes }) => {
  return (
    <div className={`mb-20 ${classes} md:w-[50vw] w-[95vw] px-1  rounded-md`}>
      <h2 className="font-semibold text-blue-700 text-2xl lg:text-[2.4vw]
      tracking-tighter pb-2 border-b-[1.5px] border-gray-200 ">
        Frequently Asked Questions
      </h2>
      {FAQs.map((elem, index) => (
        <div key={index} className="mt-3 pb-3 border-b-[1.5px] border-gray-200">
          <h3 className="font-semibold text-lg">{elem.question}</h3>
          <p className="text-gray-700  tracking-tight">
            {elem.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ToolFAQs;
