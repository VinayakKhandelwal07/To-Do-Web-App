import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Todo App</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        <Link to="/login" className="hover:text-gray-200">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
