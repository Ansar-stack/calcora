import React from "react";

const Descriptions = ({heading, para}) => {
  return (
    <div>
      <h2 className="tracking-tight  break-words leading-[5vw] md:leading-[3vw] text-[5vw] md:text-[3vw] max-w-[900px] font-semibold text-[#2563eb]">{heading}</h2>
      <p className="para text-justify">
        {para}
      </p>
    </div>
  );
};

export default Descriptions;
