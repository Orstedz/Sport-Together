import React from "react";
import Description from "./description";
import Rating from "./rating";

interface DetailTableProps {
  activeTab: "description" | "rating";
}

const DetailTable: React.FC<DetailTableProps> = ({ activeTab }) => {
  return (
    <div>
      {activeTab === "description" && <Description />}
      {activeTab === "rating" && <Rating />}
    </div>
  );
};

export default DetailTable;
