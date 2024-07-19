// CustomMapSkeleton.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomMapSkeleton = ({ width, height }) => {
  const mapStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    margin: "0",
  };

  const legendStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    // marginLeft: "20px",
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={mapStyle}>
        <Skeleton height={height} />
      </div>
    </div>
  );
};

export default CustomMapSkeleton;
