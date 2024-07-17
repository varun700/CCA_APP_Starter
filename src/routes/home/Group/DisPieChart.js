import React, { useEffect } from "react";
// import AmCharts from "@amcharts/amcharts3-react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { GetCallCenterDispositionPieChart } from "../../../appRedux/actions/globalactions";
import { Card, Tooltip } from "antd";
import { Bars } from "react-loader-spinner";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088a3",
  "#a3008d",
  "#a39300",
];
const renderColorfulLegendText = (value, entry) => {
  // console.log("lklklkl", value, entry);
  return (
    <span
      style={{
        color: "#596579",
        fontWeight: 500,
        padding: "10px",
      }}
    >
      {entry?.payload?.Category}
    </span>
  );
};

const DisPieChart = () => {
  const dispatch = useDispatch();
  const GetCallCenterDispositionPieChartValue = useSelector(
    (state) => state.GetCallCenterDispositionPieChartreducer?.Table
  );
  const GetCallCenterDispositionPieChartloader = useSelector(
    (state) => state.GetCallCenterDispositionPieChartloader
  );

  useEffect(() => {
    dispatch(GetCallCenterDispositionPieChart());
  }, []);

  // console.log("wertyuio", GetCallCenterDispositionPieChartloader);

  return (
    <div className="App">
      {!GetCallCenterDispositionPieChartloader &&
      GetCallCenterDispositionPieChartValue?.length > 0 ? (
        <>
          {" "}
          <ResponsiveContainer width="100%" height={260}>
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
              <Tooltip />
              <Pie
                data={GetCallCenterDispositionPieChartValue}
                cx={180}
                cy={120}
                innerRadius={60}
                outerRadius={110}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="Category_Count"
                label
              >
                {GetCallCenterDispositionPieChartValue?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </>
      ) : (
        <>
          <Bars
            height="50"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass="Barloader"
          />
        </>
      )}
    </div>
  );
};

export default DisPieChart;