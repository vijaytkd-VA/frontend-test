
import React, { useState } from 'react';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    setEmailValid(re.test(email));
  };

  const validatePassword = (password) => {
    setPasswordValid(password.length >= 6);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
        placeholder="Email"
        className={`w-full p-2 mb-4 border ${emailValid ? 'border-green-500' : 'border-red-500'}`}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          validatePassword(e.target.value);
        }}
        placeholder="Password"
        className={`w-full p-2 mb-4 border ${passwordValid ? 'border-green-500' : 'border-red-500'}`}
      />
    </div>
  );
};

export default FormComponent;
