import { Card } from "antd";
import React from "react";
import DisPieChart from "./DisPieChart";

export const Disposition = () => {
  return (
    <>
      <Card className="gx-card" title="Disposition">
        <DisPieChart />
      </Card>
    </>
  );
};
