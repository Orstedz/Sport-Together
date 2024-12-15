import React from "react";

interface EventProps {
  location: string;
  date: string;
  organizer: string;
  participants: number;
  level: string;
  price: string;
  description: string;
}

const EventForm: React.FC<EventProps> = ({
  location,
  date,
  organizer,
  participants,
  level,
  price,
  description,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      <h3 className="text-lg font-semibold text-green-900 mb-2">{location}</h3>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-calendar-alt text-green-800 mr-2"></i>
        {date}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-user text-green-800 mr-2"></i>Chủ kèo: {organizer}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-users text-green-800 mr-2"></i>Số lượng cần:{" "}
        {participants}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-signal text-green-800 mr-2"></i>Trình độ: {level}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <i className="fas fa-money-bill-alt text-green-800 mr-2"></i>Mức giá mỗi
        người: {price}
      </p>
      <p className="text-sm text-gray-700 mb-4">
        <i className="fas fa-comment-dots text-green-800 mr-2"></i>Mô tả thêm:{" "}
        {description}
      </p>
      <button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800">
        Đăng ký tham gia
      </button>
    </div>
  );
};

export default EventForm;
