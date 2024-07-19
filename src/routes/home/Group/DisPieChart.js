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
import { Card, Skeleton, Tooltip } from "antd";
import { Bars } from "react-loader-spinner";
import CustomDonutSkeleton from "../../loader/CustomDonutSkeleton";

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
  const uservals = useSelector((state) => state?.Userval);

  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetCallCenterDispositionPieChart(uservals?.Employee_Id));
    }
  }, [uservals]);
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill={COLORS[index % COLORS.length]}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  // console.log("wertyuio", GetCallCenterDispositionPieChartValue);

  return (
    <div className="App">
      {!GetCallCenterDispositionPieChartloader &&
      GetCallCenterDispositionPieChartValue?.length > 0 ? (
        <>
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
                label={renderCustomizedLabel}
                labelLine={false}
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
          {/* <Card className="gx-card-widget" style={{ height: "400" }}> */}
          <CustomDonutSkeleton />
          {/* </Card> */}
        </>
      )}
    </div>
  );
};

export default DisPieChart;
