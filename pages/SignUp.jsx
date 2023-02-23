import React from 'react'

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <form className="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/3">
      <h2 className="text-lg font-medium mb-4">Sign Up Here..</h2>
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
          htmlFor="role">
          Role
        </label>
        <input
          type="role"
          id="role"
      
          className="w-full border border-gray-400 p-2 rounded-lg"/>
      </div>
          
    

      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" >
        Submit
      </button>
    </form>
  </div>
  )
}

export default SignUp