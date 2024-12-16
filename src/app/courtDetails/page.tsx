import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CourtInfo from "./courtInfo/courtInfo";
import DetailTable from "./detailTable/datailTable";
import Header from "../../components/header/header";

const CourtDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { court } = location.state;

  const [activeTab, setActiveTab] = useState<"description" | "rating">(
    "description"
  );

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto overflow-hidden">
        <button
          className="absolute top-20 left-5 px-10 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white text-lg font-bold"
          onClick={() => navigate("./../", { state: { court } })}
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
        <CourtInfo details={court} />

        <div className="bg-gray-100 rounded-md">
          <div className="flex border-b mb-4">
            <button
              onClick={() => setActiveTab("description")}
              className={`text-2xl flex-1 py-2 text-center ${
                activeTab === "description"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600"
              } font-bold`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("rating")}
              className={`text-2xl flex-1 py-2 text-center ${
                activeTab === "rating"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600"
              } font-bold`}
            >
              Rating
            </button>
          </div>

          <div className="pt-4 pb-8 px-20">
            <DetailTable activeTab={activeTab} details={court} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourtDetailsPage;
