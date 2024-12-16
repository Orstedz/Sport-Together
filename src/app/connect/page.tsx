import React, { useState } from "react";
import EventList from "./eventList/eventList";
import Header from "../../components/header/header";
import Filter from "./filter/filter";
import events from "./eventInterface";
import eventData from "./eventData";

const Page: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<events[]>(eventData);

  const handleFilter = (filteredData: events[]) => {
    setFilteredEvents(filteredData);
  };

  return (
    <>
      <Header />
      <Filter onFilter={handleFilter} />
      <div className="min-h-screen min-w-screen mx-auto container">
        <EventList events={filteredEvents} />
      </div>
    </>
  );
};

export default Page;
