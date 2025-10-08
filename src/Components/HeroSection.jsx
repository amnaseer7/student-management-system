import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-[70vh] bg-sky-200 px-6 py-20"
    >
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Welcome to Student Management System
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-4">
        Manage your student information efficiently and stay organized. 
      </p>
    </section>
  );
};

export default HeroSection;
