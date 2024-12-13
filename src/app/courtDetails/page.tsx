import React, { useState } from "react";
import CourtInfo from "./courtInfo/courtInfo";
import DetailTable from "./detailTable/datailTable";
import PreHeader from "../../components/header/preHeader";

const CourtDetailsPage = () => {
  const [activeTab, setActiveTab] = useState<"description" | "rating">(
    "description"
  );

  return (
    <>
      <PreHeader />
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Banner Section */}
        <CourtInfo />

        {/* Box Section */}
        <div className="bg-gray-100 rounded-md">
          {/* Header */}
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

          {/* Content */}
          <div className="pt-4 pb-8 px-20">
            <DetailTable activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourtDetailsPage;
