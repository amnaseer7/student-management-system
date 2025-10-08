import React from "react";
import StudentCard from "../Components/StudentCard";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  const students = [
    { name: "Amna Naseer", rollNumber: "SE-01", course: "Software Engineering", department: "IT" },
    { name: "Ali Raza", rollNumber: "SE-02", course: "Computer Science", department: "CS" },
    { name: "Hira Ahmed", rollNumber: "SE-03", course: "Data Science", department: "AI" },
    { name: "Usman Khan", rollNumber: "SE-04", course: "Cyber Security", department: "IT" },
    { name: "Sara Malik", rollNumber: "SE-05", course: "Software Engineering", department: "Computer Systems" },
    { name: "Hamza Tariq", rollNumber: "SE-06", course: "Information Technology", department: "IT" },
    { name: "Mina Ali", rollNumber: "SE-07", course: "Artificial Intelligence", department: "CS" },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <section id="students" className="py-24 px-10">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-12">
          Our Students
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {students.map((student, index) => (
            <StudentCard
              key={index}
              name={student.name}
              rollNumber={student.rollNumber}
              course={student.course}
              department={student.department}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
