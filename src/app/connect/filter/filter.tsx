import React, { useState } from "react";
import { LuSettings2 } from "react-icons/lu";

interface FilterProps {
  onSportFilter: (sports: string[]) => void;
  onProvinceFilter: (provinces: string[]) => void;
  onDistrictFilter: (districts: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({
  onSportFilter,
  onProvinceFilter,
  onDistrictFilter,
}) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [showSportFilter, setShowSportFilter] = useState<boolean>(false);
  const [showProvinceFilter, setShowProvinceFilter] = useState<boolean>(false);
  const [showDistrictFilter, setShowDistrictFilter] = useState<boolean>(false);

  const handleProvinceChange = (province: string) => {
    const updatedProvinces = selectedProvinces.includes(province)
      ? selectedProvinces.filter((p) => p !== province)
      : [...selectedProvinces, province];
    setSelectedProvinces(updatedProvinces);
    onProvinceFilter(updatedProvinces);
  };

  const handleSportChange = (sport: string) => {
    const updatedSports = selectedSports.includes(sport)
      ? selectedSports.filter((s) => s !== sport)
      : [...selectedSports, sport];
    setSelectedSports(updatedSports);
    onSportFilter(updatedSports);
  };

  const handleDistrictChange = (district: string) => {
    const updatedDistricts = selectedDistricts.includes(district)
      ? selectedDistricts.filter((d) => d !== district)
      : [...selectedDistricts, district];
    setSelectedDistricts(updatedDistricts);
    onDistrictFilter(updatedDistricts);
  };

  return (
    <div className="flex items-center border-2 border-green-600 rounded-2xl px-4 py-2 w-full max-w-4xl">
      <div className="relative flex-1">
        <button
          className="flex items-center justify-center text-xl w-full text-green-700 font-bold py-2 px-4 rounded-lg hover:bg-green-100"
          onClick={() => setShowSportFilter(!showSportFilter)}
        >
          Sports
          <span className="ml-4">{showSportFilter ? "▲" : "▼"}</span>
        </button>
        {showSportFilter && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg mt-2 z-10">
            {["PickleBall", "Football", "Badminton", "Basketball"].map(
              (sport) => (
                <label
                  key={sport}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedSports.includes(sport)}
                    onChange={() => handleSportChange(sport)}
                    className="mr-2"
                  />
                  {sport}
                </label>
              )
            )}
          </div>
        )}
      </div>

      <div className="relative flex-1 ml-4">
        <button
          className="flex items-center w-full justify-center text-xl text-green-700 font-bold py-2 px-4 rounded-lg hover:bg-green-100"
          onClick={() => setShowProvinceFilter(!showProvinceFilter)}
        >
          Provinces
          <span>{showProvinceFilter ? "▲" : "▼"}</span>
        </button>
        {showProvinceFilter && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg mt-2 z-10">
            {["Hồ Chí Minh", "Thủ Đức", "Hà Nội"].map((province) => (
              <label
                key={province}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedProvinces.includes(province)}
                  onChange={() => handleProvinceChange(province)}
                  className="mr-2"
                />
                {province}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="relative flex-1 ml-4">
        <button
          className="flex items-center w-full justify-center text-xl text-green-700 font-bold py-2 px-4 rounded-lg hover:bg-green-100"
          onClick={() => setShowDistrictFilter(!showDistrictFilter)}
        >
          Districts
          <span>{showDistrictFilter ? "▲" : "▼"}</span>
        </button>
        {showDistrictFilter && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg mt-2 z-10">
            {["Quận 1", "Quận 12", "Quận 9"].map((district) => (
              <label
                key={district}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedDistricts.includes(district)}
                  onChange={() => handleDistrictChange(district)}
                  className="mr-2"
                />
                {district}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="ml-4">
        <button className="text-green-700 text-3xl rounded-lg hover:bg-green-100 p-2">
          <LuSettings2 />
        </button>
      </div>
    </div>
  );
};

export default Filter;
