import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: {
    boMon: string;
    tinhThanh: string;
    quanHuyen: string;
  }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    boMon: "",
    tinhThanh: "",
    quanHuyen: "",
  });

  const handleChange = (key: keyof typeof filters, value: string) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <select
        className="border px-4 py-2 rounded-md"
        value={filters.boMon}
        onChange={(e) => handleChange("boMon", e.target.value)}
      >
        <option value="">Bộ Môn</option>
        <option value="Football">Football</option>
        <option value="Basketball">Basketball</option>
      </select>
      <select
        className="border px-4 py-2 rounded-md"
        value={filters.tinhThanh}
        onChange={(e) => handleChange("tinhThanh", e.target.value)}
      >
        <option value="">Tỉnh/Thành</option>
        <option value="HCM">Hồ Chí Minh</option>
        <option value="HN">Hà Nội</option>
      </select>
      <select
        className="border px-4 py-2 rounded-md"
        value={filters.quanHuyen}
        onChange={(e) => handleChange("quanHuyen", e.target.value)}
      >
        <option value="">Quận/Huyện</option>
        <option value="Quan 12">Quận 12</option>
        <option value="Quan 1">Quận 1</option>
      </select>
    </div>
  );
};

export default Filter;
