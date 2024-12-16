import React from "react";
import EventForm from "./eventForm";
import events from "../eventInterface";

interface EventListProps {
  events: events[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
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
