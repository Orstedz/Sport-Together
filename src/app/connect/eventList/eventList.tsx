import React from "react";
import EventForm from "./eventForm";

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
    location: "Sân Cộng Hòa, quận Tân Bình",
    date: "Chủ nhật, 21/12/2024, 15:00",
    organizer: "Nguyễn Văn A",
    participants: 7,
    level: "Nghiệp dư",
    price: "20k",
    description: "Có bóng và nước.",
  },
  {
    location: "Sân Bình Dương, tỉnh Bình Dương",
    date: "Thứ 5, 18/12/2024, 19:00",
    organizer: "Lê Minh Bảo",
    participants: 4,
    level: "Chuyên nghiệp",
    price: "50k",
    description: "Mang giày đinh.",
  },
];

const EventList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event, index) => (
        <EventForm key={index} {...event} />
      ))}
    </div>
  );
};

export default EventList;
