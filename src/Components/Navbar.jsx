import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="bg-blue-900 text-white py-4 px-16 shadow-md flex justify-between items-center w-full">
     
      <h1 className="text-xl font-bold tracking-wide">
        Student Management System
      </h1>


      <div className="flex space-x-15 ml-15">
        <a
          href="#home"
          onClick={() => setActive("home")}
          className={`font-semibold transition-colors duration-200 ${
            active === "home"
              ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
              : "hover:text-yellow-300"
          }`}
        >
          Home
        </a>
        <a
          href="#students"
          onClick={() => setActive("students")}
          className={`font-semibold transition-colors duration-200 ${
            active === "students"
              ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
              : "hover:text-yellow-300"
          }`}
        >
          Students
        </a>
        <a
          href="#about"
          onClick={() => setActive("about")}
          className={`font-semibold transition-colors duration-200 ${
            active === "about"
              ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
              : "hover:text-yellow-300"
          }`}
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
