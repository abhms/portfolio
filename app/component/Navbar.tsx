"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto navbar-container">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap Logo">
            ABHISHEK MISHRA
          </span>
        </a>
        <button
          onClick={toggleNavbar}
          className="block md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? true : false}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`w-full md:w-auto md:flex md:items-center md:space-x-8 md:space-y-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a href="#" className="block py-2 px-3 rounded navbarText">
                EXPERIENCE
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded navbarText">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded navbarText">
                CONTACT
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded navbarText">
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
