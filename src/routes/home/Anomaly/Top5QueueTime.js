import { Card } from "antd";
import React from "react";
// import TinyBarChart from "../../../extensions/charts/recharts/bar/Components/TinyBarChart";
import Top10Chart from "./Top10Chart";

export const Top5QueueTime = () => {
  return (
    <Card className="gx-card" title="Top 5 Queue Time Anomaly">
      <Top10Chart />
    </Card>
  );
};
