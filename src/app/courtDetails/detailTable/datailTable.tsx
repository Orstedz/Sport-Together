import React from "react";
import Description from "./description";
import Rating from "./rating";

const DetailTable = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Description />
      <Rating />
    </div>
  );
};

export default DetailTable;
