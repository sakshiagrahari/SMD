import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import home from '../assets/home.png';
import logo from '../assets/logo.png';
import eye from '../assets/eye.png';  
import { Link } from 'react-router';// Assuming you have the eye icon in your assets
// import eyeOffIcon from '../assets/eye-off-icon.png';  // Assuming you have the eye-off icon in your assets

const LoginPage: React.FC = () => {
  // State for email, password, showPassword, and rememberMe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Handlers for input and state changes
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <img
          src={home}
          alt="Shipping label being applied"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="Ship My Deal"
              className="mx-auto h-12 w-auto"
            />
          </div>

          <form className="space-y-6 mt-1 block w-full bg-gray-100 px-8 py-6 border border-gray-300 rounded-md shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-start text-gray-600">Sign in</h3>
              <p className="text-start text-gray-700 mb-6">
                Continue to Ship my Deal account
              </p>
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
              <div className="w-full mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <InputField
                    id="password"
                    label=""
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={handlePasswordChange}
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 focus:outline-none"
                  >
                    <img
                      src={showPassword ? eye : eye}
                      alt="Toggle visibility"
                      className="h-5 w-5"
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-start justify-start gap-32">
                <label className="flex items-start text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="h-4 w-4 text-sky-600 border-gray-300 rounded"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <Link to="/forget-password" className="text-sm text-sky-600 hover:underline">
                Forgot password?
              </Link>
                
              </div>
            </div>

            {/* Login Button */}
            <Button
              label="Login"
              onClick={() =>
                alert(
                  `Logged in with:\nEmail: ${email}\nRemember Me: ${rememberMe}`
                )
              }
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

export default LoginPage;
