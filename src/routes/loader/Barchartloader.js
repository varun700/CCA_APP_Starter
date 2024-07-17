// CustomBarChartSkeleton.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomBarChartSkeleton = () => {
  const barStyle = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    height: "300px",
    width: "100%",
    margin: "auto",
  };

  const barCount = 6; // Number of bars to simulate
  const barHeight = [150, 200, 150, 200, 250, 200]; // Heights of the bars

  return (
    <div style={barStyle}>
      {Array.from({ length: barCount }).map((_, index) => (
        <Skeleton
          key={index}
          width={30}
          height={barHeight[index]}
          style={{ marginRight: 10 }}
        />
      ))}
    </div>
  );
};

export default CustomBarChartSkeleton;
