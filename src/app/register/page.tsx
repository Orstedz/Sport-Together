import React from "react";
import Header from "./header/header";
import SignForm from "./signForm/signForm";

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <SignForm />
      </div>
    </div>
  );
};

export default RegisterPage;
