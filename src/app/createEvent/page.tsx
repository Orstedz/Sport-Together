import React from "react";
import Header from "../../components/header/header";
import CreateEventForm from "./createEventForm/createEventForm";
import "./createEvent.css";
import { useNavigate } from "react-router-dom";

const CreateEventPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-7xl mx-auto overflow-hidden">
        <button
          className="absolute top-20 left-5 px-10 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white text-lg font-bold"
          onClick={() => navigate("./../", { replace: true })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>
      </div>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <CreateEventForm />
        </div>
      </div>
    </>
  );
};

export default CreateEventPage;
