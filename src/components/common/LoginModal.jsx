import React, { useState } from "react";

const LoginModal = () => {
  const [leadFormDetails, setLeadFormDetails] = useState({ 
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  }); 
  const [errors, setErrors] = useState({});

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadFormDetails({
      ...leadFormDetails,
      [name]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!leadFormDetails.name.trim()) newErrors.name = "Name is required";
    if (!leadFormDetails.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(leadFormDetails.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!leadFormDetails.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+\d{1,3}\d{7,15}$/.test(leadFormDetails.phone)) {
      newErrors.phone = "Invalid phone number (with country code)";
    }
    if (!leadFormDetails.service) newErrors.service = "Service selection is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const [formPartToShow, setFormPartToShow] = useState(1)
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormPartToShow(2)
      // You can add further code here for form submission
    }
  };


  return (
    <>
 
    </>
  );
};

export default LoginModal;
