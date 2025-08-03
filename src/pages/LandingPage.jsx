import React from "react";
import { Link } from "react-router-dom";

const LandingPAge = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white shadow-md rounded-xl p-10 text-center space-y-6">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome to DevConnect 🚀
        </h1>
        <p className="text-gray-600">Please login or sign up to continue</p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2 rounded-full bg-black text-white font-medium  transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 rounded-full bg-black border font-medium  hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPAge;
