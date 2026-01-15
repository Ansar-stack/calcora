import { DropDownData } from "@/app/NavDropDown";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-indigo-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4 sm:grid-cols-2">
        <div>
          <h4 className="text-indigo-600 logo font-semibold text-[6vw] md:text-[4vw] mb-3">
            Calcora
          </h4>
          <p className="text-gray-500">
            Your all-in-one platform for productivity tools to simplify your
            workflow.
          </p>
        </div>

        <div>
          <h5 className="text-indigo-600 font-medium mb-3">Quick Links</h5>
          <ul className="space-y-2">
            {[
              { nav: "Home", path: "/" },
              { nav: "About", path: "/about-us" },
              { nav: "contact", path: "/contact-us" },
              { nav: "Privacy Policy", path: "/privacy-policy" },
              { nav: "Sitemap", path: "/sitemap" },
            ].map((elem, index) => (
              <li key={index} className="relative w-30">
                <Link
                  key={index}
                  href={elem.path}
                  className="hover:text-indigo-600 pb-1 hover:border-b hover:border-indigo-600"
                >
                  {elem.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-indigo-600 font-medium mb-3">Categories</h5>
          <ul className="space-y-2">
            {DropDownData.map((elem, index) => (
              <li key={index} className="relative">
                <Link
                  className="hover:text-indigo-600 pb-1 hover:border-b hover:border-indigo-600 "
                  key={index}
                  href={`/${elem.path}`}
                >
                  {elem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-indigo-600 font-medium mb-3">Connect With Us</h5>
          <p className="text-blue-700 underline decoration-blue-600 font-blold">calcora.contact@gmail.com</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-indigo-100">
        &copy; 2025 Calcora. All rights reserved.
      </div>
    </footer>
  );
}
