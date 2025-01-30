import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Landing Page</h1>
        <div className="flex space-x-4">
          <Link to={"/react"}>
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Framework to Blogger Template
            </button>
          </Link>
          <Link to={"/static"}>
            <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
              Static Website to Blogger Template
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
