import React from "react";
import { Card } from "antd";
// import ColumnWithRotatedSeries from "../../../extensions/charts/amchart/bar/Components/ColumnWithRotatedSeries";
import Top10Chart from "./Top10Chart";

export const Top5TalkDurationAnomaly = () => {
  return (
    <Card className="gx-card" title="Top 5 Talk Duration Anomaly">
      <Top10Chart />
    </Card>
  );
};
