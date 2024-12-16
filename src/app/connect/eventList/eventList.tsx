import React from "react";
import EventForm from "./eventForm";
import events from "../eventInterface";

interface EventListProps {
  events: events[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Danh sách sự kiện
        </h2>
        {/* Grid layout for 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.length > 0 ? (
            events.map((event) => <EventForm key={event.id} event={event} />)
          ) : (
            <p>Không tìm thấy sự kiện phù hợp.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
