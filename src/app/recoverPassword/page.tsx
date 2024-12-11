import React from "react";
import Header from "../../components/header/preHeader";
import RecoverPasswordForm from "./recoverPasswordForm/recoverPasswordForm";
import "./recoverPassword.css";

const LogInPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <RecoverPasswordForm />
      </div>
    </div>
  );
};

export default LogInPage;
