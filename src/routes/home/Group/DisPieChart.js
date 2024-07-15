import React from "react";
// import AmCharts from "@amcharts/amcharts3-react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "CONNECTED_NON ACD CALL", value: 400 },
  { name: "ABANDONED CALL", value: 300 },
  { name: "FORCED DISCONNECT CALL", value: 300 },
  { name: "INTERFLOWED CALLS", value: 200 },
  { name: "OTHERS", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#dc94e3"];
const renderColorfulLegendText = (value, entry) => {
  return (
    <span
      style={{
        color: "#596579",
        fontWeight: 500,
        padding: "10px",
      }}
    >
      {value}
    </span>
  );
};

const DisPieChart = () => {
  return (
    <div className="App">
      <ResponsiveContainer width="100%" height={350}>
        <PieChart width={800} height={300}>
          <Legend
            height={126}
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            iconSize={10}
            padding={5}
            align="right"
            formatter={renderColorfulLegendText}
          />
          <Pie
            data={data}
            cx={180}
            cy={150}
            innerRadius={60}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DisPieChart;
