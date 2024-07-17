// // CustomDonutSkeleton.js
// import React from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const CustomDonutSkeleton = () => {
//   const outerCircleStyle = {
//     width: "200px",
//     height: "200px",
//     borderRadius: "50%",
//     position: "relative",
//     margin: "auto",
//   };

//   const innerCircleStyle = {
//     width: "100px",
//     height: "100px",
//     borderRadius: "50%",
//     backgroundColor: "#fff",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//   };

//   return (
//     <div style={outerCircleStyle}>
//       <Skeleton circle={true} height={200} width={200} />
//       <div style={innerCircleStyle}></div>
//     </div>
//   );
// };

// export default CustomDonutSkeleton;

// CustomDonutSkeleton.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomDonutSkeleton = () => {
  const outerCircleStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    position: "relative",
    margin: "auto",
  };

  const innerCircleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const legendStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
    marginLeft: "20px",
    marginRight: "60px",
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={outerCircleStyle}>
        <Skeleton circle={true} height={200} width={200} />
        <div style={innerCircleStyle}></div>
      </div>
      <div style={legendStyle}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} height={20} width={150} />
        ))}
      </div>
    </div>
  );
};

export default CustomDonutSkeleton;
