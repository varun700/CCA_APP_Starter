import { Card } from "antd";
import React from "react";
import DisPieChart from "./DisPieChart";
// import { useDispatch, useSelector } from "react-redux";
// import { Audio } from "react-loader-spinner";

export const Disposition = () => {
  return (
    <>
      <Card
        className="gx-card"
        title="Disposition"
        style={{
          width: "100%",
          height: "350px",
        }}
      >
        <DisPieChart />
      </Card>
    </>
  );
};
