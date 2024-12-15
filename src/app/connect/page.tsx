import React, { useState } from "react";
import Header from "../../components/header/header";
import Filter from "./filter/filter";
import CourtList from "./courtList/courtList";
import "./booking.css";
import { Court } from "../../interfaces/court";
import courtsData from "../../data/courtsData";

const connectPage: React.FC = () => {
  const [ratingFilter, setRatingFilter] = useState<number[]>([]);
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);

  const courts: Court[] = courtsData;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="text-center mt-8">
        <h1
          className="text-3xl font-bold text-green-600"
          style={{ fontSize: "38px" }}
        >
          BOOKING
        </h1>
      </div>
      <div className="container mx-auto py-4 px-2 grid grid-cols-8 gap-8 mt-8">
        <div className="col-start-2 col-span-2">
          <Filter
            onRatingFilter={setRatingFilter}
            onSportFilter={setSizeFilter}
          />
        </div>
        <div className="col-start-4 col-span-4">
          <CourtList
            courts={courts}
            ratingFilter={ratingFilter}
            sportFilter={sizeFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default connectPage;
