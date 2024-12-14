import React from "react";
import Description from "./description";
import Rating from "./rating";

interface DetailTableProps {
  activeTab: "description" | "rating";
  details: any;
}

const DetailTable: React.FC<DetailTableProps> = ({ activeTab, details }) => {
  return (
    <div>
      {activeTab === "description" && <Description des={details.description} />}
      {activeTab === "rating" && <Rating court={details} />}
    </div>
  );
};

export default DetailTable;
