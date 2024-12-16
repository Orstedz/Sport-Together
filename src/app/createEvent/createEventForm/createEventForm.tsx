import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import eventData from "../../connect/eventData";
import events from "../../connect/eventInterface";

const CreateEventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    district: "",
    time: "",
    playersneeded: "",
    price: "",
    level: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent: events = {
      id: eventData.length + 1,
      name: formData.name,
      date: formData.time,
      host: "Current User", // Replace with actual host data
      playersNeeded: parseInt(formData.playersneeded),
      level: formData.level,
      price: formData.price,
      description: formData.description,
      sport: "Sport Name", // Replace with actual sport data
      province: "Province Name", // Replace with actual province data
      district: formData.district,
    };
    eventData.push(new events(newEvent));
    console.log("Event created:", newEvent);
    // Show alert and navigate to connect page
    window.alert("Event created successfully!");
    navigate("/connect");
    // Reset form
    setFormData({
      name: "",
      district: "",
      time: "",
      playersneeded: "",
      price: "",
      level: "",
      description: "",
    });
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
        Create Event
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-green-600 font-medium pl-3">
            Court Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl p-2 pl-3 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="district" className="text-green-600 font-medium pl-3">
            District
          </label>
          <input
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="rounded-xl p-2 pl-3 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="time" className="text-green-600 font-medium pl-3">
            Time
          </label>
          <div className="relative">
            <input
              id="time"
              type="datetime-local"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="rounded-xl p-2 pl-3 w-full focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col w-5/12">
            <label
              htmlFor="playersneeded"
              className="text-green-600 font-medium pl-3"
            >
              Players Needed
            </label>
            <input
              id="playersneeded"
              type="number"
              name="playersneeded"
              value={formData.playersneeded}
              onChange={handleChange}
              className="rounded-xl p-2 pl-3 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
            />
          </div>

          <div className="flex flex-col w-7/12">
            <label htmlFor="price" className="text-green-600 font-medium pl-3">
              Price
            </label>
            <input
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="rounded-xl p-2 pl-3 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="level" className="text-green-600 font-medium pl-3">
            Level
          </label>
          <input
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="rounded-xl p-2 pl-3 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-green-600 font-medium pl-3"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="rounded-xl p-2 pl-3 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-3xl hover:bg-green-700 transition-colors font-bold text-lg"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm;
