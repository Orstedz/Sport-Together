import React, { useState, useEffect } from "react";
import eventData from "../eventData";
import events from "../eventInterface";
import { LuSettings2 } from "react-icons/lu";

interface FilterProps {
  onFilter: (filteredData: events[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const uniqueSports = Array.from(new Set(eventData.map((e) => e.sport)));
  const uniqueProvinces = Array.from(new Set(eventData.map((e) => e.province)));
  const uniqueDistricts = Array.from(new Set(eventData.map((e) => e.district)));

  const handleCheckboxChange = (
    item: string,
    selectedItems: string[],
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];
    setSelectedItems(updatedItems);
  };

  useEffect(() => {
    applyFilters(selectedSports, selectedProvinces, selectedDistricts);
  }, [selectedSports, selectedProvinces, selectedDistricts]);

  const applyFilters = (
    sports: string[],
    provinces: string[],
    districts: string[]
  ) => {
    const filteredData = eventData.filter(
      (event) =>
        (sports.length === 0 || sports.includes(event.sport)) &&
        (provinces.length === 0 || provinces.includes(event.province)) &&
        (districts.length === 0 || districts.includes(event.district))
    );
    onFilter(filteredData);
  };

  const Dropdown = ({
    title,
    items,
    selectedItems,
    onChange,
  }: {
    title: string;
    items: string[];
    selectedItems: string[];
    onChange: (item: string) => void;
  }) => (
    <div className="relative flex-1">
      <button
        aria-expanded={activeDropdown === title}
        onClick={() => toggleDropdown(title)}
        className="flex items-center justify-center text-lg w-full text-green-700 font-bold py-2 px-4 rounded-lg hover:bg-green-100"
      >
        {title}
        <span className="ml-4">{activeDropdown === title ? "▲" : "▼"}</span>
      </button>
      {activeDropdown === title && (
        <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg mt-2 z-10">
          {items.map((item) => (
            <label
              key={item}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => onChange(item)}
                className="mr-2"
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-wrap items-center border-2 border-green-600 rounded-2xl px-4 py-2 w-full max-w-4xl">
      <Dropdown
        title="Sports"
        items={uniqueSports}
        selectedItems={selectedSports}
        onChange={(sport) =>
          handleCheckboxChange(sport, selectedSports, setSelectedSports)
        }
      />
      <Dropdown
        title="Provinces"
        items={uniqueProvinces}
        selectedItems={selectedProvinces}
        onChange={(province) =>
          handleCheckboxChange(
            province,
            selectedProvinces,
            setSelectedProvinces
          )
        }
      />
      <Dropdown
        title="Districts"
        items={uniqueDistricts}
        selectedItems={selectedDistricts}
        onChange={(district) =>
          handleCheckboxChange(
            district,
            selectedDistricts,
            setSelectedDistricts
          )
        }
      />
      <div className="ml-4 mt-2 md:mt-0">
        <button className="text-green-700 text-3xl rounded-lg hover:bg-green-100 p-2">
          <LuSettings2 />
        </button>
      </div>
    </div>
  );
};

export default Filter;
