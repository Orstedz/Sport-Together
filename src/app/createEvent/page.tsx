import React from "react";
import Header from "../../components/header/preHeader";
import CreateEventForm from "./createEventForm/createEventForm";
import "./createEvent.css";

const CreateEventPage: React.FC = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/Backgrounds/logInPage.jpg')",
      }}
    >
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <CreateEventForm />
      </div>
    </div>
  );
};

export default CreateEventPage;
