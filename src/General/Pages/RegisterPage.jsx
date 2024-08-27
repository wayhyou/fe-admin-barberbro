import React from 'react';
import { useParams } from 'react-router-dom';

const RegisterPage = () => {
  const { role } = useParams();

  return (
    <div>
      <h1>Register as {role}</h1>
    </div>
  );
};

export default RegisterPage;
