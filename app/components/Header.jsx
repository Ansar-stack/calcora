"use client";
import { DropDownData } from "@/app/NavDropDown";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdClose, MdMenu, MdOutlineArrowDropUp } from "react-icons/md";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const navigationLinks = [
    { nav: "Home", path: "/" },
    { nav: "Calculators", path: "", hasDropdown: true },
    { nav: "All Calculators", path: "/sitemap" },
    { nav: "About", path: "/about-us" },
    { nav: "Contact", path: "/contact-us" },
  ];

  // Close menu handlers
  const closeAll = () => {
    setIsNavOpen(false);
    setIsDropDownOpen(false);
  };

  return (
    <>
      <Link href='/' className="text-[5vw] logo sm:text-[4vw] md:text-[2.5vw] font-bold tracking-tight">
        Calcora
      </Link>
      
      <nav>
        {/* Desktop Navigation - NO CHANGES */}
        <ul className="hidden relative sm:flex items-center gap-[5vw] md:gap-[4vw] font-semibold text-[2.4vw] md:text-[1.9vw] text-[#2563eb] lg:text-[1.4vw]">
          {navigationLinks.map((link, index) => (
            link.hasDropdown ? (
              <li key={index} className="relative">
                <button
                  onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                  onMouseEnter={() => setIsDropDownOpen(true)}
                  className="cursor-pointer flex relative hoverAnimation bg-transparent border-none p-0"
                >
                  Calculators
                  <MdOutlineArrowDropUp
                    className={`absolute bottom-0 -right-4 text-[2.4vw] md:text-[1.9vw] text-[#2563eb] lg:text-[1.4vw] transition-transform duration-200 ${
                      isDropDownOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                {isDropDownOpen && (
                  <ul
                    onMouseLeave={() => setIsDropDownOpen(false)}
                    className="py-3 w-[210px] flex flex-col text-[2.4vw] md:text-[1.9vw] text-[#2563eb] lg:text-[1.4vw] bg-white shadow-sm absolute -left-1/2 z-20"
                  >
                    {DropDownData.map((item, idx) => (
                      <li key={idx} className="px-2 hover:bg-gray-300 py-1 text-[16px]">
                        <Link href={`/${item.path}`} onClick={() => setIsDropDownOpen(false)}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={index} className="hoverAnimation">
                <Link href={link.path}>{link.nav}</Link>
              </li>
            )
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="text-[28px] sm:hidden cursor-pointer text-[#2563eb] z-50">
          <MdMenu onClick={() => setIsNavOpen(true)} />
        </div>

        {/* Mobile Navigation - FIXED */}
        {isNavOpen && (
          <>
            <div className="sm:hidden fixed inset-0 bg-black/20 backdrop-blur-[1px] z-30" onClick={closeAll} />
            <div className="sm:hidden fixed top-0 right-0 h-screen w-[70%] max-w-sm bg-gray-50 shadow-lg z-40">
              {/* Close button at TOP-LEFT */}
              <div className="flex p-4 pl-6">
                <div className="text-[28px] cursor-pointer  text-[#2563eb]" onClick={closeAll}>
                  <MdClose className="absolute right-0" />
                </div>
              </div>
              
              {/* Menu items with gap between MAIN items only */}
              <ul className="px-6 text-xl font-semibold text-[#2563eb] mt-4 space-y-8">
                {navigationLinks.map((link, index) => (
                  link.hasDropdown ? (
                    <li key={index} className="w-full">
                      <button
                        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                        className="flex items-center justify-between w-full text-left py-2"
                      >
                        <span>Calculators</span>
                        <MdOutlineArrowDropUp className={`transition-transform duration-200 ${isDropDownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {/* Dropdown items - smaller, indented, auto scroll */}
                      {isDropDownOpen && (
                        <div className="mt-2 max-h-[300px] overflow-y-auto">
                          <ul className="ml-5 pl-3 border-l-2 border-blue-200">
                            {DropDownData.map((item, idx) => (
                              <li key={idx} className="mb-2">
                                <Link 
                                  href={`/${item.path}`} 
                                  onClick={closeAll} 
                                  className="text-blue-600 hover:text-blue-800 block text-sm pl-4"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ) : (
                    <li key={index}>
                      <Link href={link.path} onClick={closeAll} className="block hover:text-blue-700 py-2">
                        {link.nav}
                      </Link>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;