import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../components/InputField";
import Button from "../components/Button";
import home from "../assets/home.png";
import logo from "../assets/logo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ResetPassword: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      // Handle form submission logic (e.g., send request to API)
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

          <form
            onSubmit={formik.handleSubmit}
            className="space-y-6 mt-1 block w-full bg-gray-100 px-8 py-6 border border-gray-300 rounded-md shadow-sm"
          >
            <div>
              <h3 className="text-2xl font-bold text-start text-gray-600">
                Forgot your password
              </h3>
              <p className="text-start text-gray-400 mb-6">
                Enter a new password to reset the password on your account.
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 px-3 py-2 text-gray-600 focus:outline-none"
                  >
                    {showPassword ? (
                      <Visibility className="h-5 w-5 text-gray-600" />
                    ) : (
                      <VisibilityOff className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="w-full mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <InputField
                    id="confirmPassword"
                    label=""
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 px-3 py-2 text-gray-600 focus:outline-none"
                  >
                    {showPassword ? (
                      <Visibility className="h-5 w-5 text-gray-600" />
                    ) : (
                      <VisibilityOff className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
            </div>

            {/* Reset Password Button */}
            <Button
              label="Reset Password"
              fullWidth
              className="w-full py-2 px-4 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            />
          </form>

          <p className="text-center text-sm text-gray-900 mt-6">
            This solution is powered by{" "}
            <a href="#" className="text-sky-500 underline">
              3PL ACE™
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
