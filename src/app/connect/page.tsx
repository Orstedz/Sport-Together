import React from "react";
import EventList from "./eventList/eventList";
import Header from "../../components/header/header";
import Filter from "./filter/filter";

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <Filter />
      <div className=" min-h-screen min-w-screen mx-auto container">
        <EventList />
      </div>
    </>
  );
};

export default Page;
