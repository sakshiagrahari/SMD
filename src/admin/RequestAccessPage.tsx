import React, { useState } from 'react';
// import './RequestAccessPage.scss';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../assets/logo.png'; // Assuming your logo is stored in the assets folder


const RequestAccessPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (<>
    
    <div className="request-access-page flex items-center justify-center h-screen bg-gray-100">
      
      <div className="request-access-form bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-md w-full">
      
      <div className="text-center mb-8">
            <img
              src={logo} 
              alt="Ship My Deal"
              className="mx-auto h-12 w-auto"
            />
          </div>
        <h2 className="text-start text-black-700 font-bold mt-2">Request Access to Ship my Deal</h2>
        <div className="text-center mt-0">
            <p className="text-start text-sm text-gray-700 mt-2">
            To ensure Ship my Deal is the right fit for your needs, we start with a quick form. Our team will then reach out to learn more about your requirements, explain how our platform and services work, and provide personalized onboarding to get you started smoothly.  
          </p>            
          </div>
        <form onSubmit={handleSubmit}>
          <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
          <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
          <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
          <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
          <InputField label="Message" name="message" value={formData.message} onChange={handleChange} multiline rows={4} />
          <Button label="Request Access" onClick={() => {}} fullWidth />
          <div className="text-center mt-4">
            <p className="text-start text-sm text-gray-900 mt-6">
            Already have a ShipMyDeal account?  
            <Link to="/login" className="text-sky-500">
                Log in
              </Link>
          </p>            
          </div>
        </form>

      </div>
    </div>
    </>
  );
};

export default RequestAccessPage;
