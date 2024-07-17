// CustomMapSkeleton.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomMapSkeleton = ({ width, height }) => {
  const mapStyle = {
    width: "400px",
    height: "400px",
    position: "relative",
    margin: "0",
  };

  const legendStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "400px",
    // marginLeft: "20px",
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={mapStyle}>
        <Skeleton width={width} height={height} />
      </div>
    </div>
  );
};

export default CustomMapSkeleton;
