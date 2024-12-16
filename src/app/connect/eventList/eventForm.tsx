import React from "react";
import events from "../eventInterface";

interface EventFormProps {
  event: events;
}

const EventForm: React.FC<EventFormProps> = ({ event }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      <h3 className="text-lg font-semibold text-green-900 mb-2">
        {event.name}, {event.district}
      </h3>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-calendar-alt text-green-800 mr-2"></i>
        {event.date}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-user text-green-800 mr-2"></i>Chủ kèo: {event.host}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-users text-green-800 mr-2"></i>Số lượng cần:{" "}
        {event.playersNeeded}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-signal text-green-800 mr-2"></i>Trình độ:{" "}
        {event.level}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-money-bill-alt text-green-800 mr-2"></i>Mức giá mỗi
        người: {event.price}
      </p>
      <p className="text-sm text-gray-700 mb-4">
        <i className="fas fa-comment-dots text-green-800 mr-2"></i>Mô tả thêm:{" "}
        {event.description || "Không có mô tả."}
      </p>
      <button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800">
        Đăng ký tham gia
      </button>
    </div>
  );
};

export default EventForm;
