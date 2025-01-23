import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import home from '../assets/home.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import logo from '../assets/logo.png'; // Assuming your logo is stored in the assets folder

const ForgetPassword: React.FC = () => {
  // Create state for email
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle input change for email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission (for sign-up)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up:', email);
    // Add registration logic here
  };

  const handleLoginNavigation = () => {
    navigate('/reset-password'); // Navigate to the Login page
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <img
          src={home}
          alt="Shipping label being applied"
          className="image-full fixed"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center ">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src={logo} // Your logo image path
              alt="Ship My Deal"
              className="mx-auto h-12 w-auto"
            />
          </div>        
          

          <form
            onSubmit={handleSubmit}
            className="space-y-6 mt-1 block bg-gray-100 w-full px-8 py-6 border border-gray-300 rounded-md shadow-sm"
          >
            <div>
              <h3 className="text-2xl font-bold text-start text-gray-600">Forgot your password </h3>
              <p className="text-start text-gray-700 mb-6">
              Check if the email is right before requesting a reset.           </p>

              {/* Email Field */}
              <div className="w-full mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <InputField
                  id="email"
                  label=""
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <Button
              label="Reset Password"
              onClick={handleLoginNavigation}  // Trigger navigation to login page
              fullWidth
              className="w-full py-2 px-4 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            />

            
          </form>

          <p className="text-center text-sm text-gray-900 mt-6">
            This solution is powered by{' '}
            <a href="#" className="text-sky-500 underline">
              3PL ACE™
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
