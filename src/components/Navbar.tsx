import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-gray-800">MiniLink</h1>
        <div className="space-x-4 text-sm">
          <a href="/" className="text-gray-600 hover:text-blue-500 transition">
            Home
          </a>
          <a
            href="/login"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
