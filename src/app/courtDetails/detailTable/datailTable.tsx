import React from "react";
import Description from "./description";
import Rating from "./rating";
import Court from "../../../interfaces/court";

interface DetailTableProps {
  activeTab: "description" | "rating";
  court: Court;
}

const DetailTable: React.FC<DetailTableProps> = ({ activeTab, court }) => {
  return (
    <div>
      {activeTab === "description" && <Description court={court} />}
      {activeTab === "rating" && <Rating court={court} />}
    </div>
  );
};

export default DetailTable;
