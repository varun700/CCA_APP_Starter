import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AreaChartSkeleton = ({ height }) => {
  return (
    <div style={{ width: "100%", height: height, position: "relative" }}>
      {/* Y-axis skeleton */}
      <div style={{ position: "absolute", top: 0, bottom: 20, left: 0 }}>
        <Skeleton width={20} height="100%" />
      </div>

      {/* Area chart skeleton */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Skeleton width="100%" height="100%" />
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#ddd" />
              <stop offset="50%" stopColor="#ccc" />
              <stop offset="100%" stopColor="#ddd" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 C150,200 350,400 500,300 L500,400 L0,400 Z"
            fill="url(#gradient)"
            opacity="0.5"
          />
          <path
            d="M500,300 C650,200 850,400 1000,300 L1000,400 L500,400 Z"
            fill="url(#gradient)"
            opacity="0.5"
          />
          <path
            d="M1000,300 C1150,200 1350,400 1500,300 L1500,400 L1000,400 Z"
            fill="url(#gradient)"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default AreaChartSkeleton;
