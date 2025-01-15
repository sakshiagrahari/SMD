import React from 'react';
import home from '../assets/home.png'

const SignInPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <img
          src={home} 
          alt="Shipping label being applied"
          className="min-h-full max-w-full"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-sky-500 tracking-tight">SHIP MY DEAL</h1>
          <p className="text-center font-medium text-black-900 tracking-tight mb-8">LOGISTICS WAREHOUSE</p>

          <form className="space-y-6 mt-1 block w-full px-8 py-6 border border-gray-300 rounded-md shadow-sm">
            <div>
            <h3 className="text-2xl font-bold text-start text-black-600">Sign in</h3>
            <p className="text-start text-black-700 mb-6">Continue to Ship my Deal account</p>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 text-white font-medium rounded-md hover:bg-blue-700 "
            >
              Continue with email
            </button>
          </form>

          
          <p className="text-center text-sm text-gray-900 mt-6">
            This solution is powered by <a href="#" className="text-sky-500 underline">3PL ACE™ </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
