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
    <div className="bg-green-100 rounded-lg shadow-md p-4 m-2">
      <h3 className="font-bold text-lg">{location}</h3>
      <p className="text-sm text-green-700">{date}</p>
      <p>
        <span className="font-medium">Chủ kèo:</span> {organizer}
      </p>
      <p>
        <span className="font-medium">Số lượng cần:</span> {participants}
      </p>
      <p>
        <span className="font-medium">Trình độ:</span> {level}
      </p>
      <p>
        <span className="font-medium">Mức giá mỗi người:</span> {price}
      </p>
      <p>
        <span className="font-medium">Mô tả thêm:</span> {description}
      </p>
      <button className="bg-green-500 text-white mt-2 px-4 py-2 rounded hover:bg-green-600">
        Đăng ký tham gia
      </button>
    </div>
  );
};

export default EventForm;
