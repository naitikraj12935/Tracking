import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3019/submit', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=".form">
      <h1>Mental Health Assessment Form</h1>
      <label>
        Question 1: Do you feel stressed?{' '}
        <input type="radio" name="question1" value="Yes" onChange={handleInputChange} /> Yes{' '}
        <input type="radio" name="question1" value="No" onChange={handleInputChange} /> No
      </label>

      <label>
        Question 2: Do you feel anxious?{' '}
        <input type="radio" name="question2" value="Yes" onChange={handleInputChange} /> Yes{' '}
        <input type="radio" name="question2" value="No" onChange={handleInputChange} /> No
      </label>

      {/* Add more questions as needed */}
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
