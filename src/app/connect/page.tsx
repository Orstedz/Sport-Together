import React from "react";
import EventList from "./eventList/eventList";

const Page: React.FC = () => {
  return (
    <>
      <div className=" min-h-screen min-w-screen mx-auto container">
        <EventList />
      </div>
    </>
  );
};

export default Page;
