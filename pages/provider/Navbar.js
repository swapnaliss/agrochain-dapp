import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 p-4 flex justify-between items-center">
      <div className="text-white font-medium">
        <h1>Agrochain </h1>
      </div>

      <button className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white">
        Login
      </button>
    </nav>
  );
}

export default Navbar;