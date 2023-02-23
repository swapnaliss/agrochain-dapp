import React from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
  return (
    <nav className="bg-indigo-500 p-4 flex justify-between items-center">
      <div className="text-white font-medium">
        <h1>Agrochain </h1>
      </div>

      <button onClick={() => router.push("/Login")} className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white">
        Login
      </button>
      <button  onClick={() => router.push("/SignUp")}className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white">
        Sign Up
      </button>
    </nav>
  );
}

export default Navbar;