import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Filter from "./filter/filter";
import EventList from "./eventList/eventList";
import events from "./eventInterface";
import eventData from "./eventData";

const Page: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<events[]>(eventData);
  const navigate = useNavigate();

  const handleFilter = (filteredData: events[]) => {
    setFilteredEvents(filteredData);
  };

  const handleCreateEventClick = () => {
    navigate("/connect/create");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleCreateEventClick}
            className="bg-green-700 hover:bg-green-800 text-white font-bold text-xl py-2 px-10 rounded-lg"
            style={{ marginRight: "167px" }}
          >
            CREATE EVENT
          </button>
        </div>
        <div className="flex justify-center items-center mb-4">
          <Filter onFilter={handleFilter} />
        </div>
        <EventList events={filteredEvents} />
      </div>
    </>
  );
};

export default Page;
