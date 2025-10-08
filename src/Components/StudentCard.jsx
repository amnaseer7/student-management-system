import React from "react";

const StudentCard = ({ name, rollNumber, course, department }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 text-center w-72 hover:shadow-2xl transition-shadow duration-300 mb-10">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">
        <span className="font-medium">Roll Number:</span> {rollNumber}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-medium">Course:</span> {course}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Department:</span> {department}
      </p>
    </div>
  );
};

export default StudentCard;
