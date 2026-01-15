import Link from "next/link";
import React from "react";

const Sitemap = ({ heading, arr}) => {
  return (
    <>
      <div className="catagory">
        <h2 className="ms-4 text-white font-bold text-xl">{heading}</h2>
      </div>
      <ul className="mt-2 flex flex-col">
        {arr.map((elem, index) => (
          <Link
            className="w-full h-8 font-semibold hover:bg-gray-200  
            flex items-center ps-4 border-[1px]  bg-white"
            href={`${elem.path}`}
            key={index}
          >
            {elem.toolName}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Sitemap;