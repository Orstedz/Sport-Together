import React from "react";
import EventForm from "./eventForm";

const EventList: React.FC = () => {
  const events = [
    {
      location: "Sân Thành Thắng, quận 12",
      date: "Thứ 7, 20/12/2024, 17:30",
      organizer: "Trà Minh Trọng",
      participants: 5,
      level: "Trung bình khá",
      price: "25k",
      description: "",
    },
    {
      location: "Sân Bình Minh, quận 10",
      date: "Chủ nhật, 21/12/2024, 18:00",
      organizer: "Nguyễn Văn An",
      participants: 8,
      level: "Cao",
      price: "50k",
      description: "Cần thêm người để đủ sân.",
    },
    {
      location: "Sân Ngọc Thảo, quận 5",
      date: "Thứ 2, 22/12/2024, 19:00",
      organizer: "Lê Hải Đăng",
      participants: 4,
      level: "Trung bình",
      price: "20k",
      description: "Tham gia giao lưu vui vẻ.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {events.map((event, index) => (
        <EventForm key={index} {...event} />
      ))}
    </div>
  );
};

export default EventList;
