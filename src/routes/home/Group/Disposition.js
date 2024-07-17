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
        style={{
          width: "100%",
          height: "350px",
        }}
      >
        <h2 className="h4 gx-mb-3">Disposition</h2>
        <DisPieChart />
      </Card>
    </>
  );
};
