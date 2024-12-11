import React from "react";
import Header from "../../components/header/preHeader";
import RegisterForm from "./registerForm/registerForm";
import "./register.css";

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
