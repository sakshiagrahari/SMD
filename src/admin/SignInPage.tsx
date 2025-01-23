import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import InputField from '../components/InputField';
import Button from '../components/Button';
import home from '../assets/home.png';
import logo from '../assets/logo.png';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  // Form submit handler
  const handleSubmit = (values: { email: string }) => {
    console.log('Sign Up:', values);
    navigate('/login'); // Navigate to the login page after successful sign up
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side Image */}
      <div className="w-1/2 flex items-center justify-center overflow-hidden">
        <img
          src={home}
          alt="Shipping label being applied"
          className="image-full fixed"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="Ship My Deal"
              className="mx-auto h-12 w-auto"
            />
          </div>

          <Formik
  initialValues={{ email: '' }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {({ handleSubmit }) => (
    <Form
      onSubmit={handleSubmit}
      className="space-y-6 mt-1 block w-full px-8 py-6 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
    >
      <div>
        <h3 className="text-2xl font-bold text-start text-gray-600">
          Sign Up
        </h3>
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
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="  john.doe@example.com"
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
          />
          {/* Display error message if validation fails */}
          <ErrorMessage
            name="email"
            component="div"
            className="text-sm text-red-600 mt-1"
          />
        </div>
      </div>

      <Button
        label="Continue with email"
        type="submit"
        fullWidth
        className="w-full py-2 px-4 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      />

      <div className="text-center mt-4">
        <p className="text-start text-sm text-gray-900 mt-6">
          Already have an account?{' '}
          <a
            href="#"
            className="text-sky-500"
            onClick={() => navigate('/login')}
          >
            Sign in
          </a>
        </p>
      </div>
    </Form>
  )}
</Formik>


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

export default SignUpPage;
