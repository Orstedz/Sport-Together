import React, { useState } from "react";
import Filter from "./filter/filter";
import EventList from "./eventList/eventList";
import { Event } from "./eventInterface";

const Page: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      location: "Sân Thành Thắng, Quận 12",
      date: "20/12/2024",
      time: "17:30",
      host: "Trà Minh Trọng",
      quantity: 5,
      level: "Trung bình khá",
      price: 25000,
      description: "Mô tả thêm...",
    },
    {
      id: 2,
      location: "Sân Phú Nhuận, Quận 1",
      date: "21/12/2024",
      time: "18:00",
      host: "Nguyễn Văn A",
      quantity: 8,
      level: "Nâng cao",
      price: 30000,
      description: "Mô tả thêm...",
    },
    {
      id: 3,
      location: "Sân Bình Thạnh, Quận 1",
      date: "22/12/2024",
      time: "19:00",
      host: "Lê Hoàng B",
      quantity: 6,
      level: "Trung bình",
      price: 20000,
      description: "Mô tả thêm...",
    },
    {
      id: 4,
      location: "Sân Bình Thạnh, Quận 1",
      date: "22/12/2024",
      time: "19:00",
      host: "Lê Hoàng B",
      quantity: 6,
      level: "Trung bình",
      price: 20000,
      description: "Mô tả thêm...",
    },
  ]);

  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

  const handleFilterChange = (filters: {
    boMon: string;
    tinhThanh: string;
    quanHuyen: string;
  }) => {
    const { boMon, tinhThanh, quanHuyen } = filters;

    const filtered = events.filter((event) => {
      const matchesBoMon = boMon
        ? event.level.toLowerCase().includes(boMon.toLowerCase())
        : true;
      const matchesTinhThanh = tinhThanh
        ? event.location.toLowerCase().includes(tinhThanh.toLowerCase())
        : true;
      const matchesQuanHuyen = quanHuyen
        ? event.location.toLowerCase().includes(quanHuyen.toLowerCase())
        : true;
      return matchesBoMon && matchesTinhThanh && matchesQuanHuyen;
    });

    setFilteredEvents(filtered);
  };

  return (
    <div className="p-4">
      <div className="flex justify-end items-center mb-4">
        <button className=" bg-green-600 text-white px-4 py-2 rounded-md">
          Tạo Cuộc Hẹn
        </button>
      </div>
      <Filter onFilterChange={handleFilterChange} />
      <EventList events={filteredEvents} />
    </div>
  );
};

export default Page;
