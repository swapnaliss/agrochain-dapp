import React from 'react';
import { useRouter } from 'next/router';


function LoginForm() {
    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        router.push('/');
    }
  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/3">
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="username">
            Username
          </label>
          <input
            type="username"
            id="username"
            
            className="w-full border border-gray-400 p-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
        
            className="w-full border border-gray-400 p-2 rounded-lg"/>
        </div>
        <div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="password">
            Role
          </label>
          <label>
             <input type="radio" name="Role" value="farmer" />
              Farmer
            </label>
            <label >
             <input type="radio" name="Role" value="consumer" />
              Consumer
            </label>
        </div>
            
      

        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;