// CustomSkeleton.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomSkeleton = ({ lineCount = 5, height = 20, gap = 10 }) => {
  const generateRandomWidth = () => `${Math.floor(Math.random() * 60) + 40}%`; // Generates a random width between 40% and 100%

  return (
    <div>
      {Array.from({ length: lineCount }).map((_, index) => (
        <div key={index} style={{ marginBottom: gap }}>
          <Skeleton height={height} width={generateRandomWidth()} />
        </div>
      ))}
    </div>
  );
};

export default CustomSkeleton;
