import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import CourtInfo from "./courtInfo/courtInfo";
import DetailTable from "./detailTable/datailTable";
import Header from "../../components/header/header";

const CourtDetailsPage: React.FC = () => {

  const location = useLocation();
  const details = location.state;

  const [activeTab, setActiveTab] = useState<"description" | "rating">(
    "description"
  );

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto overflow-hidden">
        <CourtInfo court={details} />

        <div className="bg-gray-100 rounded-md">
          <div className="flex border-b mb-4">
            <button
              onClick={() => setActiveTab("description")}
              className={`text-2xl flex-1 py-2 text-center ${activeTab === "description"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-600"
                } font-bold`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("rating")}
              className={`text-2xl flex-1 py-2 text-center ${activeTab === "rating"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-600"
                } font-bold`}
            >
              Rating
            </button>
          </div>

          <div className="pt-4 pb-8 px-20">
            <DetailTable activeTab={activeTab} court={court} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourtDetailsPage;
