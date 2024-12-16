import React from "react";
import Description from "./description";
import Ratings from "./rating";

interface DetailTableProps {
  activeTab: "description" | "rating";
  details: any;
}

const DetailTable: React.FC<DetailTableProps> = ({ activeTab, details }) => {
  return (
    <div>
      {activeTab === "description" && <Description des={details.description} image={details.image} />}
      {activeTab === "rating" && <Ratings ratings={details.ratings} />}
    </div>
  );
};

export default DetailTable;
