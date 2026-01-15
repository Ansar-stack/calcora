"use client";
import React, { useState } from "react";
import { FaCopy, FaPaste } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const CopytoClipBoard = ({ content, classes }) => {
    const[copy, setcopy] = useState(false);
  const copyText = () => {
    window.navigator.clipboard.writeText(content);
    setcopy(true);
  };
  setInterval(() => {
    if(copy)setcopy(false)
  }, 3000);
  return (
    <div className={`cursor-pointer select-none ${content.length <=0?`hidden`: `flex`} ${classes}`}>
      {!copy ? (
        <>
          {" "}
          <FaCopy onClick={copyText} className="text-sm sm:text-lg mt-0.5 sm:mt-0" />
          <span className="tracking-tight text-xs sm:text-md font-semibold" onClick={copyText}>
            Copy
          </span>
        </>
      ) : (
        <>
        <MdDone className="mt-0.5 sm:mt-0 font-bold"/>
        <span className="tracking-tight text-xs sm:text-md font-normal sm:font-semibold">Copied</span>
        </>
      )}
    </div>
  );
};

export default CopytoClipBoard;
